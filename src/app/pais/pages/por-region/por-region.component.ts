import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 8px;
      }
    `
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regActiva: string = '';
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  getClaseCSS(region: string): string {
    return (region === this.regActiva) ? 'btn btn-info' : 'btn btn-outline-info';
  }

  activarRegion(region: string) {
    if (region === this.regActiva) { return; }

    this.regActiva = region;
    this.paises = [];

    //TODO: llamar el servicio
    this.paisService.buscarRegion(region)
      .subscribe(paises => this.paises = paises);
  }

}
