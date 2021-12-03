var subFirstNumber ;
var subSecondNumber ;
function subtract(){
   subFirstNumber = document.getElementById("sub_1").value;
   subSecondNumber = document.getElementById("sub_2").value;
   subFinalAns = subFirstNumber - subSecondNumber;
   console.log(subFinalAns);
   document.getElementById("sub_final_ans").innerHTML = subFinalAns;  
   document.getElementById("reset").style.display = "inline-block";
}
function reset(){
    document.getElementById("sub_1").value = "";
    document.getElementById("sub_2").value = "";
    document.getElementById("sub_final_ans").innerHTML = "Answer will appear here";
    document.getElementById("reset").style.display = "none";

}