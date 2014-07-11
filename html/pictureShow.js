var j = 2;
var k = 0;
var url="picture.json"
localStorage.lastImageURL="image/picture0.jpg";
function g(t)
{
	var s=document.getElementsByTagName("img");
	s[0].src = t.picture[j].url;
}
function changeImage()
{
	var xmlhttp;
	if(window.XMLHttpRequest)
	{
		xmlhttp = new XMLHttpRequest();
	}
	else
	{
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function()
	{
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
		{
			var obj = eval("("+ xmlhttp.responseText + ")");
			if(k==0)
			{
				var b = $("#image1");
				var c = $("#image2");
				b[0].style.display="none";
				c.fadeIn();
				k=1;
			}
			else
			{
				var b = $("#image1");
				var c = $("#image2");
				c[0].style.display="none";
				b.fadeIn();
				k=0;
			}
			if(k==0)
			{
				var c = $("#image2");
				c[0].src = obj.picture[j].url;
				localStorage.lastImageURL = obj.picture[(j+3)%4].url;
				j++;
				j = j%4;
			}
			else
			{
				var b = $("#image1");
				b[0].src = obj.picture[j].url;
				localStorage.lastImageURL = obj.picture[(j+3)%4].url;
				j++;
				j = j%4;
			}
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

//setInterval("changeImage()", 500);
$(document).ready(function(){
$("img")[0].onclick = function() {changeImage();};
$("img")[1].onclick = function() {changeImage();};
});

window.onload=function(){setInterval("changeImage()", 2500);changeComment(0);}