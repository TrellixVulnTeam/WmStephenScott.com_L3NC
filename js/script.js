$(document).ready(function(){
    $WSSBackground = $('div#WmStephenScott')
    $WSSText = $('h1#WmStephenScott')
    $AsideText = $('div#aside')
    $WSSBackground.hide();
    $AsideText.hide()
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
		    	
		    	 
		    		if (skill == 'GIS') {text = "<p id='popupText' class='destroyMe'> I love geospatial data.  Using raster GIS methods I can conduct statistical analyses, such as modeling future real estate values, or determining how much more individuals are willing to pay to be near a transit stop. I am skilled in ESRI's ArcInfo, but increasingly I am moving toward QGIS, a powerful open-source alternative. I am active in the Code For America brigades, where I share my GIS knowledge with others.</p>";
		    							image = "<img src='img/gis/changeTime3Wide.png' width='500px'>";
		    							}
		    		else if (skill == 'UrbanDesign') {text = "<p>Diversity and complexity at all scales serving human needs is my driving aesthetic vision.  I call the principle 'intimate modernity', intimate, because it exists on all scales, and modern, because of its utilitarian sense of urgency.  My design experience is thoroughly informed by the work of Ed Bacon and I.M. Pei and their designs for Philadelphia, as well as early Soviet theories of creating 'social condensors' where people can interact.  Good design brings people together, acting as a lattice upon which social interaction unfolds.  This requires a diversity of spaces, from the private nook, to spaces for small groups, to large civic spaces for congregations of citizens. </p> <p> I belive good urban design is not just 'walkable', but the entire environment is scaled to the human body.  Detail and ornament on the micro-scale is important and is sorely lacking in modernist design generally.  To solve this problem of ornementatal richness, algorithmic design, digital sculpture, and digital fabrication will in the future fill the demand for rich, complex detailing.</p>" ;
		    										  image = "<img id='popupImage' class='destroyMe' src='img/ud/rendering big.jpg' width='500px'>";
		    										}
		    		//else if (skill == 'Architecture') {text = "<p>Stuff about architecture</p>";
		    		//									image = "<img id='popupImage' class='destroyMe' src='img/architecture/Axons-01.png' alt='nikken' width='500px'>"
		    		//								}
		    		else if (skill == '3DModeling') {text = "<p>I have perfected a workflow to turn complex geometry into watertight, printable objects by 'skinning' objects in ZBrush.  I learned 3d printing techniques in architecture school.  Now I use the computer to design jewelry and other small art objects for my friends and loved-ones.</p>";
		    											image = "<img src='img/3dModeling/lookingup.png' width='500px'>";}

		    		else if (skill == 'AboutMe') {text = "<p>Hi, I'm Wm. Stephen Scott.  Call me Steve.  My background is can be described as 'urbanist'.  I have a B.A. in Social Science from the New College of Florida, and a Masters of City Planning degree from the University of Pennsylvania with a certificate in Urban Design.  I also spent a year and a half at Pratt Institute studying architecture before leaving school to pursue a career.</p> <p>Due to the economic downturn and poor job prospects in both the private and public urban planning sectors, I am gravitating towards coding and data analysis.  In 2013 I completed a course in Data Science at General Assembly and I am looking for work as a junior developer or analyst. </p> <p>I have much to learn, but already I have experience with Python, SQL, HTML, and Javascript.  This web site, for example, is completely designed by myself.  My goal is to become a geospatial developer, and implement my GIS knowledge through web applications.  </p>";
		    										image ="<img id='popupImage' class='destroyMe' src='img/aboutMe/portrait3.jpg' width='500px'>";}

		    		else if (skill == 'AlgorithmicArt') {text = "<p>In the spring and summer of 2011 I was hard at work honing my algorithmic architecture techniques.  Using Lindenmeyer systems and celular automata coded in NetLOGO I created intricate and complex algorithmic art.  Complexity of design, on the small and large scale, is the hallmark of my design philosophy. Algorithms are capable of generating this complexity at multiple scales that would be difficult to achieve if designed manually.  These art experiments honed my design and coding technique.  </p>";
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