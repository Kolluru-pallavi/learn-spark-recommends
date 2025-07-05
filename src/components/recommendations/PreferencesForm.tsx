import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Search, Brain } from 'lucide-react';
import { UserPreferences } from "@/utils/recommendationEngine";
import PopularTags from './PopularTags';

interface PreferencesFormProps {
  userPreferences: UserPreferences;
  setUserPreferences: React.Dispatch<React.SetStateAction<UserPreferences>>;
  interestInput: string;
  setInterestInput: React.Dispatch<React.SetStateAction<string>>;
  onAddInterest: () => void;
  onRemoveInterest: (interest: string) => void;
  onAddPopularTag: (tag: string) => void;
  onGetRecommendations: () => void;
  isLoading: boolean;
  popularTags: string[];
}

const PreferencesForm = ({
  userPreferences,
  setUserPreferences,
  interestInput,
  setInterestInput,
  onAddInterest,
  onRemoveInterest,
  onAddPopularTag,
  onGetRecommendations,
  isLoading,
  popularTags
}: PreferencesFormProps) => {
  return (
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
              onKeyPress={(e) => e.key === 'Enter' && onAddInterest()}
              className="flex-1"
            />
            <Button 
              onClick={onAddInterest}
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
                  onClick={() => onRemoveInterest(interest)}
                >
                  {interest} ×
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Popular Tags */}
        <PopularTags 
          popularTags={popularTags}
          onAddTag={onAddPopularTag}
        />

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
          onClick={onGetRecommendations}
          disabled={isLoading || userPreferences.interests.length === 0}
          className="w-full bg-gradient-primary hover:shadow-medium transition-all duration-300"
          size="lg"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
              Analyzing Preferences...
            </>
          ) : (
            <>
              <Brain className="h-4 w-4 mr-2" />
              Get Recommendations
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default PreferencesForm;