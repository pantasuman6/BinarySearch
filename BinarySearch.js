const sArray =[2, 4, 12, 20, 45, 55, 67, 78, 84 ]

function binarySearch(arr, low, high, x)  {

    if(low>high)  {

        return 'Element not Found!'
    }

    let mid = Math.floor((low+high)/2);

    if (arr[mid]==x) {

        return mid;

    }

    if (x <arr[mid]){

return binarySearch(arr, low, mid-1, x);
    }

    else{

return binarySearch(arr, mid+1, high, x);
    }
}

const result = binarySearch(sArray, 0, sArray.length-1, 84)

console.log(result);