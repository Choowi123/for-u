document.addEventListener("DOMContentLoaded", function() {
    const hiButton = document.getElementById("hiButton");
    const forMe = document.getElementById("forMe");
    const whyButton = document.getElementById("whyButton");
    const tellWhat = document.getElementById("tellWhat");
    const clickMe = document.getElementById("clickMe");

    hiButton.addEventListener("click", event => {
        document.getElementById('firstPage').style.display = 'none';
        document.getElementById('secondPage').style.display = 'flex';
        document.getElementById('secondPage').style.flexDirection = 'column';
        document.getElementById('secondPage').style.justifyContent = 'center';
        document.getElementById('secondPage').style.alignItems = 'center';
        document.getElementById('secondPage').style.marginTop = '200px';
    });

    forMe.addEventListener("click", event => {
        document.getElementById('secondPage').style.display = 'none';
        document.getElementById('thirdPage').style.display = 'flex';
        document.getElementById('thirdPage').style.flexDirection = 'column';
        document.getElementById('thirdPage').style.justifyContent = 'center';
        document.getElementById('thirdPage').style.alignItems = 'center';
        document.getElementById('thirdPage').style.marginTop = '200px';
    });

    whyButton.addEventListener("click", event => {
        document.getElementById('thirdPage').style.display = 'none';
        document.getElementById('fourthPage').style.display = 'flex';
        document.getElementById('fourthPage').style.flexDirection = 'column';
        document.getElementById('fourthPage').style.justifyContent = 'center';
        document.getElementById('fourthPage').style.alignItems = 'center';
        document.getElementById('fourthPage').style.marginTop = '200px';
    });

    tellWhat.addEventListener("click", event => {
        document.getElementById('fourthPage').style.display = 'none';
        document.getElementById('fifthPage').style.display = 'flex';
        document.getElementById('fifthPage').style.flexDirection = 'column';
        document.getElementById('fifthPage').style.justifyContent = 'center';
        document.getElementById('fifthPage').style.alignItems = 'center';
        document.getElementById('fifthPage').style.marginTop = '200px';

        function createHeart() {
            const heart = document.createElement("div");
            heart.classList.add("heart");
        
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        
            heart.innerText = "💗";
        
            document.body.appendChild(heart);
        
            setTimeout(() => {
                heart.remove();
            }, 5000);
        }
        
        setInterval(createHeart, 300);
    });

});