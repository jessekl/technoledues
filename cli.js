//using npm mongodb
var mongodb = require('mongodb');
//cli from mongodb
var cli = mongodb.MongoClient;
//url for mongodb
var url = 'mongodb://localhost:27017/technole'

//event handler for connections to mongodb
cli.connect(url,
	//return function from cli.connect
	function(err,db){
		//checking if there is an error
		if(err){
			console.log('Unable to connect to the mongoDB server. Error:', err);
		}
		//if no errors then it goes here 
		else {
			console.log('Connected');
		}

		//tables 
		var members = db.collection('members');
		var payments = db.collection('payments');
		var semester = db.collection('semester')

		//create a new member 
		var member = {firstname:'Monica',middlename:'G',lastname:'lair',dob:'01/01/1993',email:'monica@gmail.com',datejoined:'08/20/2015',currentlevel:4,receiptnum:['12345'],yos:'freshman',pictures:[],phone:'8506969696',major:'computer science',hometown:'tallahassee',pol:4,emergencycontact:'8509696969'}
		
		//insert memebr to members
		members.insert(member,function(err,res){
			if(err){
				console.log('Unable to insert:', err);
			}
			else{
				console.log('inserted: ', res);
			}
		});

		//close connection
		db.close();
	} 
);