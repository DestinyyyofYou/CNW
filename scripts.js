$(() => {
    $(".container").show();
    $(".login").hide();
    $(".navigation_bar_right_find").hide();
    $(".navigation_bar_login").on('click', () => {
        $(".login").show();
    });
    $(".navigation_bar_find").on('click',()=>{
        $(".navigation_bar_right_find").show();
    })
    $(".navigation_bar_find").on('click',()=>{
        $(".navigation_bar_right_find").show();
    })
});

const imgPosition = document.querySelectorAll(".slider_container img")
const imgContainer = document.querySelector(".slider_container")
const dotPosition = document.querySelectorAll(".dot")
let index = 0
let imgNumber = imgPosition.length
imgPosition.forEach((image, index) => {
    image.style.left = index * 100 + "%"
    dotPosition[index].addEventListener("click",()=>{
        slider(index)
    })
})

function imgSlide() {
    index++;
    if(index >= imgNumber){index=0}
    slider(index)
}
setInterval(imgSlide,1000)
function slider(index){
    imgContainer.style.left = "-" + index*100+ "%"
    const dotActive = document.querySelector(".active")
    dotActive.classList.remove("active")
    dotPosition[index].classList.add("active")
}

