function countBs(s) {
    let result = 0;
    for (let i = 0; i < s.length; i ++)
    {
        if (s.charAt(i) == "B")
        {
            result++;
        }
    }
    return result;
}

function countChar(s, c) {
    let result = 0;
    for (let i = 0; i < s.length; i ++)
    {
        if (s.charAt(i) == c)
        {
            result++;
        }
    }
    return result;
}

console.log(countBs("Beans"));
console.log(countChar("Beans", "B"));


