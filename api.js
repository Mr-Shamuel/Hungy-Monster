
const mealName = meal => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeal(data))

}
const searchBtn = () => {

    const inputMeal = document.getElementById('input-meal').value;

    if (inputMeal === '') {
        alert('Please, write your meal')
    }
    else {

        mealName(inputMeal);
    }
    document.getElementById('input-meal').value = '';
    removeMeal();
}

const displayMeal = food => {
    const displayMealDiv = document.getElementById('display');
    const value = food.meals;

    if (value === null) {
        displayMealDiv.innerHTML = `
        <h2 style="color:red;">${'This item is not found!'}</h2>
        `
    }
    else {
        for (let i = 0; i < food.meals.length; i++) {
            const mealDiv = document.createElement('div');

            mealDiv.innerHTML = `
            <img onclick="displayIngredients('${food.meals[i].strMeal}')" src="${food.meals[i].strMealThumb}">
            <h3 >${food.meals[i].strMeal}</h3>
            <div class="hide" id="${food.meals[i].strMeal}">
            <h4>Ingredients</h4>
            <p>1. ${food.meals[i].strIngredient1}</p>
            <p>2. ${food.meals[i].strIngredient2}</p>
            <p>3. ${food.meals[i].strIngredient3}</p>
            <p>4. ${food.meals[i].strIngredient4}</p>
            <p>5. ${food.meals[i].strIngredient5}</p>
            <p>6. ${food.meals[i].strIngredient6}</p>
            <p>7. ${food.meals[i].strIngredient7}</p>
            </div>
     `
            displayMealDiv.appendChild(mealDiv);
        }
    }
}
const displayIngredients = (foodName) => {
    const hide = document.getElementById(foodName);
    const hideClass = document.getElementsByClassName('hide');
    for (let i = 0; i < hideClass.length; i++) {
        hideClass[i].style.display = 'none';
    }
    hide.style.display = 'block';

}

const removeMeal = () => {
    const display = document.getElementById('display');
    while (display.hasChildNodes()) {
        display.removeChild(display.firstChild);
    }

}