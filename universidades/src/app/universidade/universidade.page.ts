import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {
  UniversidadeRes,
  parseUniversidade,
} from 'src/assets/interfaces/universidade-res';
import { Universidade } from 'src/assets/interfaces/universidade';

const URL = 'http://universities.hipolabs.com';

@Component({
  selector: 'app-universidade',
  templateUrl: './universidade.page.html',
  styleUrls: ['./universidade.page.scss'],
})
export class UniversidadePage implements OnInit {
  params: string[] = [];
  universidades: Universidade[];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient 
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (!params.name && !params.country) {
        return;
      }

      if (params.name) {
        this.params.push(`name=${params.name}`);
      }

      if (params.country) {
        this.params.push(`country=${params.country}`);
      }
    });

    this.requestData();
  }

  requestData() {
    const queryParams =
      this.params.length > 1 ? this.params.join('&') : this.params[0];
    const searchUrl = URL + '/search?' + queryParams;

    this.http.get(searchUrl).subscribe((data: UniversidadeRes[]) => {
      this.universidades = data.map((universidade) => parseUniversidade(universidade));
      console.log(this.universidades);
      console.log(searchUrl);
      
    });
  }
}
