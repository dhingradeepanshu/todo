function del(x){
	var cname = "myclass-"+x;
	var pa = document.getElementsByClassName(cname)[0];
	var ppa = document.getElementsByClassName("list")[0];
	ppa.removeChild(pa);
}

function myfunc(){
var x=document.getElementsByClassName("work")[0].value;
if(x!=""){
var create = document.createElement("div");
var text = document.createTextNode(document.getElementsByClassName("work")[0].value);
create.appendChild(text);
create.classList.add("myclass-"+i);

var createclose = document.createElement("button");
var text = document.createTextNode("Done");
createclose.appendChild(text);
createclose.classList.add("myclass-"+i);

createclose.setAttribute("onclick","del("+i+")");
i++;
create.appendChild(createclose);
create.setAttribute("id","myid");
var parent = document.getElementsByClassName("list")[0];
parent.appendChild(create);

document.getElementsByClassName("work")[0].value="";
}
}
var i=1;

document.getElementById("work").addEventListener("keyup",function(event){
event.preventDefault();
if(event.keyCode===13){
myfunc();
}

});