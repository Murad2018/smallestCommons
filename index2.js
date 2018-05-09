function smallestCommons(arr) {

			arr.sort(function(a, b){
		  		return b-a;
		 	 });

			var newArr = [];
			for (var i = arr[0]; i >= arr[1]; i--) {
				newArr.push(i);
			}
		  
		  console.log(newArr);

		  var loop = 1;
		  var sum = 0;
		  var i;
		  do{
		  	sum = newArr[0] * loop * newArr[1]; 
		  	for (i = 2; i < newArr.length; i++) {
		  		if(sum%newArr[i] !== 0){
		  			break;
		  		}		  		
		 	}
		 	loop++;
		  } while(i<newArr.length);
		  
		  return sum;;
		}

       console.log(smallestCommons([5,1]));