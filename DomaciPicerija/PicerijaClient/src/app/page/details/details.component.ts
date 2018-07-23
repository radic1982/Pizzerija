import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../../service/menu.service';
import { MenuInterface } from '../../model/model';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DetailsComponent implements OnInit {

  private menu:MenuInterface;
  private comment:any;
  private newComment:any;
  private subComment:any;


  constructor(private menuService:MenuService,private commentService:CommentService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.loadData();
    //this.route.params.subscribe((params)=>{
      //var id = +params['id'];
      //this.menuService.getMenu(id).subscribe((resp)=>{
        //this.menu = resp;
      //})
    //})
  }

  loadData() {
    this.menuService.getMenu(this.route.snapshot.params.id).subscribe(
      (data)=>{
        this.menu=data;
      }
    );
    this.commentService.getComments(this.route.snapshot.params.id).subscribe(
      (data)=>{
        this.comment=data;
      }
    );
  }



}
