import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../model/model';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class CategoryService {

  readonly path="/api/categories";

  constructor(private httpClient:HttpClient) { }

  get():Observable<Category[]>{
    return this.httpClient.get<Category[]>(`/api/categories`)
    .catch((error:any)=>
    Observable.throw(error.message || 'Server Error')
    );
  }

}
