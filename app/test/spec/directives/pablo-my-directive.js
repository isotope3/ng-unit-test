describe('Directive: myDirective', function() {

	'use strict';

	beforeEach(module('myDirectiveModule'));
	beforeEach(module('templates'));

	var element,
		scope;

	beforeEach(inject(function($rootScope, $compile) {
		scope = $rootScope.$new();
		element = angular.element('<my-directive something="thing"></my-directive>');
		element = $compile(element)(scope);
		scope.thing = {
			name: 'My thing'
		};
		scope.$digest();
	}));

	it('should render something', function() {
		var h1 = element.find('h1');
		expect(h1.text()).toBe('My thing');
	});

	it('should update the rendered text when scope changes', function() {
		scope.thing.name = 'My new thing';
		scope.$digest();
		var h1 = element.find('h1');
		expect(h1.text()).toBe('My new thing');
	});

	describe('Directive controller', function() {

		var controller;
		beforeEach(function() {
			controller = element.controller('myDirective');
		});

		it('should do something', function() {
			expect(controller.doSomething).toBeDefined();
			controller.doSomething();
			expect(controller.something.name).toBe('Do something');
		});
	});
});
