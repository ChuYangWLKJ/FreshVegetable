'use strict';

/**
 * Config for the router
 */
angular.module('app')
  .run(
    ['$rootScope', '$state', '$stateParams',
      function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
      }
    ]
  )
  .config(
    ['$stateProvider', '$urlRouterProvider',
      function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider
          .otherwise('/home');
        $stateProvider

          .state('home', {

            url: '/home',
            templateUrl: 'tpl/home/v1.0/home.html',
            resolve: {
              deps: ['$ocLazyLoad',
                function ($ocLazyLoad) {
                  return $ocLazyLoad.load(['tpl/home/v1.0/css/home.css']);

                }
              ]
            }

          })



          .state('app', {
            abstract: true,
            url: '/app',
            templateUrl: 'tpl/app.html'
          })


          .state('app.main', {
            url: '/main',
            templateUrl: 'tpl/main.html',
            resolve: {
              deps: ['$ocLazyLoad',
                function ($ocLazyLoad) {
                  return $ocLazyLoad.load(['js/controllers/chart.js']);

                }
              ]
            }
          })



          // // table
          // .state('app.table', {
          //   url: '/table',
          //   template: '<div ui-view></div>'
          // })
          // // 商品列表
          // .state('app.table.commodity_tables', {
          //   url: '/commodity_tables',
          //   templateUrl: 'tpl/commodity_tables.html'
          // })

          // form
          .state('app.form', {
            url: '/form',
            template: '<div ui-view class="fade-in"></div>',
            resolve: {
              deps: ['uiLoad',
                function (uiLoad) {
                  return uiLoad.load('js/controllers/commodity.js');
                }
              ]
            }
          })

          // 商品添加
          .state('app.form.commodity_add', {
            url: '/commodity_add',
            templateUrl: 'tpl/commodity_add.html'
          })




      }
    ]
  );