var array_images = ["bihari-litti-chokha-640x501.jpg",
    "Thekua.jpg",
    "madhubani painting.jpg",
    "paitkar painting.jpg",
    "nalanda.jpg",
    "Patratu_,_Jharkhand,_INDIA.jpg",
    "960px-Dassam_falls.jpg",
    "960px-Budha_Stupa_Vaishali.jpg",
    "540px-Mahabodhitemple.jpg",
    "ranchi-jagannath-temple-148404776626o.jpeg",
    "naulakha palace.jpg",
    "rockgarden.jpg"
];

var array_description = ["Litti Chokha, Jharkhand",
    "Thekua, Bihar",
    "Madhubani Painting, Jharkhand",
    "Paitkar Painting, Bihar",
    "Nalanda, Bihar",
    "Patratu, Jharkhand",
    "Dassam Falls, Jharkhand",
    "Budha Stupa Vaishali, Bihar",
    "Mahabodhi Temple, Bihar",
    "Jaganath Temple, Jharkhand",
    "Naulakha Palace, Bihar",
    "Rock Garden, Jharkhand"
];

var i = 0;

function readySlideShowEnvironment(){
    i = 0
    document.getElementById("imageslide").src = array_images[i];
    document.getElementById("description").innerHTML = array_description[i];
    document.getElementById("bgm").play();
    document.getElementsByClass("credits").style.display = "none";
    document.getElementsByClass("imageslide").style.display = "inline-block";

    slideshow()
}

function slideshow() {
    var refreshintervalid = setInterval(function changeslide() {
        i = i + 1;
        document.getElementById("imageslide").src = array_images[i];
        document.getElementById("description").innerHTML = array_description[i];
        if (i == 12) {
            clearInterval(refreshintervalid);
            document.getElementById("imageslide").src = "1200px-Flag_of_India.svg.png";
            document.getElementById("description").innerHTML = "Thank you";
            document.getElementById("exit").style.display = "inline-block";            
        }
    }, 5000);
}

function previous(){
    i = i - 1;
    if (i == -1) {
        i = 0; 
    } else {
        document.getElementById("imageslide").src = array_images[i];
        document.getElementById("description").innerHTML = array_description[i];        
    }
}

function next(){
    i = i + 1;
    if (i == 12) {
        document.getElementById("imageslide").src = "1200px-Flag_of_India.svg.png";
        document.getElementById("description").innerHTML = "Thank you"; 
        document.getElementById("next").style.display = "none";
        document.getElementById("previous").style.display = "none";
        document.getElementById("exit").style.display = "inline-block";
    } else {
        document.getElementById("imageslide").src = array_images[i];
        document.getElementById("description").innerHTML = array_description[i];     
    }
}

function readyManualSlideShow(){
    i = 0
    document.getElementById("imageslide").src = array_images[i];
    document.getElementById("description").innerHTML = array_description[i];
    document.getElementById("next").style.display = "inline-block";
    document.getElementById("previous").style.display = "inline-block";
    document.getElementById("bgm").play();
    document.getElementsByClass("credits").style.display = "none";
    document.getElementsByClass("imageslide").style.display = "inline-block";
}
