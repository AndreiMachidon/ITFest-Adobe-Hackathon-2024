import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MapComponent } from './map/map.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import { HomeComponent } from './home/home.component';
import { environment } from 'src/environments/environment';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';

//firestore

// import { AngularFirestoreModule} from '@angular/fire/firestore';
import { FirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import {MatMenuModule} from '@angular/material/menu';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { MatInputModule } from '@angular/material/input';
import { ReceiverNeedsDialogComponent } from './map/receiver-needs-dialog/receiver-needs-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MapComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    UserListComponent,
    UserComponent,
    ReceiverNeedsDialogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatMenuModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatTableModule,
    MatIconModule,
    MatSliderModule,
    FormsModule,
    ToastModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
