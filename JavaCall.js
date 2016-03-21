/**
 * Created by pallali on 19/3/16.
 */

var java = require('java');
java.classpath.push("AltizonHash.jar");

var altizonHashGenerator = java.newInstanceSync("com.AltizonHashGenerator");
var json = JSON.stringify({'timestamp':1458362535089,'description':'','name':'Gateway2','bi_directional':true,'thing_key':'4eaeftbce7'});
console.log(altizonHashGenerator.getHash1Sync("2d6td1f889tt9c6f312f23cte3f25d2e62eta51a", json ))
console.log("TEST")








//27ba6832de63158b9a6eccba9faaf5b56fd246f6445f75411895229c120aad34
//27ba6832de63158b9a6eccba9faaf5b56fd246f6445f75411895229c120aad34
//27ba6832de63158b9a6eccba9faaf5b56fd246f6445f75411895229c120aad34