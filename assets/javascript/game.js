
var yoda = {
	"HP" : 200,
	"Attack":6,
	"counterAttack": 6,
}
var leia = {
	"HP" :140,
	"Attack" : 9,
	"counterAttack": 9
}
var kylo = {
	"HP" : 160,
	"Attack":7,
	"counterAttack":7
}
var vader = {
	"HP" : 180,
	"Attack":8,
	"counterAttack":8
}

$("#yodaHP").html(yoda.HP); 
$("#leiaHP").html(leia.HP);
$("#kyloHP").html(kylo.HP);
$("#vaderHP").html(vader.HP);
//when clicked move playerChoice to 'Your Character and move others to Enemies Availavle to attack'
var flag=0;
$("#yoda").on("click", function(){
	flag=1;
	if (flag === 1){
		$("#playerChoice").append($("#yoda"));
		$("#availableEnemies").append($("#princess"));
		$("#availableEnemies").append($("#ben"));
		$("#availableEnemies").append($("#anikin"));
	}
});
$("#princess").on("click", function(){
	flag=2;
	if (flag===2){
		$("#playerChoice").append($("#princess"));
		$("#availableEnemies").append($("#yoda"));
		$("#availableEnemies").append($("#ben"));
		$("#availableEnemies").append($("#anikin"));
	}
});
$("#ben").on("click", function(){
	flag=3;
	if (flag===3){
		$("#playerChoice").append($("#ben"));
		$("#availableEnemies").append($("#yoda"));
		$("#availableEnemies").append($("#princess"));
		$("#availableEnemies").append($("#anikin"));
	}
});
$("#anikin").on("click",function(){
	flag=4;
	if (flag ===4){
		$("#playerChoice").append($("#anikin"));
		$("#availableEnemies").append($("#yoda"));
		$("#availableEnemies").append($("#princess"));
		$("#availableEnemies").append($("#ben"));		
	}
});
//if (flag===1)
