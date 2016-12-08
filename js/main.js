import angular from 'angular';
import 'angular-ui-router';
import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

import config from './config';

// CONTROLLERS


angular
  .module('app', ['ui.router'])
  .config(config)
;
