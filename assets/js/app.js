let coverImage = document.querySelector(".app--main__item__cover__image");
let coverLabel = document.querySelector(".image-label");
let otherImages = document.querySelectorAll(".slide-image");

function RemoveActive() {
    otherImages.forEach((image)=>{  
        image.classList.remove('active-image');
    });
}

otherImages.forEach((image)=>{
    image.addEventListener("click",function(e){
        RemoveActive();
        coverImage.src = e.target.src;
        coverLabel.innerText = e.target.dataset.label;
        this.classList.add("active-image");
    });
});

//Subscribe Modal Open
let subscribeBtn = document.querySelector(".subscribe-btn");
let subscribeModalWrapper = document.querySelector(".app--modal");
let subscribeModal = document.querySelector(".app--modal__item");


subscribeBtn.addEventListener("click",function(){
    subscribeModalWrapper.style.visibility = "visible";
    subscribeModalWrapper.style.opacity = "1";
    subscribeModal.style.transform = "scale(1)";
    subscribeModal.style.transition = ".4s linear";
});

//Subscribe Modal Close
let closeModal = document.querySelector(".remove");

closeModal.addEventListener("click",function(){
    subscribeModalWrapper.style.visibility = "hidden";
    subscribeModal.style.transform = "scale(0.01)";
    subscribeModal.style.transition = "none";

});