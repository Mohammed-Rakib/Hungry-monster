const showItem = document.getElementById("showItem");
const foodSearch = document.getElementById("foodItem")
const searchFood = document.getElementById("searchFood");



searchFood.addEventListener("click", () => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f='+foodSearch.value+'')
    .then(response => response.json())
    .then(data => displayFoods(data))


})

displayFoods = foods =>{
    const row1 = document.getElementById("row1");
    row1.innerText='';
        const foodArr = foods.meals;
        for (let i = 0; i < foodArr.length; i++) {
            const element = foodArr[i];
            const col1 = document.createElement("div");
            col1.className= "col-lg-4";
        const coloum1 = `
           <img src="${element.strMealThumb}">
           <h2>${element.strMeal}</h2>
        `
        col1.innerHTML=coloum1;

        row1.appendChild(col1);

        }
}