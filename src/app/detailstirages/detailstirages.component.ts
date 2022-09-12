import { Component, OnInit } from '@angular/core';
import { Detailstirages } from '../classes/detailstirages';
import { PostulanttireService } from '../service/postulanttire.service';

@Component({
  selector: 'app-detailstirages',
  templateUrl: './detailstirages.component.html',
  styleUrls: ['./detailstirages.component.css']
})
export class DetailstiragesComponent implements OnInit {

  postulanttires : any;
  detailstirage : Detailstirages = new Detailstirages();
  constructor(private service : PostulanttireService) { }

  ngOnInit(): void {
    this.service.getPostulantsTire().subscribe(data=>{
      // this.detailstirage=data;
      this.postulanttires=data;
    });
  }

}
