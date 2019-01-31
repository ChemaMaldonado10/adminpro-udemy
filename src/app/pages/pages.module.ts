import { NgModule } from '@angular/core';

import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';

// tmp
import { IncreaserComponent } from '../components/increaser/increaser.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

// ng-2 charts
import { ChartsModule } from 'ng2-charts';



@NgModule({
    declarations: [
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
        PagesComponent,
        IncreaserComponent,
        GraficoDonaComponent

    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ],
    exports: [
        DashboardComponent,
        Graficas1Component,
        ProgressComponent
    ]
})

export class PagesModule { }
