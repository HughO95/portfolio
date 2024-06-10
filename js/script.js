//javascript document

function showMessage() //start of function for heading message
{
theDate= new Date();
day=theDate.getDate();
hours=theDate.getHours();
theMessage=document.getElementById("welcomeMessage")
if(hours<12)
{
	theMessage.innerHTML="Good Morning, Welcome to hugh.cymru!"
}  // if the time is before 12PM (00:00-11:59) this message is shown
if((hours>=12)&&(hours<17))
{
	theMessage.innerHTML="Good Afternoon, Welcome to hugh.cymru!"
} // if the time is between 12:00-16:59, this message is shown
if((hours>=17)&&(hours <=23)) 
{
	theMessage.innerHTML="Good Evening, Welcome to hugh.cymru!"
} // if the time is between 17:00-23:59 this message is shown
} //end of function for heading message


//hamburger jquery
$(document).ready(function () {
    $('.hamburger').on('click', function (e) {
        // this prevents the link from jumping to the top of the page
        e.preventDefault();
        // If the menu is showing, slide it up. Otherwise, slide it down.
        $('.menu').toggleClass('slide-down');
    });
}); 
// end of hamburger jquery