import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import LoginForm from "@/components/auth/LoginForm";
import RegisterForm from "@/components/auth/RegisterForm";
import { Brain, BookOpen, GraduationCap, Zap } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";

type AuthMode = 'welcome' | 'login' | 'register';

const Home = () => {
  const [authMode, setAuthMode] = useState<AuthMode>('welcome');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        navigate('/recommendations');
      }
    };
    checkUser();
  }, [navigate]);

  const handleAuthSuccess = () => {
    navigate('/recommendations');
  };

  const renderAuthContent = () => {
    switch (authMode) {
      case 'login':
        return (
          <div className="max-w-md mx-auto">
            <LoginForm 
              onSuccess={handleAuthSuccess}
              onSwitchToRegister={() => setAuthMode('register')}
            />
            <Button 
              variant="ghost" 
              onClick={() => setAuthMode('welcome')}
              className="w-full mt-4"
            >
              ← Back to Home
            </Button>
          </div>
        );
      case 'register':
        return (
          <div className="max-w-md mx-auto">
            <RegisterForm 
              onSuccess={handleAuthSuccess}
              onSwitchToLogin={() => setAuthMode('login')}
            />
            <Button 
              variant="ghost" 
              onClick={() => setAuthMode('welcome')}
              className="w-full mt-4"
            >
              ← Back to Home
            </Button>
          </div>
        );
      default:
        return (
          <div className="text-center max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-4 bg-gradient-primary rounded-full shadow-glow">
                  <Brain className="h-12 w-12 text-primary-foreground" />
                </div>
                <h1 className="text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                  AI Learning Hub
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Discover personalized learning resources tailored to your interests and skill level. 
                Our intelligent recommendation engine analyzes your preferences to find the perfect educational content.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="p-6 rounded-lg bg-gradient-card shadow-soft">
                <BookOpen className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Curated Content</h3>
                <p className="text-sm text-muted-foreground">
                  Access thousands of high-quality learning resources from trusted sources
                </p>
              </div>
              <div className="p-6 rounded-lg bg-gradient-card shadow-soft">
                <Zap className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Smart Matching</h3>
                <p className="text-sm text-muted-foreground">
                  AI-powered recommendations based on your interests and learning style
                </p>
              </div>
              <div className="p-6 rounded-lg bg-gradient-card shadow-soft">
                <GraduationCap className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Progress Tracking</h3>
                <p className="text-sm text-muted-foreground">
                  Track your learning journey and get recommendations that grow with you
                </p>
              </div>
            </div>

            {/* Auth Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => setAuthMode('register')}
                size="lg"
                className="bg-gradient-primary hover:shadow-medium transition-all duration-300 px-8"
              >
                Get Started - It's Free
              </Button>
              <Button 
                onClick={() => setAuthMode('login')}
                variant="outline"
                size="lg"
                className="px-8 hover:bg-accent"
              >
                Sign In
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              Join thousands of learners already using our platform
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {renderAuthContent()}
      </div>
    </div>
  );
};

export default Home;