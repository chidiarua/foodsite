//showing and hiding menu items on mobile


function toggleMenu(){
    var menuList = document.getElementById('list');

    var displaySetting = menuList.style.display;

    //var mobileMenubtn = document.getElementById('harm_menu');


    if (displaySetting == 'none'){
        menuList.style.display = 'block';
    }
    else{
        menuList.style.display = 'none'
    }
}