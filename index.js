document.getElementById("button").addEventListener("click", (e) =>
{
    let hex = document.getElementById("hex").checked
    let color = document.getElementById("color").value;

    let error = false;

    if(hex && color.trim().length > 0)
    {
        color = parseInt(color, 16);
    } else if(!hex && color.trim().length > 0){
        color = parseInt(color, 10); 
        if(color === 0 && document.getElementById("color").value.search(/[xX]/))
        {
            error = true;
            confirm = confirm("It appears that you input a hex value but didnt check the hex box. Did you want to input a hex color?")

            if(confirm === true)
            {
                error = false;
                color = parseInt(document.getElementById("color").value, 16);
            }
        }
    }
    console.log(color)

    const alpha = (color & 0xFF000000) >>> 24;
    const red = (color & 0x00FF0000) >>> 16;
    const green = (color & 0x0000FF00) >>> 8;
    const blue = (color & 0x000000FF);

    output = `
            <h3 class="mx-auto text-center mb-3">Color Channels</h3>

            <ul class="list-group-flush" id="output">
                <li class="list-group-item">Alpha: ${alpha} (${(alpha/255).toFixed(2)})</li>
                <li class="list-group-item">Red: ${red} (${(red/255).toFixed(2)})</li>
                <li class="list-group-item">Green: ${green} (${(green/255).toFixed(2)})</li>
                <li class="list-group-item">Blue: ${blue} (${(blue/255).toFixed(2)})</li>
            </ul>
        `
    if(!error)
    {
        document.getElementById("output").innerHTML = output;
    }
})