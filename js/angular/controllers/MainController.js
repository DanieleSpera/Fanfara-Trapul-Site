app.controller('MainController',['$scope',function($scope){
	$scope.today = new Date();

	$scope.filmati=[
		"mAu6RzC-0IY",
		"HcBUcTAjFLU",	
		"pqBvUWoWuyo",
		"PayDaoHsBow",
	];

	$scope.evento=[
		{ 
		  giornodata: new Date(2015,07,01, 21, 00, 00, 00),
		  evento: new serata ("Festa Privata","","Romano di Lombardia"),
		},
		{
		  giornodata: new Date(2015,06, 10, 21, 00, 00, 00),
		  evento: new serata ("Festa degli alpini","Via dell'Armonia","Romano di Lombardia"),
		},

	];

	$scope.repertorio=[
		"Trapulì",
		"Marcia dei bassi",
		"La Ricciolina",
		"Rosamunda",	
		"Amapola",
		"Paloma",
		"Profumo e balocchi",
		"Maslana",
		"Romagna Sangiovese",
		"Mutandine",
		"'O surdato 'nnammurato",
		"O mia bella Madunina",
		"Tanto pe'cantà",
		"Oi Marì",
		"Cacao Meravigliao",
		"Carnevale di Venezia",
	];

}])

/*CLASSI */
var serata = function(nomevento,via,paese){
	this.nomevento=nomevento;
	this.via=via;
	this.paese=paese;
};