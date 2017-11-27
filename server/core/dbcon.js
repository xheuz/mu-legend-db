var db = require("seraph")("http://localhost:7474");
var Class = require('seraph-model')(db,'Class');
var Skills = require('seraph-model')(db, 'Skills');

Class.compose(Skills, 'skillSet', 'HAS');

Class.read(183, function(err, desiredClass){
    console.log(desiredClass.skillSet);
    // desiredClass.readComposition(Skills, 'skillSet', function (err, skills) {
    //     console.log(skills);
    // });
});
