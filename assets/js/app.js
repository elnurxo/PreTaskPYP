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

