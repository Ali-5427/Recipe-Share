import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getRecipes, type User } from "@/lib/data";
import { RecipeCard } from "@/components/recipe-card";
import { getImage } from "@/lib/data";
import { Medal, Book, Users, Utensils } from "lucide-react";

export const metadata = {
    title: 'My Profile | Culinary Canvas',
};

const user = { 
  name: 'Alex T.', 
  avatar: getImage('user-4').imageUrl,
  bio: "Passionate home cook exploring the world one recipe at a time. I believe good food brings people together. Follow along for my culinary adventures!",
  email: "alex.t@example.com"
};

const UserStats = () => (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Recipes Created</CardTitle>
                <Utensils className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">1</div>
                <p className="text-xs text-muted-foreground">shared with the community</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Saved Recipes</CardTitle>
                <Book className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">3</div>
                 <p className="text-xs text-muted-foreground">in your cookbook</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Followers</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">142</div>
                 <p className="text-xs text-muted-foreground">community members</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Top Cook</CardTitle>
                <Medal className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">#25</div>
                <p className="text-xs text-muted-foreground">community ranking</p>
            </CardContent>
        </Card>
    </div>
);


export default async function ProfilePage() {
  const allRecipes = await getRecipes();
  const myRecipes = allRecipes.filter(recipe => recipe.author.name === user.name);
  const favoriteRecipes = allRecipes.filter(recipe => recipe.isFavorite);

  return (
    <div className="w-full space-y-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <Avatar className="w-32 h-32 border-4 border-primary">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1 text-center md:text-left">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">{user.name}</h1>
          <p className="mt-2 text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">{user.bio}</p>
          <Button variant="outline" className="mt-4">Edit Profile</Button>
        </div>
      </div>
      
      <UserStats />

      <Tabs defaultValue="my-recipes" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="my-recipes">My Recipes</TabsTrigger>
          <TabsTrigger value="favorites">My Favorites</TabsTrigger>
        </TabsList>
        <TabsContent value="my-recipes">
            {myRecipes.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                    {myRecipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
                </div>
            ) : (
                 <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-border text-center p-12 min-h-[300px]">
                    <Utensils className="mx-auto h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-xl font-semibold">No recipes created yet</h3>
                    <p className="mb-4 mt-2 text-sm text-muted-foreground">
                        Share your first creation to see it here.
                    </p>
                </div>
            )}
        </TabsContent>
        <TabsContent value="favorites">
           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                {favoriteRecipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
            </div>
        </TabsContent>
      </Tabs>

    </div>
  );
}
