(function() {
	/**
	 * Currency App Module
	 */
	angular
		.module( 'IncomeApp.config', [] )
		.config( RouteConfig );

	/**
	 * [inject modules to be used]
	 * @type {Array} - depenencies
	 */
	RouteConfig.$inject = [ '$stateProvider' ];
	/**
	 * [Route Configuration through ui.router]
	 * @param {Provider} $mdThemingProvider [Themes]
	 * @param {Provider} $stateProvider     [routing]
	 * @param {Provider} $urlRouterProvider [routing]
	 */
	function RouteConfig( $stateProvider ) {
		'use strict';

		// default URL
		// $urlRouterProvider.otherwise( '/' );

		// routing
		$stateProvider
			.state( 'incomeapp', {
				url: '',
				templateUrl: './views/form.tpl.html',
				controller: 'MainCtrl as main'
			});
	}
})();