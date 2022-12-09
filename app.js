const img1Element = document.getElementById("img1");
const img2Element = document.getElementById("img2");
const img4Element = document.getElementById("img4");
const showcaseElement = document.querySelector("#showcase img")
const showcaseParagraph = document.querySelector("#showcase p")


function changeElement(event){
    event.preventDefault()
    showcaseElement.src = "images/img1.png"
    showcaseElement.style.width = "30rem";
    showcaseElement.style.height = "30rem";
    showcaseParagraph.textContent = "Nike Green Airmax"
}

function changeElement2(event){
    event.preventDefault()
    showcaseElement.src = "images/img2.png"
    showcaseElement.style.width = "33rem";
    showcaseElement.style.height = "33rem";
    showcaseParagraph.textContent = "Sneakers Nike Flywire"

}

function changeElement4(event){
    event.preventDefault()
    showcaseElement.src = "images/img4.png"
    showcaseElement.style.width = "30rem";
    showcaseElement.style.height = "30rem";
    showcaseParagraph.textContent = "Nike Air Max 97 Sneakers"
}


img1Element.addEventListener("click",changeElement)
img2Element.addEventListener("click",changeElement2)
img4Element.addEventListener("click",changeElement4)