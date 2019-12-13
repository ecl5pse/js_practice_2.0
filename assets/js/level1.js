'use strict';


const rectangle = {
    a:25,
    b:50,

};


function showOptionsRectangle(rectangle ) {
    console.log(rectangle.a , rectangle.b);

}


 
function widthReturnRectangle(rectangle ) {

   console.log(rectangle.b);

}


function perimeterReturnRectangle(rectangle ) {

    const perimeter = rectangle.a + rectangle.b;
    rectangle.perimeter = perimeter;
     console.log(perimeter);

}



function heightReturnRectangle(rectangle) {

   const  height = rectangle.perimeter/rectangle.a;

   return console.log(height);

}


function widthChanges(response, number) {

    const numberDisplacement = response.a*number;

    console.log(numberDisplacement);
}