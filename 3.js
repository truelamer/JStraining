let size = 8;
let result = "";

for (let i = 0; i < size; i++)
{
    for (let j = 0; j < size / 2; j++)
    {
        result += "# ";
    }
    if (i % 2 == 0)
    {
        result += "\n ";
    }
    else
    {
        result += "\n";
    }
}
console.log(result);