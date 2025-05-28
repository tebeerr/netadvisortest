import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

import { CoreCommonModule } from '@core/common.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { AuthenticationModule } from './authentication/authentication.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DevisListComponent } from './devis-module/components/devis-list/devis-list.component';
import { DevisListItemComponent } from './devis-module/components/devis-list-item/devis-list-item.component';
import { ClientSelectionComponent } from './devis-module/components/client-selection/client-selection.component';
import { ProductLinesEditorComponent } from './devis-module/components/product-lines-editor/product-lines-editor.component';
import { AddClientModalComponent } from './devis-module/components/add-client-modal/add-client-modal.component';
import { AddProductModalComponent } from './devis-module/components/add-product-modal/add-product-modal.component';
import { DevisFormContainerComponent } from './devis-module/containers/devis-form-container/devis-form-container.component';
import {RouterModule} from "@angular/router";
import {DevisModule} from "./devis-module/devis.module";

@NgModule({
  declarations: [
    DashboardComponent,
    DevisListComponent,
    DevisListItemComponent,
    ClientSelectionComponent,
    ProductLinesEditorComponent,
    AddClientModalComponent,
    AddProductModalComponent,
    DevisFormContainerComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    CoreCommonModule,
    ContentHeaderModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    AuthenticationModule,
    MiscellaneousModule,
    DevisModule
  ],
  exports: [
    DevisListComponent
  ],

  providers: []
})
export class PagesModule {}