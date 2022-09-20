import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Detailstirages } from '../classes/detailstirages';
import { PostulanttireService } from '../service/postulanttire.service';

@Component({
  selector: 'app-detailstirages',
  templateUrl: './detailstirages.component.html',
  styleUrls: ['./detailstirages.component.css']
})
export class DetailstiragesComponent implements OnInit {

  postulanttires : any;
  liste : any;
  id:number=0;
  tirage : any;
  p:number=1;
  List:any;
  searchText : any;
  detailstirage : Detailstirages = new Detailstirages();
  constructor(private service : PostulanttireService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.service.getPostulantsTire(this.id).subscribe(data=>{
      // this.detailstirage=data;
      this.postulanttires=data;
      
    });

    this.service.RetrouverParIdTirage(this.id).subscribe(data=>{
      // this.detailstirage=data;
      this.tirage=data;
      
    });
    this.service.RetrouverParId(this.id).subscribe(data=>{
      this.List=data;
    });
  }


  back(): void {
    window.history.back()
  }

}


