import '../styles/app.scss';

import angular from '../node_modules/angular';
import uiRouter from '../node_modules/angular-ui-router/release/angular-ui-router';

import lecturesModule from './lectures/lectures.module';
import config from './app.config';

const appModule = angular.module('labs', [uiRouter, lecturesModule]);
appModule.config(config);
appModule.run($state => {
    $state.go('labs');
});