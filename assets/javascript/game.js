
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
	$("#vader").removeClass("hidden");
	$("#kylo").removeClass("hidden");
	$("#leia").removeClass("hidden");
	$("#yoda").removeClass("hidden");
	$("#vader").addClass("visible");
	$("#kylo").addClass("visible");
	$("#leia").addClass("visible");
	$("#yoda").addClass("visible");
	$(".master").append($("#yoda"));
	$(".lukeSister").append($("#leia"));
	$(".lukeNephew").append($("#kylo"));
	$(".lukeFather").append($("#vader"));
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
var elementIds= ["#yoda","#leia", "#kylo", "#vader"];

//when clicked move playerChoice to 'Your Character and move others to Enemies Availavle to attack'

 $("#yoda").on("click", function(){
	if (playerCharacter ==  ""){
		playerCharacter=yoda;
		$("#playerChoice").append($("#yoda"));
		 $("#availableEnemies").append($("#leia"),$("#kylo"),$("#vader"));
		classes();
	} else if (playerCharacter !=  "" && enemyCharacter ==  "" && playerCharacter != yoda) {
  		$("#Enemy").append($("#yoda"));
  		enemyCharacter=yoda; 
  		enemyCharacter.counterAttack=yoda.counterAttack
  		}
  });
  $("#leia").on("click", function(){
	if (playerCharacter ==  ""){
		playerCharacter=leia;
		$("#playerChoice").append($("#leia"));
		$("#availableEnemies").append($("#yoda"), $("#kylo"),$("#vader"));
		classes();
	}else if (playerCharacter !=  "" && enemyCharacter ==  "" && playerCharacter !=leia){
  		$("#Enemy").append($("#leia"));
  		enemyCharacter=leia;
  		enemyCharacter.counterAttack=leia.counterAttack
  	}
  });
  $("#kylo").on("click", function(){	  
	if (playerCharacter ==  ""){
		playerCharacter=kylo;
		$("#playerChoice").append($("#kylo"));
		$("#availableEnemies").append($("#yoda"), $("#leia"), $("#vader"));
		classes();;
	} else if (playerCharacter !=  "" && enemyCharacter ==  "" && playerCharacter != kylo){
  		$("#Enemy").append($("#kylo"));
  		enemyCharacter=kylo;
  		enemyCharacter.counterAttack=kylo.counterAttack;
  	}  
  });
  $("#vader").on("click",function(){
	if (playerCharacter ==  ""){
		playerCharacter=vader;
		$("#playerChoice").append($("#vader"));
		$("#availableEnemies").append($("#yoda"), $("#leia"),$("#kylo"));
		classes();		
	} else if (playerCharacter !=  "" && enemyCharacter ==  "" && playerCharacter!= vader){
  		$("#Enemy").append($("#vader"));
  		enemyCharacter=vader;
  		enemyCharacter.counterAttack=vader.counterAttack;
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
			$("#leia").addClass("hidden");
			$(".lukeSister").append($("#leia"));
			enemyCharacter="";
			$("#attack").empty();
		} else if (enemyCharacter === kylo) {
			$("#kylo").addClass("hidden");
			$(".lukeNephew").append($("#kylo"));
			enemyCharacter="";
			$("#attack").empty();
		} else if (enemyCharacter=== vader){
			$("#vader").addClass("hidden");
			$(".lukeFather").append($("#vader"));
			enemyCharacter="";
			$("#attack").empty();
		}
	}	
	if ($("#availableEnemies").html() == " " && $("#Enemy").html()==" " && playerCharacter.HP >0){
		alert('You won!');
		reset();
		}

})

