import { Component } from '@angular/core';
// import { secondary } from './app/components/partials/';

@Component({
	selector: 'fb-bot',
	templateUrl: './app/components/__features__/fb_bot/fb_bot.html',
	styleUrls: ['./app/components/partials/nav.css'],	
	// providers: ['./app/components/partials/secondary/secondary.component.ts'],
})
export class FbBotCmp {

	input = '';
	users = [{id : 0, name: 'softboard'}];
	show_chat = false;
	typing = false;

	constructor(){
	}

	onKey(event:any){

		// if the enter key is press without and the input is empty
		if (event.target.value.trim().length == 0) return event.target.value = '';
		
		// sdf = the fake textarea. To resize the original one
		let sdf = <HTMLElement>document.querySelector('#sdfsdf span');

		sdf.innerHTML = event.target.value;
		event.target.style.height = sdf.offsetHeight + 'px';

		// send message if enter key is press
		// if (event.keyCode == 13) this.sendMessage(event);
	}

	// sendMessage(event:any){
	// 	console.log(event.target.value);

	// 	let txt = document.createElement('div'), 
	// 	chat = document.getElementById('chat_content');
	// 	txt.classList = ((this.users[0] != undefined)? ['message_box','me'] : ['message_box']);
	// 	txt.innerHTML = `
	// 		<span class="avatar"></span>
	// 		<div class="msg_content">
	// 			<p>${event.target.value}</p>
	// 		</div>`;

	// 	chat.appendChild(txt);
	// 	console.log(this.users[0]);
		
	// 	// reset the input
	// 	event.target.value = '';

	// 	// scroll the messages to the bottom
	// 	document.getElementById('chat_content_container').scrollTop = parseInt(getComputedStyle(chat).height);
	// }
	// getMessage (){
	// }

	// messagerIconClick(event: any){
	// 	// console.log(event.target.classList.value)
		
	// 	let elem =  document.getElementById('chat');

	// 	elem.classList = (elem.classList.value.indexOf('open') < 0)? ' open': [];
	// 	console.log(event.target);
	// }
}