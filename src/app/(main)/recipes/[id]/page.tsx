import { getRecipeById } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock, Users, Bookmark, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { CommentSection } from "@/components/comment-section";

type RecipePageProps = {
  params: { id: string };
};

export async function generateMetadata({ params }: RecipePageProps) {
  const recipe = await getRecipeById(params.id);
  if (!recipe) {
    return { title: "Recipe Not Found" };
  }
  return {
    title: `${recipe.title} | Culinary Canvas`,
  };
}

export default async function RecipePage({ params }: RecipePageProps) {
  const recipe = await getRecipeById(params.id);

  if (!recipe) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto">
      <article>
        <header className="mb-8">
          <h1 className="font-headline text-4xl md:text-6xl font-bold mb-4">{recipe.title}</h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={recipe.author.avatar} alt={recipe.author.name} />
                <AvatarFallback>{recipe.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="font-medium text-foreground">{recipe.author.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>{recipe.cookTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>Serves {recipe.servings}</span>
            </div>
             <div className="flex items-center gap-2 text-amber-500">
                <Star className="h-5 w-5 fill-current" />
                <span className="font-bold text-foreground">{recipe.rating.toFixed(1)}</span>
                <span className="text-muted-foreground">({recipe.reviews} reviews)</span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="overflow-hidden mb-8">
              <Image
                src={recipe.image.src}
                alt={recipe.image.alt}
                width={800}
                height={500}
                className="w-full object-cover"
                data-ai-hint={recipe.image.aiHint}
                priority
              />
            </Card>

            <p className="text-lg mb-8 leading-relaxed">{recipe.description}</p>

             <Tabs defaultValue="instructions" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="instructions">Instructions</TabsTrigger>
                    <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
                </TabsList>
                <TabsContent value="instructions">
                    <Card>
                        <CardContent className="p-6">
                            <ol className="list-decimal list-inside space-y-4">
                                {recipe.instructions.map((step, index) => (
                                    <li key={index} className="text-base leading-relaxed">{step}</li>
                                ))}
                            </ol>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="ingredients">
                    <Card>
                        <CardContent className="p-6">
                            <ul className="space-y-3">
                                {recipe.ingredients.map((ingredient, index) => (
                                <li key={index} className="flex gap-2 items-start">
                                    <span className="mt-1 block h-2 w-2 rounded-full bg-primary" />
                                    <span className="font-medium">{ingredient.amount}</span>
                                    <span className="text-muted-foreground">{ingredient.name}</span>
                                </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
          </div>

          <aside className="lg:col-span-1 space-y-6 lg:sticky lg:top-24 self-start">
             <Button size="lg" className="w-full">
                <Bookmark className="mr-2 h-5 w-5" /> Save to Cookbook
            </Button>
            <CommentSection comments={recipe.comments} recipeId={recipe.id} />
          </aside>
        </div>
      </article>
    </div>
  );
}
