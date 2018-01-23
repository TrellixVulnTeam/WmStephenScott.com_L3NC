$(document).ready(function(){
    $WSSBackground = $('div#WmStephenScott');
    $WSSText = $('h1#WmStephenScott');
    $AsideText = $('div#aside');
    $('div#feedbackFormDiv').hide();
    $WSSBackground.hide();
    $AsideText.hide();
    $WSSText.fadeIn(3000);
    $WSSBackground.fadeIn(3000);
    $AsideText.delay(2000).fadeIn(3000);

    function resizeIframe(obj){
        obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
    }


      $('.center').slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for'
      });

      $('.slider-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          fade: true,
          asNavFor: '.center',
          focusOnSelect: true,
          variableWidth: false
      });


    var mySkills = new Array();
    mySkills[0] = 'Code';
    mySkills[1] = 'Geo';
    mySkills[2] = 'Design';
    mySkills[3] = 'AboutMe';


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
				$('footer').hide();
				$('div#feedbackFormDiv').hide();
		    	
		    	 
		    		if (skill == 'Code') {text = "<p>I am currently pursuing my Master's of Computer Science degree at NJIT, part time.</p><p>Check out my github page at <a href='https://github.com/SteveScott'>github.com/SteveScott</a></p><p> have experience in Python, Java, C#, R, and SQL. I use Python and Flask to make my personal websites. One of these sites is <a href='http://www.evepiprofits.com'>EVE PI Profits</a>. It aggregates market data for the online game EVE Online. The game has a market economy, with price data. My app pulls from the EVE-Central market data API, applies calculations, and displays the market data for planetary commodities. The front end uses Flask templates with Bootstrap for responsive design.</p><p>This site, WmStephenScott.com does not use bootstrap, but consists of custom J-Query scripts for animations and transitions. The backend is also Python and Flask.</p><p>I also developed the website <a href='https://rubertones.myshopify.com'>rubertones.com </a> for Rubertones CAD and Casting. I also worked extensively on a custom template for <a href='https://www.untildeathinc.com'>Until Death Inc.</a> but after I left they changed the site to appeal to women with a new default template (it doesn't represent my work). I have experience with Shopify's Liquid system and got a chance to apply my JavaScript knowledge.</p><p>I took a course in data science from General Assembly, which utilized the SciKitLearn library for Python. I learned how to do cluster analysis, random forest classification and regression, and ordinary least square regression analysis in Python.</p><p>I am strong in SQL, having taken three courses in the subject at NJIT. I can execute complex queries using the EXIST clause. I can aggregate and group data. I can alter tables, and add data to them. I am very comfortable with easy queries, and I have the knowledge base to tackle more complex queries. I would like to apply my knowledge of PostGIS.</p><p>Java is the primary programming language at NJIT. I have used Java before to create networking applications that apply Dikstra's Algorithm to the local area network. </p><p>I have used C# to create a game aid for the board game Attack Vector: Tactical. The damage allocation is complex, so I automated the process with a command line application. I am not averse to the Microsoft stack would like to dive deeper into C# and .NET.</p><p>I use R to clean data for use in statistical analysis of real estate data. I have also used it to generate reports for the Provost of Rutgers University.</p><p>I am creating add-ons to the open-source game Orbiter 2016 in the C++ language, implementing the Attack Vector rules from the C# application into the real time simulation. I am also creating DLLs to drive the ships that I create for the game. This is an ongoing project.</p><p>As you can see I have several projects behind me and I am ready to advance to the next level of my career: finding employment as a junior developer.</p>";
		    				    		image ="<div style='width:100%;height:0;padding-bottom:100%;position:relative;'><iframe src='https://giphy.com/embed/IBGk6rXvzVb0c' width='100%' height='100%' style='position:absolute' frameBorder='0' class='giphy-embed' allowFullScreen></iframe></div><p><a href='https://giphy.com/gifs/programming-automata-cellular-IBGk6rXvzVb0c'>via GIPHY</a></p>"
		    							}
		    		else if (skill == 'Geo') {text = "<p>Trained as a city planner I have extensive experience with GIS packages and spatial analysis. I am proficient in both the ESRI products and open source alternatives. I am good with raster analysis using ESRI's Spatial Analyst extension, and I have experience using Business Analyst for facility placement decisions using gravity modeling, as well as for drive-time calculations. I have used GIS to model real estate prices in New Jersey and New York using a variety of geospatial inputs into a linear regression model, and also with machine learning. To do this I used ESRI model builder and custom python scripting to create complex regression models. I have also used GIS and Adobe Illustrator to make cartographic presentation graphics.</p><p>I also have advanced training in urban systems. My undergraduate degree was in social science, and my first master's degree was in city planning. I have training in urban economics, micro economics, and macro economics. I understand how the planning process works in city government, planning law, planning theory, and planning history. I took Planning By Numbers with John Landis where I learned how to apply statistical methods towards urban problems.</p><p>I also have real estate development training. I learned how to calculate internal rate of return and net present value for real estate developments. I learned the Huff gravity model for retail site location. I have work experience with a non-profit housing developer where I had in-depth training in low income housing tax credits (LIHTC). I have work experience as a project manager overseeing contractors, and experience with quantitative asset management for rental properties. I also know the basics of how a building is made and about architectural styles, theory, history, and process.</p><p>My aesthetic preferences are baroque, biophilic, fine-grained, high-tech, yet functional and humane.</p>";
		    								  image = "<iframe width='100%' height='800px' frameBorder='0'class='slideshow'  src='/geo-slideshow'</iframe>"






		    										}

		    		else if (skill == 'Design') {text = "<p>I am skilled in both 2D and 3D design. I use 2D design principles to make presentation-grade maps for my employers and their clients. I have graphic design training which I put to use in publications and in my web sites. I am particularly strong in 3d modeling. I know how to create models in 3DS Max, Maya, or Rhino, and texture objects in ZBrush.</p><p>I have a certificate in urban design from PennDesign, and am well-versed in the principles of New Urbanism, transit-oriented development, and complete streetscape design. I also have in-depth knowlege of historic design patterns, such as the Radburn design, Ed Bacon's design of Philadelphia, and garden city principles.</p><p>One of my interests is algorithmic design and form generation. I have used algorithmic design for building facade concepts, sculpture, and jewelry. I am particularly skillful with cellular automata, agent-based design, and L-systems.</p>";
		    									image = "<iframe width='100%' height='800px' frameBorder='0'class='slideshow'  src='/slick-test'</iframe>"

		    											}

		    		else if (skill == 'AboutMe') {text = "<p>Hi, I'm Steve Scott. I have three core competencies: Code, Geo, and Design</p><p><em>Code:</em>  I am skilled in programming in multiple languages, especially Python, Java, C#, R, and SQL. I have experience developing software applications and web applications. I have taken courses in data science, statistics, and machine learning and can implement these techniques in code. I will complete my Master of Computer Science Degree from New Jersey Institute of Technology in May, 2018.</p><p><em>Geo:</em> I am proficient in GIS (ESRI and open-source). I can conduct statistical analyses over geospatial datasets and create complex models. I can also make compelling maps. I also know urban geography, including urban economics, land use law, historic growth patterns, and planning theory. I obtained my Master of City Planning from the University of Pennsylvania in 2010.</p><p><em>Design:</em> I am trained in urban design and architecture, earning a Certificate in Urban Design from the University of Pennsylvania in 2010. I am skilled in 2d graphics and 3d modeling and texturing. I also have professional experience as a web designer and design my own sites, such as this.</p><p>Please hover over on the buttons to the left to learn more.</p>";
		    										image ="<img src='static/img/aboutMe/BandW.jpg' width='500px'>";}
		    							
		    	
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
	};
	
	$('h3#contactMe').mouseenter(function() {
		$('div#contentColumn').empty();
		$('div#imageColumn').empty();
		$('div#feedbackFormDiv').fadeTo(1, 1);
		$('footer').fadeTo(1,1);
	});



});