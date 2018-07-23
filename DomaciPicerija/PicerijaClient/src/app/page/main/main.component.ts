import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CategoryService } from '../../service/category.service';
import { AuthenticationService } from '../../service/authentication-service.service';
import { Page, MenuInterface, Category, Menu } from '../../model/model';
import { MenuService } from '../../service/menu.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

  currentPage:number=0;
  page: Page<MenuInterface>;
  public categories: Category[];
  public menuToAdd: MenuInterface;
  public menuToEdit: MenuInterface;
  public searchName: string;
  totalPages:number;
  
  constructor(private menuService:MenuService,
              private categoryService:CategoryService,
              private authenticationService:AuthenticationService) { }

  ngOnInit() {
    this.loadData();
    this.reset();
  }

  isLoggedIn(){
    return this.authenticationService.isLoggedIn();
  }

  loadData(){
    this.menuService.getMenues(this.currentPage).subscribe(
      data=>{
        this.page=data;
        this.totalPages=data['totalPages'];
      }
    );

    this.categoryService.get().subscribe(
      data=>{
        this.categories=data;
      }
    )
  }

  filter(){
    this.menuService.filter(this.searchName).subscribe(
      data=>{
        this.page.content=data;
      }
    )
  }

  save(menuToAdd:MenuInterface){
    if(this.menuToAdd.id) {
      this.menuService.editMenu(this.menuToAdd).subscribe(
        (data)=>{
          this.loadData();
          this.reset();
        }
      )

    }
    else{ 
      this.menuService.addMenu(this.menuToAdd).subscribe(
      (data)=>{
        this.loadData();
        this.reset();
      }
    );
  }
  }
  reset(){
    this.menuToAdd =new Menu({
      name:'',
      price:0,
      category:{
        name:''
      }
    })
    
  }
  edit(menu:MenuInterface){
    this.menuToAdd=menu;
  }

  delete(menu:MenuInterface){
    this.menuService.deleteMenu(menu)
    .subscribe(
      ()=>{
        this.loadData();
      }
    )
  }
  byId(category1, category2){
    return category1.id === category2.id;
  }

  getTableClass(){
    if(this.isLoggedIn()===true){
      return "col-md-8";
    }
    else{
      return "col-md-12";
    }
  }

  changePage(i:number){
    this.currentPage+=i;
    this.loadData();
  }
}
