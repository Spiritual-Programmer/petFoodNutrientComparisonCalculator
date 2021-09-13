//Selectors
const startBtn = document.querySelector('.startBtn');
const radioBtn = document.querySelector(".radio-btns");
const dogFoodBrands = document.getElementById("dog-brands");
const dogRecipes = document.getElementById("dog-recipes");
const catFoodBrands = document.getElementById("cat-brands");
const catRecipes = document.getElementById("cat-recipes");
let content = document.getElementById("content");
let main = document.querySelector('.main');
  //Dog Brand selectors
let brand_img = document.getElementById("brand-img");
let protein_label = document.getElementById("protein-label");
let protein_amount = document.getElementById("protein-amount");
let fat_label = document.getElementById("fat-label");
let fat_amount = document.getElementById("fat-amount");
let carb_label = document.getElementById("carb-label");
let carb_amount = document.getElementById("carb-amount");
  //Info Labels Selectors
let protein_info_title = document.getElementById("protein-info-title");
let protein_info = document.getElementById("protein-info");
let fat_info_title = document.getElementById("fat-info-title");
let fat_info = document.getElementById("fat-info");
let carb_info_title = document.getElementById("carb-info-title");
let carb_info = document.getElementById("carb-info");
let unit_description = document.getElementById("unit-description");
let info_claim = document.getElementById("info-claim");
let btn_h2 = document.getElementById("btn-h2");
  //Cat Brand Selectors
let logo_img = document.getElementById("logo-img");
let recipe_name = document.getElementById("recipe-name");
let brand_img2 = document.getElementById("brand-img2");
let protein_label2 = document.getElementById("protein-label2");
let protein_amount2 = document.getElementById("protein-amount2");
let fat_label2 = document.getElementById("fat-label2");
let fat_amount2 = document.getElementById("fat-amount2");
let carb_label2 = document.getElementById("carb-label2");
let carb_amount2 = document.getElementById("carb-amount2");

//Event Listeners
startBtn.addEventListener('click', start);
radioBtn.addEventListener('click' , animal);
dogFoodBrands.addEventListener('input', showDogFoodBrand);
dogFoodBrands.addEventListener('input', showDogRecipe);
dogRecipes.addEventListener('input', showDogNomnomRecipe);
catFoodBrands.addEventListener('input', showCatFoodBrand);
catFoodBrands.addEventListener('input', showCatRecipe);
catRecipes.addEventListener('input', showCatNomnomRecipe);

//Functions
function start () { //Let's get started button that takes user to make profile
  location.href="https://www.nomnomnow.com/profile";
}

function animal() { //Animal type Radio Buttons. Decides to populate either cat or dog food.
  selection = document.getElementsByName("animal");
  for (let i of selection) {
    main.style.display = "none";
    dogFoodBrands.value = 0;
    catFoodBrands.value = 0;
    dogRecipes.value = 1;
    catRecipes.value = 1;
    content.innerHTML = "Select a pet food brand to get a nutrient comparison";
    if (i.checked && i.id == "cat") {
        document.querySelector(".dog-food-brand-comparison-container").style.display = "none";
        document.querySelector(".cat-food-brand-comparison-container").style.display = "flex";
      }
    else if (i.checked && i.id == "dog") {
      document.querySelector(".cat-food-brand-comparison-container").style.display = "none";
      document.querySelector(".dog-food-brand-comparison-container").style.display = "flex";
    }
  }
}

function showDogRecipe() { //Displays current NomNom Recipe upon the selection of the other brands
  let recipeValue = document.getElementById("dog-recipes").value;
  logo_img.src = "https://www.nomnomnow.com/images/logo/nom_nom_straight.svg";
  if (recipeValue == 1) {
    recipe_name.innerHTML = "BEEF MASH";
    brand_img2.src="https://www.nomnomnow.com/images/recipes/bowl_beef_square.png";
    protein_label2.innerHTML = "Protein *";
    protein_amount2.innerHTML = "93";
    fat_label2.innerHTML = "Fat";
    fat_amount2.innerHTML = "48";
    carb_label2.innerHTML = "Carbohydrate";
    carb_amount2.innerHTML = "75";
  }
  else if (recipeValue == 2) {
    recipe_name.innerHTML = "CHICKEN CUISINE";
    brand_img2.src="https://www.nomnomnow.com/images/recipes/bowl_chicken_square.png";
    protein_label2.innerHTML = "Protein *";
    protein_amount2.innerHTML = "80";
    fat_label2.innerHTML = "Fat";
    fat_amount2.innerHTML = "56";
    carb_label2.innerHTML = "Carbohydrate";
    carb_amount2.innerHTML = "71";
  }
  else if (recipeValue == 3) {
    recipe_name.innerHTML = "TURKEY FARE";
    brand_img2.src="https://www.nomnomnow.com/images/recipes/bowl_turkey_square.png";
    protein_label2.innerHTML = "Protein *";
    protein_amount2.innerHTML = "85";
    fat_label2.innerHTML = "Fat";
    fat_amount2.innerHTML = "41";
    carb_label2.innerHTML = "Carbohydrate";
    carb_amount2.innerHTML = "103";
  }
  else if (recipeValue == 4) {
    recipe_name.innerHTML = "PORK POTLUCK";
    brand_img2.src="https://www.nomnomnow.com/images/recipes/bowl_pork_square.png";
    protein_label2.innerHTML = "Protein *";
    protein_amount2.innerHTML = "76";
    fat_label2.innerHTML = "Fat";
    fat_amount2.innerHTML = "48";
    carb_label2.innerHTML = "Carbohydrate";
    carb_amount2.innerHTML = "93";
  }
}

function showCatRecipe() {////Displays current NomNom Recipe upon the selection of the other brands
  let recipeValue = document.getElementById("cat-recipes").value;
  logo_img.src = "https://www.nomnomnow.com/images/logo/nom_nom_straight.svg";
  if (recipeValue == 1) {
    recipe_name.innerHTML = "CHICKEN CUISINE";
    brand_img2.src="https://www.nomnomnow.com/images/recipes/bowl_cat_chicken_square.png";
    protein_label2.innerHTML = "Protein *";
    protein_amount2.innerHTML = "163";
    fat_label2.innerHTML = "Fat";
    fat_amount2.innerHTML = "42";
    carb_label2.innerHTML = "Carbohydrate";
    carb_amount2.innerHTML = "21";
  }
}

function showDogFoodBrand(ev) {//Displays the different dog food brands
  let select = ev.target;
  protein_info_title.innerHTML="Protein";
  protein_info.innerHTML="Not all proteins are created equal. Kibble and other more processed foods can use less digestible, lower quality protein.";
  fat_info_title.innerHTML = "Fat";
  fat_info.innerHTML = "Fat can oxidize over time, causing issues with digestion. We monitor our fresh diets for oxidation, and the fats are healthier since they are fresh.";
  carb_info_title.innerHTML = "Carbohydrate";
  carb_info.innerHTML = "Nom Nom uses only whole food sources of carbohydrates - no grain byproducts, sugars, or starches added.";
  unit_description.innerHTML = "* All units above are given in grams per 1000 calories (g/kcal)."
  info_claim.innerHTML = "The information for other brands' foods should be used as a guide only, albeit one that is in most cases better than the percentage. Actual values should be available from the manufacturer. Nom Nom is not liable for any misuse, inaccuracy, or other legal shenanigans related to the above.";
  btn_h2.innerHTML = "READY TO GO FRESH?";
  startBtn.innerHTML = "Let's get started";
  main.style.display = "block";
  if (select.value == 1) {
    content.innerHTML = "Blue Buffalo ® Wilderness ™ Chicken contains 34% min protein, 15% min fat and has a calorie density of 3599kcal/kg.";
    brand_img.src="https://www.nomnomnow.com/images/brands/blue_buffalo_chicken.jpg";
    protein_label.innerHTML = "Protein";
    protein_amount.innerHTML = "99";
    fat_label.innerHTML = "Fat";
    fat_amount.innerHTML = "44";
    carb_label.innerHTML = "Carbohydrate";
    carb_amount.innerHTML = "79";  
  }
  else if (select.value == 2) {
    content.innerHTML = "Victor ® Nutra Pro contains 38% min protein, 18% min fat and has a calorie density of 3909kcal/kg.";
    brand_img.src="https://www.nomnomnow.com/images/brands/victor.jpg";
    protein_label.innerHTML = "Protein";
    protein_amount.innerHTML = "101";
    fat_label.innerHTML = "Fat";
    fat_amount.innerHTML = "49";
    carb_label.innerHTML = "Carbohydrate";
    carb_amount.innerHTML = "67";
  }
  else if (select.value == 3) {
    content.innerHTML = "Purina ® Beneful Beef contains 23% min protein, 12% min fat and has a calorie density of 3558kcal/kg.";
    brand_img.src="https://www.nomnomnow.com/images/brands/purina_beef.jpg";
    protein_label.innerHTML = "Protein";
    protein_amount.innerHTML = "69";
    fat_label.innerHTML = "Fat";
    fat_amount.innerHTML = "37";
    carb_label.innerHTML = "Carbohydrate";
    carb_amount.innerHTML = "128";
  }
}
function showCatFoodBrand(ev) {//Displays the different cat food brands
  let select = ev.target;
  protein_info_title.innerHTML="Protein";
  protein_info.innerHTML="Not all proteins are created equal. Kibble and other more processed foods can use less digestible, lower quality protein.";
  fat_info_title.innerHTML = "Fat";
  fat_info.innerHTML = "Fat can oxidize over time, causing issues with digestion. We monitor our fresh diets for oxidation, and the fats are healthier since they are fresh.";
  carb_info_title.innerHTML = "Carbohydrate";
  carb_info.innerHTML = "Nom Nom uses only whole food sources of carbohydrates - no grain byproducts, sugars, or starches added.";
  unit_description.innerHTML = "* All units above are given in grams per 1000 calories (g/kcal)."
  info_claim.innerHTML = "The information for other brands' foods should be used as a guide only, albeit one that is in most cases better than the percentage. Actual values should be available from the manufacturer. Nom Nom is not liable for any misuse, inaccuracy, or other legal shenanigans related to the above.";
  btn_h2.innerHTML = "READY TO GO FRESH?";
  startBtn.innerHTML = "Let's get started";
  main.style.display = "block";
  if (select.value == 1) {
    content.innerHTML = "Blue Buffalo ® Wilderness ™ Chicken contains 40% min protein, 18% min fat and has a calorie density of 3832kcal/kg.";
    brand_img.src="https://www.nomnomnow.com/images/brands/blue_buffalo_cat_chicken.jpg";
    protein_label.innerHTML = "Protein";
    protein_amount.innerHTML = "108";
    fat_label.innerHTML = "Fat";
    fat_amount.innerHTML = "50";
    carb_label.innerHTML = "Carbohydrate";
    carb_amount.innerHTML = "57";
  }
  else if (select.value == 2) {
    content.innerHTML = "Iams ® Chicken contains 32% min protein, 15% min fat and has a calorie density of 3740kcal/kg.";
    brand_img.src="https://www.nomnomnow.com/images/brands/iams_cat_chicken.jpg";
    protein_label.innerHTML = "Protein";
    protein_amount.innerHTML = "90";
    fat_label.innerHTML = "Fat";
    fat_amount.innerHTML = "43";
    carb_label.innerHTML = "Carbohydrate";
    carb_amount.innerHTML = "92";
  }
  else if (select.value == 3) {
    content.innerHTML = "Rachael Ray ® Chicken & Brown Rice contains 34% min protein, 14% min fat and has a calorie density of 3635kcal/kg.";
    brand_img.src="https://www.nomnomnow.com/images/brands/rachael_ray_cat_chicken.jpg";
    protein_label.innerHTML = "Protein";
    protein_amount.innerHTML = "98";
    fat_label.innerHTML = "Fat";
    fat_amount.innerHTML = "41";
    carb_label.innerHTML = "Carbohydrate";
    carb_amount.innerHTML = "88";
  }
}

function showDogNomnomRecipe(ev) {//Displays the dog NomNom recipes
  let select = ev.target;
  logo_img.src = "https://www.nomnomnow.com/images/logo/nom_nom_straight.svg";
  if (select.value == 1) {
    recipe_name.innerHTML = "BEEF MASH";
    brand_img2.src="https://www.nomnomnow.com/images/recipes/bowl_beef_square.png";
    protein_label2.innerHTML = "Protein *";
    protein_amount2.innerHTML = "93";
    fat_label2.innerHTML = "Fat";
    fat_amount2.innerHTML = "48";
    carb_label2.innerHTML = "Carbohydrate";
    carb_amount2.innerHTML = "75";
  }
  else if (select.value == 2) {
    recipe_name.innerHTML = "CHICKEN CUISINE";
    brand_img2.src="https://www.nomnomnow.com/images/recipes/bowl_chicken_square.png";
    protein_label2.innerHTML = "Protein *";
    protein_amount2.innerHTML = "80";
    fat_label2.innerHTML = "Fat";
    fat_amount2.innerHTML = "56";
    carb_label2.innerHTML = "Carbohydrate";
    carb_amount2.innerHTML = "71";
  }
  else if (select.value == 3) {
    recipe_name.innerHTML = "TURKEY FARE";
    brand_img2.src="https://www.nomnomnow.com/images/recipes/bowl_turkey_square.png";
    protein_label2.innerHTML = "Protein *";
    protein_amount2.innerHTML = "85";
    fat_label2.innerHTML = "Fat";
    fat_amount2.innerHTML = "41";
    carb_label2.innerHTML = "Carbohydrate";
    carb_amount2.innerHTML = "103";
  }
  else if (select.value == 4) {
    recipe_name.innerHTML = "PORK POTLUCK";
    brand_img2.src="https://www.nomnomnow.com/images/recipes/bowl_pork_square.png";
    protein_label2.innerHTML = "Protein *";
    protein_amount2.innerHTML = "76";
    fat_label2.innerHTML = "Fat";
    fat_amount2.innerHTML = "48";
    carb_label2.innerHTML = "Carbohydrate";
    carb_amount2.innerHTML = "93";
  }
}

function showCatNomnomRecipe(ev) {//Displays the cat NomNom recipes
  let select = ev.target;
  logo_img.src = "https://www.nomnomnow.com/images/logo/nom_nom_straight.svg";
  if (select.value == 1) {
    recipe_name.innerHTML = "CHICKEN CUISINE";
    brand_img2.src="https://www.nomnomnow.com/images/recipes/bowl_cat_chicken_square.png";
    protein_label2.innerHTML = "Protein *";
    protein_amount2.innerHTML = "163";
    fat_label2.innerHTML = "Fat";
    fat_amount2.innerHTML = "42";
    carb_label2.innerHTML = "Carbohydrate";
    carb_amount2.innerHTML = "21";
  }
}
