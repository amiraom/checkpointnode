var generator = require('generate-password');

var password = generator.generate({
	length: 15,
	numbers: false,
    lowercase:true
});


console.log(password);