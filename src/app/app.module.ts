import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { SharedModule } from './shared/shared.module';

import { HTTP } from '@ionic-native/http/ngx';
import { CoreModule } from './core/core.module';

@NgModule({
	declarations: [AppComponent],
	entryComponents: [],
	imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, SharedModule, CoreModule],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
		BarcodeScanner,
		Vibration,
		HTTP,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
