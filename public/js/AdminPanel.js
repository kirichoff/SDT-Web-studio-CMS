 function hideAdmin(){
        var leftmenu = document.getElementById('leftmenu');
        var content = document.getElementById('content');
        if(leftmenu.style.display == null || leftmenu.style.display != 'none'){
            leftmenu.style.display = 'none';
            content.style.marginLeft = '0';
            document.getElementById('hide_show').innerHTML = '->';
        }
        else{
           leftmenu.style.display = 'inline-block';
           content.style.marginLeft = '12%';
           document.getElementById('hide_show').innerHTML = '<-';
        }

}