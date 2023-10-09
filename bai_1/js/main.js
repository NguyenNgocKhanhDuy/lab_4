function changeBackgroundColor(button){
    var style = window.getComputedStyle(button);
    document.body.style.backgroundColor = style.backgroundColor;
}