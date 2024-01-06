const thumnailImg = document.querySelectorAll(".thumbnail-img");
const setImage = document.getElementById("product-img");
const subtraction = document.getElementById("decrease");
const additon = document.getElementById("increase");
const changeVal = document.getElementById("val");
const changeValue = document.getElementById("value");
const addToCart = document.getElementById("addtocart");
const priceCount = document.getElementById("pricecount");
const CartImg = document.getElementById("cart");
const cartBox = document.getElementById("cart-box");
const emptyCartBox = document.getElementById("empty-cart-box");
const filledCartBox = document.getElementById("filled-cart-box");
const modalIimg = document.querySelectorAll(".thumbnail");
const setModalImg = document.getElementById("product");
const closeBtn = document.getElementById("close");
const modal = document.querySelector(".modal");
const images = ["./images/image-product-1.jpg", "./images/image-product-2.jpg", "./images/image-product-3.jpg", "./images/image-product-4.jpg"]
const navBar = document.getElementById("navbar")
let val = 1
let price = 125
thumnailImg.forEach(thumnailImg => thumnailImg.addEventListener("click", (e) => {
    setImage.src = e.target.src
    console.log("hello")
}));
modalIimg.forEach(modalIimg => modalIimg.addEventListener("click", (eve) => {
    setModalImg.src = eve.target.src
    console.log("hello")
}));

additon.addEventListener("click", () => {
    val++
    changeVal.innerText = val
    console.log(val)
});
subtraction.addEventListener("click", () => {
    if (val > 0) {
        val--
    }
    changeVal.innerText = val
});

addToCart.addEventListener("click", () => {
    filledCartBox.classList.remove("d-none")
    cartBox.classList.add("d-none")
    cartBoxVAlues()
});

CartImg.addEventListener("click", () => {
    console.log("cart img")
    emptyCartBox.classList.toggle("d-none")
})

function next() {
    setModalImg.src = images[i]
    setImage.src = images[i]
    nextBtnFunction()
}
let j = 3
function prevBtnFunciton() {
    if (j > 0) {
        j--
    } else {
        j = 3
    }
}
function prev() {
    setModalImg.src = images[j]
    setImage.src = images[j]
    prevBtnFunciton()
}
let i = 0
function nextBtnFunction() {
    if (i <= 3) {
        i++
    } else {
        i = 0
    }
};
setImage.addEventListener("click", () => {
    modal.classList.remove("d-none")
});

closeBtn.addEventListener("click", () => {
    modal.classList.add("d-none")
    console.log("close btn")
});

function cartBoxVAlues() {
    let x = val * price
    changeValue.innerText = val
    priceCount.innerText = "$" + x
}
function deleteCart() {
    cartBox.innerHTML = `<div>
    <h6>
      Cart
    </h6>
    <div class="empty-text">
      <p>
        Your cart is empty
      </p>
    </div>
   </div>`
    cartBox.classList.remove("d-none")
    filledCartBox.classList.add("d-none")
}
function showMenu() {
    navBar.style.display = "block"
    document.querySelector(".navbar").classList.remove("none")
    document.body.style.filter = "grey"
    console.log("show menue Working")
}
function closeMenu() {
    navBar.style.display = "d-none"
    document.querySelector(".navbar").classList.add("none")
    console.log("close menu Working")
}
