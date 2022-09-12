import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listepostulant } from '../classes/listepostulant';
import { PostulanttireService } from '../service/postulanttire.service';

@Component({
  selector: 'app-detailslistes',
  templateUrl: './detailslistes.component.html',
  styleUrls: ['./detailslistes.component.css']
})
export class DetailslistesComponent implements OnInit {

  tirage : any;
  id : number = 0;
  liste : any;
  constructor(private service : PostulanttireService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    console.log(this.id)
    this.service.getToutesTirages(this.id).subscribe(data=>{
      console.log(data)
      this.tirage=data;
    })
    // });
    this.service.getToutesListe().subscribe(data=>{
      console.log(data)
      this.liste=data;
    })
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
