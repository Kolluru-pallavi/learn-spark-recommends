import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Brain } from 'lucide-react';
import { RecommendationResult } from "@/utils/recommendationEngine";
import RecommendationCard from './RecommendationCard';

interface RecommendationsListProps {
  recommendations: RecommendationResult[];
}

const RecommendationsList = ({ recommendations }: RecommendationsListProps) => {
  if (recommendations.length === 0) {
    return (
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
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <GraduationCap className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold">Your Personalized Recommendations</h2>
      </div>
      
      <div className="grid gap-4">
        {recommendations.map((rec, index) => (
          <RecommendationCard 
            key={rec.content.id} 
            recommendation={rec} 
            index={index} 
          />
        ))}
      </div>
    </div>
  );
};

export default RecommendationsList;