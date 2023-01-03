import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AutoComponent } from './auto/auto.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SparesCategoryComponent } from './spares-category/spares-category.component';
import { CategoryRelationshipsComponent } from './category-relationships/category-relationships.component';


@NgModule({
  declarations: [
    AdminPanelComponent,
    AutoComponent,
    SparesCategoryComponent,
    CategoryRelationshipsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    AdminPanelComponent,
    AutoComponent
  ]
})
export class AdminPanelModule { }
