import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Detailstirages } from '../classes/detailstirages';
import { Listepostulant } from '../classes/listepostulant';

@Injectable({
  providedIn: 'root'
})
export class PostulanttireService {

  // liste:any=[];
  nomtirage: number=0;

  constructor(private http:HttpClient) { }

  urlPT="http://localhost:8080/TiragePTS/AfficherListeParTirage"
  getPostulantsTire(id:number):Observable<Object>
  {
    return this.http.get(`${this.urlPT}/${id}`);
  }

  //Recuperer IDListePostulant
  urlILP="http://localhost:8080/Tirage/RecupererIdListePost"
  getIdLiPo(idLiP:number):Observable<Listepostulant[]>
  {
    return this.http.get<Listepostulant[]>(`${this.urlILP}/${idLiP}`);
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


  //Recuperer l'id de la liste
  li="http://localhost:8080/Tirage/RetrouverIdListePostulant"
  RetrouverParId(idListePostulant:number):Observable<any>{
    return this.http.get(`${this.li}/${idListePostulant}`);
  }

  //Recuperer l'id du tirage
  ti="http://localhost:8080/Tirage/RetrouverIdIdTirage"
  RetrouverParIdTirage(idTirage:number):Observable<any>{
    return this.http.get(`${this.ti}/${idTirage}`);
  }

  //Pour afficher tous les postulants sur une liste donnée
  po="http://localhost:8080/Postulant/AfficherToutesListe"
  AfficherPostulantListeDonnee(idListePostulant:number):Observable<Object>{
     return this.http.get(`${this.po}/${idListePostulant}`);
  }


  //Afficher le nombre de liste Tirée
  AfficherNombreListeTiree():Observable<Object>{
    return this.http.get("http://localhost:8080/Postulant/AfficherToutesListeTiree")
  }

  //Afficher le nombre de liste non Tirée
  AfficherNombreListeNonTiree():Observable<Object>{
    return this.http.get("http://localhost:8080/Postulant/AfficherToutesListeNonTiree")
  }



  

}
