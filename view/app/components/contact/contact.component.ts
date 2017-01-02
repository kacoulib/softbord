import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';

@Component({
    selector: 'app-contact',
    templateUrl: './app/components/contact/contact.html',
    styleUrls: ['./app/components/contact/contact.css'],
})
export class ContactCmp {
	form: '';
	values = '';
	submited = false;

  // without strong typing
  onKey(event:any) {
  	console.log(event.target.value.length)
    this.values = event.target.value + ' | ';
  }

  onSubmit(){
  	this.submited = true;
  	console.log(this)
  	return;
  }
}
