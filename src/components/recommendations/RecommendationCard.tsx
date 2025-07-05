import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Video, FileText, GraduationCap, BookOpen, Clock, ExternalLink, Play } from 'lucide-react';
import { RecommendationResult } from "@/utils/recommendationEngine";

interface RecommendationCardProps {
  recommendation: RecommendationResult;
  index: number;
}

const RecommendationCard = ({ recommendation, index }: RecommendationCardProps) => {
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
    <Card className="bg-gradient-card shadow-soft border-0 hover:shadow-medium transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                #{index + 1}
              </span>
              <Badge className={`${getSkillLevelColor(recommendation.content.skillLevel)} text-white`}>
                {recommendation.content.skillLevel}
              </Badge>
              <div className="flex items-center gap-1 text-muted-foreground">
                {getTypeIcon(recommendation.content.type)}
                <span className="text-sm">{recommendation.content.type}</span>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-2 text-foreground">
              {recommendation.content.title}
            </h3>
            
            <p className="text-muted-foreground mb-4 line-clamp-2">
              {recommendation.content.description}
            </p>
            
            <div className="flex items-center gap-4 mb-3">
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {recommendation.content.duration}
              </div>
              <div className="text-sm text-primary font-medium">
                Match: {Math.round(recommendation.score * 100)}%
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {recommendation.content.tags.map((tag) => (
                <Badge 
                  key={tag} 
                  variant={recommendation.matchedTags.includes(tag) ? "default" : "outline"}
                  className={recommendation.matchedTags.includes(tag) ? "bg-primary" : ""}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            {recommendation.content.type === 'Video' && recommendation.content.link.includes('youtube.com') ? (
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
                    <DialogTitle>{recommendation.content.title}</DialogTitle>
                  </DialogHeader>
                  <div className="aspect-video w-full">
                    <iframe
                      src={recommendation.content.link}
                      title={recommendation.content.title}
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
                  href={recommendation.content.link} 
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
  );
};

export default RecommendationCard;