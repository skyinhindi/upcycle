const loader = document.querySelector('.loader');
const main = document.querySelector('.container-main');

function init()
{
    setTimeout(function(){
        loader.style.opacity = 0;
        loader.style.display = 'none';
        main.style.display = 'block';
        setTimeout(function(){main.style.opacity = 1;},50)
    }, 2500);
}

init();