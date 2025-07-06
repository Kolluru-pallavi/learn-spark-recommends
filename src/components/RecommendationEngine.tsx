import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Brain, Search, BookOpen, Video, FileText, GraduationCap, Clock, ExternalLink, Play } from 'lucide-react';
import { learningContentData } from "@/data/learningContent";
import { getPopularTags, UserPreferences } from "@/utils/recommendationEngine";
import { useToast } from "@/hooks/use-toast";
import { callAIRecommendations } from "@/lib/api";

// AI-generated recommendation result interface
interface AIRecommendationResult {
  content: {
    id: number;
    title: string;
    tags: string[];
    skillLevel: 'Beginner' | 'Intermediate' | 'Advanced';
    type: 'Video' | 'Article' | 'Course' | 'Tutorial' | 'Book';
    duration: string;
    link: string;
    description: string;
    platform: string;
  };
  score: number;
  matchedTags: string[];
}

const RecommendationEngine = () => {
  const [userPreferences, setUserPreferences] = useState<UserPreferences>({
    interests: [],
    skillLevel: 'Beginner',
    contentType: 'Any'
  });
  const [interestInput, setInterestInput] = useState('');
  const [recommendations, setRecommendations] = useState<AIRecommendationResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [popularTags, setPopularTags] = useState<string[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Load popular tags on component mount
    const tags = getPopularTags(learningContentData);
    setPopularTags(tags);
  }, []);

  const handleAddInterest = () => {
    if (interestInput.trim() && !userPreferences.interests.includes(interestInput.trim())) {
      setUserPreferences(prev => ({
        ...prev,
        interests: [...prev.interests, interestInput.trim()]
      }));
      setInterestInput('');
    }
  };

  const handleRemoveInterest = (interest: string) => {
    setUserPreferences(prev => ({
      ...prev,
      interests: prev.interests.filter(i => i !== interest)
    }));
  };

  const handleAddPopularTag = (tag: string) => {
    if (!userPreferences.interests.includes(tag)) {
      setUserPreferences(prev => ({
        ...prev,
        interests: [...prev.interests, tag]
      }));
    }
  };

  const handleGetRecommendations = async () => {
    if (userPreferences.interests.length === 0) {
      toast({
        title: "Add interests",
        description: "Please add at least one interest to get personalized recommendations.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // Call AI-powered recommendation service via Supabase Edge Function
      const data = await callAIRecommendations(userPreferences);
      
      if (!data?.recommendations) {
        throw new Error('No recommendations received from AI service');
      }
      
      setRecommendations(data.recommendations);
      
      toast({
        title: "AI Recommendations Generated!",
        description: `Found ${data.recommendations.length} personalized learning resources powered by AI.`,
      });
    } catch (error: any) {
      console.error('Error getting AI recommendations:', error);
      
      // Provide more specific error messages
      let errorMessage = "Failed to generate recommendations. Please try again.";
      
      if (error.message?.includes('OpenAI API key')) {
        errorMessage = "OpenAI API key is not configured. Please contact support.";
      } else if (error.message?.includes('non-2xx status')) {
        errorMessage = "AI service is temporarily unavailable. Please try again in a moment.";
      } else if (error.message?.includes('Failed to parse')) {
        errorMessage = "AI service returned an invalid response. Please try again.";
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Video': return <Video className="h-4 w-4" />;
      case 'Article': return <FileText className="h-4 w-4" />;
      case 'Course': return <GraduationCap className="h-4 w-4" />;
      case 'Tutorial': return <BookOpen className="h-4 w-4" />;
      case 'Book': return <BookOpen className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const getSkillLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-secondary';
      case 'Intermediate': return 'bg-primary';
      case 'Advanced': return 'bg-accent';
      default: return 'bg-muted';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-primary rounded-full shadow-glow">
              <Brain className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              AI Learning Recommendation Engine
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover personalized learning resources tailored to your interests, skill level, and preferred content type.
            Our intelligent system analyzes your preferences to recommend the most relevant educational content.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Form */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-card shadow-soft border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Your Preferences
                </CardTitle>
                <CardDescription>
                  Tell us what you'd like to learn and we'll find the perfect resources for you.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Interests Input */}
                <div className="space-y-3">
                  <Label htmlFor="interests">Learning Interests</Label>
                  <div className="flex gap-2">
                    <Input
                      id="interests"
                      placeholder="e.g., Python, AI, React..."
                      value={interestInput}
                      onChange={(e) => setInterestInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleAddInterest()}
                      className="flex-1"
                    />
                    <Button 
                      onClick={handleAddInterest}
                      size="sm"
                      className="bg-gradient-primary hover:shadow-soft transition-all"
                    >
                      Add
                    </Button>
                  </div>
                  
                  {/* Selected Interests */}
                  {userPreferences.interests.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {userPreferences.interests.map((interest) => (
                        <Badge 
                          key={interest} 
                          variant="secondary" 
                          className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground transition-colors"
                          onClick={() => handleRemoveInterest(interest)}
                        >
                          {interest} ×
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                {/* Popular Tags */}
                <div className="space-y-3">
                  <Label>Popular Topics</Label>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.slice(0, 8).map((tag) => (
                      <Badge 
                        key={tag}
                        variant="outline" 
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                        onClick={() => handleAddPopularTag(tag)}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Skill Level */}
                <div className="space-y-3">
                  <Label>Your Skill Level</Label>
                  <Select
                    value={userPreferences.skillLevel}
                    onValueChange={(value: 'Beginner' | 'Intermediate' | 'Advanced') => 
                      setUserPreferences(prev => ({ ...prev, skillLevel: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Beginner">Beginner</SelectItem>
                      <SelectItem value="Intermediate">Intermediate</SelectItem>
                      <SelectItem value="Advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Content Type */}
                <div className="space-y-3">
                  <Label>Preferred Content Type</Label>
                  <Select
                    value={userPreferences.contentType}
                    onValueChange={(value: 'Video' | 'Article' | 'Course' | 'Tutorial' | 'Book' | 'Any') => 
                      setUserPreferences(prev => ({ ...prev, contentType: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Any">Any Type</SelectItem>
                      <SelectItem value="Video">Video</SelectItem>
                      <SelectItem value="Article">Article</SelectItem>
                      <SelectItem value="Course">Course</SelectItem>
                      <SelectItem value="Tutorial">Tutorial</SelectItem>
                      <SelectItem value="Book">Book</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Get Recommendations Button */}
                <Button 
                  onClick={handleGetRecommendations}
                  disabled={isLoading || userPreferences.interests.length === 0}
                  className="w-full bg-gradient-primary hover:shadow-medium transition-all duration-300"
                  size="lg"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Generating AI Recommendations...
                    </>
                  ) : (
                    <>
                      <Brain className="h-4 w-4 mr-2" />
                      Get AI Recommendations
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Recommendations */}
          <div className="lg:col-span-2">
            {recommendations.length > 0 ? (
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-6">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">Your AI-Powered Recommendations</h2>
                </div>
                
                <div className="grid gap-4">
                  {recommendations.map((rec, index) => (
                    <Card key={rec.content.id} className="bg-gradient-card shadow-soft border-0 hover:shadow-medium transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-sm font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                                #{index + 1}
                              </span>
                              <Badge className={`${getSkillLevelColor(rec.content.skillLevel)} text-white`}>
                                {rec.content.skillLevel}
                              </Badge>
                              <div className="flex items-center gap-1 text-muted-foreground">
                                {getTypeIcon(rec.content.type)}
                                <span className="text-sm">{rec.content.type}</span>
                              </div>
                            </div>
                            
                            <h3 className="text-xl font-semibold mb-2 text-foreground">
                              {rec.content.title}
                            </h3>
                            
                            <p className="text-muted-foreground mb-4 line-clamp-2">
                              {rec.content.description}
                            </p>
                            
                            <div className="flex items-center gap-4 mb-3">
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Clock className="h-4 w-4" />
                                {rec.content.duration}
                              </div>
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                🌐 {rec.content.platform}
                              </div>
                              <div className="text-sm text-primary font-medium">
                                Match: {Math.round(rec.score * 100)}%
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                              {rec.content.tags.map((tag) => (
                                <Badge 
                                  key={tag} 
                                  variant={rec.matchedTags.includes(tag) ? "default" : "outline"}
                                  className={rec.matchedTags.includes(tag) ? "bg-primary" : ""}
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div className="flex flex-col gap-2">
                            {rec.content.type === 'Video' && rec.content.link.includes('youtube.com') ? (
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button 
                                    className="bg-gradient-secondary hover:shadow-soft transition-all"
                                  >
                                    <Play className="h-4 w-4 mr-2" />
                                    Watch Video
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-4xl w-full">
                                  <DialogHeader>
                                    <DialogTitle>{rec.content.title}</DialogTitle>
                                  </DialogHeader>
                                  <div className="aspect-video w-full">
                                    <iframe
                                      src={rec.content.link}
                                      title={rec.content.title}
                                      className="w-full h-full rounded-lg"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                      allowFullScreen
                                    />
                                  </div>
                                </DialogContent>
                              </Dialog>
                            ) : (
                              <Button 
                                asChild
                                className="bg-gradient-secondary hover:shadow-soft transition-all"
                              >
                                <a 
                                  href={rec.content.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2"
                                >
                                  <ExternalLink className="h-4 w-4" />
                                  Start Learning
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ) : userPreferences.interests.length > 0 ? (
              <Card className="bg-gradient-card shadow-soft border-0">
                <CardContent className="p-12 text-center">
                  <div className="mb-6">
                    <div className="p-4 bg-muted/50 rounded-full w-fit mx-auto mb-4">
                      <Brain className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">No Matching Resources Found</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      No matching resources found. Try adjusting your interest or skill level to discover more learning opportunities.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-gradient-card shadow-soft border-0">
                <CardContent className="p-12 text-center">
                  <div className="mb-6">
                    <div className="p-4 bg-muted/50 rounded-full w-fit mx-auto mb-4">
                      <Brain className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Ready to Learn?</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Add your learning interests and preferences to get personalized recommendations 
                      from our curated collection of educational resources.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationEngine;