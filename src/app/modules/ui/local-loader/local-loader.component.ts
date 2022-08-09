import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nbt-local-loader',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="d-flex justify-content-center" [ngStyle]="{ height: height ? height : 'auto' }">
      <div class="d-flex align-items-center">
        <ng-container *ngIf="message">
          <span class="mr-3"> {{ message }}</span>
        </ng-container>
        <div class="spinner spinner-lg spinner-success"></div>
      </div>
    </div>
  `,
})
export class LocalLoaderComponent implements OnInit {
  @Input() height;

  @Input() message;

  constructor() {}

  ngOnInit() {}
}
