//javascript document

function showMessage() {
    var theDate = new Date();
    var hours = theDate.getHours();
    var theMessage = document.getElementById("welcomeMessage");
    if (hours < 12) {
        theMessage.innerHTML = "Good Morning, Welcome to hugh.cymru!";
    } else if (hours >= 12 && hours < 17) {
        theMessage.innerHTML = "Good Afternoon, Welcome to hugh.cymru!";
    } else {
        theMessage.innerHTML = "Good Evening, Welcome to hugh.cymru!";
    }
}

//hamburger jquery
$(document).ready(function () {
    $('.hamburger').on('click', function (e) {
        e.preventDefault();
        $('.menu').toggleClass('slide-down');
    });
});

function showMoreSkills() {
    var hiddenParagraphs = document.querySelectorAll('.card .text p.hidden');
    var isHidden = hiddenParagraphs[0].style.display === 'none' || hiddenParagraphs[0].classList.contains('hidden');
    for (var i = 0; i < hiddenParagraphs.length; i++) {
        hiddenParagraphs[i].style.display = isHidden ? 'block' : 'none';
    }
    var viewMoreBtn = document.getElementById('viewMoreBtn');
    viewMoreBtn.innerText = isHidden ? 'Show less' : 'Click to view more';
}
