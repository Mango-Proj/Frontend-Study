const fid = document.getElementById("btn-fid");
const fpw = document.getElementById("btn-fpw");
const comment = document.getElementById("comment");
const findemail = document.getElementById("findemail");
const findpw = document.getElementById("findpw");

window.onload = function(){
    findpw.style.display = 'none';
}

fid.addEventListener('click', function(){
    comment.innerText = "Please enter your name and phone number";
    fid.style.backgroundColor = 'lightblue';
    fpw.style.backgroundColor = 'lightgrey';
    findemail.style.display = 'block';
    findpw.style.display = 'none';
})
fpw.addEventListener('click', function(){
    comment.innerText = "Please enter your name and email";
    fid.style.backgroundColor = 'lightgrey';
    fpw.style.backgroundColor = 'lightblue';
    findemail.style.display = 'none';
    findpw.style.display = 'block';
})