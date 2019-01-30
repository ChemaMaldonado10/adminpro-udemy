import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';





const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    // For any other route show me the 404 page
    { path: '**', component: NopagefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true} );
