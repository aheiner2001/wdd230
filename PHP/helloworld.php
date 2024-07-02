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

// Function to add a recipe
function addRecipe($title, $ingredients, $instructions) {
    global $recipes;
    $recipe = new Recipe($title, $ingredients, $instructions);
    $recipes[] = $recipe;
}

// Handling form submission to add a recipe
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $title = $_POST["title"];
    $ingredients = $_POST["ingredients"];
    $instructions = $_POST["instructions"];

    addRecipe($title, $ingredients, $instructions);

    // Redirect to view recipes page after adding
    header("Location: view_recipes.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Recipe Website</title>
</head>
<body>
    <h1>Recipe Website</h1>

    <!-- Form to add a new recipe -->
    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
        <label for="title">Recipe Title:</label>
        <input type="text" id="title" name="title" required><br>

        <label for="ingredients">Ingredients:</label><br>
        <textarea id="ingredients" name="ingredients" rows="4" cols="50" required></textarea><br>

        <label for="instructions">Instructions:</label><br>
        <textarea id="instructions" name="instructions" rows="8" cols="50" required></textarea><br>

        <button type="submit">Add Recipe</button>
    </form>

    <hr>

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
