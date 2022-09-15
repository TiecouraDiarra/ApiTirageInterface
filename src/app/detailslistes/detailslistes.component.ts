import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listepostulant } from '../classes/listepostulant';
import { Postulanttire } from '../classes/postulanttire';
import { PostulanttireService } from '../service/postulanttire.service';

@Component({
  selector: 'app-detailslistes',
  templateUrl: './detailslistes.component.html',
  styleUrls: ['./detailslistes.component.css']
})
export class DetailslistesComponent implements OnInit {

  tirage : any;

  
  searchText: any;
  p:number=1;
  id : number = 0;
  postulant : any;
  npostulant : number=0
  liste : any;
  List:any;
  ntirage: number=0;
  constructor(private service : PostulanttireService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']

    // const idListe = this.route.snapshot.params['idListePostulant']
    // const idLiP = this.route.snapshot.params['LiP']
    console.log(this.id)
    this.service.getToutesTirages(this.id).subscribe(data=>{
      console.log(data)
      this.tirage=data;
      for (const t of this.tirage) {
        this.ntirage += 1;
      }
    })
    // });
    this.service.getToutesListe().subscribe(data=>{
      console.log(data)
      this.liste=data;
    });

    this.service.RetrouverParId(this.id).subscribe(data=>{
      this.List=data;
    });


    this.service.AfficherPostulantListeDonnee(this.id).subscribe(data=>{
      this.postulant=data;
      for (const pos of this.postulant) {
        this.npostulant += 1;
      }
    });

    // this.service.getPostulantsTire(this.id).subscribe(data=>{
    //   this.list=data;
    // });

    // this.service.getIdLiPo(this.id).subscribe(data=>{
    //   console.log(data);
    //   this.List=data;
    // })

    // this.service.getNPostTire(this.ida).subscribe(data=>{
    //   console.log(data);
    //   this.NPt=data;
    // })
  }
  goToDettailliste(id:number){
    console.log(id);
    return this.router.navigate(['detailtirage', id])
  }



  // goToDettailliste(id:number){
  //   console.log(id);
  //   return this.service.getIdListePostulant(id);
  // }


}
