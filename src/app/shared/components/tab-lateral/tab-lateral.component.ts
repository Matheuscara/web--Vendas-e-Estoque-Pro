import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-lateral',
  templateUrl: './tab-lateral.component.html',
  styleUrls: ['./tab-lateral.component.scss'],
})
export class TabLateralComponent {
  
  constructor(private router: Router) { }

  @Input() marginTop: any;


  redirect(rota: string) {
    this.router.navigate([rota]);
  }

  deslogar() {
    this.router.navigate(['/login']);
    localStorage.setItem('token', '');
  }

}
