'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('app', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngStorage',
        'ui.router',
        'ui.bootstrap',
        'ui.load',
        'ui.jq',
        'ui.validate',
        'oc.lazyLoad',
        'pascalprecht.translate',
        'app.filters',
        'app.services',
        'app.directives',
        'app.controllers',
        'app.utilsService',
        'ui.echarts',
        'ngSanitize',
        'ui.select'

    ])
        .run(
        [          '$rootScope', '$state', '$stateParams',
            function ($rootScope,   $state,   $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;

            }
        ]
    )
        .config(
        [          '$stateProvider', '$urlRouterProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
            function ($stateProvider,   $urlRouterProvider,   $controllerProvider,   $compileProvider,   $filterProvider,   $provide) {

                // lazy controller, directive and service
                app.controller = $controllerProvider.register;
                app.directive  = $compileProvider.directive;
                app.filter     = $filterProvider.register;
                app.factory    = $provide.factory;
                app.service    = $provide.service;
                app.constant   = $provide.constant;
                app.value      = $provide.value;

                $urlRouterProvider
                    .otherwise('/app/dakacomments');
                $stateProvider
                    .state('app', {
                        abstract: true,
                        url: '/app',
                        templateUrl: 'tpl/app.html'
                    })

                    //用户详情统计
                    .state('app.dakausers', {
                        url: '/dakausers',
                        templateUrl: '/statistics-nailstar/html/users/users.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load(['/statistics-nailstar/js/users/users.js']);
                                }]
                        }
                    })

                    //求教程投票
                    .state('app.dakaqjcvote', {
                        url: '/dakaqjcvote',
                        templateUrl: '/statistics-nailstar/html/qjc/qjcVote.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load(['/statistics-nailstar/js/qjc/qjcVote.js']);
                                }]
                        }
                    })

                    //求教程传图
                    .state('app.dakaqjcphoto', {
                        url: '/dakaqjcphoto',
                        templateUrl: '/statistics-nailstar/html/qjc/qjcPhoto.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load(['/statistics-nailstar/js/qjc/qjcPhoto.js']);
                                }]
                        }
                    })

                    //求教程视频评论
                    .state('app.dakaqjcvideocomments', {
                        url: '/dakaqjcvideocomments',
                        templateUrl: '/statistics-nailstar/html/qjc/qjcVideoComments.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load(['/statistics-nailstar/js/qjc/qjcVideoComments.js']);
                                }]
                        }
                    })

                    //求教程视频播放
                    .state('app.dakaqjcvideoplay', {
                        url: '/dakaqjcvideoplay',
                        templateUrl: '/statistics-nailstar/html/qjc/qjcVideoPlay.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load(['/statistics-nailstar/js/qjc/qjcVideoPlay.js']);
                                }]
                        }
                    })

                    //我的行为统计
                    .state('app.dakameaction', {
                        url: '/dakameaction',
                        templateUrl: '/statistics-nailstar/html/me/meAction.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load(['/statistics-nailstar/js/me/meAction.js']);
                                }]
                        }
                    })

                    //我的粉丝排行
                    .state('app.dakamefansranking', {
                        url: '/dakamefansranking',
                        templateUrl: '/statistics-nailstar/html/me/meFansRanking.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load(['/statistics-nailstar/js/me/meFansRanking.js']);
                                }]
                        }
                    })

                    //我的关注排行
                    .state('app.dakamefollowsranking', {
                        url: '/dakamefollowsranking',
                        templateUrl: '/statistics-nailstar/html/me/meFollowsRanking.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load(['/statistics-nailstar/js/me/meFollowsRanking.js']);
                                }]
                        }
                    })

                    //我的关注统计
                    .state('app.dakamefollowscount', {
                        url: '/dakamefollowscount',
                        templateUrl: '/statistics-nailstar/html/me/meFollowsCount.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load(['/statistics-nailstar/js/me/meFollowsCount.js']);
                                }]
                        }
                    })

                    //我的点赞排行榜
                    .state('app.dakamelikeranking', {
                        url: '/dakamelikeranking',
                        templateUrl: '/statistics-nailstar/html/me/meLikeRanking.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load(['/statistics-nailstar/js/me/meLikeRanking.js']);
                                }]
                        }
                    })

                    //我的评论排行榜
                    .state('app.dakamecommentsranking', {
                        url: '/dakamecommentsranking',
                        templateUrl: '/statistics-nailstar/html/me/meCommentsRanking.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load(['/statistics-nailstar/js/me/meCommentsRanking.js']);
                                }]
                        }
                    })

                    //我的分时点赞统计
                    .state('app.dakamelikecount', {
                        url: '/dakamelikecount',
                        templateUrl: '/statistics-nailstar/html/me/meLikeCount.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load(['/statistics-nailstar/js/me/meLikeCount.js']);
                                }]
                        }
                    })

                    //我的分时评论统计
                    .state('app.dakamecommentscount', {
                        url: '/dakamecommentscount',
                        templateUrl: '/statistics-nailstar/html/me/meCommentsCount.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load(['/statistics-nailstar/js/me/meCommentsCount.js']);
                                }]
                        }
                    })

                    //会员经验值排行榜
                    .state('app.dakameexpranking', {
                        url: '/dakameexpranking',
                        templateUrl: '/statistics-nailstar/html/member/memberExpRanking.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load(['/statistics-nailstar/js/member/memberExpRanking.js']);
                                }]
                        }
                    })

                    //会员咖币排行榜
                    .state('app.dakacoinranking', {
                        url: '/dakacoinranking',
                        templateUrl: '/statistics-nailstar/html/member/memberCoinRanking.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load(['/statistics-nailstar/js/member/memberCoinRanking.js']);
                                }]
                        }
                    })

                    //会员经验总数和平均数
                    .state('app.dakamemberexpcount', {
                        url: '/dakamemberexpcount',
                        templateUrl: '/statistics-nailstar/html/member/memberExpCount.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load(['/statistics-nailstar/js/member/memberExpCount.js']);
                                }]
                        }
                    })

                    //会员咖币总数和平均数
                    .state('app.dakamembercoincount', {
                        url: '/dakamembercoincount',
                        templateUrl: '/statistics-nailstar/html/member/memberCoinCount.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load(['/statistics-nailstar/js/member/memberCoinCount.js']);
                                }]
                        }
                    })

                    //会员经验咖币总数和平均数
                    .state('app.dakamemberexpandcoin', {
                        url: '/dakamemberexpandcoin',
                        templateUrl: '/statistics-nailstar/html/member/memberExpAndCoin.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load(['/statistics-nailstar/js/member/memberExpAndCoin.js']);
                                }]
                        }
                    })

                    //会员经验指标获取排行榜
                    .state('app.dakamemberexpanalyse', {
                        url: '/dakamemberexpanalyse',
                        templateUrl: '/statistics-nailstar/html/member/memberExpAnalyse.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load(['/statistics-nailstar/js/member/memberExpAnalyse.js']);
                                }]
                        }
                    })

                    //圈子数据统计
                    .state('app.dakacomstaticits', {
                        url: '/dakacomstaticits',
                        templateUrl: '/statistics-nailstar/html/communities/communitiesStaticits.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load(['/statistics-nailstar/js/communities/communitiesStaticits.js']);
                                }]
                        }
                    })

                    //圈子活跃度排名
                    .state('app.dakacommunitiesranking', {
                        url: '/dakacommunitiesranking',
                        templateUrl: '/statistics-nailstar/html/communities/communitiesRanking.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load(['/statistics-nailstar/js/communities/communitiesRanking.js']);
                                }]
                        }
                    })

                    //圈子活跃度排名
                    .state('app.dakateachercommunitiesranking', {
                        url: '/dakateachercommunitiesranking',
                        templateUrl: '/statistics-nailstar/html/communities/communitiesTeacherRanking.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load(['/statistics-nailstar/js/communities/communitiesTeacherRanking.js']);
                                }]
                        }
                    })

                    //视频系列评论统计
                    .state('app.dakacommentsseries', {
                        url: '/dakacommentsseries',
                        templateUrl: '/statistics-nailstar/html/video/videoCommentsSeries.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load(['/statistics-nailstar/js/video/videoCommentsSeries.js']);
                                }]
                        }
                    })

                    //视频分期评论统计
                    .state('app.dakacommentstopic', {
                        url: '/dakacommentstopic',
                        templateUrl: '/statistics-nailstar/html/video/videoCommentsTopic.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load(['/statistics-nailstar/js/video/videoCommentsTopic.js']);
                                }]
                        }
                    })

                    //视频总评论统计
                    .state('app.dakacommentstotal', {
                        url: '/dakacommentstotal',
                        templateUrl: '/statistics-nailstar/html/video/videoCommentsTotal.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load(['/statistics-nailstar/js/video/videoCommentsTotal.js']);
                                }]
                        }
                    })

                    //视频分期播放
                    .state('app.dakavideotopic', {
                        url: '/dakavideotopic',
                        templateUrl: '/statistics-nailstar/html/video/videoPlayTopic.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load(['/statistics-nailstar/js/video/videoPlayTopic.js']);
                                }]
                        }
                    })

                    //视频系列播放
                    .state('app.dakavideoseries', {
                        url: '/dakavideoseries',
                        templateUrl: '/statistics-nailstar/html/video/videoPlaySeries.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load(['/statistics-nailstar/js/video/videoPlaySeries.js']);
                                }]
                        }
                    })

                    //视频总播放统计
                    .state('app.dakavideototal', {
                        url: '/dakavideototal',
                        templateUrl: '/statistics-nailstar/html/video/videoPlayTotal.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load(['/statistics-nailstar/js/video/videoPlayTotal.js']);
                                }]
                        }
                    })

                    //轮播图统计
                    .state('app.dakasliderdetails', {
                        url: '/dakasliderdetails',
                        templateUrl: '/statistics-nailstar/html/slider/sliderDetails.html',
                        resolve: {
                            deps: ['uiLoad',
                                function (uiLoad) {
                                    return uiLoad.load(['/statistics-nailstar/js/slider/sliderDetails.js']);
                                }]
                        }
                    })
            }
        ]
    )

// translate config
        .config(['$translateProvider', function($translateProvider){

            // Register a loader for the static files
            // So, the module will search missing translation tables under the specified urls.
            // Those urls are [prefix][langKey][suffix].
            $translateProvider.useStaticFilesLoader({
                prefix: 'l10n/',
                suffix: '.js'
            });

            // Tell the module what language to use by default
            $translateProvider.preferredLanguage('en');

            // Tell the module to store the language in the local storage
            $translateProvider.useLocalStorage();

        }])

    /**
     * jQuery plugin config use ui-jq directive , config the js and css files that required
     * key: function name of the jQuery plugin
     * value: array of the css js file located
     */
        .constant('JQ_CONFIG', {
            easyPieChart:   ['js/jquery/charts/easypiechart/jquery.easy-pie-chart.js'],
            sparkline:      ['js/jquery/charts/sparkline/jquery.sparkline.min.js'],
            plot:           ['js/jquery/charts/flot/jquery.flot.min.js',
                'js/jquery/charts/flot/jquery.flot.resize.js',
                'js/jquery/charts/flot/jquery.flot.tooltip.min.js',
                'js/jquery/charts/flot/jquery.flot.spline.js',
                'js/jquery/charts/flot/jquery.flot.time.min.js',
                'js/jquery/charts/flot/jquery.flot.categories.js',
                'js/jquery/charts/flot/jquery.flot.navigate.js',
                'js/jquery/charts/flot/jquery.flot.canvas.js',
                'js/jquery/charts/flot/jquery.flot.axislabels.js',
                'js/jquery/charts/flot/jquery.flot.symbol.js',
                'js/jquery/charts/flot/jquery.flot.orderBars.js',
                'js/jquery/charts/flot/jquery.flot.pie.min.js'],
            slimScroll:     ['js/jquery/slimscroll/jquery.slimscroll.min.js'],
            sortable:       ['js/jquery/sortable/jquery.sortable.js'],
            nestable:       ['js/jquery/nestable/jquery.nestable.js',
                'js/jquery/nestable/nestable.css'],
            filestyle:      ['js/jquery/file/bootstrap-filestyle.min.js'],
            slider:         ['js/jquery/slider/bootstrap-slider.js',
                'js/jquery/slider/slider.css'],
            chosen:         ['js/jquery/chosen/chosen.jquery.min.js',
                'js/jquery/chosen/chosen.css'],
            TouchSpin:      ['js/jquery/spinner/jquery.bootstrap-touchspin.min.js',
                'js/jquery/spinner/jquery.bootstrap-touchspin.css'],
            wysiwyg:        ['js/jquery/wysiwyg/bootstrap-wysiwyg.js',
                'js/jquery/wysiwyg/jquery.hotkeys.js'],
            dataTable:      ['js/jquery/datatables/jquery.dataTables.min.js',
                'js/jquery/datatables/dataTables.bootstrap.js',
                'js/jquery/datatables/dataTables.bootstrap.css'],
            vectorMap:      ['js/jquery/jvectormap/jquery-jvectormap.min.js',
                'js/jquery/jvectormap/jquery-jvectormap-world-mill-en.js',
                'js/jquery/jvectormap/jquery-jvectormap-us-aea-en.js',
                'js/jquery/jvectormap/jquery-jvectormap.css'],
            footable:       ['js/jquery/footable/footable.all.min.js',
                'js/jquery/footable/footable.core.css'],
            daterangepicker: ['js/jquery/bootstrap-daterangepicker/daterangepicker.js',
                'js/jquery/bootstrap-daterangepicker/daterangepicker-bs3.css']
        }
    )

// modules config
        .constant('MODULE_CONFIG', {
            select2:        ['js/jquery/select2/select2.css',
                'js/jquery/select2/select2-bootstrap.css',
                'js/jquery/select2/select2.min.js',
                'js/modules/ui-select2.js']
        }
    )

// oclazyload config
        .config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
            // We configure ocLazyLoad to use the lib script.js as the async loader
            $ocLazyLoadProvider.config({
                debug: false,
                events: true,
                modules: [
                    {
                        name: 'ngGrid',
                        files: [
                            'js/modules/ng-grid/ng-grid.min.js',
                            'js/modules/ng-grid/ng-grid.css',
                            'js/modules/ng-grid/theme.css'
                        ]
                    },
                    {
                        name: 'toaster',
                        files: [
                            'js/modules/toaster/toaster.js',
                            'js/modules/toaster/toaster.css'
                        ]
                    }
                ]
            });
        }])
        .config(["$httpProvider",function($httpProvider){
            $httpProvider.defaults.useXDomain = true;
            $httpProvider.defaults.withCredentials = true;
            $httpProvider.defaults.headers.common['X-Requested-With'] = "XMLHttpRequest";
            $httpProvider.interceptors.push('timestampMarker');
        }])

    ;
app.factory('timestampMarker', ["$location",function($location) {
    var timestampMarker = {
        responseError: function(response) {
            if(response.status == 401){
                $location.path('/access/signin');
                return;
            }
            return response;
        }
    };
    return timestampMarker;
}]);