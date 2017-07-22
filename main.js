			var foodieApp = angular.module('foodieApp',[]);
			console.log(foodieApp);


    $('#myCarousel').carousel({
		pause: 'none'
	})

//chalo controller bnate hain

foodieApp.controller('mainController',function($scope) {

	$scope.restaurants = [{
	name: 'Domino Pizza',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Quick Bites',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	votes:'180',
  	reviews:'200',
	order:'90mins Rs.20',
	image: 'https://miami.eat24hours.com/files/cuisines/v4/italian.jpg'
},
{
    
	name: 'Gharana',
	address: ' Sheikh Zayed Road, Al Barsha 1, Dubai, AE - Dubai - United Arab Emirates',
	location: 'Dubai United Arab Emirates',
	category: 'FINE DINING',
	vote: '4.5',
	cuisines: 'Desserts',
	cost: '3200',
	hours: ' 7–11:30PM (Mon-Sun)',
	votes:'200',
  	reviews:'2000',
	order:'80mins Rs.50',
	image: 'http://www.pestos.net/images/pestos-food-home.jpg'
},
{
	
	name: 'Aromas',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'London',
	category: 'Casual · Delivery · Groups',
	vote: '4.0',
	cuisines: 'North Indian',
	cost: '600',
	hours: ' 11AM–3PM, 6–11PM (Mon-Sun)',
	votes:'300',
  	reviews:'250',
	order:'70mins Rs.20',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
{

	name: 'Chettinad',
	address: '16 Percy St, Bloomsbury, London W1T 1DT, UK',
	location: 'London',
	category: 'Indian',
	vote: '3.9',
	cuisines: 'cafe',
	cost: '1000',
	hours: '  11AM–3PM, 6–11PM (Mon-Sun)',
	votes:'180',
  	reviews:'500',
	order:'60mins Rs.30',
	image: 'http://www.hotelmaniprabha.com/images/restaurant/chat-n-cake-(3).jpg'
},
{

	name: 'Royal China',
	address: 'Victoria Terminus, Behind Sterling Cinema Building, Hazarimal Somani Road, Azad Maidan, Fort, Mumbai, Maharashtra 400001',
	location: 'Mumbai, Maharashtra',
	category: 'Casual Delivery · Good for kids',
	vote: '4.2',
	cuisines: 'Chinese',
	cost: '500',
	hours: '12–3:45PM, 7–11:45PM (Mon-Sun)',
	votes:'280',
  	reviews:'600',
	order:'30mins Rs.200',
	image: 'https://igx.4sqi.net/img/general/600x600/6091110_pGLCUT9bPgsyZ6uVXU5_-TaGlK20ca0pzYd1Dm8e_F0.jpg'
},
{

	name: 'Del Posto',
	address: '85 10th Ave, New York, NY 10011, USA',
	location: 'Connaught Place',
	category: 'QUICK BITES',
	vote: '4.5',
	cuisines: ' Italian',
	cost: '450',
	hours: '11:30AM–2PM, 5:30–11PM (Mon-Sun)',
	votes:'590',
  	reviews:'200',
	order:'40mins Rs.80',
	image: 'http://www.oncecall.com/css/s_img_new.php?image=http://www.oncecall.com//images/productimage/piara-sweets-and-resturant-11.jpg&width=425&height=400&zc=4'
},
{

	name: 'De Silveren Spiegel',
	address: 'Kattengat 4-6, 1012 SZ Amsterdam, Netherlands',
	location: 'Connaught Place',
	category: 'Casual Locals',
	vote: '4.5',
	cuisines: 'Dutch',
	cost: '2200',
	hours: '6–10PM (Mon-Sun)',
	votes:'170',
  	reviews:'100',
	order:'50mins Rs.90',
	image: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/33/a6/e1/chocolate-mousse-cake.jpg'
},
{

	name: 'La Piazza',
	address: ' First Floor, Hyatt Regency, Ring Road, Bhikaiji Cama Place, Near Fire Station,, New Delhi, Delhi 110066',
	location: 'Hyatt Regency Delhi',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Italian',
	cost: '22000',
	hours: '12–2:30PM, 7–11PM (Mon-Sun)',
	votes:'290',
  	reviews:'380',
	order:'80mins Rs.200',
	image: 'https://s-media-cache-ak0.pinimg.com/originals/b9/50/86/b95086c0db742f5437bd53761ee4af65.jpg'
}]
})
