import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public navigations: any[] = [
    { url: 'platforms', label: 'Base Platforms' },
    { url: 'components', label: 'Components' },
    { url: 'categories', label: 'Component Categories' },
    { url: 'manufacturers', label: 'Component Manufacturers' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
