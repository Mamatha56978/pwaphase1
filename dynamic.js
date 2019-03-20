function getfile(file,callback) {
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("Application/json");
  xhr.open('GET',file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
getfile("dynamic.json",function(text) {
  var data=JSON.parse(text);
  console.log(data);
profile(data.basics);
career1(data.career);
educ(data.Educational_Details);
skil(data.skills);
})
var parent=document.querySelector('.parent');
var child1=document.querySelector('.child1');
var child2=document.querySelector('.child2');
function profile(pro){
  var image=document.createElement('img');
  image.src=pro.img;
  child1.appendChild(image);
  parent.appendChild(child1);
  var name1=document.createElement('h1');
  name1.textContent=pro.name;
  child1.appendChild(name1);
  parent.appendChild(child1);
  var hr=document.createElement('hr');
  child1.appendChild(hr);
  var mi=document.createElement('h2');
  mi.textContent=pro.email;
  child1.appendChild(mi);
  parent.appendChild(child1);
}
function career1(cc){
  var h1=document.createElement('h1');
  h1.textContent="RESUME";
  child2.appendChild(h1);
  var xyz2=document.createElement('h3');
  xyz2.textContent="Career Details";
  var hr1=document.createElement('hr');
  child2.appendChild(hr1);
  var xyz1=document.createElement('p');
  xyz1.textContent=cc.info;
  child2.appendChild(xyz2);
  child2.appendChild(xyz1);

  parent.appendChild(child2);
}
function educ(edu){
  var h2=document.createElement('h2');
  h2.textContent="Educational_Details";
  child2.appendChild(h2);
  var hr1=document.createElement('hr');
  var table=document.createElement('table');
  child2.appendChild(hr1);
  table.border="3";
  let row='';
  row+="<tr>"+"<th>"+"sno"+"</th>"+"<th>"+"degree"+"</th>"+
  "<th>"+"institute"+"</th>"+"<th>"+"yop"+"</th>"+"<th>"+"Percentage"+"</th>"+"</tr>";
  for(i in edu){

  row +="<tr>"+"<td>"+edu[i].sno+"</td>"+"<td>"+edu[i].degree+"</td>"+"<td>"+edu[i].institute+"</td>"
  +"<td>"+edu[i].yop+"</td>"+"<td>"+edu[i].per+"</td>"+"</tr>";
}
table.innerHTML=row;
child2.appendChild(table);
parent.appendChild(child2);
}
function skil(op){
  var ab=document.createElement('h2');
  ab.textContent="Skills set";
  child2.appendChild(ab);
  parent.appendChild(child2);
  var ul=document.createElement(ul);
  child2.appendChild(ul);
  for(i in op){
  var li=document.createElement("li");
  li.textContent=op[i].info;
  ul.append(li);
  }
}
