<?php
// Initialize session or include necessary setup files

// Example data (replace with actual database or storage handling)
$recipes = [];

// Example Recipe class definition
class Recipe {
    private $title;
    private $ingredients;
    private $instructions;

    public function __construct($title, $ingredients, $instructions) {
        $this->title = $title;
        $this->ingredients = $ingredients;
        $this->instructions = $instructions;
    }

    public function getTitle() {
        return $this->title;
    }

    public function getIngredients() {
        return $this->ingredients;
    }

    public function getInstructions() {
        return $this->instructions;
    }
}

// Function to add a recipe (example function, replace with your actual data retrieval)
function addRecipe($title, $ingredients, $instructions) {
    global $recipes;
    $recipe = new Recipe($title, $ingredients, $instructions);
    $recipes[] = $recipe;
}

// Example recipes (replace with your actual data retrieval)
addRecipe("Pasta Carbonara", "Spaghetti, eggs, bacon, Parmesan cheese, black pepper", "Cook spaghetti. Mix eggs, Parmesan cheese, and pepper. Add to cooked spaghetti with crispy bacon.");
addRecipe("Chocolate Cake", "Flour, sugar, cocoa powder, eggs, milk, butter, baking powder", "Mix dry ingredients. Add wet ingredients. Bake at 180°C for 30 minutes.");

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>View Recipes</title>
</head>
<body>
    <h1>View Recipes</h1>

    <!-- Display added recipes -->
    <h2>Current Recipes</h2>
    <ul>
        <?php foreach ($recipes as $recipe): ?>
            <li>
                <strong><?php echo $recipe->getTitle(); ?></strong>
                <br>
                <a href="view_recipe.php?id=<?php echo urlencode($recipe->getTitle()); ?>">View Recipe</a>
            </li>
        <?php endforeach; ?>
    </ul>
</body>
</html>
