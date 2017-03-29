import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShrinkNumber } from '../../pipes/shrink-number';

/*
  Generated class for the MyStocks page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-my-stocks',
  templateUrl: 'my-stocks.html'
})
export class MyStocksPage {
  myStocksData: any[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public shrinkNumber: ShrinkNumber) {}

  ionViewAfterEnter() {
    this.getMyStocksData();
    console.log('ionViewAfterEnter MyStocksPage');
  }

  getMyStocksData() {
    /*
    myStocksArrayService.forEach(function(stock) {
      var promise = stockDataService.getPriceData(stock.ticker);
      this.myStocksData = [];
      promise.then(function(data) {
        this.myStocksData.push(stockPriceCacheService.get(data.symbol));
      });
    });
    $scope.$broadcast('scroll.refreshComplete');
    */
  };

  unfollowStock(ticker) {
    //followStockService.unfollow(ticker);
    this.getMyStocksData();
  };

}
