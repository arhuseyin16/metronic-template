import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nbt-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  @Input() hasHead = true;

  @Input() customHead = false;

  @Input() title;

  @Input() cssClass;


  
  constructor() {}

  ngOnInit(): void {}
}
