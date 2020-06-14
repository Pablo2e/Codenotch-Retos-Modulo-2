let total=0
let cant1=0
let cant2=0
let cant3=0
let cant4=0
let cant5=0
let cant6=0
function agregarubB(){
    cant1++
    let valor = document.getElementById("ubB").value;
    total+=parseFloat(valor)
    alert("Agregado al carrito")
}
function agregarubR(){
    cant2++
    let valor = document.getElementById("ubR").value;
    total+=parseFloat(valor)
    alert("Agregado al carrito")
}
function agregarubT(){
    cant3++
    let valor = document.getElementById("ubT").value;
    total+=parseFloat(valor)
    alert("Agregado al carrito")
}
function agregarubW(){
    cant4++
    let valor = document.getElementById("ubW").value;
    total+=parseFloat(valor)
    alert("Agregado al carrito")
}
function agregarsn(){
    cant5++
    let valor = document.getElementById("sn").value;
    total+=parseFloat(valor)
    alert("Agregado al carrito")
}
function agregarso(){
    cant6++
    let valor = document.getElementById("so").value;
    total+=parseFloat(valor)
    alert("Agregado al carrito")
}
var salida=""
var final=0
function mostrarTotal(){
    
    
    if(cant1>=1){
        let tota=cant1*document.getElementById("ubB").value;
        let tot1="Has comprado "+cant1+" Ultrabost 20 por un total de "+ tota.toFixed(2) +" Euros"+"<br>"
        salida+=tot1
        final+=tota
    }
    if(cant2>=1){
        let totb=cant2*document.getElementById("ubR").value;
        let tot2="Has comprado "+cant2+" Ultrabost 20 por un total de "+ totb.toFixed(2)+" Euros"+"<br>"
        salida+=tot2
        final+=totb
    }
    if(cant3>=1){
        let totc=cant3*document.getElementById("ubT").value;
        let tot3="Has comprado "+cant3+" Ultrabost 20 por un total de "+ totc.toFixed(2)+" Euros"+"<br>"
        salida+=tot3
        final+=totc
    }
    if(cant4>=1){
        let totd=cant4*document.getElementById("ubW").value;
        let tot4="Has comprado "+cant4+" Ultrabost 20 por un total de "+ totd.toFixed(2)+" Euros"+"<br>"
        salida+=tot4
        final+=totd
        cant4=0
    }
    if(cant5>=1){
        let tote=cant5*document.getElementById("sn").value;
        let tot5="Has comprado "+cant5+" Solar Glide por un total de "+ tote.toFixed(2)+" Euros"+"<br>"
        salida+=tot5
        final+=tote
    }
    if(cant6>=1){
        let totf=cant6*document.getElementById("so").value;
        let tot6="Has comprado "+cant6+" Solar Glide por un total de "+ totf.toFixed(2)+" Euros"+"<br>"
        salida+=tot6
        final+=totf
    }
    /* alert(salida)
    //salida=""
    alert("Total a pagar: "+final) 
    
    //cant1,cant2,cant3,cant5,cant6=0
    alert("Gracias por su compra")  */
    
}
