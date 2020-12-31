import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './authentication/guards/auth.guard';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { LocationCreateComponent } from './pages/location-create/location-create.component';
import { LocationDetailsComponent } from './pages/location-details/location-details.component';
import { LocationUpdateComponent } from './pages/location-update/location-update.component';
import { LocationsComponent } from './pages/locations/locations.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'locations', component: LocationsComponent, canActivate: [AuthGuard] },
  { path: 'locationsdetails/:id', component: LocationDetailsComponent, canActivate: [AuthGuard] },
  { path: 'locationupdate/:id', component: LocationUpdateComponent, canActivate: [AuthGuard] },
  { path: 'locationcreate', component: LocationCreateComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}