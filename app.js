/*====================================
        GLOW BEAUTY
        script.js
====================================*/

// Welcome Message

window.addEventListener("load", function () {

    console.log("Glow Beauty Website Loaded Successfully");

});

// ================================
// Sticky Header Shadow
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";

    }

    else {

        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.08)";

    }

});

// ================================
// Smooth Scroll
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ================================
// Newsletter Validation
// ================================

const newsletterForms = document.querySelectorAll(".newsletter form");

newsletterForms.forEach(form=>{

    form.addEventListener("submit",function(e){

        e.preventDefault();

        const email=this.querySelector("input");

        if(email.value==""){

            alert("Please enter your email.");

            return;

        }

        alert("Thank you for subscribing!");

        email.value="";

    });

});

// ================================
// Contact Form Validation
// ================================

const contactForm=document.querySelector(".contact-form form");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

let inputs=contactForm.querySelectorAll("input, textarea");

let valid=true;

inputs.forEach(input=>{

if(input.value.trim()==""){

valid=false;

}

});

if(valid){

alert("Your message has been sent successfully!");

contactForm.reset();

}

else{

alert("Please fill all fields.");

}

});

}

// ================================
// Back To Top Button
// ================================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.className="top-btn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";

topBtn.style.right="20px";

topBtn.style.bottom="20px";

topBtn.style.width="45px";

topBtn.style.height="45px";

topBtn.style.border="none";

topBtn.style.borderRadius="50%";

topBtn.style.background="#ff4f8b";

topBtn.style.color="#fff";

topBtn.style.cursor="pointer";

topBtn.style.display="none";

topBtn.style.fontSize="20px";

topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});




/*====================================
        PRODUCT IMAGE GALLERY
====================================*/

const mainImage = document.querySelector(".product-image img");

const thumbnails = document.querySelectorAll(".small-images img");

if (mainImage && thumbnails.length > 0) {

    thumbnails.forEach(function (image) {

        image.addEventListener("click", function () {

            mainImage.src = this.src;

        });

    });

}

/*====================================
        QUANTITY BUTTON
====================================*/

const qtyBoxes = document.querySelectorAll(".qty-box");

qtyBoxes.forEach(function (box) {

    const minus = box.children[0];
    const input = box.children[1];
    const plus = box.children[2];

    plus.addEventListener("click", function () {

        input.value = Number(input.value) + 1;

    });

    minus.addEventListener("click", function () {

        if (Number(input.value) > 1) {

            input.value = Number(input.value) - 1;

        }

    });

});

/*====================================
        FADE ANIMATION
====================================*/

const fadeItems = document.querySelectorAll(

".product-card,.category-card,.team-card,.service-box,.why-card,.review-box"

);

const observer = new IntersectionObserver(function(entries){

entries.forEach(function(entry){

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

fadeItems.forEach(function(item){

item.style.opacity="0";

item.style.transform="translateY(40px)";

item.style.transition=".6s";

observer.observe(item);

});

/*====================================
        FAQ TOGGLE
====================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(function(item){

const answer = item.querySelector("p");

if(answer){

answer.style.display = "none";

}

item.addEventListener("click",function(){

if(answer.style.display==="block"){

answer.style.display="none";

}else{

answer.style.display="block";

}

});

});

/*====================================
        ADD TO CART BUTTON
====================================*/

const cartButtons = document.querySelectorAll(".product-card button");

cartButtons.forEach(function(btn){

btn.addEventListener("click",function(){

alert("Product Added To Cart Successfully!");

});

});

/*====================================
        BUY NOW BUTTON
====================================*/

const buyBtn = document.querySelector(".product-buttons .btn:last-child");

if(buyBtn){

buyBtn.addEventListener("click",function(){

alert("Proceeding To Checkout...");

});

}

/*====================================
        END OF SCRIPT.JS
====================================*/