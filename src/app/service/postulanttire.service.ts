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

  getToutesListe():Observable<Object>
  {
    return this.http.get("http://localhost:8080/Tirage/AfficherToutesListe");
  }

  url = "http://localhost:8080/Tirage/AfficherTousTirages";
  getToutesTirages(id:number):Observable<Object>
  {
    return this.http.get(`${this.url}/${id}`);
  }

  urll = "http://localhost:8080/Tirage/AfficherIdTirages";
  getIdTirages(id:number):Observable<Object>
  {
    return this.http.get(`${this.urll}/${id}`);
  }
}
