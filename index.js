// replace this jquery w/ DOM
const button = document.getElementById("search-button");
const input = document.getElementById("input");
let container = document.querySelector(".container");
let array = [];

// if user presses enter instead
input.addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        event.preventDefault();
        document.getElementById("search-button").click();
    }
});


// 


function appendOnPage(value, column){
// VALUE = basically what row (menuItem)
// COLUMN = WHICH COLUMN IT GOES IN
    //    food images
// column.innerHTML = "";
let imageSource = value.image;
let image = document.createElement("img");
image.src = imageSource;
column.append(image);
// food name
let foodNameContainer = document.createElement("h1");
let foodName = value.title;
foodNameContainer.append(foodName)
column.append(foodNameContainer);
// food description
let foodDescriptionContainer = document.createElement("p")
let foodDescription = value.readyInMinutes;
foodDescriptionContainer.append("Ready in " + foodDescription + " minutes")
column.append(foodDescriptionContainer)
// food link
let foodLinkContainer = document.createElement("a")
foodLinkContainer.classList.add("btn", "btn-primary");
foodLinkContainer.append("More Information")
let foodLink = value.spoonacularSourceUrl
foodLinkContainer.href = foodLink
column.append(foodLinkContainer)

}

button.onclick = function(){

let input = document.querySelector("input").value
let apiLink = `https://api.spoonacular.com/recipes/complexSearch?query=${input}&addRecipeInformation=true&apiKey=55e9ca3e426d448aabf00e02fab9e045`;
fetch(apiLink)
    .then(function(apidata) {
        return apidata.json();
    })
    .then(function(apidata){
        let menuItem = apidata.results;
        // value.style.width = "18rem";
        container.innerHTML = ""
        
        for(let i=0;i<menuItem.length;i+= 2){


            let newRow= document.createElement("div")
            newRow.classList=["row"]
            
            let firstCol= document.createElement("div")
            let secondCol= document.createElement("div")
            
            firstCol.append()

            firstCol.classList=["card col-12 col-sm-12 col-md-6 col-lg-6 "]
            secondCol.classList=["card col-12 col-sm-12 col-md-6 col-lg-6"]


            appendOnPage(menuItem[i], firstCol)
            appendOnPage(menuItem[i + 1], secondCol)
            
            newRow.append(firstCol, secondCol)

            container.append(newRow)
          
           }
    })
}