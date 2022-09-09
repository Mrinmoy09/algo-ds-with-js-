function linearSearch(arr ,target){
    let i = 0;
    for(i;i<arr.length;i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([3,4,7,8,9,10,11,5,2],5)); 

/* The complexity of this algorithm is linear - O(n) since in the worst case scenario we will have
 to iterate over the whole array once to get the value we’re looking for. Best case = O(1)*/ 