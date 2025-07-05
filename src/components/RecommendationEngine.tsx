import React, { useState, useEffect } from 'react';
import { Brain } from 'lucide-react';
import { learningContentData } from "@/data/learningContent";
import { getRecommendations, getPopularTags, UserPreferences, RecommendationResult } from "@/utils/recommendationEngine";
import { useToast } from "@/hooks/use-toast";
import PreferencesForm from "./recommendations/PreferencesForm";
import RecommendationsList from "./recommendations/RecommendationsList";

const RecommendationEngine = () => {
  const [userPreferences, setUserPreferences] = useState<UserPreferences>({
    interests: [],
    skillLevel: 'Beginner',
    contentType: 'Any'
  });
  const [interestInput, setInterestInput] = useState('');
  const [recommendations, setRecommendations] = useState<RecommendationResult[]>([]);
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
    
    // Simulate API call delay for better UX
    setTimeout(() => {
      const results = getRecommendations(userPreferences, learningContentData);
      setRecommendations(results);
      setIsLoading(false);
      
      toast({
        title: "Recommendations generated!",
        description: `Found ${results.length} personalized learning resources for you.`,
      });
    }, 1000);
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
            <PreferencesForm 
              userPreferences={userPreferences}
              setUserPreferences={setUserPreferences}
              interestInput={interestInput}
              setInterestInput={setInterestInput}
              onAddInterest={handleAddInterest}
              onRemoveInterest={handleRemoveInterest}
              onAddPopularTag={handleAddPopularTag}
              onGetRecommendations={handleGetRecommendations}
              isLoading={isLoading}
              popularTags={popularTags}
            />
          </div>

          {/* Recommendations */}
          <div className="lg:col-span-2">
            <RecommendationsList recommendations={recommendations} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationEngine;