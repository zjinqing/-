var codeNum=0;
var char=document.getElementById("char");
showChar();
// var stringChar = "ABCDEFGHIGKLMNOPQRSTUVWXYZ"
// function showChar(){
//     // var ran =Math.ceil(Math.random()*25);
//     // codeNum=ran+65;
//     // // console.log(codeNum)
//     // char.innerHTML="stringChar".charAt(ran)

// }

    function showChar(){
        var ran =Math.ceil(Math.random()*25+65)
        codeNum=ran;
        char.innerHTML=String.fromCharCode(ran)
    }
    window.onkeypress=function(event){
        var inputCode=evsent.charCode;
        console.log("input",event)
         if(inputCode==codeNum || inputCode==codeNum+32){
             showChar()
             char.className="animated zoomIn";
             clearAnimate();
         }
         else{
             char.className="animated shake";
             char.style.color="yellow";
             clearAnimate()
         }
    }
function clearAnimate(){
    setTimeout(function(){
        char.className=""
        char.style.color=""
    },500)
}