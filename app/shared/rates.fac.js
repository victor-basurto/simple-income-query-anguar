// (function() {
(function () {
	'use strict';

	angular
		.module( 'Shared.rates', [] )
		.factory( 'Rates', Rates );

	function Rates() {

		var hourlyRates, 
			dailyRates, 
			weeklyRates, 
			monthlyRates, 
			annuallyRates;

		// Apply when user types hourly income
		hourlyRates = {
			getHourly: function(value) {
				return value;
			},
			getDaily: function(value) {
				return value * 8;
			},
			getWeekly: function(value) {
				return value * 40;
			},
			getMonthly: function(value) {
				return value * 40 * 4;
			},
			getAnnually: function(value) {
				return value * 40 * 52;
			}
		};

		// Apply when user types daily income
		dailyRates = {
			getHourly: function(value) {
				return value / 8;
			},
			getDaily: function(value) {
				return value;	
			},
			getWeekly: function(value) {
				return value * 5;
			},
			getMonthly: function(value) {
				return ( value / 8 ) * 40 * 4;
			},
			getAnnually: function(value) {
				return (value  * 40 ) * 52;
			}
		};

		// Apply when user types weekly income
		weeklyRates = {
			getHourly: function(value) {
				return value / 40;
			},
			getDaily: function(value) {
				return value / 5;
			},
			getWeekly: function(value) {
				return value;
			},
			getMonthly: function(value) {
				return value * 4;
			},
			getAnnually: function(value) {
				return value * 52;
			}
		};

		// Apply when user types monthly income
		monthlyRates = {
			getHourly: function(value) {
				return (value / 4) / 40;
			},
			getDaily: function(value) {
				return (value / 4) / 5;
			},
			getWeekly: function(value) {
				return value / 4;
			},
			getMonthly: function(value) {
				return value;
			},
			getAnnually: function(value) {
				return ( value / 4 ) * 52;
			}
		};

		// Apply when user types yearly income
		annuallyRates = {
			getHourly: function(value) {
				return (value / 52) / 40;
			},
			getDaily: function(value) {
				return (value / 52) / 5;
			},
			getWeekly: function(value) {
				return value / 52;
			},
			getMonthly: function(value) {
				return (value / 52) * 4;
			},
			getAnnually: function(value) {
				return value;
			}
		};

		return {
			annuallyRates: annuallyRates,
			dailyRates: dailyRates,
			hourlyRates: hourlyRates,
			monthlyRates: monthlyRates,
			weeklyRates: weeklyRates
		};
	}
})();