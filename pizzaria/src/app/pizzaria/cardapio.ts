import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavigationExtras, Router } from '@angular/router';

const URL = 'https://raw.githubusercontent.com/esensato/mobile-2022-01/main/services/lista-pizza.json'

@Component({
selector: 'app-cardapio',
templateUrl: './cardapio.html',
styleUrls: ['./cardapio.scss'],
})

export class Cardapio implements OnInit {

    cardapio: any = [];
    pizzaSelecionada: any;
    bebidaSelecionada:any;
    ocultarPizzas=false;

    constructor(private router: Router, private http: HttpClient){}

    ngOnInit() {

        this.http.get(URL).subscribe((response) => { //subscribe permite que o código continue em execução enquanto a requesição ainda não retornou resposta
            this.cardapio = response;
        })
        console.log(this.cardapio)
     }
     selPizza(pizza){
        this.pizzaSelecionada = pizza;
        this.ocultarPizzas = true;
     }
     selBebida(bebida){
         this.bebidaSelecionada = bebida;
         let navigationExtras: NavigationExtras = {
            state: {
                pizzaSelecionada: this.pizzaSelecionada,
                bebidaSelecionada: this.bebidaSelecionada
            }
            };
            this.router.navigate(['pizzaria/pedido'], navigationExtras);
     }

}
