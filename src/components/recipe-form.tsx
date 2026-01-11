"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { PlusCircle, Trash2, Upload } from 'lucide-react';

export function RecipeForm() {
  const [ingredients, setIngredients] = useState([{ amount: '', name: '' }]);
  const [instructions, setInstructions] = useState(['']);

  const addIngredient = () => setIngredients([...ingredients, { amount: '', name: '' }]);
  const removeIngredient = (index: number) => setIngredients(ingredients.filter((_, i) => i !== index));

  const addInstruction = () => setInstructions([...instructions, '']);
  const removeInstruction = (index: number) => setInstructions(instructions.filter((_, i) => i !== index));
  
  return (
    <Card>
      <CardContent className="pt-6">
        <form className="space-y-8">
          {/* Recipe Title */}
          <div className="space-y-2">
            <Label htmlFor="title" className="text-lg font-semibold">Recipe Title</Label>
            <Input id="title" placeholder="e.g., Grandma's Famous Apple Pie" />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-lg font-semibold">Description</Label>
            <Textarea id="description" placeholder="A short and sweet description of your dish..." />
          </div>

          {/* Image Upload */}
          <div className="space-y-2">
            <Label htmlFor="image" className="text-lg font-semibold">Recipe Photo</Label>
             <div className="flex items-center justify-center w-full">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-border border-dashed rounded-lg cursor-pointer bg-card hover:bg-accent">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-4 text-muted-foreground"/>
                        <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-muted-foreground">PNG, JPG, or GIF (MAX. 800x400px)</p>
                    </div>
                    <Input id="dropzone-file" type="file" className="hidden" />
                </label>
            </div> 
          </div>

          {/* Ingredients */}
          <div className="space-y-4">
            <Label className="text-lg font-semibold">Ingredients</Label>
            {ingredients.map((ing, index) => (
              <div key={index} className="flex gap-2 items-center">
                <Input placeholder="Amount (e.g., 1 cup)" value={ing.amount} onChange={(e) => {
                    const newIngredients = [...ingredients];
                    newIngredients[index].amount = e.target.value;
                    setIngredients(newIngredients);
                }} />
                <Input placeholder="Name (e.g., Flour)" value={ing.name} onChange={(e) => {
                    const newIngredients = [...ingredients];
                    newIngredients[index].name = e.target.value;
                    setIngredients(newIngredients);
                }}/>
                <Button type="button" variant="ghost" size="icon" onClick={() => removeIngredient(index)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button type="button" variant="outline" onClick={addIngredient}>
              <PlusCircle className="mr-2 h-4 w-4" /> Add Ingredient
            </Button>
          </div>

          {/* Instructions */}
          <div className="space-y-4">
            <Label className="text-lg font-semibold">Instructions</Label>
            {instructions.map((step, index) => (
              <div key={index} className="flex gap-2 items-start">
                <span className="pt-2 text-lg font-semibold text-primary">{index + 1}.</span>
                <Textarea placeholder="Describe this step..." value={step} onChange={(e) => {
                    const newInstructions = [...instructions];
                    newInstructions[index] = e.target.value;
                    setInstructions(newInstructions);
                }} />
                <Button type="button" variant="ghost" size="icon" onClick={() => removeInstruction(index)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button type="button" variant="outline" onClick={addInstruction}>
              <PlusCircle className="mr-2 h-4 w-4" /> Add Step
            </Button>
          </div>

           {/* Meta Info */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="cookTime" className="text-lg font-semibold">Cook Time</Label>
                    <Input id="cookTime" placeholder="e.g., 45 minutes" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="servings" className="text-lg font-semibold">Servings</Label>
                    <Input id="servings" placeholder="e.g., 4 people" />
                </div>
           </div>

        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button type="submit" size="lg">Publish Recipe</Button>
      </CardFooter>
    </Card>
  );
}
