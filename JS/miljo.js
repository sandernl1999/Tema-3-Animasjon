
var num = 0;

var miljo = document.getElementById("miljo");

function miljoClick() { 
    num += 1;

    var numbers = document.getElementById("numbers");
    
    //upgradeLevel nytt nivå
    var upgradeLevel = document.getElementById("upgradeLevel");
    
    numbers.innerHTML = num;      
    //Tesla eier-nivå
    if(num >= 30 ){
        num += 1;
        upgradeLevel.innerHTML = "Mann 50 år med ny Tesla";
    }

    //NTNU-student-nivå
    if(num >= 50 ){
        num += 1;
        upgradeLevel.innerHTML = "NTNU-student på bysykkel";
    }

    //Byråd-nivå
    if(num >= 100) {
        num += 1;
        upgradeLevel.innerHTML = "Lan-Marie Berg Eriksen";
    }

    //Greta-nivå
    if(num >= 200) {
        num += 1;
        upgradeLevel.innerHTML = "Greta Thunberg";
    }
}
