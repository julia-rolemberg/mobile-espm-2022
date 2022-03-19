import { ViewChild, ElementRef, Component } from '@angular/core';
import { NavController } from '@ionic/angular';

declare var google:any;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  mapa:any;
  @ViewChild('mapa', {read: ElementRef, static: false}) 
  refMapa: ElementRef;
  constructor() {
    
  }

    ionViewDidEnter() {
      this.exibirMapa();
      this.addMarcador();

    }
    exibirMapa() {
      const pos = new google.maps.LatLng(-23.589501493568154, -46.640012545949226);
      const opcoes = {center: pos, zoom: 15, disableDefaultUI: true};
      this.mapa = new google.maps.Map(this.refMapa.nativeElement, opcoes);
    }
    addMarcador() {
      const pos = new google.maps.LatLng(-23.589501493568154, -46.640012545949226);
      let marcador = new google.maps.Marker({
      position: pos,
      title: "ESPM Tech"
      });

      let conteudo = "<div id='conteudo'><h2>" + marcador.title + "</h2><p>Bem vindo ao curso de ionic!</p></div>";
      let info = new google.maps.InfoWindow({content: conteudo});
      marcador.addListener('click', () => {
        info.open(this.mapa, marcador);
      });
      this.mapa.addListener("click", (mapsMouseEvent) => {
        console.log( JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2));
      });       

      marcador.setMap(this.mapa);

      this.mapa.addListener("click", (mapsMouseEvent)=> {
        let marcadorNovo = new google.maps.Marker({
          position : mapsMouseEvent.LatLgn,
          title: "Novo marcador"
        });
        console.log(JSON.stringify(mapsMouseEvent.latLgn.toJSON(), null, 2));
        marcadorNovo.setMap(this.mapa)
        
      })

    }

    

}