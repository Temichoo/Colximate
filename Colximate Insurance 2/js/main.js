$(document).ready(function() {  //means the code operate when page is loaded
 
 		$(".hp-1").addClass("animated fadeInUp"); // you can either target the class or tag taking the animated rollIn/fadeInUp name from https://daneden.github.io/animate.css/ *
	
		$(".hp-2").addClass("animated lightSpeedIn"); //if you want the same animation for different tags or classes it will be $(".hp-1 + .hp-2")
	
		$(".img-1").waypoint(function(){ //waypoint targets the img-1 the animation initalizes when you get to the image
		
			$ (".img-1").addClass("animated shake"); //TO ADD WAYPOINT

		},
		{
			offset: '40%' //initialise at 40% from the top as you scroll down
		}); 
	
        $(".my-skills").waypoint(function(){ //waypoint targets the img-1 the animation initalizes when you get to the image
		
			$ (".my-skills").addClass("animated fadeInUp"); //TO ADD WAYPOINT to CLASS

		},
		{
			offset: '50%' //initialise at 40% from the top as you scroll down
		}); 
});