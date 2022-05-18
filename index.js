let apiLink = "https://api.spoonacular.com/food/menuItems/search?query=spaghetti&apiKey=64665b93efd542e89bfb44b821d391d0";

$("button").click(function(){
    
fetch(apiLink)
    .then(function(apidata) {
        return apidata.json();
})
    .then(function(apidata){
        console.log(apidata.menuItems[0].image);
        // var picUrl = apidata.data[0].url;
        // $(".main").append(`<img src="${picUrl}">`);
    });

});