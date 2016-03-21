var mqtt = require('mqtt');
var client = mqtt.connect('tcp://mqtt.altizon.com:1883');

/*client.on('connect', function () {
    console.log("CONNECTED....")
    client.subscribe('#');
    //client.publish('presence', 'Hello mqtt');
});

client.on('message', function (topic, message) {
    // message is Buffer
    console.log(topic, "\t", message.toString());
    //client.end();
});*/


var java = require('java');
java.classpath.push("AltizonHash.jar");

var altizonHashGenerator = java.newInstanceSync("com.AltizonHashGenerator");
//var json = JSON.stringify({'timestamp':1458362535089,'description':'','name':'Gateway2','bi_directional':true,'thing_key':'4eaeftbce7'});
//console.log(altizonHashGenerator.getHash1Sync("2d6td1f889tt9c6f312f23cte3f25d2e62eta51a", json ))
//console.log("TEST")

//var register = function (data) {
//    data.hash = altizonHashGenerator.getHash1Sync("2d6td1f889tt9c6f312f23cte3f25d2e62eta51a", JSON.stringify(data));
//    data.access_key = "8299ta259c85754f9e21543a3f877936ee2f4164"
//    console.log("DATA : ", data)
//
//    client.publish('Altizon/Datonis/a480876b-5555-5d22-9a2/register', JSON.stringify(data));
//
//}
//
//setTimeout(function () {
//    var data = {
//        'timestamp': new Date().getTime(),
//        'description': '',
//        'name': 'Gateway3',
//        'bi_directional': true,
//        'thing_key': '86a243a9a7'
//    }
//    register(data)
//}, 3000)


//var hb = function(data){
//    data.hash = altizonHashGenerator.getHash1Sync("2d6td1f889tt9c6f312f23cte3f25d2e62eta51a", JSON.stringify(data));
//    data.access_key = "8299ta259c85754f9e21543a3f877936ee2f4164"
//    console.log("DATA : ", data)
//
//    //client.publish('Altizon/Datonis/a480876b-5555-5d22-9a2/register', JSON.stringify(data));
//}
//
//
////{"timestamp":1458368047418,"hash":"6b2166d1ae37bfd9a5c7d229849c211f16bf62d7063e0590ae82ea50171659bf","access_key":"8299ta259c85754f9e21543a3f877936ee2f4164","thing_key":"46bdb8658e"}
//
//var data = {"timestamp":1458368047418,"thing_key":"46bdb8658e"}
//setTimeout(function(){hb(data)},1000)

// {"timestamp":1458376549524,"hash":"9e1639c3f3b2f68f8b7921f231ea445ce9d30053addaa15b27d5a639ae9bcd68","data":{"humidity":0.1976704478132164,"temperature":0.3303951},"access_key":"8299ta259c85754f9e21543a3f877936ee2f4164","thing_key":"46bdb8658e"}


//var data =  {"timestamp":1458376549524,"data":{"humidity":0.1976704478132164,"temperature":0.3303951},"thing_key":"46bdb8658e"}
//
////console.log(JSON.stringify(data))
//
//var event = function(data){
//    data.hash = altizonHashGenerator.getHash1Sync("2d6td1f889tt9c6f312f23cte3f25d2e62eta51a", JSON.stringify(data));
//    data.access_key = "8299ta259c85754f9e21543a3f877936ee2f4164"
//    console.log("DATA : ", data)
//
//    //client.publish('Altizon/Datonis/a480876b-5555-5d22-9a2/register', JSON.stringify(data));
//}
//
//setTimeout(function(){event(data)},1000)

//{"hash":"223b0de19d5c773bfa8019e8917d3aaeb74cf322021dfc02029a3a9d7914043a","alert":{"message":"This is an example INFO alert!","timestamp":1458376979763,"data":{"demoKey":"demoValue"},"alert_type":0,"thing_key":"46bdb8658e"},"access_key":"8299ta259c85754f9e21543a3f877936ee2f4164"}

var data =  {"alert":{"message":"This is an example INFO alert!","timestamp":1458376979763,"data":{"demoKey":"demoValue"},"alert_type":0,"thing_key":"46bdb8658e"}}

//console.log(JSON.stringify(data))

var event = function(data){
    data.hash = altizonHashGenerator.getHash1Sync("2d6td1f889tt9c6f312f23cte3f25d2e62eta51a", JSON.stringify(data));
    data.access_key = "8299ta259c85754f9e21543a3f877936ee2f4164"
    console.log("DATA : ", data)

    //client.publish('Altizon/Datonis/a480876b-5555-5d22-9a2/register', JSON.stringify(data));
}

setTimeout(function(){event(data)},1000)

