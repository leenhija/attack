let turn=true;
let avatar_1;
let avatar_2;
let player_1;
let player_2;
let main_number1=100;
let main_number2=100;
let players=[];
avatars=document.querySelectorAll(".avatars");
avatars.forEach(element => {
    element.addEventListener("click",chooseAvatar)
});
function chooseAvatar(event){
const avatar=event.target;
if(turn){
player_1=document.getElementById("player_1").value;
players.push(player_1);
console.log(player_1);
avatar.style.cssText="border: 2px solid rgb(255, 255, 123);";
document.getElementById("player_1_score").innerHTML="<p>Player 1 Score : "+main_number1+"</p>";
document.getElementById("player_2_score").innerHTML="<p>Player 2 Score : "+main_number2+"</p>";
document.getElementById("attacker_1").setAttribute("src",avatar.getAttribute("src"));
document.getElementById("player_1_name").innerHTML="<p style='margin:auto'>"+player_1+"</p>";
document.getElementById("turn").innerHTML="<p style='margin:auto'>"+player_1+" turn</p>";
turn=false;
avatar_1=avatar.id;
console.log(avatar_1);
return
}
if(!turn){
player_2=document.getElementById("player_2").value;
players.push(player_2);
avatar_2=avatar.id;
 avatar.style.cssText="border: 2px solid rgb(189, 29, 189)";
 document.getElementById("attacker_2").setAttribute("src",avatar.getAttribute("src"));
document.getElementById("player_2_name").innerHTML="<p style='margin:auto'>"+player_2+"</p>";
 let start=document.getElementById("start");
 start.style.cssText="visibility: inherit";
start.addEventListener("click",function(){
document.getElementById("container").style.cssText="display: none";
document.getElementById("container2").style.visibility="visible";
})
 return;
}
}
let random_number1=Math.floor(Math.random() * 101);
let random_number2=Math.floor(Math.random() * 101);
let attack_button=document.getElementById("attack");
let turn2=true;
attack_button.addEventListener("click",function(){
    if(turn2){
        document.getElementById("turn").innerHTML="<p style='margin:auto'>"+players[0]+" turn</p>";
    main_number1-=random_number1;
    document.getElementById("player_1_score").innerHTML="<p>Player 1 Score : "+main_number1+"</p>";
    turn2=false;
    if(main_number1<=0 && main_number2!=0){
        main_number1=0;
        document.getElementById("player_1_score").innerHTML="<p>Player 1 Score : "+main_number1+"</p>";
        document.getElementById("winner_name").style.backgroundColor="rgb(186, 140, 229)";
        document.getElementById("winner_name").innerHTML="<p>"+players[0]+" Won!"+"</p>"
        document.getElementById("restart").style.visibility="visible";
    }
}
else{
    document.getElementById("turn").innerHTML="<p style='margin:auto'>"+players[1]+" turn</p>";
    main_number2-=random_number2;
    document.getElementById("player_2_score").innerHTML="<p>Player 2 Score : "+main_number2+"</p>";
    turn2=true;
    if(main_number2<=0 && main_number1!=0){
        main_number2=0;
        document.getElementById("player_2_score").innerHTML="<p>Player 2 Score : "+main_number2+"</p>";
        document.getElementById("winner_name").style.backgroundColor="rgb(186, 140, 229)";
        document.getElementById("winner_name").innerHTML="<p>"+players[1]+" Won!"+"</p>"
        document.getElementById("restart").style.visibility="visible";
        }
}

})
document.getElementById("restart").addEventListener("click",function(){
location.reload();
})
