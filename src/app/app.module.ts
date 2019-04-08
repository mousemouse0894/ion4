import { MicrogearService } from './services/microgear.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { MyserviceService } from './services/myservice.service';

export const firebaseConfig = {
  apiKey: "AIzaSyCEwZG_PgCAhXNdbZb6ODilEKf8j1XhyHo",
  authDomain: "lon4-b3f81.firebaseapp.com",
  databaseURL: "https://lon4-b3f81.firebaseio.com",
  projectId: "lon4-b3f81",
  storageBucket: "lon4-b3f81.appspot.com",
  messagingSenderId: "317940159288"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AngularFireDatabase,MyserviceService,MicrogearService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
