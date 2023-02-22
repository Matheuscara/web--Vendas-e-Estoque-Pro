import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab-lateral',
  templateUrl: './tab-lateral.component.html',
  styleUrls: ['./tab-lateral.component.scss'],
})
export class TabLateralComponent {
  @Input() marginTop: any;
}
