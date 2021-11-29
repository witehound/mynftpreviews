const equilibrium =  document.querySelector(".equilibrium")
const creator = document.querySelector(".nwaide")

equilibrium.addEventListener("mouseenter", function(){
    equilibrium.style.color = "hsl(178, 100%, 50%)"
})

creator.addEventListener("mouseenter", function(){
    creator.style.color = "hsl(178, 100%, 50%)"
})

equilibrium.addEventListener("mouseleave", function(){
    equilibrium.style.color = "white"
})

creator.addEventListener("mouseleave", function(){
    creator.style.color = "white"
})