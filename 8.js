function reverseArray(arr)
{
    let tmp = [];
    let arrLength = arr.length;
    for (let i = arrLength - 1; i >= 0; i--)
    {
        tmp.push(arr[i]);
    }
    return(tmp);
}

function reverseArrayInPlace(arr)
{
    let tmp = "";
    for (let i = 0; i < arr.length/2; i++)
    {
        tmp = arr[i];
        arr[i] = arr[arr.length-i-1];
        arr[arr.length-i-1] = tmp;
    }
}

console.log(reverseArray(["A", "B", "C"]));

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);