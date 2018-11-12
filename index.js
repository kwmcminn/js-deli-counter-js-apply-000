katzDeliLine = [];

function takeANumber(katzDeliLine){
  katzDeliLine.push(katzDeliLine.length +1);
  return `Welcome, You are number ${katzDeliLine.length} in line.`;
}
katzDeliLine[katzDeliLine.length-1]

//function "takeANumber "pushes" the arugmenet of "name" into the declared empty array 'katzDeliLine'
//Once the "takeANumber" function is called with the name argument, it returns the name and uses the
//.length property to look at the katzDeliLine array length and return the current number of names 
//in the queue. This allows us to show the customer their name and current position in line

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0) {
  return "There is nobody waiting to be served!"
    }
  else if (katzDeliLine.length > 0) {
    var first = katzDeliLine.shift();
    return (`Currently serving ${first}.`)
  }
}

//The function "nowServing" takes the current names in the 'katzDeliLine' array, and shows which customer
//is currently being served. Once again using the .length property, we first look to see if there are 
//any names in the array. If there are not, we return 'There is nobody waiting to be served' If the 
//length of the array is greater than 0 names(items), we  create a new variable and remove the first name using 
//the .shift method in the array (next in line) and return it by leveraging a new variable "first". 

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return ("The line is currently empty.");
  }
 var queue = [];
   for(var i = 0; i<katzDeliLine.length;i++){
  queue.push(`${i+1}. ${katzDeliLine[i]}`);
}
return "The line is currently: "+ queue.join(', ');
}
  
//In the function 'currentLine', we are attempting to show the current line of customers in the queue. Once again, 
//using the .length property, we look to see if there are any items in the 'katzDeliLine' array.  By using the quality property, 
//if our array length = 0, we return "The line is currently empty".  The next part is a little bit tricky, but we can accomplish this 
//task using a 'for loop.'  If there ARE names (items) in our 'katzDeliLine' array, we create a new empty array called 'queue', as well as 
//implement a 'for loop' to iterate throughout the length of our 'katzDeliLine' array. We then use the 'push' method to add the current item
//number in the array , along with pushing the name that is being iterated twithin the array using the for loop. The current position and name both get
//pushed into our 'queue' array, which we then call and return to our customers. In my final string, I used the .join method to join all of the items 
//in my 'queue' array, which then displays the current names and positions in our queue to the customers. 
