import { RecipeCard } from '@/components/recipe-card';
import { getRecipes } from '@/lib/data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata = {
  title: 'Feed | Culinary Canvas',
};

export default async function FeedPage() {
  const recipes = await getRecipes();

  const sortedByNewest = [...recipes].sort((a, b) => parseInt(b.id) - parseInt(a.id));
  const sortedByTopRated = [...recipes].sort((a, b) => b.rating - a.rating);

  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Community Feed</h1>
        <p className="mt-2 text-lg text-muted-foreground">Explore dishes from our vibrant community of home cooks.</p>
      </div>
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:w-auto md:grid-cols-3 mb-8">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="newest">Newest</TabsTrigger>
          <TabsTrigger value="top-rated">Top Rated</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
          </div>
        </TabsContent>
        <TabsContent value="newest">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {sortedByNewest.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
          </div>
        </TabsContent>
        <TabsContent value="top-rated">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {sortedByTopRated.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
