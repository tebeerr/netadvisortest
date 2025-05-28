import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DevisListContainerComponent } from './containers/devis-list-container/devis-list-container.component';
import { DevisFormContainerComponent } from './containers/devis-form-container/devis-form-container.component';

const routes: Routes = [
    {
        path: 'devis',
        component: DevisListContainerComponent
    },
    {
        path: 'devis/form',
        component: DevisFormContainerComponent
    }
    // Add more routes if needed
];

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forChild(routes)]
})
export class DevisModule {}
