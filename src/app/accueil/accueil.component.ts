import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { PostulanttireService } from '../service/postulanttire.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {


  formmodule!:FormGroup;
  file:any;
  fichier:any;
  ListeTiree:any;

  liste : any;
  listeNonTiree : any;
  listeI : any;
  searchText:any;
  tirageTotal : any;
  tirage:any;
  p:number=1;
  ntirage: number=0;
  ntirageParListe :any;
  tirageNombreUneListe : any;
  id : number = 0;
  constructor(public service : PostulanttireService, private route:ActivatedRoute, private router:Router, private formB:FormBuilder, private http:HttpClient) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']

    this.formmodule=this.formB.group({
      libelle:['', Validators.required],
      dateListePostulant:['', Validators.required],
      file:['', Validators.required],
    })




    this.service.getToutesListe().subscribe(data=>{
      this.liste=data;
      // this.tirage=data;
      for (const t of this.liste) {
            this.ntirage += 1;
          }
     
    });
    this.service.getTirageTotal().subscribe(data=>{
      this.tirageTotal=data;
      console.log(data);
      
    });

    this.service.AfficherNombreListeTiree().subscribe(data=>{
      this.ListeTiree=data
    });

    this.service.AfficherNombreListeNonTiree().subscribe(data=>{
      this.listeNonTiree=data
    })

  
    // this.service.getToutesTirages(this.id).subscribe(data=>{
    //   console.log(data)
    //   this.tirage=data;
    //   for (const t of this.tirage) {
    //     this.ntirage += 1;
    //   }
    // });
    // this.service.getNombreTirageUneListe().subscribe(data=>{
    //   this.tirageNombreUneListe=data;
    //   console.log(data);
    //   for (const t of this.tirageNombreUneListe) {
    //     this.ntirage +=1;
    //   }
    // });
  }

  goToDettailliste(id:number){
    console.log(id);
    return this.router.navigate(['detailslistes', id])
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
