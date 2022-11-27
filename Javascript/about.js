let menuList = document.getElementById('menu-list');
menuList.style.maxHeight="0px";

function togglemenu(){

    if(menuList.style.maxHeight =="0px")
        {
        menuList.style.maxHeight="600px"
        }
    else{
        menuList.style.maxHeight="0px"
    }
    }