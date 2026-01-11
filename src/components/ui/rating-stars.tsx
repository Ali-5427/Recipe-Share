"use client";

import { useState } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RatingStarsProps {
  totalStars?: number;
  initialRating?: number;
  onRatingChange?: (rating: number) => void;
  isInteractive?: boolean;
  size?: number;
  className?: string;
}

export function RatingStars({
  totalStars = 5,
  initialRating = 0,
  onRatingChange,
  isInteractive = true,
  size = 20,
  className,
}: RatingStarsProps) {
  const [hoverRating, setHoverRating] = useState(0);
  const [currentRating, setCurrentRating] = useState(initialRating);

  const handleMouseOver = (rating: number) => {
    if (isInteractive) {
      setHoverRating(rating);
    }
  };

  const handleMouseLeave = () => {
    if (isInteractive) {
      setHoverRating(0);
    }
  };

  const handleClick = (rating: number) => {
    if (isInteractive) {
      setCurrentRating(rating);
      if (onRatingChange) {
        onRatingChange(rating);
      }
    }
  };

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {[...Array(totalStars)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <Star
            key={ratingValue}
            size={size}
            className={cn(
              "text-muted-foreground transition-colors",
              isInteractive && "cursor-pointer",
              (hoverRating || currentRating) >= ratingValue
                ? "text-amber-500 fill-amber-400"
                : "text-muted-foreground/50"
            )}
            onMouseOver={() => handleMouseOver(ratingValue)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(ratingValue)}
          />
        );
      })}
    </div>
  );
}
