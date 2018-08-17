let size = 8;
let result = "";

for (let i = 0; i < size; i++)
{
    for (let j = 0; j < size / 2; j++)
    {
        if (i % 2 == 1)
        {
            result += " ";
            result += "#";
        }
        else
        {
            result += "#";
            result += " ";
        }
    }
    result += "\n";
}
console.log(result);