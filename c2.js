function temperature(){
    var c=document.getElementById("celcius").value;
    var f=(c*9/5)+32
    document.getElementById("fahrenheit").value=f
}

function weight(){
    var kgs=document.getElementById("kilo").value;
    var p=kgs*2.2
    document.getElementById("pounds").value=p
}

function distance(){
    var kms=document.getElementById("km").value;
    var m=kms*0.62137
    document.getElementById("miles").value=m
}