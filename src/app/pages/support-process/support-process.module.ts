import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardModule } from '../../modules/ui/card/card.module';
import { LocalLoaderModule } from './../../modules/ui/local-loader/local-loader.module';
import { SupportService } from './../../services/support-process/support-process.service';
import { SupportProcessComponent } from './support-process.component';

@NgModule({
  declarations: [SupportProcessComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SupportProcessComponent,
      },
    ]),
    CardModule,
    LocalLoaderModule,
  ],
  providers: [SupportService],
})
export class SupportProcessModule {}
