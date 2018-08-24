/*fill the following variables with values according to their names*/

var array_var; //fill with 10 numbers between 1 and 20
var array2_var; //leave empty
var array3_var; //fill with the names of 10 classmates
var object_literal_var; //leave empty
var object2_literal_var; //a list of 4 topics you've learned here as keys, with values of objects.  the objects will have a description and a rating of 'enjoyment' from 1 to 10, 10 being highly enjoyed, for example 
/*{
    'underwater basket weaving': {
            description: 'the weaving of baskets underwater',
            fun_factor: 5
    },
    'badminton debate': {
            description: 'make friends and influence enemies with a birdie and racket',
            fun_factor: 8
    },
}*/
var number_var; //give it a number between 1 and 10 
/***************************************/

//using the variables above, do the following
/*
1) copy array_var by value into array2_var.  NOT BY REFERENCE.
    change one value in array2_var, show that it did not also change something in array_var
2) create a function, 'find_val'.  
    @purpose: finds the times a number is found in an array
    @params: 
      needle: the number to be found
      haystack: the array to search
    @globals: none
    @returns: a number with the count of times needle was found in haystack
    example: some_function(5,[3,2,5,5,1,2,5]) would return 3
    hint: make a variable to hold the times the number was found and increment it
    test: use number_var and array_var to call your function and test it
*/
    
    
    
    
    
/*****************************************
3) create a function, 'pick_rating'.  
    @purpose: chooses a random number inside an array, pairs it with a name in another array, and puts those two values into an object literal {name:?, rating:?}, and pushes that object into a new array
    @params: 
      ratings: the array with numbers inside to randomly choose
      names: the array to names to pair numbers with
    @globals: none
    @returns: an array with objects inside it.  Each object has one of the names from the name array, and one of the ratings from the ratings array
    example: 
        some_function([2,5,1,2,4],['Bob','Clyde','Gertrude']) 
        would return 
            [
              {name: 'Bob', rating: 5}, 
              {name: 'Clyde', rating: 1},
              {name: 'Gertrude', rating: 4}
            ]
    hint: your names array should dictate how many times your loop runs.
    test: call your function using array3_var and array_var
*/











/*****************************************
4) create a function, 'assign_topics'.  
    @purpose: takes an array of names and an object of topics.  Randomly picks a number of topics, and assigns them to the names, outputting an array of objects with names and topics
    @params: 
      names: the array to names to pair numbers with
      topics: an object with topics inside it 
    @globals: none
    @returns: an array with objects inside it.  Each object has one of the names from the name array, and one or more topics from the original topic object
    example: 
    var topics =  {'underwater basket weaving': {
            description: 'the weaving of baskets underwater',
            fun_factor: 5
    },
    'badminton debate': {
            description: 'make friends and influence enemies with a birdie and racket',
            fun_factor: 8
    },}
        some_function(['Bob'],topics) 
        would return 
            [
              {name: 'Bob', topics: {'underwater basket weaving': {
            description: 'the weaving of baskets underwater',
            fun_factor: 5}
               }
            ]
    hint: a random number of topics should be assigned to each name, and each topic assigned randomly
    test: call your function using array3_var and object2_literal_var
    
*/    