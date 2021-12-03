var divFirstNumber ;
var divSecondNumber ;
function divide(){
   divFirstNumber = document.getElementById("div_1").value;
   divSecondNumber = document.getElementById("div_2").value;
   divFinalAns = divFirstNumber/divSecondNumber;
   console.log(subFinalAns);
   document.getElementById("sub_final_ans").innerHTML = divFinalAns;  
   document.getElementById("reset").style.display = "inline-block";
}
function reset(){
    document.getElementsByClassName("input_num").value = "";
    document.getElementsByClassName("answer").innerHTML = "Answer will appear here";
    document.getElementById("reset").style.display = "none";

}