
var yoda = {
	"HP" : 200,
	"Attack":15,
	"counterAttack": 15,
	"name" : "Yoda"
};
var leia = {
	"HP" :140,
	"Attack" : 4,
	"counterAttack": 9,
	"name": "Leia"
};
var kylo = {
	"HP" : 160,
	"Attack":3,
	"counterAttack":6,
	"name": "Kylo Ren"
};
var vader = {
	"HP" : 180,
	"Attack":5,
	"counterAttack":5,
	"name": "Darth Vader"
};

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
	$(".master").append($("#yoda"));
	$(".lukeSister").append($("#princess"));
	$(".lukeNephew").append($("#ben"));
	$(".lukeFather").append($("#anikin"));
	$(".img-box").addClass("whiteBox");	
	$("#yodaHP").html(yoda.HP); 
	$("#leiaHP").html(leia.HP);
	$("#kyloHP").html(kylo.HP);
	$("#vaderHP").html(vader.HP);
	$("#attack").empty();	
}

function classes() {
	$("#availableEnemies .img-box").addClass("redEnemy");
	$("#availableEnemies .img-box").removeClass("whiteBox");
	$("#playerChoice .img-box").addClass("whiteBox");
}
var elementIds= ["#yoda","#princess", "#ben", "#anikin"];

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
		classes();
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
		classes();
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
		classes();;
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
		classes();		
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
	if (enemyCharacter != ""){
		$("#attack").text(`You attack ${enemyCharacter.name} for ${newAttack} damage. ${enemyCharacter.name} attacks you back for ${enemyCharacter.counterAttack} damage.`)
	} 
	//increase playerCharacterAttack by its base
	if (playerCharacter.HP <= 0){
	alert('You lost! Try again!');	
	reset();
	};
	
	if (enemyCharacter.HP <=0){
		if (enemyCharacter=== yoda){
			$("#yoda").addClass("hidden");
			$(".master").append($("#yoda"));
			enemyCharacter= "";
			$("#attack").empty();
		} else if (enemyCharacter=== leia){
			$("#princess").addClass("hidden");
			$(".lukeSister").append($("#princess"));
			enemyCharacter="";
			$("#attack").empty();
		} else if (enemyCharacter === kylo) {
			$("#ben").addClass("hidden");
			$(".lukeNephew").append($("#ben"));
			enemyCharacter="";
			$("#attack").empty();
		} else if (enemyCharacter=== vader){
			$("#anikin").addClass("hidden");
			$(".lukeFather").append($("#anikin"));
			enemyCharacter="";
			$("#attack").empty();
		}
	}	
	if ($("#availableEnemies").html() == " " && $("#Enemy").html()==" " && playerCharacter.HP >0){
		alert('You won!');
		reset();
		}

})

