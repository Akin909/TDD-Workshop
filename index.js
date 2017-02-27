function getChange(cost,cashPaid) {
	var coins = [200,100,50,20,10,5,2,1];
	var uncalcedChange = cashPaid - cost;
	
	var change =[];
	coins.forEach(function(coin) {
		while (coin<= uncalcedChange){
		 change.push(coin);
			uncalcedChange -= coin;
		}
	})
	console.log(change);
	return change;
}

if (typeof module !== undefined && module.exports){
	module.exports =  getChange;
}
