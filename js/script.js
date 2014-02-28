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
    mySkills[4] = 'AboutMe';
    mySkills[5] = 'AlgorithmicArt'

	function FadeMe(skill)
		{	
			//$('.destroyMe').remove();

			//var element = document.getElementById('popupText');
			//if (element == null) {;}
			//else {element.parentNode.removeChild(element);};

		//	$('#contentColumn').removeChild('popupText')
		 //	$('#imageColumn').removeChild('popupImage')

		    $('h2#'+skill).fadeTo("fast", .25)
		    $('h2#'+skill).mouseenter(function(){
		    	$('h2#'+skill).fadeTo(400, 1);
		    	$('div#contentColumn').empty();
				$('div#imageColumn').empty();
		    	
		    	 
		    		if (skill == 'GIS') {text = "<p id='popupText' class='destroyMe'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>";
		    							image = "<img src='img/gis/changeTime3Wide.png' width='500px'>";
		    							}
		    		else if (skill == 'UrbanDesign') {text = "<p>Urban Design</p>";
		    										  image = "<img id='popupImage' class='destroyMe' src='img/ud/rendering big.jpg' width='500px'>";
		    										}
		    		else if (skill == 'Architecture') {text = "<p>Stuff about architecture</p>";
		    											image = "<img id='popupImage' class='destroyMe' src='img/architecture/Axons-01.png' alt='nikken' width='500px'>"
		    										}
		    		else if (skill == '3DModeling') {text = "<p>3d printing is fun!!!</p>";
		    											image = "<img src='img/3dModeling/lookingup.png' width='500px'>";}

		    		else if (skill == 'AboutMe') {text = "<p>Some stuff about me</p>";
		    										image ="<img id='popupImage' class='destroyMe' src='img/AboutMe/portrait.jpg' width='500px'>";}

		    		else if (skill == 'AlgorithmicArt') {text = "<p>Algorithmic Art</p>";
		    											image = "<img src='img/algorithmicArt/RenderE_Islands.png' width='500px'>";};

		    							
		    	
		    	$(text).hide().appendTo($('#contentColumn')).fadeIn(1000);

		    	
		    	$(image).hide().appendTo($('#imageColumn')).fadeIn(1000);
		    	});

		    $('h2#'+skill).mouseleave(function(){
		    	$('h2#'+skill).fadeTo(400,0.25)
			});
		};
//	FadeMe(mySkills[0])
//	FadeMe(mySkills[1])
//	FadeMe(mySkills[2])
//	FadeMe(mySkills[3])
//	FadeMe(mySkills[4])
//	FadeMe(mySkills[5])

	for (var i=0;i<mySkills.length;i++)
	{ 
		FadeMe(mySkills[i]);
	}




});