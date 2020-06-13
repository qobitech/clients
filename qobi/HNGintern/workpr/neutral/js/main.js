
var menu_btn = document.getElementById('mobile_menu_btn');
var menu_close = document.getElementById('menu_close');
var menu = document.getElementById('mobile_menu');
var main_menu = document.getElementById('main_menu');
var drop_down_menu = document.getElementById('ddm');

function handle_menu(){

    menu_btn.addEventListener('click',()=>{
        menu.classList.remove('close_menu')
        menu.classList.add('open_menu')
    })

    menu_close.addEventListener('click',()=>{
        
        menu.classList.remove('open_menu')
        menu.classList.add('close_menu')
    })

    
    
}

window.addEventListener('scroll',()=>{
    if(main_menu.getBoundingClientRect().y <= -90){
        drop_down_menu.classList.remove('secondmenuUp');
        drop_down_menu.classList.add('secondmenuDown');
    }else{
        drop_down_menu.classList.remove('secondmenuDown');
        drop_down_menu.classList.add('secondmenuUp');
    }
})


handle_menu()