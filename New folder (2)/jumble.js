let words=[
    {
        jumbled:"aplpe",
        correct:"apple"
    },
    {
        jumbled:"bliemo",
        correct:"mobile"
    },
    {
        jumbled:"erutcmop",
        correct:"computer"
    },
    {
        jumbled:"etltbo",
        correct:"bottle"
    },
    {
        jumbled:"arphenoe",
        correct:"earphone"
    }
]
let currentWord=0;


let score=0;
function displayWord(){
    document.querySelector("#j-word").innerHTML=words[currentWord].jumbled;
    document.querySelector("#score").innerText=score;
    
}
displayWord();


function checkAnswer(){
    
     
   let answer=document.querySelector("#inp").value;
   if(answer.toLowerCase()===words[currentWord].correct.toLowerCase()){
       score=score+10;
   }
 
   if(currentWord==words.length-1){
       
       alert("your score is "+score);
    location.reload();
    
   }
   else{
   currentWord++;
   displayWord();

   document.querySelector("#inp").value="";
   }
   
    
}