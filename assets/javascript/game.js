
var yoda = {
	"HP" : 200,
	"Attack":6,
	"counterAttack": 6,
}
var leia = {
	"HP" :140,
	"Attack" : 4,
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
var buttonCount = 0;
$("#yodaHP").html(yoda.HP); 
$("#leiaHP").html(leia.HP);
$("#kyloHP").html(kylo.HP);
$("#vaderHP").html(vader.HP);

function reset(){
	yoda.HP = 200;
	leia.HP =140;
	kylo.HP = 160;
	vader.HP =180;
	playerCharacter = "";
	enemyCharacter = ""; 
	buttonCount = 0;
	flag=0;
	$("#anikin").removeClass("hidden");
	$("#ben").removeClass("hidden");
	$("#princess").removeClass("hidden");
	$("#yoda").removeClass("hidden");
	$("#anikin").addClass("visible");
	$("#ben").addClass("visible");
	$("#princess").addClass("visible");
	$("#yoda").addClass("visible");
	//$("#forceOrdarkside").append($("#yoda"), $("#princess"), $("#ben"), $("#anikin"));
	// $("#princess"), $("#ben"), $("#anikin"));
	$(".master").append($("#yoda"));
	$(".lukeSister").append($("#princess"));
	$(".lukeNephew").append($("#ben"));
	$(".lukeFather").append($("#anikin"));
	$(".img-box").addClass("whiteBox");	
	$("#yodaHP").html(yoda.HP); 
	$("#leiaHP").html(leia.HP);
	$("#kyloHP").html(kylo.HP);
	$("#vaderHP").html(vader.HP);
	
}

//when clicked move playerChoice to 'Your Character and move others to Enemies Availavle to attack'
var flag=0;
var check =0; 

$("#yoda").on("click", function(){
	if (flag !=1 && flag !=0 && $("#Enemy").html() == " ") {
		$("#Enemy").append($("#yoda"));
		enemyCharacter=yoda; 
		enemyCharacter.counterAttack=yoda.counterAttack
	}
	 else if (flag ===0){
	 	flag=1;
	 	playerCharacter=yoda;
		$("#playerChoice").append($("#yoda"));
		$("#availableEnemies").append($("#princess"),$("#ben"),$("#anikin"));
		$("#availableEnemies .img-box").addClass("redEnemy");
		$("#availableEnemies .img-box").removeClass("whiteBox");
		$("#playerChoice .img-box").addClass("whiteBox");
	}
});
$("#princess").on("click", function(){
	if (flag !=2 && flag !=0 && $("#Enemy").html() == " "){
		$("#Enemy").append($("#princess"));
		enemyCharacter=leia;
		enemyCharacter.counterAttack=leia.counterAttack
	}
	else if (flag ===0){
		flag=2;
		playerCharacter=leia;
		$("#playerChoice").append($("#princess"));
		$("#availableEnemies").append($("#yoda"), $("#ben"),$("#anikin"));
		$("#availableEnemies .img-box").addClass("redEnemy");
		$("#availableEnemies .img-box").removeClass("whiteBox");
		$("#playerChoice .img-box").addClass("whiteBox");
	}	
});
$("#ben").on("click", function(){
	if (flag !=3 && flag !=0 && $("#Enemy").html() == " "){
		$("#Enemy").append($("#ben"));
		enemyCharacter=kylo;
		enemyCharacter.counterAttack=kylo.counterAttack;
	}else if (flag===0){
		flag=3;
		playerCharacter=kylo;
		$("#playerChoice").append($("#ben"));
		$("#availableEnemies").append($("#yoda"), $("#princess"), $("#anikin"));
		$("#availableEnemies .img-box").addClass("redEnemy");
		$("#availableEnemies .img-box").removeClass("whiteBox");
		$("#playerChoice .img-box").addClass("whiteBox");
	}
});
$("#anikin").on("click",function(){
	if (flag !=4 && flag !=0 && $("#Enemy").html() == " "){
		$("#Enemy").append($("#anikin"));
		enemyCharacter=vader;
		enemyCharacter.counterAttack=vader.counterAttack;
	}else if (flag===0){
		flag=4;
		playerCharacter=vader;
		$("#playerChoice").append($("#anikin"));
		$("#availableEnemies").append($("#yoda"), $("#princess"),$("#ben"));
		$("#availableEnemies .img-box").addClass("redEnemy");
		$("#availableEnemies .img-box").removeClass("whiteBox");
		$("#playerChoice .img-box").addClass("whiteBox");		
	}
});

$("button").on("click", function(){
	if (enemyCharacter == "") {
	  return enemyCharacter.counterAttack=0;
	}
	// playerCharacterHp attack enemy character hp
	playerCharacter.HP-= enemyCharacter.counterAttack;
	//display new HP for character and Enemy
	if (playerCharacter=== yoda){
		$("#yodaHP").html(playerCharacter.HP);
	} else if (playerCharacter=== leia){
		$("#leiaHP").html(playerCharacter.HP);
	} else if (playerCharacter === kylo) {
		$("#kyloHP").html(playerCharacter.HP);
	} else if (playerCharacter=== vader){
		$("#vaderHP").html(playerCharacter.HP);
	}
	buttonCount++;
	var newAttack = playerCharacter.Attack * buttonCount;

	enemyCharacter.HP = enemyCharacter.HP - newAttack;
	if (enemyCharacter=== yoda){
		$("#yodaHP").html(enemyCharacter.HP);
	} else if (enemyCharacter=== leia){
		$("#leiaHP").html(enemyCharacter.HP);
	} else if (enemyCharacter === kylo) {
		$("#kyloHP").html(enemyCharacter.HP);
	} else if (enemyCharacter=== vader){
		$("#vaderHP").html(enemyCharacter.HP);
	}
	//increase playerCharacterAttack by its base
	if (playerCharacter.HP <= 0){
	alert('You lose');
	reset();
	};
	
	if (enemyCharacter.HP <=0){
		if (enemyCharacter=== yoda){
			$("#yoda").addClass("hidden");
			$(".master").append($("#yoda"));
			enemyCharacter= "";
		} else if (enemyCharacter=== leia){
			$("#princess").addClass("hidden");
			$(".lukeSister").append($("#princess"));
			enemyCharacter="";
		} else if (enemyCharacter === kylo) {
			$("#ben").addClass("hidden");
			$(".lukeNephew").append($("#ben"));
			enemyCharacter="";
		} else if (enemyCharacter=== vader){
			$("#anikin").addClass("hidden");
			$(".lukeFather").append($("#anikin"));
			enemyCharacter="";
		}
	if ($("#availableEnemies").html() == " " && $("#Enemy").html()==" "){
		alert('You won!');
		reset();
		}

	}
		
	
	
	

})

