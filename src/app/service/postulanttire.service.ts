import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Detailstirages } from '../classes/detailstirages';
import { Listepostulant } from '../classes/listepostulant';

@Injectable({
  providedIn: 'root'
})
export class PostulanttireService {

  constructor(private http:HttpClient) { }

  urlPT="http://localhost:8080/TiragePTS/AfficherListeParTirage"
  getPostulantsTire(id:number):Observable<Object>
  {
    return this.http.get(`${this.urlPT}/${id}`);
  }

  getToutesListe():Observable<Listepostulant[]>
  {
    return this.http.get<Listepostulant[]>("http://localhost:8080/Tirage/AfficherToutesListe");
  }

  apiNPT="http://localhost:8080/Tirage/nombrePostTire"
  getNPostTire(id:number):Observable<Object>{
    return this.http.get(`${this.apiNPT}/${id}`);
  }

  url = "http://localhost:8080/Tirage/AfficherTousTirages";
  getToutesTirages(id:number):Observable<Object>
  {
    return this.http.get(`${this.url}/${id}`);
  }



  //Resultat d'un tirage en fonction de l'idTirage
  urll = "http://localhost:8080/Tirage/AfficherIdTirages";
  getIdTirages(id:number):Observable<Object>
  {
    return this.http.get(`${this.urll}/${id}`);
  }

  //
  getTirageTotal():Observable<Object>{
    return this.http.get("http://localhost:8080/Tirage/AfficherTirageTotal")
  }

  // urlt = "http://localhost:8080/Tirage/AfficherTirageTotalUneListe";
  
  // getNombreTirageUneListe():Observable<Object>
  // {
  //   return this.http.get(`${this.urlt}`);
  // }

  creerTirage(tirage:Detailstirages, libelle:string,nombre:number):Observable<Detailstirages>{
    return this.http.post<Detailstirages>(`http://localhost:8080/Tirage/createTirage/${libelle}/${nombre}`, tirage);
  }


  api="http://localhost:8080/Postulant/importer"
  addListe(libelle:string, file:any):Observable<void>{
    let data=new FormData();
    data.append("file",file)
    return this.http.post<void>(`${this.api}/${libelle}`, data);
  }



}
