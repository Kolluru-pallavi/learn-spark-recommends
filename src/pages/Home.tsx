import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, BookOpen, Video, GraduationCap } from 'lucide-react';
import LoginForm from "@/components/auth/LoginForm";
import RegisterForm from "@/components/auth/RegisterForm";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from 'react-router-dom';
import type { User } from '@supabase/supabase-js';

const Home = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [user, setUser] = useState<User | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    
    getUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
      if (session?.user) {
        navigate('/recommendations');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleGetRecommendations = () => {
    if (user) {
      navigate('/recommendations');
    } else {
      setShowAuth(true);
      toast({
        title: "Authentication required",
        description: "Please sign in or create an account to get personalized recommendations.",
        variant: "destructive"
      });
    }
  };

  const handleAuthSuccess = () => {
    setShowAuth(false);
    navigate('/recommendations');
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Signed out",
      description: "You have been successfully signed out.",
    });
  };

  if (showAuth) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {authMode === 'login' ? (
            <LoginForm 
              onSuccess={handleAuthSuccess}
              onSwitchToRegister={() => setAuthMode('register')}
            />
          ) : (
            <RegisterForm 
              onSuccess={handleAuthSuccess}
              onSwitchToLogin={() => setAuthMode('login')}
            />
          )}
          <div className="text-center mt-4">
            <Button 
              variant="link" 
              onClick={() => setShowAuth(false)}
              className="text-sm"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-primary rounded-full shadow-glow">
              <Brain className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              AI Learning Engine
            </h1>
          </div>
          
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Welcome, {user.email}
              </span>
              <Button variant="outline" onClick={handleSignOut}>
                Sign Out
              </Button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                onClick={() => {
                  setAuthMode('login');
                  setShowAuth(true);
                }}
              >
                Sign In
              </Button>
              <Button 
                onClick={() => {
                  setAuthMode('register');
                  setShowAuth(true);
                }}
                className="bg-gradient-primary hover:shadow-soft transition-all"
              >
                Sign Up
              </Button>
            </div>
          )}
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Discover Your Perfect Learning Path
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Get personalized learning recommendations powered by AI. Our intelligent system analyzes 
            your interests, skill level, and preferences to curate the most relevant educational content just for you.
          </p>
          
          <Button 
            onClick={handleGetRecommendations}
            size="lg"
            className="bg-gradient-primary hover:shadow-medium transition-all duration-300 text-lg px-8 py-4"
          >
            <Brain className="h-5 w-5 mr-2" />
            Get My Recommendations
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gradient-card shadow-soft border-0 text-center p-6">
            <CardContent className="pt-6">
              <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                <Brain className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Matching</h3>
              <p className="text-muted-foreground">
                Advanced algorithms analyze your preferences to find the perfect learning resources
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-soft border-0 text-center p-6">
            <CardContent className="pt-6">
              <div className="p-4 bg-secondary/10 rounded-full w-fit mx-auto mb-4">
                <BookOpen className="h-12 w-12 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Curated Content</h3>
              <p className="text-muted-foreground">
                Access a vast library of high-quality articles, videos, courses, and tutorials
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-soft border-0 text-center p-6">
            <CardContent className="pt-6">
              <div className="p-4 bg-accent/10 rounded-full w-fit mx-auto mb-4">
                <GraduationCap className="h-12 w-12 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Skill Level Matching</h3>
              <p className="text-muted-foreground">
                Get recommendations tailored to your current skill level and learning goals
              </p>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
};

export default Home;