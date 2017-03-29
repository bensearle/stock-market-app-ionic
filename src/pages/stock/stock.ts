import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Stock page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-stock',
  templateUrl: 'stock.html'
})
export class StockPage {

  private ticker: any;// = $stateParams.stockTicker;
  private stockNotes: any[] = [];

  private following: any;// = followStockService.checkFollowing(this.ticker);
  private oneYearAgoDate: any;// = dateService.oneYearAgoDate();
  private todayDate: any;// = dateService.currentDate();

  // default chart setting
  private chartView: number = 4;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewAfterEnter() {
    console.log('ionViewAfterEnter StockPage');
    this.getPriceData();
    this.getDetailsData();
    this.getChartData();
    this.getNews();
    this.stockNotes;// = notesService.getNotes($scope.ticker);
  }


  chartViewFunc(n) {
    this.chartView = n;
  };

  toggleFollow() {
    if(this.following) {
      //followStockService.unfollow(this.ticker);
      this.following = false;
    }
    else {
      //followStockService.follow(this.ticker);
      this.following = true;
    }
  };

  openWindow(link) {
    var inAppBrowserOptions = {
      location: 'yes',
      clearcache: 'yes',
      toolbar: 'yes'
    };

    //$cordovaInAppBrowser.open(link, '_blank', inAppBrowserOptions);
  };

  addNote() {
    note = {title: 'Note', body: '', date: this.todayDate, ticker: this.ticker};

    var note;/* = $ionicPopup.show({
      template: '<input type="text" ng-model="note.title" id="stock-note-title"><textarea type="text" ng-model="note.body" id="stock-note-body"></textarea>',
      title: 'New Note for ' + $scope.ticker,
      scope: $scope,
      buttons: [
        {
          text: 'Cancel',
          onTap: function(e) {
            return;
          }
          },
        {
          text: '<b>Save</b>',
          type: 'button-balanced',
          onTap: function(e) {
            notesService.addNote($scope.ticker, $scope.note);
          }
        }
      ]
    });*/

    note.then(function(res) {
      //this.stockNotes = notesService.getNotes($scope.ticker);
    });
  };

  openNote(index, title, body) {
    /*$scope.note = {title: title, body: body, date: this.todayDate, ticker: this.ticker};

    var note = $ionicPopup.show({
      template: '<input type="text" ng-model="note.title" id="stock-note-title"><textarea type="text" ng-model="note.body" id="stock-note-body"></textarea>',
      title: $scope.note.title,
      scope: $scope,
      buttons: [
        {
          text: 'Delete',
          type: 'button-assertive button-small',
          onTap: function(e) {
            notesService.deleteNote($scope.ticker, index);
          }
        },
        {
          text: 'Cancel',
          type: 'button-small',
          onTap: function(e) {
            return;
          }
          },
        {
          text: '<b>Save</b>',
          type: 'button-balanced button-small',
          onTap: function(e) {
            notesService.deleteNote($scope.ticker, index);
            notesService.addNote($scope.ticker, $scope.note);
          }
        }
      ]
    });

    note.then(function(res) {
      $scope.stockNotes = notesService.getNotes($scope.ticker);
    });*/
  };


  getPriceData() {

    var promise;// = stockDataService.getPriceData($scope.ticker);

    promise.then(function(data) {
      this.stockPriceData = data;

      if(data.chg_percent >= 0 && data !== null) {
        this.reactiveColor = {'background-color': '#33cd5f', 'border-color': 'rgba(255,255,255,.3)'};
      }
      else if(data.chg_percent < 0 && data !== null) {
        this.reactiveColor = {'background-color' : '#ef473a', 'border-color': 'rgba(0,0,0,.2)'};
      }
    });
  }

  getDetailsData() {

    var promise;// = stockDataService.getDetailsData($scope.ticker);

    promise.then(function(data) {
      this.stockDetailsData = data;
    });
  }

  getChartData() {

    var promise;// = chartDataService.getHistoricalData($scope.ticker, $scope.oneYearAgoDate, $scope.todayDate);

    promise.then(function(data) {

      this.myData = JSON.parse(data)
        .map(function(series) {
          series.values = series.values.map(function(d) { return {x: d[0], y: d[1] }; });
          return series;
        });
    });
  }

  getNews() {
    /*$scope.newsStories = [];

    var promise = newsService.getNews($scope.ticker);

    promise.then(function(data) {
      $scope.newsStories = data;
    });*/
  }


  // chart option functions
  // top chart x axis
  xTickFormat(d) {
    //var dx = $scope.myData[0].values[d] && $scope.myData[0].values[d].x || 0;
    //if (dx > 0) {
      //return d3.time.format("%b %d")(new Date(dx));
    //}
    //return null;
  };

  // bottom chart x axis
  x2TickFormat(d) {
    //var dx = $scope.myData[0].values[d] && $scope.myData[0].values[d].x || 0;
    //return d3.time.format('%b %Y')(new Date(dx));
  };


  y1TickFormat(d) {
    //return d3.format(',f')(d);
  };

  // top chart y axis price
  y2TickFormat(d) {
    //return d3.format('s')(d);
  };

  // bottom chart y axis volume
  y3TickFormat(d) {
    //return d3.format(',.2s')(d);
  };

  y4TickFormat(d) {
    //return d3.format(',.2s')(d);
  };

  xValueFunction(d, i) {
    return i;
  };

  private marginBottom: number;// = ($window.innerWidth / 100) * 10;

  private chartOptions: any = {
    chartType: 'linePlusBarWithFocusChart',
    data: 'myData',
    margin: {top: 15, right: 0, bottom: this.marginBottom, left: 0},
    interpolate: "cardinal",
    useInteractiveGuideline: false,
    yShowMaxMin: false,
    tooltips: false,
    showLegend: false,
    useVoronoi: false,
    xShowMaxMin: false,
    xValue: this.xValueFunction,
    xAxisTickFormat: this.xTickFormat,
    x2AxisTickFormat: this.x2TickFormat,
    y1AxisTickFormat: this.y1TickFormat,
    y2AxisTickFormat: this.y2TickFormat,
    y3AxisTickFormat: this.y3TickFormat,
    y4AxisTickFormat: this.y4TickFormat,
    transitionDuration: 500
  };


}
