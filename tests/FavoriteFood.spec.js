describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should filter on food correctly', function () {
       var mockedList = [{
           name: 'Jonh',
           favoriteFood: 'steak'
       }, {
           name: 'Jane',
           favoriteFood: 'chicken'
       }, {
           name: 'Jim',
           favoriteFood: 'pork'
       }];

        var results = $filter('favoriteFood')(mockedList, 'steak');

        expect(results.length).toBe(1);
        expect(results[0].name).toBe('Jonh');
    });


});
