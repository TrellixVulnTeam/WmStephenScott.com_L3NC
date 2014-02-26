$(document).ready(function(){
    $WSSBackground = $('div#WmStephenScott')
    $WSSText = $('h1#WmStephenScott')
    $AsideText = $('div#aside')
    $WSSBackground.fadeOut();
    $AsideText.fadeOut()
    $WSSText.fadeIn(3000);
    $WSSBackground.fadeIn(3000);
    $AsideText.delay(2000).fadeIn(3000);

    var mySkills = new Array();
    mySkills[0] = 'GIS';
    mySkills[1] = 'UrbanDesign';
    mySkills[2] = 'Architecture';
    mySkills[3] = '3DModeling';

	function FadeMe(skill)
		{
		    $('h2#'+skill).fadeTo("fast", .25)
		    $('h2#'+skill).mouseenter(function(){
		    	$('h2#'+skill).fadeTo(400, 1)});

		    $('h2#'+skill).mouseleave(function(){
		    	$('h2#'+skill).fadeTo(400,0.25)
			});
		};
	FadeMe(mySkills[0])
	FadeMe(mySkills[1])
	FadeMe(mySkills[2])
	FadeMe(mySkills[3])

});