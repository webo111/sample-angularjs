define(['angular','angular-route','angular-resource','jquery','bootstrap', 'home/context','coupon/context','kill/context'], function (ng) {
	'use strict';
	return ng.module('man', ['ngRoute','ngResource','man.home','man.coupon','man.kill']);
});