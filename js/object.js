$(function() {
	console.log(false.toString());
	console.log([1,2,3].toString());
	function Foo() {};
	Foo.bar = 1;
	console.log(Foo.bar);

	var foo = {};

	var bar = {test: 12};

	var foo = {name: 'kitten'};
	console.log(foo.name);
	console.log(foo['name']);

	var get = 'name';


});