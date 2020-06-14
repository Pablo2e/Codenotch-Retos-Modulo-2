function a()
{
    console.log("Hola desde a")
}
function main(f)
{
    console.log("Hola desde main");
    f();
}

function b()
{
    console.log("Hola desde b")
}

main(a)
