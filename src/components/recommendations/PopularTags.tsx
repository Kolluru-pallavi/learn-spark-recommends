import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";

interface PopularTagsProps {
  popularTags: string[];
  onAddTag: (tag: string) => void;
}

const PopularTags = ({ popularTags, onAddTag }: PopularTagsProps) => {
  return (
    <div className="space-y-3">
      <Label>Popular Topics</Label>
      <div className="flex flex-wrap gap-2">
        {popularTags.slice(0, 8).map((tag) => (
          <Badge 
            key={tag}
            variant="outline" 
            className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            onClick={() => onAddTag(tag)}
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default PopularTags;