let menu = document.getElementById('menu-icon');
let navlist = document.querySelector('.alllist');


navlist.addEventListener('click',()=>
{
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}
);