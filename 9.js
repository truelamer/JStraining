function arrayToList(arr)
{
    let list = {};
    list = {value: arr.shift(), rest: (arr.length == 0) ? null: arrayToList(arr)};
    return list;
}

function listToArray(list)
{
    let arr = [];
    while (list)
    {
        arr.push(list.value);
        list = list.rest;
    }
    return arr;

}

function prepend(elm, list)
{
    return {value: elm, rest: list};
}

function nth(list, number)
{
    if (list == null)
    {
        return undefined;
    }
    else
    {
        if(number == 0)
        {
            return list.value;
        }
        list = list.rest;
        return nth(list, --number);
    }
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));