import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-cardapio',
templateUrl: './cardapio.html',
styleUrls: ['./cardapio.scss'],
})

export class Cardapio implements OnInit {

    cardapio: any = [];

    ngOnInit() {

        this.cardapio = {"pizzas": [{"id": "1", "nome": "Quatro Queijos", "preco": 30.0},{"id": "2", "nome": "Frango com Catupiry", "preco": 35.0 },
        {"id": "3", "nome": "Abobrinha", "preco": 30.0}]};

        console.log(this.cardapio)

     }

}
