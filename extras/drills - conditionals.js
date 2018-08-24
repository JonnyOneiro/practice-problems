var n1 = 1;
var n2 = 5;
var n3 = '5';
var n4 = null;
var n5;
var n6 = -10;
var n7 = 'hello';
var n8 = 1;
var n9 = '25';
var n10 = 'tuesday';
var n11 = 'wednesday';
var your_answer = false;
var your_reply = true;
//IN THE CONDITIONALS BELOW, change your_answer / your_reply to the answer that will make the answer correct, then click "run" on the jsbin console

//make a conditional that checks if n1 is less than n2 
if(your_answer){
  q1=true;
}

//make a conditional that checks if n1 is equal to n8
if(your_answer){
  q2=true;
}

//make a conditional that checks if n2 and n3 have the same value
if(your_answer){
  q3=true;
}

//make a conditional that checks if n2 and n3 have the same value and the same data type
if(your_reply){
  q4=true;
}
else{
  q4=false;
}

//make a conditional that checks if n1 is less than n2 
if(your_answer){
  q5=true;
}


//make a conditional that checks if n3 is greater than n4
if(your_answer){
  q6=true;
}

//make a conditional that checks if n4 is equal to n5
if(your_answer){
  q7=true;
}

//make a conditional that checks if n1 is greater than n5
if(your_reply){
  q8=true;
}
else{
  q8=false;
}

//make a conditional that checks if n3 > n9
if(your_answer){
  q9=true;
}

//make a conditional that checks if n7 is greater than n9
if(your_answer){
  q10=true;
}

//make a conditional that checks the following:
if(your_answer){  //check if n6 is less than or equal to 18
  q11 = 1;//if n6 is less than less than or equal to 18, q11 = 1
} 
else if(your_answer){//check if n6 is less than 13
  q11 = 2;//if n6 is less than 13, q11 = 2
}
else if(your_answer){ //check if n6 is less than 0
  q11 = 3; //if n6 is less than 0, q11 = 3
}
else { //if n6 is greater than 18
  q11 = 4; //if n6 is greater than 18, q11 =4
}
//also organize the above if statements to make the if statement work properly.  Make sure to keep the "q11 = " part of the code matched up with the appropriate conditional


//create a switch statement that does the following: 
/*sets q12 to 0 if n10 is 'sunday',
sets q12 to 1 if n10 is 'monday',
sets q12 to 2 if n10 is 'tuesday',
sets q12 to 3 if n10 is 'wednesday',
sets q12 to 4 if n10 is 'thursday',
sets q12 to 5 if n10 is 'friday',
sets q12 to 6 if n10 is 'saturday',
*/

//create a switch statement that does the following: 
/*sets q13 to 0 if n11 is 'sunday' or 'saturday',
sets q13 to 1 if n11 is 'monday','tuesday','wednesday','thursday', or 'friday', and sets q13 to -1 if it is none of these
*/

//alter the if statment to check if n3 and n2 are NOT equal in value and data type
if(your_answer){
  q14 = true;
}


//END OF CODE YOU NEED TO WORK ON//

function testValues(){
  var answer_keys = {"q1":true,"q2":true,"q3":true,"q4":false,"q5":true,"q6":true,"q7":true,"q8":false,"q9":true,"q10":true,"q11":3,"q12":2,"q13":1,"q14":true};
  var answer = {};
  for(var i=1; i<15; i++){
    //console.log('q'+i+' : '+window['q'+i]);
    answer['q'+i]=window['q'+i];
    var q = 'q'+i;
    var a = window['q'+i];
    if(answer_keys[q]===a ||  answer_keys[q]=='NaN' && isNaN(a)){
      console.log('q'+i+': value = '+a+ '--- correct');
    } else{
      console.error('q'+i+': your value = '+a+ ' correct value: '+answer_keys[q]+'--- INCORRECT');
    }
    
  }
}
testValues();