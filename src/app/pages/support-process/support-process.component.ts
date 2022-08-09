import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SupportService } from './../../services/support-process/support-process.service';
import { DECREASE, INCREASE } from './../../store/actions/layout.actions';
import { StateInt } from './../../store/reducers/root.reducer';

@Component({
  selector: 'app-support-process',
  templateUrl: './support-process.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SupportProcessComponent implements OnInit, OnDestroy {
  data: any[];

  public ngDestroyed$ = new Subject();

  count$;

  isLoading = false;
  constructor(
    private supportService: SupportService,
    private cdr: ChangeDetectorRef,
    private store: Store<StateInt>,
  ) {
    this.count$ = this.store.select('layout', 'count');
  }

  ngOnInit(): void {
    this.getMockData();
  }

  ngOnDestroy() {
    this.ngDestroyed$.next();
    this.ngDestroyed$.complete();
  }

  getMockData() {
    this.isLoading = true;
    this.supportService
      .getFromPlaceHolder()
      .pipe(takeUntil(this.ngDestroyed$))
      .subscribe((res) => {
        // setTimeout(() => {
        // }, 1000);
        this.isLoading = false;
        this.data = res;
        this.cdr.detectChanges();
      });
  }

  increase() {
    this.store.dispatch(INCREASE({ payload: 1 }));
  }

  decrease() {
    this.store.dispatch(DECREASE({ payload: 1 }));
  }
}
