let stringToRotate = 'w3resource'

let rotatedString = "";

for (let i = stringToRotate.length - 1; i >= 0; i--)
{
    rotatedString += stringToRotate[i];
    
}

console.log(rotatedString);