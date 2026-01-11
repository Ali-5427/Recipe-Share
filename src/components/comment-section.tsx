import type { Comment as CommentType } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { RatingStars } from "./ui/rating-stars";

interface CommentSectionProps {
  comments: CommentType[];
  recipeId: string;
}

export function CommentSection({ comments, recipeId }: CommentSectionProps) {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Reviews & Comments</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="font-semibold">Leave a Review</h3>
          <RatingStars isInteractive={true} size={24} className="mb-2" />
          <Textarea placeholder="Share your thoughts on this recipe..." />
          <Button className="mt-2">Submit Review</Button>
        </div>
        
        <div className="space-y-6 pt-6 border-t">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.id} className="flex gap-4">
                <Avatar>
                  <AvatarImage src={comment.user.avatar} />
                  <AvatarFallback>{comment.user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">{comment.user.name}</p>
                    <p className="text-xs text-muted-foreground">{comment.timestamp}</p>
                  </div>
                  <p className="text-sm mt-1">{comment.text}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-muted-foreground text-center">Be the first to leave a comment!</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
