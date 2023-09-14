var a=prompt("enter the year");

var b=new Date();
console.log(b);

b.setMonth(a);
console.log(b);

var c=b.getMonth();
//console.log(c);
document.write(c+"<br>");

if(c>=0&&c<3){
    document.write("Winter");
}

else if(c>=4&&c<=7){
    document.write("Summer");
}

else if(c>=8&&c<=11){
    document.write("Fall");
}




