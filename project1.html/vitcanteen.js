
function add(val) {
    document.getElementById("hello").innerHTML += "<li>" + val + "</li>";
    x = x + 1;
}

var isCartVisible = false;
var mydiv = document.getElementById('mydiv');

function toggleCart() {
    isCartVisible = !isCartVisible;
    mydiv.style.display = isCartVisible ? 'block' : 'none';
}









