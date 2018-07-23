export interface Page<T> {
	content: T[];
	totalPages: number;
	totalElements: number;
	last: boolean;
	size: number;
	number:number;
	sort: any;
	first: boolean;
	numberOfElements: number;

}

export interface Category {
    id?:number;
    name:string;
}
export interface Comment {
	id?:number;
	authorName:string;
	content:string;
	menu:MenuInterface;
	subComments?:Comment[];
}

export interface MenuInterface {
    id?:number;
    name: string;
    price: number;
    category: Category;
}

export class Menu implements MenuInterface{
	public id: number;
	public name: string;
	public category: Category;
	public price: number;
		
	constructor(menu:MenuInterface)
	{
		this.id = menu.id;
		this.name = menu.name;
		this.category = menu.category;
		this.price = menu.price;
	}
}