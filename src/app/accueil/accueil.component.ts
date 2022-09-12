import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostulanttireService } from '../service/postulanttire.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {


  liste : any;
  constructor(private service : PostulanttireService, private router:Router) { }

  ngOnInit(): void {
    this.service.getToutesListe().subscribe(data=>{
      this.liste=data;
    })
  }

  goToDettailliste(id:number){
    console.log(id);
    return this.router.navigate(['detailslistes', id])
  }

}
