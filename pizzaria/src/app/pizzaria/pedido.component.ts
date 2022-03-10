import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

const URL = "https://7c2bad50.us-south.apigw.appdomain.cloud/api/pedido/criar";

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss'],
})
export class Pedido implements OnInit {

  pizzaSelecionada: any;
  bebidaSelecionada: any;
  quantidade = 1;
  total = 0;
  nome = "";

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      // estao sendo passados parametros?
      if (this.router.getCurrentNavigation().extras.state) {

        this.pizzaSelecionada = this.router.getCurrentNavigation().extras.state.pizzaSelecionada;
        this.bebidaSelecionada = this.router.getCurrentNavigation().extras.state.bebidaSelecionada;

      console.log (this.router.getCurrentNavigation().extras.state.pizzaSelecionada);
      console.log (this.router.getCurrentNavigation().extras.state.bebidaSelecionada);
      }
      });

      this.recalcular(1);

}

  recalcular(valor) {
    this.quantidade = valor;
    this.total = this.quantidade * parseFloat(this.bebidaSelecionada.preco) + parseFloat(this.pizzaSelecionada.preco)
  }

  queijoExtra(valor) {
   
    if (valor.checked) {
    this.total += 10;
    } else {
    this.total -= 10;
    }
  }
    

  enviar() {

    let body = {usuario: this.nome, detalhes: {pizza: this.pizzaSelecionada.nome, bebida:
      this.bebidaSelecionada.nome, total: this.total, quantidade: this.quantidade}}

      this.http.post(URL, body).subscribe((response) => {
      console.log(response);
      });
      
  }

}
