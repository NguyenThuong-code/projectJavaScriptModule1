let btn=document.getElementById("btn");

function deleteForm(){
    let form =document.getElementById("form");
    if(form.style.display==='none'){
        form.style.display='block';
    }else{
        form.style.display='none';
    }
}

function onClickSettings() {    
    let form =document.getElementById("form");
    if(form.style.display==='block'){
        form.style.display='none';
    }else{
        form.style.display='block';
    }
}

$(function() {
    $('a[href*=\\#]:not([href=\\#])').on('click', function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    });
});
