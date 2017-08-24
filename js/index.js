
$(document).ready(function(){
	var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

	

	 $("#live").on("click",function(){   //click operation to show live channels
		 if(!window.location.hash) {
		    window.location = window.location + '#loaded';
			window.location.reload();
            }else{
				$('.row').empty();
		        isLive(users);
          }	
	 });

	 $("#offline").on("click",function(){    //click operation to show offline channels
		   if(!window.location.hash) {
		    window.location = window.location + '#loaded';
			window.location.reload();
            }else{
				$('.row').empty();
		        isNotLive(users);
          }
	 });

	 $("#all").on("click",function(){     //click operation for all channels
		if(!window.location.hash) {
		    window.location = window.location + '#loaded';
			window.location.reload();
            }else{
				$('.row').empty();
		        allUsers(users);
          }
	 });

	});
	
	
function allUsers(arr){
	var count = 0;
	while(count < arr.length){
		var element = "";
	    element = arr[count];
	    ajaxForAll(element,count);
		count++;
	}
	
}

function isLive(arr){
    var count = 0;
    while(count < arr.length){
		var element = "";
	    element = arr[count];
		ajaxForlive(element,count);
		count++;
	}

	
   
}


function isNotLive(arr){
   var count = 0;
	while(count < arr.length){
		var element = "";
	    element = arr[count];
	    ajaxForNotLive(element,count);
		count++;
	}
}


function ajaxForAll(element,count){
	var count2 = count+"er";
	var count3 = count2 + "est";
	var count4 = "my" + count3;
	console.log(count2);
	$.ajax({
		type: "GET",
		url:"https://wind-bow.glitch.me/twitch-api/streams/"+element+"/?format=json",
		dataType: 'jsonp',
		headers: {
		"Client-ID": element,
        "Accept": "application/vnd.twitchtv.v5+json"
		},
		success: function(data){
			    if(data.stream){
				  $('.row').append("<a id="+count+" href="+ data.stream.channel.url+" target="+"\"_blank\""+"></a>")
				  $("#"+count).append("<div id="+count2+" class="+"\"col-xs-12 col-sm-6 col-md-2\""+"></div>");
				  $("#"+count2).append("<div id="+count3+" class="+"\"card\""+"></div>");
				  $("#"+count3).append("<img src="+data.stream.preview.medium+"/>");
				  $("#"+count3).append("<h3>"+element+"</h3>");
				  $("#"+count3).append("<div id="+count4+" class="+"\"container2\""+"></div>");
				  $("#"+count4).append("<marquee behaviour="+"\"scroll\""+ " scrollamount="+1+ " direction= "+"\"+left\""+ " class="+"\"preview\""+">"+data.stream.channel.status+"</marquee>");

                }
				else {
				  $('.row').append("<div id="+count+" class="+"\"col-xs-12 col-sm-6 col-md-2\""+"></div>");
				  $("#"+count).append("<div id="+count2+ " class="+"\"card\""+"></div>");
				  $("#"+count2).append("<div id="+count3+" class="+"\"container2\""+"></div>");
				 $("#"+count3).append("<p>"+element+"</p>");
				  

				}
		}
		});
}

function ajaxForlive(element,count){
	var count2 = count+"er";
	var count3 = count2 + "est";
	var count4 = "my" + count3;
	$.ajax({
		type: "GET",
		url:"https://wind-bow.glitch.me/twitch-api/streams/"+element+"/?format=json",
		dataType: 'jsonp',
		headers: {
		"Client-ID": element,
        "Accept": "application/vnd.twitchtv.v5+json"
		},
		cache:'false',
		success: function(data){
			    if(data.stream != null){
				  $('.row').append("<a id="+count+" href="+ data.stream.channel.url+" target="+"\"_blank\""+"></a>")
				  $("#"+count).append("<div id="+count2+" class="+"\"col-xs-12 col-sm-6 col-md-2\""+"></div>");
				  $("#"+count2).append("<div id="+count3+" class="+"\"card\""+"></div>");
				  $("#"+count3).append("<img src="+data.stream.preview.medium+"/>");
				  $("#"+count3).append("<h3>"+element+"</h3>");
				  $("#"+count3).append("<div id="+count4+" class="+"\"container2\""+"></div>");
				  $("#"+count4).append("<marquee behaviour="+"\"scroll\""+ " scrollamount="+1+ " direction= "+"\"+left\""+ " class="+"\"preview\""+">"+data.stream.channel.status+"</marquee>");

                }
		}
		});
}

function ajaxForNotLive(element,count){
	var count2 = count+"er";
	var count3 = count2 + "est";
	console.log(count2);
	$.ajax({
		type: "GET",
		url:"https://wind-bow.glitch.me/twitch-api/streams/"+element+"/?format=json",
		dataType: 'jsonp',
		headers: {
		"Client-ID": element,
        "Accept": "application/vnd.twitchtv.v5+json"
		},
		cache:'false',
		success: function(data){
			    if(!data.stream){
	               $('.row').append("<div id="+count+" class="+"\"col-xs-12 col-sm-6 col-md-2\""+"></div>");
				  $("#"+count).append("<div id="+count2+ " class="+"\"card\""+"></div>");
				  $("#"+count2).append("<div id="+count3+" class="+"\"container2\""+"></div>");
				   $("#"+count3).append("<p>"+element+"</p>");
				  
                }
		}
				
		});
}