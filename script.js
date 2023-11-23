// Question 1 : 
class restaurantManager{  //creating a class
    restaurantList = [
        {
            id: 1,
            restaurantName: "KFC",
            address: "Anand Vihar",
            city: "Delhi"
        },
        {
            id: 2,
            restaurantName: "Domino",
            address: "Savita Vihar",
            city: "Delhi"
        },
        {
            id: 3,
            restaurantName: "Burger King",
            address: "Civil Lines",
            city: "Pune"
        },
        {
            id: 4,
            restaurantName: "Subway",
            address: "Cantonment",
            city: "Mumbai"
        }
    ]

    printAllRestaurantNames = () =>{
        return this.restaurantList.map(restaurant => restaurant.restaurantName)  //returning the restaurant names
    }

    filterRestaurantByCity = (cityName) =>{
        return this.restaurantList.filter(restaurant => restaurant.city == cityName) //filtering the restaurant by cityName
    }
}

// creating the class object 
const restaurantObj = new restaurantManager()

//calling both the functions & printing in the console
console.log(restaurantObj.printAllRestaurantNames());   //printing in all restaurant names in console
console.log(restaurantObj.filterRestaurantByCity('Delhi'));  //printing restaurant w.r.t. city name in console

// Question 2 :

orderData = { 
    'Below 500': 20,
    '500-1000': 29,
    '1000-1500': 30, 
    '1500-2000': 44, 
    'Above 2000': 76 
};

// calculating the total number of orders placed for the restaurant
const total_Orders = Object.values(orderData).reduce((prev, next)=> prev + next)
console.log(`The total number of orders is ${total_Orders}`);  //printing in total number of orders in console

// calculating the number of order proportion options
const order_proportion = Object.keys(orderData)
console.log(`The total number of order proportion is ${order_proportion.length} : ${order_proportion}`); // printing total number of order proportion options in console

// calculating the percentage of each proportion 
const arr = []

const result = order_proportion.map((item, index) =>{
    const obj = {
        'id' : index + 1,
        'order' : item,
        'order_percentage' : ((orderData[item]/total_Orders)*100).toFixed(2),
        'restaurant' : 'Punjabi Tadka' 
    }
    arr.push(obj)
})
console.log('The percentage of each proportion in the given format, check below:');
console.log(arr);  //printing percentage of each proportion in console