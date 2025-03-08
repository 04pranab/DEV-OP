document.getElementById("gotohome").addEventListener('click', function(){
    window.location.href = "index.html"
})


document.getElementById("frontMe").addEventListener("mouseenter", function(){
    document.getElementById("realMe").style.display = 'block';
})

document.getElementById("frontMe").addEventListener('mouseleave', function(){
    document.getElementById("realMe").style.display = 'none';
})
