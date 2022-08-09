import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LocalLoaderComponent } from './local-loader.component';

@NgModule({
  imports: [CommonModule],
  exports: [LocalLoaderComponent],
  declarations: [LocalLoaderComponent],
})
export class LocalLoaderModule {}
