
var num = 0;

var cookie = document.getElementById("cookie");

function cookieClick() { 
    num += 1;

    var numbers = document.getElementById("numbers");
    
    //upgrade level for printing
    var upgradeLevel = document.getElementById("upgradeLevel");
    
    numbers.innerHTML = num;      
    //Tesla eier
    if(num >= 30 ){
        num += 1;
        upgradeLevel.innerHTML = "Mann 50 år med ny Tesla";
    }

    //NTNU-student
    if(num >= 50 ){
        num += 1;
        upgradeLevel.innerHTML = "NTNU-student på bysykkel";
    }

    //Byråd
    if(num >= 100) {
        num += 1;
        upgradeLevel.innerHTML = "Lan-Marie Berg Eriksen";
    }

    //Greta
    if(num >= 200) {
        num += 1;
        upgradeLevel.innerHTML = "Greta Thunberg";
    }
}
