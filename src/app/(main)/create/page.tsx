import { RecipeForm } from "@/components/recipe-form";

export const metadata = {
  title: 'New Recipe | Culinary Canvas',
};

export default function CreateRecipePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Share Your Creation</h1>
        <p className="mt-2 text-lg text-muted-foreground">Fill out the details below to add your recipe to the community.</p>
      </div>
      <RecipeForm />
    </div>
  );
}
