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

import { Constants } from '../providers/constants'

import { ChartDataCache } from '../providers/chart-data-cache'
import { DateService } from '../providers/date-service'
import { EncodeUri } from '../providers/encode-uri'
import { FillMyStocksCache } from '../providers/fill-my-stocks-cache'
import { FirebaseRef } from '../providers/firebase-ref'
import { FirebaseUserRef } from '../providers/firebase-user-ref'
import { FollowStock } from '../providers/follow-stock'
import { Modal } from '../providers/modal'
import { MyStocksArray } from '../providers/my-stocks-array'
import { MyStocksCache } from '../providers/my-stocks-cache'
import { News } from '../providers/news'
import { NotesCache } from '../providers/notes-cache'
import { Notes } from '../providers/notes'
import { Search } from '../providers/search'
import { StockData } from '../providers/stock-data'
import { StockDetailsCache } from '../providers/stock-details-cache'
import { StockPriceCache } from '../providers/stock-price-cache'
import { User } from '../providers/user'

import { ShrinkNumber } from '../pipes/shrink-number';
import { Characters } from '../pipes/characters';

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
    StockPage,
    ShrinkNumber,
    Characters
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
    Constants,
    ChartDataCache,
    DateService,
    EncodeUri,
    FillMyStocksCache,
    FirebaseRef,
    FirebaseUserRef,
    FollowStock,
    Modal,
    MyStocksArray,
    MyStocksCache,
    News,
    NotesCache,
    Notes,
    Search,
    StockData,
    StockDetailsCache,
    StockPriceCache,
    User,
    ShrinkNumber,
    Characters,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
