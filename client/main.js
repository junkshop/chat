
Template.chatbox.helpers({
	'message': function(){
		return Messages.find();	    	
	}
});
Template.chatbox.events({
    'keypress .form_group': function(evt){
    	if(evt.which == 13 && !evt.shiftKey){
    		evt.preventDefault();
    		if(evt.target.value!=""){
    			
    			Meteor.call('sendMsg',evt.target.value,(new Date).toTimeString().substring(0,5),Meteor.user().emails[0].address);
    		}
    		evt.target.value="";
    		console.log('hello');	
    	}
    	else{
    		console.log('hi');
    	}
    	
    }

});
console.log();
   
