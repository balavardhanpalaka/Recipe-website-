// Recipe Data extracted from the provided Recipe-Book.pdf
const recipes = [
    {
        id: 1,
        title: "Sorghum Cookies",
        category: "Healthy Snacks",
        description: "A nutritious cookie alternative suitable for all age groups.",
        image: "https://images.unsplash.com/photo-1499636138143-bd649043ea52?auto=format&fit=crop&w=600&q=80", // Placeholder image
        ingredients: [
            "Sorghum (Jowar) Flour",
            "Grated Coconut",
            "Margarine fat",
            "Liquid glucose",
            "Sugar powder",
            "Milk powder",
            "Baking powder"
        ],
        method: "1. Make a fine powder of sorghum flour.<br>2. Blend the sorghum powder with fat until smooth.<br>3. Add liquid glucose, sugar powder, milk powder, grated coconut, and baking powder.<br>4. Knead the mixture into a soft dough.<br>5. Make small balls from the dough and flatten slightly.<br>6. Bake at 225°C until golden brown.",
        nutrition: "Energy: 345 Kcal | Protein: 13g | Calcium: 248mg | Iron: 6.20mg"
    },
    {
        id: 2,
        title: "Garden Cress Ladoo",
        category: "Nutritional Supplements",
        description: "Iron-rich sweet balls, excellent for adolescents.",
        image: "https://images.unsplash.com/photo-1589301760574-0a6f91dce7d7?auto=format&fit=crop&w=600&q=80", // Placeholder image
        ingredients: [
            "Garden Cress Seeds (70g)",
            "Ground Nuts (10g)",
            "Jaggery (20g)",
            "Ghee"
        ],
        method: "1. Roast the Garden Cress seeds and ground nuts separately.<br>2. Pulverize them into a coarse powder.<br>3. Crush or powder the Jaggery finely.<br>4. Mix the roasted powders and jaggery homogeneously.<br>5. Add a little ghee if needed to bind and shape into round ladoos.",
        nutrition: "Protein: 11.6g | Iron: 5.39mg | Carbohydrates: 28g"
    },
    {
        id: 3,
        title: "Garlic Drumstick Soup",
        category: "Soups & Beverages",
        description: "Beneficial for arthritis and anemia, rich in calcium.",
        image: "https://images.unsplash.com/photo-1547592166-23acbe3a624b?auto=format&fit=crop&w=600&q=80", // Placeholder image
        ingredients: [
            "Drumstick powder (20g)",
            "Garlic powder (10g)",
            "Corn flour (10g)",
            "Turmeric powder (1 pinch)",
            "Chilli powder (2g)",
            "Pepper powder (2g)",
            "Salt (2g)"
        ],
        method: "1. Dry drumstick and garlic thoroughly and grind them into powders.<br>2. Mix corn flour, chilli powder, pepper powder, and salt with the garlic and drumstick powder.<br>3. Add this mixture to 150ml of boiling water.<br>4. Cook for 3-4 minutes, stirring continuously to prevent lumps.",
        nutrition: "Energy: 44 Kcal | Beta Carotene: 1008µg | Calcium: 37mg"
    }
];

// Function to render recipes
const recipeContainer = document.getElementById('recipe-container');

function displayRecipes() {
    recipeContainer.innerHTML = "";
    recipes.forEach(recipe => {
        const card = document.createElement('div');
        card.classList.add('recipe-card');
        card.setAttribute('onclick', `openModal(${recipe.id})`);
        
        card.innerHTML = `
            <div class="card-img" style="background-image: url('${recipe.image}');"></div>
            <div class="card-info">
                <h3>${recipe.title}</h3>
                <p>${recipe.description}</p>
                <span class="view-btn">View Recipe &rarr;</span>
            </div>
        `;
        recipeContainer.appendChild(card);
    });
}

// Modal Logic
const modal = document.getElementById('recipe-modal');
const closeBtn = document.querySelector('.close-btn');

// Open Modal with Recipe Details
function openModal(id) {
    const recipe = recipes.find(r => r.id === id);
    if (!recipe) return;

    document.getElementById('modal-title').innerText = recipe.title;
    document.getElementById('modal-category').innerText = recipe.category;
    document.getElementById('modal-img').src = recipe.image;
    document.getElementById('modal-method').innerHTML = recipe.method;
    document.getElementById('modal-nutrition').innerText = recipe.nutrition;

    // Clear and populate ingredients list
    const ingredientsList = document.getElementById('modal-ingredients');
    ingredientsList.innerHTML = "";
    recipe.ingredients.forEach(ing => {
        const li = document.createElement('li');
        li.innerText = ing;
        ingredientsList.appendChild(li);
    });

    modal.style.display = "flex";
}

// Close Modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close when clicking outside
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Initialize
displayRecipes();
