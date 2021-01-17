import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'refrescos',
  templateUrl: './refrescos.component.html',
  styleUrls: ['./refrescos.component.css']
})
export class RefrescosComponent implements OnInit {
  // public nombre: string;
  // public followers: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    // Recoge valor de la url
    // this._route.params.subscribe((params: Params) => {
    //   this.nombre = params.nombre;
    //   // this.followers = +params.followers;
    //   //this.nombre = params['nombre'];
    //   if(this.nombre == 'ninguno'){
    //     this._router.navigate(['/home'])
    //   }
    // });
  }

  redirigir(){
    this._router.navigate(['/cereales']);
  }

}
