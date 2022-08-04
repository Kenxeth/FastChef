// $("button").click(function(){
//     $(".foodContainer").html("");
//     let input = $("input").val();
//     // let apiLink = `https://api.spoonacular.com/food/menuItems/search?query=${input}&apiKey=55e9ca3e426d448aabf00e02fab9e045`;
//     let apiLink = `https://api.spoonacular.com/recipes/complexSearch?query=${input}&addRecipeInformation=true&apiKey=55e9ca3e426d448aabf00e02fab9e045`;
//     fetch(apiLink)
//     .then(function(apidata) {
//         return apidata.json();
//     })
//     .then(function(apidata){
//         console.log(apidata);
//         let menuItem = apidata.results;
        
//         menuItem.forEach(function(food){
//             // $('.foodContainer').append(`<p>${food.readyInMinutes}</p>`)
//             $(`.foodContainer`).append(`<div class="foodItem"><a href="${food.spoonacularSourceUrl}"><img src="${food.image}"></a></div>`);
            
//             // $("#foodLessThan30").click(function(){
//             //     if(food.readyInMinutes < 30){
//             //         $(`.foodContainer`).push(food);
//             //  }  
//             // });

//             // $(`#foodMoreThan30`).click(function(){
//             //     if(food.readyInMinutes > 30){
//             //         $('.foodContainer').push(food);
//             //     }
//             // });
            
//         });

//         if(menuItem.length == 0){
//             $('.foodContainer').append(`<div class="errorMessageText"><h1>Sorry we couldn't find any results!</h1></div>`)
//             $('.foodContainer').append(`<div class="errorMessageImage"><img src=images/errorImage.png width="200px length="200px"></img> </div>`)
//         }

        
//     });
// });