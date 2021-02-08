const showItem = document.getElementById("showItem");
const foodSearch = document.getElementById("foodItem")
const searchFood = document.getElementById("searchFood");



searchFood.addEventListener("click", () => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f='+foodSearch.value+'')
    .then(response => response.json())
    .then(data => displayFoods(data))

    .catch(err => alert("Sorry this food is not available!"))
})

displayFoods = foods =>{
    const row1 = document.getElementById("row1");
    const singleItem = document.getElementById("itemShow");
    row1.innerText='';
        const foodArr = foods.meals;
        for (let i = 0; i < foodArr.length; i++) {
            const element = foodArr[i];
            console.log(element);
            const col1 = document.createElement("div");
            col1.className= "col-lg-4";
        const coloum1 = `
           <img src="${element.strMealThumb}">
           <h2>${element.strMeal}</h2>
        `
        col1.innerHTML=coloum1;

        row1.appendChild(col1);

        col1.addEventListener("click",function(){
            const col1 = document.createElement("div");
            singleItem.innerText='';
        const coloum1 = `
           <img src="${element.strMealThumb}">
           <h2>${element.strMeal}<h2>
           <h2>Ingredients</h2>
           <p>${element.strIngredient1}</p>
           <p>${element.strIngredient2}</p>
           <p>${element.strIngredient3}</p>
           <p>${element.strIngredient4}</p>
           <p>${element.strIngredient5}</p>
           <p>${element.strIngredient6}</p>
        `
        col1.innerHTML=coloum1;

        singleItem.appendChild(col1);

        })

        }
        
}
