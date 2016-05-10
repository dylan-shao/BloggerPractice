'use strict'

angular.module('spBlogger', ['ui.router', 'spBlogger.admin', 'spBlogger.posts', 'ngResource', 'ngAnimate', 'pascalprecht.translate','ngCookies'])
    .config(['$locationProvider', '$urlRouterProvider', '$httpProvider',
        function($locationProvider, $urlRouterProvider,$httpProvider) {
        $locationProvider.html5Mode(false);
        $httpProvider.defaults.withCredentials = true;


    }])

.run(['$state', '$rootScope','$translate',function($state,$rootScope,$translate) {

        $state.go('allPosts');
        $rootScope.languagePreference = { currentLanguage: 'en' };
        $rootScope.languagePreference.switchLanguage = function(key) {
            $translate.use(key);
            $rootScope.languagePreference.currentLanguage = key;
        }

    }])
    .config(['$translateProvider',
        function($translateProvider) {
        	$translateProvider.useSanitizeValueStrategy('escaped');
            $translateProvider.translations('en', {
                TITLE: 'The Single Page Blogger',
                SUBTITLE: 'One Stop Blogging Solution',
                COMMENTS: 'Comments',
                BY: 'By',
                ADD: 'Add'
            });
            $translateProvider.translations('zh', {
                TITLE: '欢迎来到这里 ',
                SUBTITLE: '你好',
                COMMENTS: '评论',
                BY: '作者',
                ADD: '添加'
            });
            $translateProvider.preferredLanguage('en');
        }
    ]);
