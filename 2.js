for (let i = 1; i < 101; i++)
{
    if ((i % 3) == 0)
    {
        console.log(i + " Fizz");
    }
    else if ((i % 5) == 0)
    {
        console.log(i + " Buzz");
    }
    else
    {
        console.log(i);
    }
}
console.log("--------- \n Исправленная \n---------");

for (let i = 1; i < 101; i++)
{
    let res = i + " ";

    if ((i % 3) == 0)
    {
        res += "Fizz"
    }
    if ((i % 5) == 0)
    {
        res += "Buzz";
    }
    console.log(res);
}
