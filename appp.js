            //JavaScript program to Calculate Sum of an Array
            function myFunction(){
            //To calculate the sum of an Array
            var SumValue=0;
            for(var i=0;i<arguments.length;i++){
                SumValue +=arguments[i];
            }
            //To print the sum of number passed to it in the Browser console
            console.log(SumValue);  
            //To retrieve the sum of number in the Browser Page
            return SumValue;   
            }
            function findSum(){
            //To pass the array value For an array(1,2,3)
            document.querySelector("h1").innerHTML=myFunction(1,2,3);
            //To pass the array value For array(1,2,3,4,5,6,7,8,9,10)
            document.querySelector("h3").innerHTML=myFunction(1,2,3,4,5,6,7,8,9,10);
            }