let usernameInput=document.querySelector('.username__input');
let pictureInput=document.querySelector('.userpic__input');
let commentInput=document.querySelector('.text__input');
let avatar=document.querySelector('.avatar');
let username=document.querySelector('.comment__username');
let comment=document.querySelector('.comment__content');
let button=document.querySelector('.button');
let chat=document.querySelector('.chat__comment');


button.addEventListener('click', publishComment); 
function publishComment() {
    avatar.src=pictureInput.value;
    let usernameValue=usernameInput.value;
    let firstChar = usernameValue.charAt(0);
const capitalized = usernameValue.replace(firstChar, firstChar.toUpperCase());
console.log(capitalized);
    username.textContent=capitalized;
    comment.textContent=commentInput.value;
}
button.addEventListener('click', function (evt) {
    evt.preventDefault();
    });