import { Injectable } from'@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()

export class todoService {

constructor(public _http:Http){

}

getTodos(){

return this._http.get('/api/todos').map(res => res.json())


}

saveTodo(todo){

var headers = new Headers();
headers.append('Content-Type', 'application/json');

return this._http.post('/api/todos/add',JSON.stringify(todo), {headers:headers}).map(res => res.json());
}

updateTodo(todo){

var headers = new Headers();
headers.append('Content-Type', 'application/json');

return this._http.put('api/todos/' + todo._id,JSON.stringify(todo), {headers:headers});

}

removeTodo(id){

return this._http.delete('/api/todos/delete/' + id);

}

}

