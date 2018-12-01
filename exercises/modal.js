//dialog box: show information to get informaion
//a dialog box that takes control of the screen

class Modal{
	//constructor takes in 3 arguments: the modal shadow dom element, the modal body dom element, and the modal message dom element
	//Modal will have a property called onClose that will eventually be set to a callback set by the outside
	constructor(shadow, body, message){
		this.shadow = $(shadow);
		this.body = $(body);
		this.message = $(message);

		this.show = this.show.bind(this);
		this.hide = this.hide.bind(this);
		this.updateContents = this.updateContents.bind(this);
		this.onClose = this.onClose.bind(this);
	}
	//takes in no arguments.
	//returns nothing
	//shows the given modal shadow and the given modal body
	show(){
		this.shadow.css('display', 'block');
		this.body.css('display', 'block');
	}
	//takes in no arguments
	//returns nothing
	//hides the given modal shadow and the given modal body
	hide(){
		this.shadow.css('display', 'none');
		this.body.css('display', 'none');
	}
	//takes in a string that it then puts inside the text of the modal message element
	//returns nothing
	updateContents( message ){
		this.message.text(message);
	
	}

	onClose( action ) {
		action();
	} 



	//takes in no arguments
	//returns nothing
	//hides the modal, removes all existing click handlers from the modal shadow
		//and adds 2 click handlers to the modal shadow: 
			//one that calls whatever callback was assigned to this object's onClose handler
			//calls this object's hide method.  Make sure to use bind to make it correctly bind to the object
				//this.FUNCTIONNAME.bind( this )
			//otherwise it won't work correctly
	init(){
		this.hide();
		this.shadow.off();
		this.shadow.click(this.onClose);
		this.shadow.click(this.hide);


	}

}