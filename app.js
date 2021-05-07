// CHAPTER 14-16  ARRAY


// 1. Declare an empty array using JS literal notation to store student names in
//  future. 
// var students = [];


// 2. Declare an empty array using JS object notation to store student names in
//  future. 
// var students = newArray();

// 3. Declare and initialize a strings array. 
// var cities = ["karachi","lahore","islamabad","Quetta","Peshawar"];

// 4.  Declare and initialize a numbers array. 
// var ages = [18,17,20,19,18,19];

// 5.  Declare and initialize a boolean array. 
// var boolean = [true,false];

// 6. Declare and initialize a mixed array. 
// var mixedArray = [31,"August",2002,"Pakistani",true];

// 7. Declare and Initialize an array and store available education
//  qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD).
//  Show the listed qualifications in your browser like: 
// var qualifications = ["SSC","HSC","BSC","BS","BCOM","MS","M.Phill.","PhD"];
// document.write("<h1>Qualifications:</h1>");
// document.write("1) "+qualifications[0]);
// document.write("<br>2) "+qualifications[1]);
// document.write("<br>3) "+qualifications[2]);
// document.write("<br>4) "+qualifications[3]);
// document.write("<br>5) "+qualifications[4]);
// document.write("<br>6) "+qualifications[5]);
// document.write("<br>7) "+qualifications[6]);
// document.write("<br>8) "+qualifications[7]);

// 8. Write a program to store 3 student names in an array.
// Take another array to store score of these three students.
//  Assume that total marks are 500 for each student, display the scores &
//   percentages of students like:   
// var students = ["Micheal","John","Tony"];
// var score = [320,230,480];
// var percent = [(score[0]/500)*100,(score[1]/500)*100,(score[2]/500)*100];

// document.write("Score of "+students[0]+" is "+score[0]+".Percentage "+percent[0]+"%");
// document.write("<br>Score of "+students[1]+" is "+score[1]+".Percentage "+percent[1]+"%");
// document.write("<br>Score of "+students[2]+" is "+score[2]+".Percentage "+percent[2]+"%");

// 9. Initialize an array with color names. Display the array elements
//  in your browser. 
// var colours = ["red"," green"," blue"," yellow"," pink"," purple"];
// document.write(colours);

// a. Ask the user what color he/she wants to add to the beginning & 
// add that color to the beginning of the array.
//  Display the updated array in your browser.
// var color = prompt("What Colour you want to add to the beginning of array?");
// colours.unshift(color);
// document.write(colours);

// b. Ask the user what color he/she wants to add to the end & add that color
//  to the end of the array.
//  Display the updated array in your browser. 
// var color = prompt("What Colour you want to add to the end of array?");
// colours.push(color);
// document.write(colours);

// c. Add two more color to the beginning of the array.
//  Display the updated array in your browser. 
// var color = prompt("What Colour you want to add to the beginning of array?","You can add one or more (comma seprated)");
// colours.unshift(color);
// document.write(colours);

// d. Delete the first color in the array.
//  Display the updated array in your browser. 
// colours.shift();
// document.write(colours);

// e. Delete the last color in the array.
//  Display the updated array in your browser.
// colours.pop();
// document.write(colours);

//   f. Ask the user at which index he/she wants to add a color & color name. 
//   Then add the color to desired position/index.
// Display the updated array in your browser. 
// var color = prompt("What Colour you want to add to the array?");
// var index = +prompt("On which index?");
// colours.splice(index, 0, color);
// document.write(colours);

  // g. Ask the user at which index he/she wants to delete color(s) & how many 
//    colors he/she wants to delete. Then remove the same number of color(s) 
//    from user-defined position/index. 
//     Display the updated array in your browser. 
// var index = +prompt("At which index you wants to delete color(s)?");
// var noOfColor = +prompt("How many colors?");
// colours.splice(index,noOfColor);
// document.write(colours); 

// 10. Write a program to store student scores in an array
//  & sort the array in ascending order using Array’s sort method. 
// var score = [320,230,480,120];
// document.write(score);
// score.sort();
// document.write(score);

// 11. Write a program to initialize an array with city names.
//  Copy 3 array elements from cities array to selected Cities array
// var cities = ["Karachi"," Lahore"," Islamabad"," Quetta"," Peshawar"];
// document.write("<h1>Cities List:</h1>")
// document.write(cities);
// document.write("<h1>Selected Cities List:</h1>")
// document.write(cities[2]+","+cities[3]);

// 12.  Write a program to create a single string from the below mentioned array: 
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
//  (Use array’s join method)  
// var arr = ["This","is","my","cat"];
// document.write("<h1>Array:</h1>")
// document.write(arr);
// document.write("<h1>String</h1>")   
// document.write(arr.join('      '));

// 13. Create a new array. Store values one by one in such a way that you can
//  access the values in the order in which they were stored.
//  (FIFO-First In First Out)   
// var devices = ["Keyboard","Mouse","Printer","Monitor"];
// document.write(devices);
// document.write("<h1>Devices:</h1>");
// document.write("<br>Out:<br>"+devices[0]);
// document.write("<br>Out:<br>"+devices[1]);
// document.write("<br>Out:<br>"+devices[2]);
// document.write("<br>Out:<br>"+devices[3]);

// 14. Create a new array. Store values one by one in such
//  a way that you can access the values in reverse order.
// (Last InFirst Out)   
// var devices = ["Keyboard","Mouse","Printer","Monitor"];
// document.write(devices);
// devices.reverse();
// document.write("<h1>Devices:</h1>");
// document.write("<br>Out:<br>"+devices[0]);
// document.write("<br>Out:<br>"+devices[1]);
// document.write("<br>Out:<br>"+devices[2]);
// document.write("<br>Out:<br>"+devices[3]);

// 15. Write a program to store phone manufacturers
//  (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display
//  following dropdown/select menu in your browser using document.write() method: 
// var phone = ["Apple","Samsung","Motorola","Nokia"," Sony & Haier"];
// document.write(`<select>
// <option>${phone[0]}</option>
// <option>${phone[1]}</option>
// <option>${phone[2]}</option>
// <option>${phone[3]}</option>
// <option>${phone[4]}</option>
// </select>`);