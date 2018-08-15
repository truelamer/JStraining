function isEven(a)
{
    if ((a == 1) || (a == 0))
    {
        return !a;
    }
    else
    {
        return(isEven(a-2));
    }
}

console.log(isEven(75));

//если работать с Math.abs(a), то для отрицательных чисел тоже все корректно