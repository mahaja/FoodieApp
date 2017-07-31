var foodieApp = angular.module('foodieApp',['ngRoute']);
			//console.log(foodieApp);



      $('#myCarousel').carousel({
      pause: 'none'
      })



foodieApp.config(function ($routeProvider) {  //pass function as parameter
 $routeProvider
 				.when('/',{
					templateUrl: 'page/login.html',
					controller: 'loginController'
						})
				.when('/home',{
					templateUrl: 'page/home.html',
					controller: 'mainController'
						})
            .when('/restaurant/:id', {
          		templateUrl: 'page/restaurant.html',
          		controller: 'restaurantController'
          	})
})




//chalo controller bnate hain
//yeah hogya login page ka controller

//restaurantController

foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
	//Empty
        $scope.ingredients = [];
        console.log($routeParams.id);
        $scope.restaurantId = $routeParams.id;
        var restaurants = [{
      	name: 'Domino Pizza',
      	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
      	location: 'Connaught Place',
      	category: 'Casual Dining, Bar',
      	vote: '4.2',
      	cuisines: 'Quick Bites',
      	cost: '2200',
      	hours: '12 Noon to 1 AM (Mon-Sun)',
        bestDish: {
        	name: ' Mehfil Indian',
        	image: 'http://mehfilbestcuisine.com/wp-content/uploads/2015/12/Featured-image-indian-food.jpg'
        },
      	votes:'180',
        	reviews:'200',
      	order:'90mins Rs.20',
        id:1,
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
        id:2,
      	hours: ' 7–11:30PM (Mon-Sun)',
        bestDish: {
        	name: 'Corn Pizza',
        	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
        },
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
        id:3,
      	hours: ' 11AM–3PM, 6–11PM (Mon-Sun)',
        bestDish: {
        	name: 'Tandoori fish',
        	image: 'https://i.ytimg.com/vi/lwjFQ7TLX_E/maxresdefault.jpg'
        },
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
        id:4,
      	hours: '  11AM–3PM, 6–11PM (Mon-Sun)',
        bestDish: {
        	name: 'Italian pasta',
        	image: 'https://ak6.picdn.net/shutterstock/videos/2404580/thumb/1.jpg?i10c=img.resize(height:160)'
        },
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
        id:5,
      	hours: '12–3:45PM, 7–11:45PM (Mon-Sun)',
        bestDish: {
        	name: 'Pizza',
        	image: 'https://quagliata.files.wordpress.com/2011/08/img_6360.jpg'
        },
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
        id:6,
      	hours: '11:30AM–2PM, 5:30–11PM (Mon-Sun)',
        bestDish: {
        	name: 'Aalu Slice',
        	image: 'https://2.imimg.com/data2/SU/MD/MY-3746163/french-fries-500x500.jpg'
        },
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
        id:7,
      	hours: '6–10PM (Mon-Sun)',
        bestDish: {
        	name: 'Idali,Dosa',
        	image: 'http://alliswall.com/file/11072/1920x1200/16:9/superb_indian_food.jpg'
        },
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
        id:8,
      	hours: '12–2:30PM, 7–11PM (Mon-Sun)',
        bestDish: {
        	name: 'Noodles',
        	image: 'https://indorehd.com/wp-content/uploads/2014/03/IMG_4801.jpg'
        },
      	votes:'290',
        	reviews:'380',
      	order:'80mins Rs.200',
      	image: 'https://s-media-cache-ak0.pinimg.com/originals/b9/50/86/b95086c0db742f5437bd53761ee4af65.jpg'
      }]

	      $scope.restaurant = restaurants[$routeParams.id - 1];
        $scope.getIngredients = function(url) {
          // Write AJAX call here
	var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'   //json object
    $http({
        'method': 'POST',      //we are passing the type of http eg. get post etc
        'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',       //url of the api
        'headers': {                                                                //extra info to the server
            'Authorization': 'Key bbf2734fb5c14aa3bf557c7505447aec',               //yahan api ker likhi jati h
            'Content-Type': 'application/json'                             //tells the browser which format are we send the data
        },
        'data': data,                                                    //we put the actual data we are sending the data inside
    //     success: function (response) {                                //runs the request successfully
    //                 var ingredients = response.outputs[0].data.concepts;         //storing the ingredient array got from server
    //         var list = '';                                                    //new list with empty string
    //         for (var i =0;i < ingredients.length;i++) {
    //             list += '<div class="ingredient">' + ingredients[i].name + '</div>'         //we are adding each ingredients name to the list variable string
    //         }
    //         $('.ingredients').html(list);
    //
    //     },
    //     error: function (xhr) {                                            //not successfully complted
    //         console.log(xhr);
    //     }
     })
          // Do something

          .then(function success(response) {
            var ingredients = response.data.outputs[0].data.concepts;
          	for (var i =0;i < ingredients.length;i++) {
          	$scope.ingredients.push(ingredients[i].name);
          	}
                		// $('.ingredients').html(list);
                		console.log(list);
  },
   function error(xhr) {
    console.log(xhr);
  });
}
$scope.ingredients = [];
$scope.probabilityvalue=[];

$scope.checkVegorNonVeg = function() {
  var flag_quit =0;
  ing_list = angular.copy($scope.ingredients); //hard copy
  prob_value= $scope.probabilityvalue;
  var elements = prob_value.filter(function(a){return a > 0.75;});
  ing_list.splice(elements.length,20)
  var nonveg = ["egg","meat","bacon","chicken","sushi","pork","steak"];

  for(j=0;j<ing_list.length;j++){
    for(i=0;i<nonveg.length;i++){
      if(ing_list[j] == nonveg[i]){
        flag_quit=1;
        break;
      }
    }
  if(flag_quit==1){
    $(".rest-extra").css("background-color", "red");
    break;
  }

}
if(flag_quit==0){$(".rest-extra").css("background-color", "green");}
}

})



$(function(){
$(".dropdown").hover(
      function() {
          $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
          $(this).toggleClass('open');
          $('b', this).toggleClass("caret caret-up");
      },
      function() {
          $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
          $(this).toggleClass('open');
          $('b', this).toggleClass("caret caret-up");
      });
});

//loginController

foodieApp.controller('loginController',function($scope,$location) {
	$scope.gotohome=function(){
		$location.url('home');
	}

	})

  //mainController

foodieApp.controller('mainController',function($scope) {
//$scope.restaurants = ['Farzi Cafe','Pizza Hut','Wenger\'s Deli','Sagar Ratna'];
	$scope.restaurants = [{
       //restaurant 1 for restaurant.html
	name: 'Domino Pizza',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Quick Bites',
	cost: '2200',
  id:1,
	hours: '12 Noon to 1 AM (Mon-Sun)',
	votes:'180',
  	reviews:'200',
	order:'90mins Rs.20',
	image: 'https://miami.eat24hours.com/files/cuisines/v4/italian.jpg'
},
{
               //restaurant 2 for restaurant.html
	name: 'Gharana',
	address: ' Sheikh Zayed Road, Al Barsha 1, Dubai, AE - Dubai - United Arab Emirates',
	location: 'Dubai United Arab Emirates',
	category: 'FINE DINING',
	vote: '4.5',
	cuisines: 'Desserts',
	cost: '3200',
  id:2,
	hours: ' 7–11:30PM (Mon-Sun)',
	votes:'200',
  	reviews:'2000',
	order:'80mins Rs.50',
	image: 'http://www.pestos.net/images/pestos-food-home.jpg'
},
{
           //restaurant 3 for restaurant.html
	name: 'Aromas',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'London',
	category: 'Casual · Delivery · Groups',
	vote: '4.0',
	cuisines: 'North Indian',
	cost: '600',
  id:3,
	hours: ' 11AM–3PM, 6–11PM (Mon-Sun)',
	votes:'300',
  	reviews:'250',
	order:'70mins Rs.20',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
{
                //restaurant 4 for restaurant.html
	name: 'Chettinad',
	address: '16 Percy St, Bloomsbury, London W1T 1DT, UK',
	location: 'London',
	category: 'Indian',
	vote: '3.9',
	cuisines: 'cafe',
	cost: '1000',
  id:4,
	hours: '  11AM–3PM, 6–11PM (Mon-Sun)',
	votes:'180',
  	reviews:'500',
	order:'60mins Rs.30',
	image: 'http://www.hotelmaniprabha.com/images/restaurant/chat-n-cake-(3).jpg'
},
{
          //restaurant 5 for restaurant.html
	name: 'Royal China',
	address: 'Victoria Terminus, Behind Sterling Cinema Building, Hazarimal Somani Road, Azad Maidan, Fort, Mumbai, Maharashtra 400001',
	location: 'Mumbai, Maharashtra',
	category: 'Casual Delivery · Good for kids',
	vote: '4.2',
	cuisines: 'Chinese',
	cost: '500',
  id:5,
	hours: '12–3:45PM, 7–11:45PM (Mon-Sun)',
	votes:'280',
  	reviews:'600',
	order:'30mins Rs.200',
	image: 'https://igx.4sqi.net/img/general/600x600/6091110_pGLCUT9bPgsyZ6uVXU5_-TaGlK20ca0pzYd1Dm8e_F0.jpg'
},
{
          //restaurant 6 for restaurant.html
	name: 'Del Posto',
	address: '85 10th Ave, New York, NY 10011, USA',
	location: 'Connaught Place',
	category: 'QUICK BITES',
	vote: '4.5',
	cuisines: ' Italian',
	cost: '450',
  id:6,
	hours: '11:30AM–2PM, 5:30–11PM (Mon-Sun)',
	votes:'590',
  	reviews:'200',
	order:'40mins Rs.80',
	image: 'http://www.oncecall.com/css/s_img_new.php?image=http://www.oncecall.com//images/productimage/piara-sweets-and-resturant-11.jpg&width=425&height=400&zc=4'
},
{
         //restaurant 7 for restaurant.html
	name: 'De Silveren Spiegel',
	address: 'Kattengat 4-6, 1012 SZ Amsterdam, Netherlands',
	location: 'Connaught Place',
	category: 'Casual Locals',
	vote: '4.5',
	cuisines: 'Dutch',
	cost: '2200',
    id:7,
	hours: '6–10PM (Mon-Sun)',
	votes:'170',
  	reviews:'100',
	order:'50mins Rs.90',
	image: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/33/a6/e1/chocolate-mousse-cake.jpg'
},
{
      //restaurant 8 for restaurant.html
	name: 'La Piazza',
	address: ' First Floor, Hyatt Regency, Ring Road, Bhikaiji Cama Place, Near Fire Station,, New Delhi, Delhi 110066',
	location: 'Hyatt Regency Delhi',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Italian',
	cost: '22000',
    id:8,
	hours: '12–2:30PM, 7–11PM (Mon-Sun)',
	votes:'290',
  	reviews:'380',
	order:'80mins Rs.200',
	image: 'https://s-media-cache-ak0.pinimg.com/originals/b9/50/86/b95086c0db742f5437bd53761ee4af65.jpg'
}]
})
