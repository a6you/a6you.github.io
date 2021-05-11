function pixelFontToggle() {
    if (document.getElementsByTagName("div")[0].style.fontFamily != "VT323") {
        $('div').css('fontFamily', 'VT323');
        $('div').css('font-size', '20px');
    } else {
        $('div').css('fontFamily', '');
        $('div').css('font-size', '');
    }
}