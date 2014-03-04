<!DOCTYPE html>

<html>
	<head>
		<title>Steve Scott</title>
		<link href='http://fonts.googleapis.com/css?family=Didact+Gothic' rel='stylesheet' type='text/css' />
		<link href='css/stylesheet.css' rel='stylesheet' type='text/css'/>
		<script type="text/javascript" src='js/jquery-2.1.0.js'></script>
		<script type='text/javascript' src='js/script.js'></script> 
		<div id='WmStephenScott'>
			<h3 id='contactMe'>Contact</h3>
			<h1 id='WmStephenScott'>Wm. Stephen Scott</h1>

		</div>
	</head>
	<body>
		<aside>
			<div id='aside'>
				<br/>
				<h2 id='AboutMe'>About Myself</h2>
				<br/>
				<h2 id='GIS'>GIS</h2>
				<br/>
				<h2 id='UrbanDesign'>Urban Design</h2>
				<br/>
				<h2 id='3DModeling'>Digital Fabrication</h2>
				<br/>
				<h2 id='AlgorithmicArt'>Algorithmic Artwork</h2>
			</div>	
		</aside>
		<div id='contentColumn'>
			
		</div>
		<div id='imageColumn'>
		</div>	

	</body>
	<footer>
	<?php
function spamcheck($field)
  {
  // Sanitize e-mail address
  $field=filter_var($field, FILTER_SANITIZE_EMAIL);
  // Validate e-mail address
  if(filter_var($field, FILTER_VALIDATE_EMAIL))
    {
    return TRUE;
    }
  else
    {
    return FALSE;
    }
  }
?>
<div id='feedbackFormDiv'>
<h2>Not Functional (yet)</h2>
<?php
// display form if user has not clicked submit
if (!isset($_POST["submit"]))
  {
	?>
  <form method="post" action="<?php echo $_SERVER["PHP_SELF"];?>"><br/>
  From: <input type="text" name="from"><br>
  Subject: <input type="text" name="subject"><br>
  Message: <textarea rows="10" cols="40" name="message"></textarea><br>
  <input type="submit" name="submit" value="Contact Steve">
  </form>
   </div>
   <?php
  }
else
  // the user has submitted the form
  {
  // Check if the "from" input field is filled out
  if (isset($_POST["from"]))
    {
    // Check if "from" email address is valid
    $mailcheck = spamcheck($_POST["from"]);
    if ($mailcheck==FALSE)
      {
      echo "Invalid input";
      }
    else
      {
      $from = $_POST["from"]; // sender
      $subject = $_POST["subject"];
      $message = $_POST["message"];
      // message lines should not exceed 70 characters (PHP rule), so wrap it
      $message = wordwrap($message, 70);
      // send mail
      mail("stevescott517@gmail.com",$subject,$message,$from);
      echo "Thank you for sending us feedback";

      }
    }
  }
?>
	</footer>
</html>



