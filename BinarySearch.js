const sArray =[2, 4, 12, 20, 45, 55, 67, 78, 84 ]

function binarySearch(arr, low, high, x)  {

    let mid = Math.floor((low+high)/2);

    if (arr[mid]==x) {

        return mid;

    }

    if (x <arr[mid]){

return binarySearch(arr, low, mid-1, x);
    }

    else{

return binarySearch(arr, low, mid+1, x);
    }
}

const result = binarySearch(sArray, 0, sArray.length-1, 4)

console.log(result);