import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import RecommendationEngine from "@/components/RecommendationEngine";
import { supabase } from "@/integrations/supabase/client";
import { LogOut, User } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Recommendations = () => {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate('/');
      } else {
        setUser(user);
      }
      setIsLoading(false);
    };

    checkUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_OUT') {
          navigate('/');
        }
        setUser(session?.user || null);
      }
    );

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Logout failed",
        description: error.message,
        variant: "destructive"
      });
    } else {
      toast({
        title: "Logged out successfully",
        description: "You have been signed out."
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect to home
  }

  return (
    <div className="relative">
      {/* Header with user info and logout */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-3">
        <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-3 py-2 rounded-lg shadow-soft">
          <User className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-foreground">{user.email}</span>
        </div>
        <Button 
          onClick={handleLogout}
          variant="outline"
          size="sm"
          className="bg-background/80 backdrop-blur-sm"
        >
          <LogOut className="h-4 w-4" />
        </Button>
      </div>

      <RecommendationEngine />
    </div>
  );
};

export default Recommendations;