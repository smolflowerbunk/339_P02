/* changing HTML content | https://www.w3schools.com/js/js_htmldom_html.asp */
'use strict';

console.log("JavaScript is running");

var box6 = document.querySelector("#select-6");
var box12 = document.querySelector("#select-12");
var box24 = document.querySelector("#select-24");
var productPrice = document.getElementById("product-price");
var price = document.getElementsByTagName("h2");

if (productPrice.innerHTML == "6/$9.00, 12/$16.00, 24/$28.00") {
    productPrice.innerHTML = "$9.00-$28.00";
    
    box6.addEventListener("click", 
        function() {
            console.log("Box of 6 has been selected");
            productPrice.innerHTML = "$9.00";
        }
    );

    box12.addEventListener("click", 
        function() {
            console.log("Box of 12 has been selected");
            productPrice.innerHTML = "$16.00";
        }
    );

    box24.addEventListener("click", 
        function() {
            console.log("Box of 24 has been selected");
            productPrice.innerHTML = "$28.00";
        }
    );
} else {
    productPrice.innerHTML = "$4.00-$16.00";
    
    box6.addEventListener("click", 
        function() {
            console.log("Box of 6 sale has been selected");
            productPrice.innerHTML = "$4.00";
        }
    );

    box12.addEventListener("click", 
        function() {
            console.log("Box of 12 sale has been selected");
            productPrice.innerHTML = "$10.00";
        }
    );

    box24.addEventListener("click", 
        function() {
            console.log("Box of 24 sale has been selected");
            productPrice.innerHTML = "$16.00";
        }
    );
}