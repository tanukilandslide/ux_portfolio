function moveFunction() {

    const element = document.getElementById("animate")
    
    element.classList.add("project_window_opened")
    
}

function moveBackFunction() {

    const element = document.getElementById("animate")
    
    element.classList.remove("project_window_opened")

    document.querySelector(".close_button").removeEventListener("click", moveBackFunction)
    
}

function firstProjectClicked() {

    const firstProjectTemplate = document.querySelector("#first_project")

    const currentProjectElement = document.querySelector("#current_project")

    const clone = firstProjectTemplate.content.cloneNode(true)

    currentProjectElement.replaceWith(clone)

   document.querySelector(".close_button").addEventListener("click", moveBackFunction)

    moveFunction()

}

function secondProjectClicked() {

    const secondProjectTemplate = document.querySelector("#second_project")

    const currentProjectElement = document.querySelector("#current_project")

    const clone = secondProjectTemplate.content.cloneNode(true)

    currentProjectElement.replaceWith(clone)

   document.querySelector(".close_button").addEventListener("click", moveBackFunction)

    moveFunction()

}

function thirdProjectClicked() {

    const thirdProjectTemplate = document.querySelector("#third_project")

    const currentProjectElement = document.querySelector("#current_project")

    const clone = thirdProjectTemplate.content.cloneNode(true)

    currentProjectElement.replaceWith(clone)

   document.querySelector(".close_button").addEventListener("click", moveBackFunction)

    moveFunction()

}

function fourthProjectClicked() {

    const fourthProjectTemplate = document.querySelector("#fourth_project")

    const currentProjectElement = document.querySelector("#current_project")

    const clone = fourthProjectTemplate.content.cloneNode(true)

    currentProjectElement.replaceWith(clone)

    document.querySelector(".close_button").addEventListener("click", moveBackFunction)

    moveFunction()
}



// function swapProjectImage() {

//     const projectWindowSwap = document.querySelector(".main_image")

//     projectWindowSwap.src="images/IMG_6407.jpeg"



//     // const secondImageSwap = document.querySelector("#second-image")

//     // projectWindowSwap.innerHTML = secondImageSwap

    

//     // const projectWindow = document.querySelector(".main_image")

//     // const newImage = "<img src='images/IMG_6407.jpeg'>"
    
//     // projectWindow.replaceChildren(newImage)

// }



function changeMainImage(number) {
  
    const images = ["<img src='images/flower_pot/01_initial_sketch.jpg' class='main_image'>","<img src='images/flower_pot/02_3d_model_rendering.jpg' class='main_image'>","<img src='images/flower_pot/03_flower_pot_printing.gif' class='main_image'>","<img src='images/flower_pot/04_flower_pot_on_fence.jpg' class='main_image'>","<img src='images/flower_pot/05_flower_pot_with_plant.jpg' class='main_image'>",

    "<img src='images/chair_project/01-initial-chair-sketches.jpg' class='main_image'>","<img src='images/chair_project/02-chairs-color.jpg' class='main_image'>","<img src='images/chair_project/03-chair-construction.jpg' class='main_image'>","<img src='images/chair_project/04-process-photos.jpg' class='main_image'>","<img src='images/chair_project/05-final-chair.jpg' class='main_image'>",

    "<img src='images/sketches/01-fringilla.jpg' class='main_image'>" , "<img src='images/sketches/02-leighton-on-a-mountain.jpg' class='main_image'>" , "<img src='images/sketches/03-sci-fi-helmet.jpg' class='main_image'>" , "<img src='images/sketches/04-helmet.jpg' class='main_image'>" , "<img src='images/sketches/05-surrealist-portrait.jpg' class='main_image'>"
]
    
    const resultImage = document.querySelector(".project_window").innerHTML = images [number]
      
    }

function highlightedThumbnail(e, number) {

    const projectImageElements = document.querySelectorAll(".thumbnail-mask")
    
    projectImageElements.forEach((element) => element.classList.remove("highlighted"))
    
    e.currentTarget.classList.add("highlighted")

}

function projectImageClicked(e, number) {
    changeMainImage(number)

    highlightedThumbnail(e, number)
}

// function changeProjectWindow() {

//     const currentImage = document.querySelector(".first-project-image-1")
    
//     currentImage.classList.add("second-project-image-1").remove("first-project-image-1")
// }