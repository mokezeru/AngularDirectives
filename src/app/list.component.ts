import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
    <ul>
      <li *ngFor="let item of listsChild">{{item}}</li>
    </ul>
  `,
  styles: []
})
export class ListComponent implements OnInit {
  @Input() listsChild: string[];

  constructor() { }

  ngOnInit() {
  }

}
