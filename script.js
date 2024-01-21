var dis=document.getElementById("dis");
var txt="";

function izpis(){
    dis.innerHTML=txt;
}

function add(a){

if(txt.length===25){
    rez();
}else{
    txt+=a;
izpis();
}


}

function cl(){
    txt="";
    izpis();
}

function del(){
    txt=txt.slice(0,-1);
    izpis();

}

function rez() {
    if (!(txt.length < 1)) {
        
        txt = txt.replace(/π/g, "*3.14");

        var r = eval(txt);
        txt = r;
        izpis();
    }
}
