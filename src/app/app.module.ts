import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './authentication/auth.service';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { LocationDetailsComponent } from './pages/location-details/location-details.component';
import { LocationUpdateComponent } from './pages/location-update/location-update.component';
import { LocationCreateComponent } from './pages/location-create/location-create.component';
import { NavComponent } from './common/nav/nav.component';
// import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LocationsComponent,
    LocationDetailsComponent,
    LocationUpdateComponent,
    LocationCreateComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyCOsfCj7IZaBKhX-v26b_fm8RUZbBysFlI'
    // })
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
