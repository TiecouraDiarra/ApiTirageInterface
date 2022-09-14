import { Component, OnInit } from '@angular/core';
import { Detailstirages } from '../classes/detailstirages';
import { Listepostulant } from '../classes/listepostulant';
import { PostulanttireService } from '../service/postulanttire.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.css']
})
export class TirageComponent implements OnInit {

  formmodule!:FormGroup;
  file:any;
  fichier:any;
  listeI : any

  liste : any;
  constructor(private service : PostulanttireService, private formB:FormBuilder, private http:HttpClient) { }

  // tirage!:Listepostulant[];
   tirage:any;

  tirageObj:Detailstirages={
  idTirage:0,
  libelle:'',
  dateTirage:new Date()
}

idTirage:number = 0;
libelle:string = "";
dateTirage!: Date;
libelleListe:string="";
nombre: number = 0;

  ngOnInit(): void {
    this.formmodule=this.formB.group({
      libelle:['', Validators.required],
      dateListePostulant:['', Validators.required],
      file:['', Validators.required],
    })



    this.service.getToutesListe().subscribe((data: Listepostulant[])=>{
      // this.liste= data;
      this.tirage = data
    })
  }

  resetForm(){

    this.libelleListe='',
    this.libelle='',
    this.nombre=0
  }

  PostTirage(){
    this.tirageObj.libelle = this.libelle;
    console.log(this.libelleListe);
    this.service.creerTirage(this.tirageObj,this.libelleListe,this.nombre).subscribe()
    this.resetForm();
  }

  fileChange(e:any){
    this.fichier=e.target["files"][0]
    console.log(e.target['files'][0].name+" "+ e.target['files'][0].length)
  }

  
  importerliste(){
    this.listeI=this.formmodule.value
    this.service.addListe(this.listeI.libelle, this.fichier).subscribe(
      data=>{
        this.formmodule.reset()
      }
    )
  }

}
