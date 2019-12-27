import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SyncfusionComponent } from './syncfusion/syncfusion.component';
import { GridModule, EditService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

@NgModule({
  declarations: [SyncfusionComponent],
  imports: [
    CommonModule,
    GridModule,
    FormsModule,
    NumericTextBoxModule,
    DatePickerModule,
    DropDownListModule,
    ReactiveFormsModule
  ],
  providers: [
    EditService, ToolbarService
  ]
})
export class SyncfusionModule { }
