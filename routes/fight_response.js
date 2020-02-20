var data = require("../data.json");
var index = require("./index.js");
exports.dealDamage = function(request, response){
    console.log("Try to deal damage");
    var workout = request.params.damage;
    var damage = 0;
    var name = index.name;
    console.log(name);

    for(var i = 0; i < data.members.length; i++){
        if(data.members[i].info.name === name){
            break;
        }
    }
    if( workout === 'PushUps'){
        damage = 10;
        data.members[i].workout.PushUps += damage;
        data.members[i].info.calories_burnt += 7;
    }
    else if( workout === 'JumpingJacks' ){
        damage = 30;
        data.members[i].workout.JumpingJacks += damage;
        data.members[i].info.calories_burnt += 7;
    }

    else if( workout === 'Squats' ){
        damage = 30;
        data.members[i].workout.Squats += damage;
        data.members[i].info.calories_burnt += 7;
    }

    else if( workout === 'SitUps' ){
        damage = 25;
        data.members[i].workout.SitUps += damage;
        data.members[i].info.calories_burnt += 7;
    }
    console.log(data.members[i].workout);
    console.log(data.members[i].info.calories_burnt);

    data.enemies[0].creature_1.current_hp -= damage; 
    var percent = (data.enemies[0].creature_1.current_hp/data.enemies[0].creature_1.maximum_hp)*100;
    var item = {
        'percent':percent.toString(10),
        'redirect':true
    }
    console.log(item);
    response.json(item);
}