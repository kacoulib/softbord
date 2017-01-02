export class Project
{
  id: String;
  name: String;
  slug: String;
  date: String;
  category: String;
  comments:
  {
  	id : String;
  	parentId : String;
  	author : String;
  	title : String;
  	content : String
  }
}