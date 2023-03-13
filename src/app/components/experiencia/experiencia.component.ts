import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit  {

  experienciaList:any;
  miPortfolio:any;
    constructor(private datosPortfolio:PortfolioService){}

    ngOnInit(): void {
      this.datosPortfolio.obtenerDatos().subscribe(data =>{
        console.log(data);
        this.miPortfolio=data;
        this.experienciaList=data.trabajos;
      });
    }
}
