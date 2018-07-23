import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CommentService {

  constructor(private httpClient:HttpClient) { }

  getComments(menuId:number): Observable<Comment[]>{
    let params = new HttpParams();
    params = params.append('menuId', menuId.toString());

    return this.httpClient.get<Comment[]>(`api/comments`, {params});
  }

  saveCommentOnNews( comment:any){
    return this.httpClient.post(`api/comments`,comment);
  }


}
