function menu(){
        document.getElementById("link").style.display = "block" ;
         document.getElementById("link").style.color = "black";
         document.getElementById("link").style.marginBottom = "5px";
         document.getElementById("but").style.display = "none";
         document.getElementById("link2").style.display = "block";
         document.getElementById("link2").style.color = "black";
         document.getElementById("link2").style.marginBottom = "5px";
         document.getElementById("link3").style.display = "block";
         document.getElementById("link3").style.color = "black";
         document.getElementById("link3").style.marginBottom = "5px";
         document.getElementById("link4").style.display = "block";
         document.getElementById("link4").style.color = "black";
         document.getElementById("link4").style.marginBottom = "5px";
         document.getElementById("link5").style.display = "block";
         document.getElementById("link5").style.color = "black";
         document.getElementById("link5").style.marginBottom = "5px";
         document.getElementById("lista").style.flexDirection="column";
         document.getElementById("but2").style.display = "block";
}
function menu2(){
        document.getElementById("link").style.display = "none";
        document.getElementById("link2").style.display = "none";
        document.getElementById("link3").style.display = "none";
        document.getElementById("link4").style.display = "none";
        document.getElementById("link5").style.display = "none";
        document.getElementById("but").style.display = "block";
        document.getElementById("but2").style.display = "none";
}

let nextButton = document.getElementsById("next");
let prevtButton = document.getElementsById("prev");
let carousel = document.querySelector(".carousel");
let list = document.querySelector(".carousel .list");

nextButton.onclick = function(){
        showSlider('next');
}
prevButton.onclick = function(){
        showSlider('prev');
}
const showSlider = (type) => {
        nextButton.style.pointerEvents = 'none'
        prevButton.style.pointerEvents = 'none'
        carousel.classList.remove('prev', 'next');
        let items = document.querySelector(".carousel .list .obj")
        if (type =='next'){
                list.appendChild(items[0]);
                carousel.classList.add('next');
        }
        else{
                let  positionLast = items.length -1;
                list.prepend(items[positionLast])
        }
}