const img1Element = document.getElementById("img1");
const img2Element = document.getElementById("img2");
const img4Element = document.getElementById("img4");
const showcaseElement = document.querySelector("#showcase img")
const showcaseParagraph = document.querySelector("#showcase p")
const htmlElement = document.getElementsByTagName("html")[0];


function changeElement(event){
    event.preventDefault()
    if (htmlElement.style.width > "900"){
        showcaseElement.src = "images/img1.png"
        showcaseElement.style.width = "30rem"
        showcaseElement.style.height = "30rem"
        showcaseParagraph.textContent = "Nike Green Airmax"

    }else{
        showcaseElement.src = "images/img1.png"
        showcaseParagraph.textContent = "Nike Green Airmax"
    }};
 

function changeElement2(event){
    event.preventDefault()
    if (htmlElement.width > "900"){
        showcaseElement.src = "images/img2.png"
        showcaseElement.style.width = "33rem"
        showcaseElement.style.height = "33rem"
        showcaseParagraph.textContent = "Sneakers Nike Flywire"
    } else{
        showcaseParagraph.textContent = "Sneakers Nike Flywire"
        showcaseElement.src = "images/img2.png"
    }
}

function changeElement4(event){
    event.preventDefault()
    if (htmlElement.style.width > "900px"){
        showcaseElement.src = "images/img4.png"
        showcaseElement.style.width = "30rem"
        showcaseElement.style.height = "30rem"
        showcaseParagraph.textContent = "Nike Air Max 97 Sneakers"
    }else{
        showcaseParagraph.textContent = "Nike Air Max 97 Sneakers"
        showcaseElement.src = "images/img4.png"
    }
}


img1Element.addEventListener("click",changeElement)
img2Element.addEventListener("click",changeElement2)
img4Element.addEventListener("click",changeElement4)