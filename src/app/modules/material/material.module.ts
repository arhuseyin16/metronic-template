import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {
  MatBottomSheetModule,
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA
} from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import {
  MatNativeDateModule, MatRippleModule,

  MAT_DATE_LOCALE
} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
// import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../../_metronic/core';
import { GeneralModule } from '../../_metronic/partials/content/general/general.module';
import { ButtonToggleComponent } from './buttons-and-indicators/button-toggle/button-toggle.component';
// Buttons & indicators
import { ButtonComponent } from './buttons-and-indicators/button/button.component';
import { ChipsComponent } from './buttons-and-indicators/chips/chips.component';
import { IconComponent } from './buttons-and-indicators/icon/icon.component';
import { ProgressBarComponent } from './buttons-and-indicators/progress-bar/progress-bar.component';
import { ProgressSpinnerComponent } from './buttons-and-indicators/progress-spinner/progress-spinner.component';
import { RipplesComponent } from './buttons-and-indicators/ripples/ripples.component';
import { MaterialTableComponent } from './data-table/material-table/material-table.component';
// Data table
import { PaginatorComponent } from './data-table/paginator/paginator.component';
import { SortHeaderComponent } from './data-table/sort-header/sort-header.component';
import { AutocompleteComponent } from './formcontrols/autocomplete/autocomplete.component';
import { CheckboxComponent } from './formcontrols/checkbox/checkbox.component';
// Form controls
import { DatepickerComponent } from './formcontrols/datepicker/datepicker.component';
import { FormfieldComponent } from './formcontrols/formfield/formfield.component';
import { InputComponent } from './formcontrols/input/input.component';
import { RadiobuttonComponent } from './formcontrols/radiobutton/radiobutton.component';
import { SelectComponent } from './formcontrols/select/select.component';
import { SliderComponent } from './formcontrols/slider/slider.component';
import { SlidertoggleComponent } from './formcontrols/slidertoggle/slidertoggle.component';
// Layout
import { CardComponent } from './layout/card/card.component';
import { DividerComponent } from './layout/divider/divider.component';
import { ExpansionPanelComponent } from './layout/expansion-panel/expansion-panel.component';
import { GridListComponent } from './layout/grid-list/grid-list.component';
import { ListComponent } from './layout/list/list.component';
import { MaterialTabsComponent } from './layout/material-tabs/material-tabs.component';
import { StepperComponent } from './layout/stepper/stepper.component';
import { TreeComponent } from './layout/tree/tree.component';
import { MaterialComponent } from './material.component';
// Navigation
import { MenuComponent } from './navigation/menu/menu.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { ToolbarComponent } from './navigation/toolbar/toolbar.component';
import { BottomSheetExampleComponent } from './popups-and-modals/bottom-sheet/bottom-sheet-example/bottom-sheet-example.component';
import { BottomSheetComponent } from './popups-and-modals/bottom-sheet/bottom-sheet.component';
// Popups & modals
import {
  DialogComponent,

  Modal2Component,
  Modal3Component, ModalComponent
} from './popups-and-modals/dialog/dialog.component';
import { MaterialTooltipComponent } from './popups-and-modals/material-tooltip/material-tooltip.component';
import { PizzaPartyComponent } from './popups-and-modals/snackbar/pizza-party.component';
import { SnackbarComponent } from './popups-and-modals/snackbar/snackbar.component';



const routes: Routes = [
  {
    path: '',
    component: MaterialComponent,
    children: [
      {
        path: 'form-controls/autocomplete',
        component: AutocompleteComponent,
      },
      {
        path: 'form-controls/checkbox',
        component: CheckboxComponent,
      },
      {
        path: 'form-controls/datepicker',
        component: DatepickerComponent,
      },
      {
        path: 'form-controls/formfield',
        component: FormfieldComponent,
      },
      {
        path: 'form-controls/input',
        component: InputComponent,
      },
      {
        path: 'form-controls/radiobutton',
        component: RadiobuttonComponent,
      },
      {
        path: 'form-controls/select',
        component: SelectComponent,
      },
      {
        path: 'form-controls/slider',
        component: SliderComponent,
      },
      {
        path: 'form-controls/slidertoggle',
        component: SlidertoggleComponent,
      },
      {
        path: 'navigation/menu',
        component: MenuComponent,
      },
      {
        path: 'navigation/sidenav',
        component: SidenavComponent,
      },
      {
        path: 'navigation/toolbar',
        component: ToolbarComponent,
      },
      {
        path: 'layout/card',
        component: CardComponent,
      },
      {
        path: 'layout/divider',
        component: DividerComponent,
      },
      {
        path: 'layout/expansion-panel',
        component: ExpansionPanelComponent,
      },
      {
        path: 'layout/grid-list',
        component: GridListComponent,
      },
      {
        path: 'layout/list',
        component: ListComponent,
      },
      {
        path: 'layout/tabs',
        component: MaterialTabsComponent,
      },
      {
        path: 'layout/stepper',
        component: StepperComponent,
      },
      {
        path: 'layout/tree',
        component: TreeComponent,
      },
      {
        path: 'buttons-and-indicators/button',
        component: ButtonComponent,
      },
      {
        path: 'buttons-and-indicators/button-toggle',
        component: ButtonToggleComponent,
      },
      {
        path: 'buttons-and-indicators/chips',
        component: ChipsComponent,
      },
      {
        path: 'buttons-and-indicators/icon',
        component: IconComponent,
      },
      {
        path: 'buttons-and-indicators/progress-bar',
        component: ProgressBarComponent,
      },
      {
        path: 'buttons-and-indicators/progress-spinner',
        component: ProgressSpinnerComponent,
      },
      {
        path: 'buttons-and-indicators/ripples',
        component: RipplesComponent,
      },
      {
        path: 'popups-and-modals/bottom-sheet',
        component: BottomSheetComponent,
      },
      {
        path: 'popups-and-modals/dialog',
        component: DialogComponent,
      },
      {
        path: 'popups-and-modals/snackbar',
        component: SnackbarComponent,
      },
      {
        path: 'popups-and-modals/tooltip',
        component: MaterialTooltipComponent,
      },
      {
        path: 'data',
      },
      {
        path: 'data-table/paginator',
        component: PaginatorComponent,
      },
      {
        path: 'data-table/sort-header',
        component: SortHeaderComponent,
      },
      {
        path: 'data-table/table',
        component: MaterialTableComponent,
      },
      { path: '', redirectTo: 'form-controls/autocomplete', pathMatch: 'full' },
      {
        path: '**',
        redirectTo: 'form-controls/autocomplete',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    // material modules
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatListModule,
    MatSliderModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatMenuModule,
    MatTabsModule,
    MatTooltipModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTableModule,
    MatGridListModule,
    MatToolbarModule,
    MatBottomSheetModule,
    MatExpansionModule,
    MatDividerModule,
    MatSortModule,
    MatStepperModule,
    MatChipsModule,
    MatPaginatorModule,
    MatDialogModule,
    MatRippleModule,
    CoreModule,
    MatRadioModule,
    MatTreeModule,
    MatButtonToggleModule,
    GeneralModule,

    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  entryComponents: [
    PizzaPartyComponent,
    DialogComponent,
    ModalComponent,
    Modal2Component,
    Modal3Component,
    IconComponent,
    TreeComponent,
    BottomSheetExampleComponent,
  ],
  providers: [
    MatIconRegistry,
    { provide: MatBottomSheetRef, useValue: {} },
    { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    // { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
  ],
  declarations: [
    MaterialComponent,
    AutocompleteComponent,
    CheckboxComponent,
    DatepickerComponent,
    FormfieldComponent,
    InputComponent,
    RadiobuttonComponent,
    SelectComponent,
    SliderComponent,
    SlidertoggleComponent,
    MenuComponent,
    SidenavComponent,
    ToolbarComponent,
    CardComponent,
    DividerComponent,
    ExpansionPanelComponent,
    GridListComponent,
    ListComponent,
    MaterialTabsComponent,
    StepperComponent,
    ButtonComponent,
    ButtonToggleComponent,
    ChipsComponent,
    IconComponent,
    ProgressBarComponent,
    ProgressSpinnerComponent,
    DialogComponent,
    ModalComponent,
    Modal2Component,
    Modal3Component,
    PizzaPartyComponent,
    SnackbarComponent,
    MaterialTooltipComponent,
    PaginatorComponent,
    SortHeaderComponent,
    MaterialTableComponent,
    TreeComponent,
    BottomSheetComponent,
    BottomSheetExampleComponent,
    RipplesComponent,
  ],
})
export class MaterialModule {}
