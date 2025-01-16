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
        document.getElementsById("next").style.pointerEvents = 'none';
        document.getElementsById("prev").style.pointerEvents = 'none';
        document.querySelector(".carousel").classList.remove('prev', 'next');
        let items = document.querySelector(".carousel .list .obj")
        if (type =='next'){
                document.querySelector(".carousel .list").appendChild(document.querySelector(".carousel .list .obj")[0]);
                document.querySelector(".carousel").classList.add('next');
        }
        else{
                let  positionLast = items.length -1;
                document.querySelector(".carousel .list").prepend(document.querySelector(".carousel .list .obj")[document.querySelector(".carousel .list .obj").length -1])
        }
}