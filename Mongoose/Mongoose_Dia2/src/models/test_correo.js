function correoCorrecto(email){
    let letras_mayusculas="ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
    let arroba="@";
    let punto=".";
    let correo=false;
    let contadorM=0
    let contadorA=0
    let contadorP=0
    for(i=0; i<email.length; i++){
        if (letras_mayusculas.indexOf(email.charAt(i),0)!=-1){
            contadorM++
        }
    }
    for(i=0; i<email.length; i++){
        if (arroba.indexOf(email.charAt(i),0)!=-1){
            contadorA++
        }
    }
    for(i=0; i<email.length; i++){
        if (punto.indexOf(email.charAt(i),0)!=-1){
            contadorP++
        }
        
    }
    if (email.charAt(email.length -1)==="m" && email.charAt(email.length -2)==="o" &&  email.charAt(email.length -3)==="c" && email.charAt(email.length -4)==="." || email.charAt(email.length -1)==="s" && email.charAt(email.length -2)==="e" &&  email.charAt(email.length -3)==="."){
        correo=true
    }
    if ( contadorM===0 && contadorA===1 && contadorP===1 && correo===true) {
        
       return 'Formato correcto';
    } else {
        return 'El formato del correo electronico no es correcto';
    } 
  }
  
  console.log(correoCorrecto('Juan@juan.com'))
  console.log(correoCorrecto('juan@juan.es'))
  console.log(correoCorrecto('juan@ju@n.com'))
  console.log(correoCorrecto('juan@j.com.uan'))
  console.log(correoCorrecto('juan@juan.com'))