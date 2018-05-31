
//navigate to shop page
$("#shop").on("click",function(){
    window.location.href = 'Shop grid.html';
    return false ; 
})


//show the drop down menue -categories-
$("#ProductCategories").on("click", function(){
    $("#nested").toggleClass("cat");
    $("#nested").toggleClass("deatails");
})





//show the cart Window 
$("#cartShow").click(function(){
     $("#myCart").toggle();
}); 


//color the heart icon 
var hearts = document.getElementsByClassName("fa-heart");
for (var i = 0; i < hearts.length; i++) {
        hearts[i].addEventListener('click', function() {
        this.classList.toggle("far");
        this.classList.toggle("fas");
    }) 
}



//the slider price range
$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  } );



