import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Brain, LogOut, BookOpen, CheckCircle, Clock, BarChart } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import type { User } from '@supabase/supabase-js';

interface Course {
  id: string;
  title: string;
  description: string;
  type: string;
  skill_level: string;
  duration: string;
  tags: string[];
}

interface UserProgress {
  id: string;
  course_id: string;
  status: 'not_started' | 'in_progress' | 'completed';
  progress_percentage: number;
  started_at: string | null;
  completed_at: string | null;
  course: Course;
}

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [userProgress, setUserProgress] = useState<UserProgress[]>([]);
  const [stats, setStats] = useState({
    totalCourses: 0,
    completedCourses: 0,
    inProgressCourses: 0,
    averageProgress: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      
      if (!user) {
        navigate('/');
      } else {
        await fetchUserProgress(user.id);
      }
    };

    getUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session?.user) {
        navigate('/');
      } else {
        setUser(session.user);
        fetchUserProgress(session.user.id);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const fetchUserProgress = async (userId: string) => {
    setIsLoading(true);
    try {
      // Fetch user progress with course details
      const { data: progressData, error: progressError } = await supabase
        .from('user_progress')
        .select(`
          *,
          course:courses(*)
        `)
        .eq('user_id', userId);

      if (progressError) throw progressError;

      // Fetch all courses to show available courses
      const { data: allCourses, error: coursesError } = await supabase
        .from('courses')
        .select('*');

      if (coursesError) throw coursesError;

      // Create progress entries for courses not yet started
      const progressMap = new Map(progressData?.map(p => [p.course_id, p]) || []);
      const allProgressData = allCourses?.map(course => {
        const existingProgress = progressMap.get(course.id);
        return existingProgress ? {
          ...existingProgress,
          status: existingProgress.status as 'not_started' | 'in_progress' | 'completed'
        } : {
          id: `new-${course.id}`,
          course_id: course.id,
          status: 'not_started' as const,
          progress_percentage: 0,
          started_at: null,
          completed_at: null,
          course
        };
      }) || [];

      setUserProgress(allProgressData);

      // Calculate stats
      const completed = allProgressData.filter(p => p.status === 'completed').length;
      const inProgress = allProgressData.filter(p => p.status === 'in_progress').length;
      const totalProgress = allProgressData.reduce((sum, p) => sum + p.progress_percentage, 0);
      const avgProgress = allProgressData.length > 0 ? Math.round(totalProgress / allProgressData.length) : 0;

      setStats({
        totalCourses: allProgressData.length,
        completedCourses: completed,
        inProgressCourses: inProgress,
        averageProgress: avgProgress
      });

    } catch (error) {
      console.error('Error fetching progress:', error);
      toast({
        title: "Error",
        description: "Failed to load your progress data.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const updateProgress = async (courseId: string, newProgress: number, newStatus: string) => {
    if (!user) return;

    try {
      const updates = {
        user_id: user.id,
        course_id: courseId,
        progress_percentage: newProgress,
        status: newStatus,
        started_at: newStatus !== 'not_started' && !userProgress.find(p => p.course_id === courseId)?.started_at 
          ? new Date().toISOString() 
          : undefined,
        completed_at: newStatus === 'completed' ? new Date().toISOString() : null,
      };

      const { error } = await supabase
        .from('user_progress')
        .upsert(updates, { onConflict: 'user_id,course_id' });

      if (error) throw error;

      await fetchUserProgress(user.id);
      
      toast({
        title: "Progress updated",
        description: "Your course progress has been saved.",
      });

    } catch (error) {
      console.error('Error updating progress:', error);
      toast({
        title: "Error",
        description: "Failed to update progress.",
        variant: "destructive"
      });
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Signed out",
      description: "You have been successfully signed out.",
    });
    navigate('/');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-secondary';
      case 'in_progress': return 'bg-primary';
      case 'not_started': return 'bg-muted';
      default: return 'bg-muted';
    }
  };

  const getTypeIcon = (type: string) => {
    return <BookOpen className="h-4 w-4" />;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <div className="bg-gradient-card shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-primary rounded-full">
                <BarChart className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                  Learning Dashboard
                </h1>
                <p className="text-sm text-muted-foreground">
                  Track your progress, {user.email}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                onClick={() => navigate('/')}
              >
                Home
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate('/recommendations')}
              >
                Recommendations
              </Button>
              <Button 
                variant="outline" 
                onClick={handleSignOut}
                className="flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card shadow-soft border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Courses</p>
                  <p className="text-2xl font-bold">{stats.totalCourses}</p>
                </div>
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-soft border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Completed</p>
                  <p className="text-2xl font-bold text-secondary">{stats.completedCourses}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-secondary" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-soft border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">In Progress</p>
                  <p className="text-2xl font-bold text-primary">{stats.inProgressCourses}</p>
                </div>
                <Clock className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-soft border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg Progress</p>
                  <p className="text-2xl font-bold">{stats.averageProgress}%</p>
                </div>
                <BarChart className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Course Progress Table */}
        <Card className="bg-gradient-card shadow-soft border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              Course Progress
            </CardTitle>
            <CardDescription>
              Track your learning journey and update your progress on each course
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Course</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Level</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {userProgress.map((progress) => (
                  <TableRow key={progress.course_id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{progress.course.title}</p>
                        <p className="text-sm text-muted-foreground line-clamp-1">
                          {progress.course.description}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getTypeIcon(progress.course.type)}
                        <span className="text-sm">{progress.course.type}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{progress.course.skill_level}</Badge>
                    </TableCell>
                    <TableCell>{progress.course.duration}</TableCell>
                    <TableCell>
                      <Badge className={`${getStatusColor(progress.status)} text-white`}>
                        {progress.status.replace('_', ' ')}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={progress.progress_percentage} className="w-16" />
                        <span className="text-sm font-medium">{progress.progress_percentage}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        {progress.status === 'not_started' && (
                          <Button 
                            size="sm" 
                            onClick={() => updateProgress(progress.course_id, 10, 'in_progress')}
                          >
                            Start
                          </Button>
                        )}
                        {progress.status === 'in_progress' && (
                          <>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => updateProgress(progress.course_id, Math.min(progress.progress_percentage + 25, 100), progress.progress_percentage + 25 >= 100 ? 'completed' : 'in_progress')}
                            >
                              +25%
                            </Button>
                            <Button 
                              size="sm" 
                              onClick={() => updateProgress(progress.course_id, 100, 'completed')}
                            >
                              Complete
                            </Button>
                          </>
                        )}
                        {progress.status === 'completed' && (
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => updateProgress(progress.course_id, 0, 'not_started')}
                          >
                            Reset
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;