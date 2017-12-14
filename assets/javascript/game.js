var yoda = {
	"HP" : 200,
	"Attack":15,
	"counterAttack": 15,
	"name" : "yoda",
	"classBox": "master"
};
var leia = {
	"HP" :140,
	"Attack" : 4,
	"counterAttack": 9,
	"name": "leia",
	"classBox":"lukeSister"
};
var kylo = {
	"HP" : 160,
	"Attack":3,
	"counterAttack":6,
	"name": "kylo",
	"classBox":"lukeNephew"
};
var vader = {
	"HP" : 180,
	"Attack":5,
	"counterAttack":5,
	"name": "vader",
	"classBox": "lukeFather"
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
	$(".character").removeClass("hidden");
	$(".character").addClass("visible");
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
	availablecharacterIds= ['yoda', 'kylo', 'vader', 'leia'];
}

//classes upon User Selection
function classes() {
	$("#availableEnemies .img-box").addClass("redEnemy");
	$("#availableEnemies .img-box").removeClass("whiteBox");
	$("#playerChoice .img-box").addClass("whiteBox");
}
var availablecharacterIds= ['yoda', 'kylo', 'vader', 'leia'];

function moveToEnemyArea(id){
	var characterIndex= availablecharacterIds.indexOf(id);
	var remainingCharactersArr= availablecharacterIds.splice(characterIndex,1);
	for (var i=0; i<availablecharacterIds.length;i++){
		$("#availableEnemies").append($(`#${availablecharacterIds[i]}`));
	}

}

function getPlayerObjectFromId(id) {
	if (id=== 'yoda'){
        return yoda;
    } else if (id === 'leia'){
        return leia;
    } else if (id === 'kylo'){
        return kylo;
    } else if (id=== 'vader'){
        return vader;
	}
}

function enemyCharacterDefeated(obj){
	$(`#${obj.name}`).addClass("hidden");
	$(`.${obj.classBox}`).append($(`#${obj.name}`));
}

//when clicked move playerChoice to 'Your Character and move others to Enemies Availavle to attack'

$(".character").on("click", function(){
    var getId = this.id;
    console.log(getId);

	var clickedPlayer = getPlayerObjectFromId(getId);
	
    if (playerCharacter ==  ""){
        $("#playerChoice").append($(`#${getId}`));
		playerCharacter = clickedPlayer;
		moveToEnemyArea(getId);
		classes();
    } else if (enemyCharacter =="" && clickedPlayer != playerCharacter) {
		enemyCharacter = clickedPlayer;
		$("#Enemy").append($(`#${getId}`));
    }
})

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
		enemyCharacterDefeated(enemyCharacter);
		$("#attack").empty();
		enemyCharacter ="";
	}	
	
	if ($("#availableEnemies").html() == " " && $("#Enemy").html()==" " && playerCharacter.HP >0){
		alert('You won!');
		reset();
		}

})
