Meteor.startup(() => {
    Meteor.methods({
    	'sendMsg' : function(message,time,usr){
    		Messages.insert({
			    	msg: message,
			    	tme:time,
			    	sentBy:usr
			});	
    	},
    })

});
