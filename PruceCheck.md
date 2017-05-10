<!-- # AngularTrial
For Angular Practice
-->
<HTML ng-app="myStore" ng-controller="StoreController as store">
	<HEAD>
		<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js">	</script>
		<script src="PriceCheck.js">
			
		</script>
	</HEAD>
	
	<BODY>
		Search: <input ng-model="name" />
		<table>
		<tr ng-repeat="product in store.products |filter:name">
			<td>{{product.name}} </td>
			<td>{{product.price | currency }}<td>
		</tr
		</table>
		</OL>
	</BODY>
</HTML>
