const binarySearch = target => {
    const arr = [3,4,9,10,11,5,2,1,6]
    // [1,2,3,4,5,6,9,10,11] ,l=9 ,target = 3
    const sortedArr = arr.sort((a,b)=>a-b);
    let start = 0;
    let end = arr.length - 1; // 8 
    let sum = start + end
    let mid = Math.floor(sum/2); // 1->0+8 = 4 arr[3] = 4> 3

    while(arr[mid] !== target && start <= end){
        if(arr[mid] > target){
            end = mid -1; // 1>4-1 = 3
        }
        else{
            start = mid +1; // 0+1 = 1
            }
            sum = start+end;
            mid = Math.floor(sum/2); //1> 0 + 3/2 = 1 arr[1] = 2 < 3 >> 1+3 = 4/2 = 2 arr[2] = 3

    }

    return arr[mid] === target ? mid : -1;
}



console.log(binarySearch(3));  