let usernameInput=document.querySelector('.username__input');
let pictureInput=document.querySelector('.userpic__input');
let commentInput=document.querySelector('.text__input');
let avatar=document.querySelector('.avatar');
let username=document.querySelector('.comment__username');
let comment=document.querySelector('.comment__content');
let button=document.querySelector('.button');
let chat=document.querySelector('.chat-block');
let form=document.querySelector('.form__body');


button.addEventListener('click', publishComment); 
function publishComment() {
    avatar.src=pictureInput.value;
let usernameValue=usernameInput.value;
let modifier=usernameValue.toLowerCase();
let cleanModifier=modifier.trim();
function capitalize(cleanModifier) {
    return cleanModifier.replace(/(^|\s)\S/g, function(upperCase) {return upperCase.toUpperCase()})
}
username.textContent=capitalize(cleanModifier);
let commentValue=commentInput.value;
let filter = commentValue.replace(/viagra|XXX/ig, "***");
comment.textContent=filter;
chat.style.display='block';
}

button.addEventListener('click', function (evt) {
    evt.preventDefault();
    usernameInput.value=""; 
    pictureInput.value="";
    commentInput.value="";
    });

