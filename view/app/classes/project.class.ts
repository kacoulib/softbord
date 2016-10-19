export class Project {
  id: string,
  name: string|required,
  date: string,
  category: string,
  comments: {
  	id : number,
  	authorId : number,
  	title : string,
  	content : number
  }
}