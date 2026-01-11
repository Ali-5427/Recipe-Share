import { RecipeCard } from '@/components/recipe-card';
import { getFavoriteRecipes } from '@/lib/data';
import { BookHeart } from 'lucide-react';

export const metadata = {
  title: 'My Cookbook | Culinary Canvas',
};

export default async function CookbookPage() {
  const favoriteRecipes = await getFavoriteRecipes();

  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">My Cookbook</h1>
        <p className="mt-2 text-lg text-muted-foreground">Your collection of saved recipes for easy access.</p>
      </div>
      {favoriteRecipes.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {favoriteRecipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-border text-center p-12 min-h-[400px]">
          <BookHeart className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 text-xl font-semibold">No saved recipes yet</h3>
          <p className="mb-4 mt-2 text-sm text-muted-foreground">
            Start exploring the feed and save your favorites to see them here.
          </p>
        </div>
      )}
    </div>
  );
}
