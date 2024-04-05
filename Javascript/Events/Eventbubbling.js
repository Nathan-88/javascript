document.getElementById("child").addEventListener("click", function () { 
    alert("You clicked the Child element!"); 
}, false); 
          
document.getElementById( "parent").addEventListene("click", function () { 
    alert("You clicked the parent element!"); 
}, false); 