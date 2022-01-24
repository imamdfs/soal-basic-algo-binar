function trafficLight(color) {
    switch (color) {
     case "red": 
        return "stop";
     case "orange": 
        return "careful";
     case "green":  
        return "go";
     case "blue":
     case "purple":
     case "axew": 
        return "color invalid";
     default:
       return "please insert color";
   }
 }
 
 // TEST CASE
 console.log(trafficLight("red")) // stop
 console.log(trafficLight("orange")) // careful
 console.log(trafficLight("green")) // go
 console.log(trafficLight("blue")) // color invalid
 console.log(trafficLight("purple")) // color invalid
 console.log(trafficLight("axew")) // color invalid
 console.log(trafficLight("")) // please insert color
