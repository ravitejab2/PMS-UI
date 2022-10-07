import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './landing-screens/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegisterComponent } from './landing-screens/register/register.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './landing-screens/forgot-password/forgot-password.component';
import { SharedLandingToolbarComponent } from './landing-screens/shared-landing-toolbar/shared-landing-toolbar.component';
import { HttpClientModule } from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AuthGuardService } from './authGuard/auth.guard';
import { ChangePasswordComponent } from './landing-screens/change-password/change-password.component';
import { ToastrModule } from 'ngx-toastr';
import { ResponsiveService } from './services/responsive/responsive.service';

import {MatSelectModule} from '@angular/material/select';
import { AboutUsComponent } from './layouts/about-us/about-us.component';
import { SharedSidenavModule } from './layouts/shared-sidenav/shared-sidenav.module';
import { EmployeeDetailsComponent } from './admin/employee-details/employee-details.component';
import { SharedSidenavComponent } from './layouts/shared-sidenav/shared-sidenav.component';
import { PatientDetailsComponent } from './admin/patient-details/patient-details.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import {MatExpansionModule} from '@angular/material/expansion';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    SharedLandingToolbarComponent,
    AboutUsComponent,
    
  
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatRadioModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ToastrModule.forRoot(),
    MatSelectModule,
    MatTooltipModule,
    SharedSidenavModule,
    
    
   
  

  ],
  providers: [AuthGuardService,ResponsiveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
