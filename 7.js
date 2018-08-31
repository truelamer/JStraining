function range(start, end, step = 1)
{
    let arr = [];

    if (step > 0)
    {
        for (let i = start; i <= end; i+=step)
        {
            arr.push(i);
        }
    }
    else
    {
        for (let i = start; i >= end; i+=step)
        {
            arr.push(i);
        }
    }
    return arr;
}

function sum(arr)
{
    let sum = 0;
    arr.forEach(function (elm, i, arr) {
        sum += elm;
    });
    return sum;
}

console.log(sum(range(2, 6)));