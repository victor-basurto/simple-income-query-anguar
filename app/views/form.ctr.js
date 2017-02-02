(function() {
	'use strict';

	angular
		.module( 'View.form', [] )
		.controller( 'MainCtrl', MainCtrl );

	// modules/dependencies to be used
	MainCtrl.$inject = [ 'Rates' ];

	/**
	 * [MainCtrl Constructor]
	 * @param {Module} Rates [Objects where operations are excuted]
	 */
	function MainCtrl( Rates ) {
		var vm = this;

		vm.clickedItem = clickedItem;
		vm.selectedItem = 'Tipo de Salario';
		/**
		 * [clickedItem get rates users input]
		 * @param  {String} salaryType [Type of Salary specified from the user]
		 * @param  {[type]} value      [income user received]
		 * @return {[type]}            [description]
		 */
		function clickedItem( salaryType, value ) {
			var val;
			console.log(salaryType);
			// String holding income type
			vm.selectedItem = salaryType; 

			// input field value / income
			val = parseFloat( document.getElementsByName( 'salary' )[0].value, 10 );

			if ( !val ) {
				vm.errorMsg = 'enter a value thank you';
			} else {
				/**
				 * [switch evaluate incometype]
				 * @param  {String} salaryType [String to be evaluated according to: 
				 *                             	hour, day, week, month, year]
				 * @return {Number}            [variables holding icometype values]
				 */
				switch( salaryType ) {
					case 'Hora':
						vm.hourlyRate = Rates.hourlyRates.getHourly(val);
						vm.dailyRate = Rates.hourlyRates.getDaily(val);
						vm.weeklyRate = Rates.hourlyRates.getWeekly(val);
						vm.monthlyRate = Rates.hourlyRates.getMonthly(val);
						vm.annuallyRate = Rates.hourlyRates.getAnnually(val);
						break;
					case 'Dia':
						vm.hourlyRate = Rates.dailyRates.getHourly(val);
						vm.dailyRate = Rates.dailyRates.getDaily(val);
						vm.weeklyRate = Rates.dailyRates.getWeekly(val);
						vm.monthlyRate = Rates.dailyRates.getMonthly(val);
						vm.annuallyRate = Rates.dailyRates.getAnnually(val);
						break;
					case 'Semanal':
						vm.hourlyRate = Rates.weeklyRates.getHourly(val);
						vm.dailyRate = Rates.weeklyRates.getDaily(val);
						vm.weeklyRate = Rates.weeklyRates.getWeekly(val);
						vm.monthlyRate = Rates.weeklyRates.getMonthly(val);
						vm.annuallyRate = Rates.weeklyRates.getAnnually(val);
						break;
					case 'Mensual':
						vm.hourlyRate = Rates.monthlyRates.getHourly(val);
						vm.dailyRate = Rates.monthlyRates.getDaily(val);
						vm.weeklyRate = Rates.monthlyRates.getWeekly(val);
						vm.monthlyRate = Rates.monthlyRates.getMonthly(val);
						vm.annuallyRate = Rates.monthlyRates.getAnnually(val);
						break;
					case 'Anual':
						vm.hourlyRate = Rates.annuallyRates.getHourly(val);
						vm.dailyRate = Rates.annuallyRates.getDaily(val);
						vm.weeklyRate = Rates.annuallyRates.getWeekly(val);
						vm.monthlyRate = Rates.annuallyRates.getMonthly(val);
						vm.annuallyRate = Rates.annuallyRates.getAnnually(val);
						break;
				}
			}
		}
	}
})();
