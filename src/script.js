let gmailid = "ompranabmohanty@gmail.com";

let gmail = document.getElementById("gmail");
gmail.addEventListener("click", function(){
    navigator.clipboard.writeText(gmailid)
    .then(() => alert("Text copied: " + gmailid))
    .catch(err => console.error("Error copying text: ", err));
});


document.getElementById("git").addEventListener("click", function() {
    window.open("https://github.com/04pranab", "_blank"); // Opens in a new tab
});



document.getElementById("linkedin").addEventListener("click", function() {
    window.open("https://www.linkedin.com/in/om-pranab-mohanty/", "_blank"); // Opens in a new tab
});


document.getElementById("mesg").addEventListener("click", function() {
    window.open("https://mail.google.com/mail/", "_blank"); // Opens in a new tab
});


document.querySelectorAll('img').forEach(function(image) {
    image.addEventListener('dragstart', function(event) {
        event.preventDefault();  // Prevent the drag
    });
});

document.getElementById("python").addEventListener("mouseenter", function(){
    document.getElementById("pyBox").style.display = "flex";
});

document.getElementById("python").addEventListener("mouseleave", function(){
    document.getElementById("pyBox").style.display = "none";
});

document.getElementById("c").addEventListener("mouseenter", function(){
    document.getElementById("CBox").style.display = "flex";
});

document.getElementById("c").addEventListener("mouseleave", function(){
    document.getElementById("CBox").style.display = "none";
});

document.getElementById("web").addEventListener("mouseenter", function(){
    document.getElementById("WBox").style.display = "flex";
});

document.getElementById("web").addEventListener("mouseleave", function(){
    document.getElementById("WBox").style.display = "none";
});

document.getElementById("gd").addEventListener("mouseenter", function(){
    document.getElementById("GBox").style.display = "flex";
});

document.getElementById("gd").addEventListener("mouseleave", function(){
    document.getElementById("GBox").style.display = "none";
});

document.getElementById("sql").addEventListener("mouseenter", function(){
    document.getElementById("SBox").style.display = "flex";
});

document.getElementById("sql").addEventListener("mouseleave", function(){
    document.getElementById("SBox").style.display = "none";
});

document.getElementById("poet").addEventListener("mouseenter", function(){
    document.getElementById("PBox").style.display = "flex";
});

document.getElementById("poet").addEventListener("mouseleave", function(){
    document.getElementById("PBox").style.display = "none";
});



/*Loading*/
// Loading Screen Delay
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }, 5100); 
});

/*
const buttons = document.getElementsByClassName("Button");

for (let i = 0; i < buttons.length; i++) {
    setTimeout(() => {
    buttons[i].addEventListener("click", function() {
            document.getElementById('tabload').style.display = 'block';
            document.getElementById('main-content').style.display = 'none';
             window.location.href = "public.html"
    });
    }, 5000); 
}*/

document.getElementById("SC").addEventListener("click", function(){
    document.getElementById('tabload').style.display = 'block';
    setTimeout(()=>
    {
        document.getElementById('tabload').style.display = 'none';
        document.getElementById("main-content").style.display = "none";
        document.getElementById("home").style.backgroundImage = "url(../images/bg2.png)"
        document.getElementById("statusCard").style.display = "block";

    }, 3000);
    
});