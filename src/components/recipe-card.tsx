import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Bookmark } from 'lucide-react';
import type { Recipe } from '@/lib/data';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Card className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl group">
      <div className="overflow-hidden">
        <Link href={`/recipes/${recipe.id}`} className="block">
          <Image
            src={recipe.image.src}
            alt={recipe.image.alt}
            width={600}
            height={400}
            className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={recipe.image.aiHint}
          />
        </Link>
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-2xl leading-tight">
          <Link href={`/recipes/${recipe.id}`} className="hover:text-primary transition-colors">{recipe.title}</Link>
        </CardTitle>
        <div className="flex items-center gap-2 pt-2 text-sm text-muted-foreground">
          <Avatar className="h-6 w-6">
            <AvatarImage src={recipe.author.avatar} alt={recipe.author.name} />
            <AvatarFallback>{recipe.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span>{recipe.author.name}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-3">{recipe.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center text-sm">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-amber-500">
             <Star className="size-5 fill-current" />
          </div>
          <span className="text-muted-foreground font-medium">{recipe.rating.toFixed(1)} ({recipe.reviews} reviews)</span>
        </div>
        <Button variant={recipe.isFavorite ? "default" : "outline"} size="icon" className="shrink-0">
          <Bookmark className="size-5" />
          <span className="sr-only">Save to cookbook</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
