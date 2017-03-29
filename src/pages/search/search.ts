import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Search page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  public title: string = 'Search';
  public searchResults: {name: string, symbol: string, exchDisp: string}[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
    closeModal() {
      //modalService.closeModal();
    };

    search() {
      this.searchResults = [];
      //this.searchResults = ''; // but is it a string or an array of results
      //startSearch($scope.searchQuery);
    };

    /*var startSearch = ionic.debounce(function(query) {
      searchService.search(query)
        .then(function(data) {
          $scope.searchResults = data;
        });
    }, 400);*/

    goToStock(ticker) {
      //modalService.closeModal();
      //$state.go('app.stock', {stockTicker: ticker});
    };



}
