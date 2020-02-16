/** angular modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
/** end angular modules */

const modules = [CommonModule, FormsModule, ReactiveFormsModule];

@NgModule({
  imports: modules,
  exports: modules
})
export class AngularSharedModule {}
