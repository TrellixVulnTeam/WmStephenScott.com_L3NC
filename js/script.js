$(document).ready(function(){
    $WSSBackground = $('div#WmStephenScott')
    $WSSText = $('h1#WmStephenScott')
    $AsideText = $('div#aside')
    $WSSBackground.fadeOut();
    $AsideText.fadeOut()
    $WSSText.fadeIn(3000);
    $WSSBackground.fadeIn(3000);
    $AsideText.delay(2000).fadeIn(3000);
    
});