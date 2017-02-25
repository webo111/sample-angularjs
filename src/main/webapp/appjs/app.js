define(['angular','angular-route','jquery','bootstrap', 'home/context','coupon/context','kill/context'], function (ng) {
	'use strict';
	return ng.module('man', ['ngRoute','man.home','man.coupon','man.kill']);
});