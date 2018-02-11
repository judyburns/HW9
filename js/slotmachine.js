/*
 * Cleveland Codes - HW9
 *
 * This homework assignment uses homework assignment HW8 with the following updates:
 *
 * 1.	Execute the script only after the document loads, using $(document).ready().
 * 2.	Change all CSS selectors to use the jQuery equivalent.
 * 3.	Add a Button with text “Spin Again” and a light green background. Use jQuery so when a user 
 *      hovers the mouse over the button it displays “SPIN NOW” in a bigger font and a dark green background.
 * 4.	Add an event handler for page unload via jQuery.  When fired, all elements will fadeout(2000) and text
 * 		“Goodbye” will fadein(2000).
 *
 */
 

 	
$(document).ready(function () {
	// Bind Random Button Click
    $(".random-button").click(function () {
		getBoxColors();
    });
	
	// Bind Random Button Hover
    $(".random-button").hover(function () {
		// hover in
		$(this).text("SPIN NOW").css({"font-size": "20px", "background-color": "#006600"});
    },
		// hover out
							  function(){
        $(this).text("SPIN AGAIN").css({"font-size": "16px", "background-color": "#66ff33"});
    });
	
	// Bind Close Button Click with Callback 
	$(".close-button").click(function(){
		$("p.msg").fadeOut(3000, function(){
            $(this).text("GOODBYE").addClass("alert alert-info").fadeIn(3000);
		});
	});
});
	
function getBoxColors() {
     // remove alert classes from message field
     $("p.msg").removeClass("alert alert-info");

	 //	i = box number of loops (3 boxes)
	 // j = number of loops to get random number (10 times)
	 
	 var i;
	 var j;
	 var $box1 = $("#box1");
	 var $box2 = $("#box2");
	 var $box3 = $("#box3");
	 var $msg  = $("p.msg");
	 
	 for (i=0; i <= 2; i++) {
		var randomNum;
		for (j=0; j < 10; j++) {
			 var randomNum = Math.floor(Math.random() * 10);	 
			 if (randomNum == 0 || randomNum > 3) {
				 continue;
			 }
			 else {
				 switch (i){
					 // box1
					 case 0:
						setBoxAttr($box1, randomNum);
						break;
					// box2
					 case 1:
						setBoxAttr($box2, randomNum);
						break;
					// box3
					 case 2:
						setBoxAttr($box3, randomNum);
						break;
					// other
					 default:
						alert("Error: box # is out of range: box # is " + i+1);
						break;
				 }
			 }
		}
		
	 }
	 
	 if (($box1.attr('class') == $box2.attr('class')) &&  ($box2.attr('class') == $box3.attr('class'))) {
		$msg.text("Congratulations, you won!");
	 }
	 else {
	    $msg.text("Sorry, try again");
	 } 
}

function setBoxAttr (box,randomNum){
	if (randomNum == 1) {
		box.attr('class', 'one');
	}
	else
	if (randomNum == 2) {
		box.attr('class', 'two');
	}
	else
	if (randomNum == 3) {
		box.attr('class', 'three');
	}
	else {
		alert("Error: random # is out of range: random # is " + randomNum);
	}
}

/*
// This works for "PF5" (reload), exiting the tab, and using the "reload" button.
*/
function unloadPage () {
	 return "";
}