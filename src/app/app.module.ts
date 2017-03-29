import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { LoginPage } from '../pages/login/login';
import { MyStocksPage } from '../pages/my-stocks/my-stocks';
import { SearchPage } from '../pages/search/search';
import { SignupPage } from '../pages/signup/signup';
import { StockPage } from '../pages/stock/stock';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    LoginPage,
    MyStocksPage,
    SearchPage,
    SearchPage,
    SignupPage,
    StockPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    LoginPage,
    MyStocksPage,
    SearchPage,
    SearchPage,
    SignupPage,
    StockPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
