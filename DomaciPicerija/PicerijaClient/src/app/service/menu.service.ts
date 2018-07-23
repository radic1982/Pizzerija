import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { MenuInterface, Page, Menu } from '../model/model';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class MenuService {

  constructor(private http:HttpClient) { }

  getMenues(page: number): Observable<Page<MenuInterface>> {
  	let params = new HttpParams();
  	params = params.append('page', page.toString());

  	return this.http.get('api/menu', {params: params}) as 
  		Observable<Page<MenuInterface>>;
  }

  getMenu(id:number): Observable<MenuInterface>{
	return this.http.get<MenuInterface>(`api/menu/${id}`)
    .catch((error:any)=>
    Observable.throw(error.message || 'Server Error')
    );
  }

  deleteMenu(menu: MenuInterface):Observable<MenuInterface> {
    return this.http.delete(`api/menu/${menu.id}`, { responseType: 'text' }).
      catch((error: any) =>
        Observable.throw(error.message || 'Server error')
      );
  }


  editMenu(menu): Observable<MenuInterface> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<MenuInterface>(`api/menu/${menu.id}`, JSON.stringify(menu), {headers})
    .catch((error:any)=>
    Observable.throw(error.message || 'Server Error')
    );
  }

  addMenu(menu): Observable<MenuInterface> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<MenuInterface>('api/menu', JSON.stringify(menu), {headers})
    .catch((error:any)=>
    Observable.throw(error.message || 'Server Error')
    );
  }

  filter(menuName:string): Observable<MenuInterface[]> {
    let params 
    return this.http.get<MenuInterface[]>(`api/menu?menuName=${menuName}`)
    .catch((error:any)=>
    Observable.throw(error.message || 'Server Error')
    );
  }
  

}
