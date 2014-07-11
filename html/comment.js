var url2="comment.json"
function changeComment(i)
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
			var com=$("p#comment");
			var id=$("p#id");
			var time=$("p#time")
			for(var s=0; s<10; s++)
			{
				if(i*10+s>obj.Comments.length)
				{
					com[s].innerText = ' ';
					id[s].innerText = ' ';
					time[s].innerText = ' ';
				}
				else
				{
					com[s].innerText = obj.Comments[10*i+s].comment;
					id[s].innerText = obj.Comments[10*i+s].id;
					time[s].innerText = obj.Comments[10*i+s].time;
				}
			}
		}
	}
	xmlhttp.open("GET", url2, true);
	xmlhttp.send();
}

//setInterval("changeImage()", 500);
$(document).ready(function(){
$("button#1")[0].onclick=function(){changeComment(0);};
$("button#2")[0].onclick=function(){changeComment(1);};
$("button#3")[0].onclick=function(){changeComment(2);};
});
window.onload=function(){changeComment(0);}