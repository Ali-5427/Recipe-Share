import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string): ImagePlaceholder => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    return {
      id: 'fallback',
      description: 'Missing image',
      imageUrl: 'https://picsum.photos/seed/fallback/600/400',
      imageHint: 'food',
    };
  }
  return image;
};

export type User = {
  name: string;
  avatar: string;
};

export type Comment = {
  id: string;
  user: User;
  text: string;
  timestamp: string;
};

export type Recipe = {
  id: string;
  title: string;
  description: string;
  author: User;
  image: {
    src: string;
    alt: string;
    aiHint: string;
  };
  ingredients: { amount: string; name: string }[];
  instructions: string[];
  rating: number;
  reviews: number;
  cookTime: string;
  servings: string;
  isFavorite: boolean;
  comments: Comment[];
};

const users = {
  sarah: { name: 'Sarah J.', avatar: getImage('user-1').imageUrl },
  mike: { name: 'Mike D.', avatar: getImage('user-2').imageUrl },
  chloe: { name: 'Chloe R.', avatar: getImage('user-3').imageUrl },
  you: { name: 'Alex T.', avatar: getImage('user-4').imageUrl },
};

const mockRecipes: Recipe[] = [
  {
    id: '1',
    title: 'Classic Spaghetti Bolognese',
    description: 'A rich and hearty Italian classic that is perfect for a family dinner. This recipe has been passed down through generations.',
    author: users.sarah,
    image: {
      src: getImage('spaghetti-bolognese').imageUrl,
      alt: getImage('spaghetti-bolognese').description,
      aiHint: getImage('spaghetti-bolognese').imageHint,
    },
    ingredients: [
      { amount: '1 tbsp', name: 'Olive oil' },
      { amount: '1', name: 'large onion, chopped' },
      { amount: '2', name: 'cloves garlic, minced' },
      { amount: '500g', name: 'Lean ground beef' },
      { amount: '800g', name: 'Canned crushed tomatoes' },
      { amount: '1 tsp', name: 'Dried oregano' },
      { amount: '400g', name: 'Spaghetti' },
      { amount: '', name: 'Salt and pepper to taste' },
    ],
    instructions: [
      'Heat olive oil in a large pot or Dutch oven over medium heat.',
      'Add onion and cook until softened, about 5 minutes. Add garlic and cook for 1 more minute.',
      'Add ground beef and cook until browned, breaking it up with a spoon.',
      'Stir in crushed tomatoes and oregano. Season with salt and pepper.',
      'Bring to a simmer, then reduce heat and let it cook for at least 30 minutes.',
      'Meanwhile, cook spaghetti according to package directions.',
      'Serve the sauce over the spaghetti, topped with fresh parmesan.',
    ],
    rating: 4.8,
    reviews: 124,
    cookTime: '45 min',
    servings: '4',
    isFavorite: true,
    comments: [
      { id: 'c1-1', user: users.mike, text: "This was delicious! A new family favorite.", timestamp: "2 days ago" },
      { id: 'c1-2', user: users.chloe, text: "So easy to make and full of flavor.", timestamp: "1 week ago" },
    ],
  },
  {
    id: '2',
    title: 'Ultimate Chocolate Fudge Cake',
    description: 'A decadent and moist chocolate cake that is surprisingly easy to make. Perfect for birthdays or any special occasion.',
    author: users.mike,
    image: {
      src: getImage('chocolate-cake').imageUrl,
      alt: getImage('chocolate-cake').description,
      aiHint: getImage('chocolate-cake').imageHint,
    },
    ingredients: [
      { amount: '2 cups', name: 'All-purpose flour' },
      { amount: '2 cups', name: 'Sugar' },
      { amount: '3/4 cup', name: 'Unsweetened cocoa powder' },
      { amount: '2 tsp', name: 'Baking soda' },
      { amount: '1 cup', name: 'Buttermilk' },
      { amount: '1/2 cup', name: 'Vegetable oil' },
      { amount: '2', name: 'large eggs' },
    ],
    instructions: [
      'Preheat oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.',
      'In a large bowl, stir together flour, sugar, cocoa, baking soda, and salt.',
      'In a separate bowl, combine buttermilk, oil, and eggs.',
      'Pour the wet ingredients into the dry ingredients and mix until just combined.',
      'Pour batter evenly into the prepared pans.',
      'Bake for 30 to 35 minutes, or until a toothpick inserted into the center comes out clean.',
      'Let cool in pans for 10 minutes before inverting onto a wire rack to cool completely.',
    ],
    rating: 4.9,
    reviews: 250,
    cookTime: '1 hr',
    servings: '12',
    isFavorite: false,
    comments: [
       { id: 'c2-1', user: users.sarah, text: "Best chocolate cake I've ever made!", timestamp: "3 days ago" },
    ],
  },
  {
    id: '3',
    title: 'Avocado Toast with a Twist',
    description: 'A simple, quick, and nutritious breakfast or snack. The "twist" is a secret ingredient that elevates the flavor profile.',
    author: users.chloe,
    image: {
      src: getImage('avocado-toast').imageUrl,
      alt: getImage('avocado-toast').description,
      aiHint: getImage('avocado-toast').imageHint,
    },
    ingredients: [
        { amount: '2 slices', name: 'Sourdough bread' },
        { amount: '1', name: 'ripe avocado' },
        { amount: '1/2', name: 'lime, juiced' },
        { amount: '1/4 tsp', name: 'Red pepper flakes' },
        { amount: 'A pinch', name: 'Smoked paprika (the twist!)' },
        { amount: '', name: 'Flaky sea salt' },
    ],
    instructions: [
        'Toast the sourdough bread to your desired level of crispness.',
        'In a small bowl, mash the avocado with the back of a fork. Mix in the lime juice, salt, and smoked paprika.',
        'Spread the avocado mixture evenly on the toasted bread.',
        'Sprinkle with red pepper flakes and an extra pinch of flaky sea salt.',
        'Serve immediately and enjoy.'
    ],
    rating: 4.6,
    reviews: 88,
    cookTime: '10 min',
    servings: '1-2',
    isFavorite: true,
    comments: [],
  },
  {
    id: '4',
    title: 'Perfect Roast Chicken',
    description: 'A foolproof method for a juicy, flavorful roast chicken with crispy skin every time. Ideal for a Sunday dinner.',
    author: users.sarah,
    image: {
      src: getImage('roast-chicken').imageUrl,
      alt: getImage('roast-chicken').description,
      aiHint: getImage('roast-chicken').imageHint,
    },
    ingredients: [
        { amount: '1', name: '(1.5kg) whole chicken' },
        { amount: '1', name: 'lemon, halved' },
        { amount: '4 sprigs', name: 'Fresh thyme' },
        { amount: '2 tbsp', name: 'Unsalted butter, softened' },
        { amount: '1', name: 'head of garlic, cut in half' },
    ],
    instructions: [
        'Preheat oven to 425°F (220°C).',
        'Pat the chicken dry with paper towels. Season generously inside and out with salt and pepper.',
        'Rub the softened butter all over the skin.',
        'Place the lemon halves, thyme sprigs, and garlic inside the chicken cavity.',
        'Roast for 1 hour and 15 minutes, or until the juices run clear.',
        'Let the chicken rest for 10-15 minutes before carving.'
    ],
    rating: 4.9,
    reviews: 195,
    cookTime: '1 hr 30 min',
    servings: '4',
    isFavorite: false,
    comments: [
      { id: 'c4-1', user: users.mike, text: "The skin was so crispy!", timestamp: "1 month ago" },
    ],
  },
  {
    id: '5',
    title: 'Refreshing Summer Berry Salad',
    description: 'A light and vibrant salad bursting with the flavors of summer. The honey-lime dressing is the perfect complement.',
    author: users.you,
    image: {
      src: getImage('summer-salad').imageUrl,
      alt: getImage('summer-salad').description,
      aiHint: getImage('summer-salad').imageHint,
    },
    ingredients: [
      { amount: '5 oz', name: 'Mixed greens' },
      { amount: '1 cup', name: 'Mixed berries (strawberries, blueberries)' },
      { amount: '1/4 cup', name: 'Crumbled feta cheese' },
      { amount: '1/4 cup', name: 'Toasted pecans' },
      { amount: '2 tbsp', name: 'Olive oil' },
      { amount: '1 tbsp', name: 'Honey' },
      { amount: '1 tbsp', name: 'Lime juice' },
    ],
    instructions: [
      'In a small bowl, whisk together olive oil, honey, and lime juice for the dressing.',
      'In a large salad bowl, combine the mixed greens, berries, feta cheese, and toasted pecans.',
      'Drizzle with the dressing just before serving and toss gently to combine.',
      'Serve immediately as a refreshing side or light main course.',
    ],
    rating: 4.7,
    reviews: 62,
    cookTime: '15 min',
    servings: '2',
    isFavorite: true,
    comments: [],
  },
  {
    id: '6',
    title: 'Fluffy Buttermilk Pancakes',
    description: 'The quintessential weekend breakfast. These pancakes are light, airy, and delicious with your favorite toppings.',
    author: users.mike,
    image: {
      src: getImage('pancakes').imageUrl,
      alt: getImage('pancakes').description,
      aiHint: getImage('pancakes').imageHint,
    },
    ingredients: [
      { amount: '1 1/2 cups', name: 'All-purpose flour' },
      { amount: '2 tbsp', name: 'Sugar' },
      { amount: '1 tsp', name: 'Baking powder' },
      { amount: '1/2 tsp', name: 'Baking soda' },
      { amount: '1 1/4 cups', name: 'Buttermilk' },
      { amount: '1', name: 'large egg' },
      { amount: '2 tbsp', name: 'Melted butter' },
    ],
    instructions: [
      'In a large bowl, whisk together flour, sugar, baking powder, and baking soda.',
      'In a separate bowl, whisk together buttermilk and egg. Stir in melted butter.',
      'Pour the wet mixture into the dry ingredients and stir until just combined. Do not overmix.',
      'Heat a lightly oiled griddle or frying pan over medium-high heat.',
      'Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake.',
      'Cook until bubbles appear on the surface, then flip and cook until golden brown.',
    ],
    rating: 4.8,
    reviews: 310,
    cookTime: '20 min',
    servings: '8 pancakes',
    isFavorite: false,
    comments: [],
  },
];

export async function getRecipes(): Promise<Recipe[]> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockRecipes;
}

export async function getRecipeById(id: string): Promise<Recipe | undefined> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockRecipes.find(recipe => recipe.id === id);
}

export async function getFavoriteRecipes(): Promise<Recipe[]> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockRecipes.filter(recipe => recipe.isFavorite);
}
