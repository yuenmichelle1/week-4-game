
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

// making an array of characters 
//var possibleCharacters = ["master yoda", "general leia", "ben solo", "luke father"];
var playerCharacter = "";
var enemyCharacter = ""; 

$("#yodaHP").html(yoda.HP); 
$("#leiaHP").html(leia.HP);
$("#kyloHP").html(kylo.HP);
$("#vaderHP").html(vader.HP);
//when clicked move playerChoice to 'Your Character and move others to Enemies Availavle to attack'
var flag=0;
var check =0; 
$("#yoda").on("click", function(){
	if (flag !=1 && flag !=0) {
		$("#Enemy").append($("#yoda"));
		enemyCharacter=yoda; 
	}
	 else if (flag ===0){
	 	flag=1;
	 	playerCharacter=yoda;
		$("#playerChoice").append($("#yoda"));
		$("#availableEnemies").append($("#princess"),$("#ben"),$("#anikin"));
		$("#availableEnemies .img-box").addClass("redEnemy");
		$("#playerChoice .img-box").addClass("whiteBox");
	}
});
$("#princess").on("click", function(){
	if (flag !=2 && flag !=0){
		$("#Enemy").append($("#princess"));
		enemyCharacter=leia;
	}
	else if (flag ===0){
		flag=2;
		playerCharacter=leia;
		$("#playerChoice").append($("#princess"));
		$("#availableEnemies").append($("#yoda"), $("#ben"),$("#anikin"));
		$("#availableEnemies .img-box").addClass("redEnemy");
		$("#playerChoice .img-box").addClass("whiteBox");
	}	
});
$("#ben").on("click", function(){
	if (flag !=3 && flag !=0){
		$("#Enemy").append($("#ben"));
		enemyCharacter=kylo;
	}else if (flag===0){
	flag=3;
	playerCharacter=kylo;
	$("#playerChoice").append($("#ben"));
	$("#availableEnemies").append($("#yoda"), $("#princess"), $("#anikin"));
	$("#availableEnemies .img-box").addClass("redEnemy");
	$("#playerChoice .img-box").addClass("whiteBox");
	}
});
$("#anikin").on("click",function(){
	if (flag !=4 && flag !=0){
		$("#Enemy").append($("#anikin"));
		enemyCharacter=vader;
	}else if (flag===0){
	flag=4;
	playerCharacter=vader;
	$("#playerChoice").append($("#anikin"));
	$("#availableEnemies").append($("#yoda"), $("#princess"),$("#ben"));
	$("#availableEnemies .img-box").addClass("redEnemy");
	$("#playerChoice .img-box").addClass("whiteBox");		
	}
});

$(".button").on("click", function(){
	// playerCharacterHp attack enemy character hp
	playerCharacter.HP= playerCharacter.HP - enemyCharacter.counterAttack;
	//display new HP for character and Enemy
	enemyCharacter.HP = enemyCharacter.HP -playerCharacter.Attack;
	//increase playerCharacterAttack by its base


})