import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostulanttireService {

  constructor(private http:HttpClient) { }

  getPostulantsTire():Observable<Object>
  {
    return this.http.get("http://localhost:8080/TiragePTS/AfficherPostTire");
  }
}
