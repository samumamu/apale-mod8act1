var fname = document.getElementById('fname');
var gender = document.getElementById('gender');
var username = document.getElementById('username');
var desc = document.getElementById('desc');
var year = document.getElementById('year');
var age = document.getElementById('age');
var ppic = document.getElementById('ppic');
var canorcon;

fname.innerHTML = prompt('Please Type your Full Name:');
sex();
username.innerHTML = prompt('Please Type your Username:');
desc.innerHTML = prompt('Write a brief description about yourself:');
age.innerHTML = 2023 - parseFloat(year.innerHTML = prompt('What year were you born?'));
pfp();

function sex()
{
    var set;
    var gen;
    if(canorcon = confirm('What is Your Gender?\nClick Ok if M\nClick Cancel if F'))
    {
        set = alert('Your Gender is set to M!');
        gen = 'M';
    }
    else
    {
        set = alert('Your Gender is set to F!');
        gen = 'F';
    }
    document.getElementById('gender').innerHTML = gen;
}

function pfp()
{
    var pfpsrc;
    if(canorcon = confirm('Do you want to set a profile picture?'))
    {
        pfpsrc = prompt('Please type the link/source of the image:');
        alert('Profile Complete!')
    }
    else
    {
        alert('Profile Complete!')
    }
    ppic.src = pfpsrc;
}