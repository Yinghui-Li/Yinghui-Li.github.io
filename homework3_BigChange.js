var kk=document.getElementsByTagName("link");
kk[8].href="http://Yinghui-Li.github.io/page.css";
var q=$("td.student");
var l;
var p=new Array();
var s=$("tr.lh30");
var j=0;
var d=document.getElementsByTagName("tr");
for(var i=0; i<d.length; i++)
	d[i].visibility="none";
for(var i=0; i<s.length-1; i++)
{
	if(s[i].firstChild.textContent!="")
	{
		p[j]=document.createElement('td');
		p[j].style.marginLeft="10px";
		p[j].display="none";
		p[j].textContent=""+(j++);
		$(p[j-1]).insertBefore(s[i].firstChild);
	}
}
	$("tr").click(function(){$("tr").hide("slow");});
  $("tr").click(function(){
    $("tr").slideDown("slow");
  });
document.innerHTML;