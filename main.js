var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for (let i = 1; i < 6; i++) {
    var newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic' + i + '.jpg');
    thumbBar.appendChild(newImage);

    newImage.onclick = function(select) {
        displayedImage.src = select.target.src;
    }
}


/* Wiring up the Darken/Lighten button */
btn.onclick = function() {
    const buttonClassCheck = btn.getAttribute('class');
    if (buttonClassCheck === 'light') {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    } else {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
}