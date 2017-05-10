var app =angular.module("myStore",[]);

var fruits = [{name:"Mango",price:10.897},{name:"Bannana",price:20.45},{name:"Orange",price:30.00}];
app.controller("StoreController", function(){
	this.products = fruits;
});
