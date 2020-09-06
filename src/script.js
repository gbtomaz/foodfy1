const modalOverlay = document.querySelector(".modal--overlay");
const cards = document.querySelectorAll(".card")
const wrapper = document.querySelector('.wrapper')
const img = document.createElement("img")
const recipeName = document.createElement("p")
const recipeOwner = document.createElement("p")

for (let card of cards) {
    card.addEventListener("click", function(){
        modalOverlay.classList.add("active");
        const id = card.getAttribute("id")
        img.src = `img/${id}.png`;
        recipeName.classList.add("card-title")
        recipeOwner.classList.add("card-by")
        const cardName = document.querySelector(`#title-${id}`).innerHTML
        const ownerName = document.querySelector(`#by-${id}`).innerHTML
        recipeName.innerHTML = cardName
        recipeOwner.innerHTML = ownerName
        wrapper.appendChild(img);
        wrapper.appendChild(recipeName)
        wrapper.appendChild(recipeOwner)
    })
    
}

document.querySelector(".close--modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active");
    wrapper.removeChild(img);
    wrapper.removeChild(recipeName);
    wrapper.removeChild(recipeOwner);
    
})
