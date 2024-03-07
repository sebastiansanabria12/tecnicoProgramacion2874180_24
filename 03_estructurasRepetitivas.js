//let serie = parseFloat(prompt("digite el numero:"))
//let i=0;
//while (i<serie) {
  //  i=i+1
    //document.write(i+",")
//}

//let seriefor = parseFloat(prompt("digite el numero:"))
//let i=0;
//for (let index = 0; index <=seriefor; index++) {
  //  console.log(index)
    // }

    //ejercicio de gatos y perros
    let conteogatos = 0
    let conteoperros = 0
    let edadperros = 0
    let edadgatos = 0

    while (true) {
      let mascota = (prompt("escriba el tipo de mascota (gato o perro) "))
      if (mascota==="0") {
        break;

      }else if (mascota==="perro"){
      
     let edad= parseInt(prompt("¿cual es la edad de la mascota? "))
     conteoperros = conteoperros + 1
     edadperros = edadperros + edad

  
      }else if (mascota==="gato") {
        let edad= parseInt(prompt("¿cual es la edad de la mascota? "))
        conteogatos = conteogatos + 1
        edadgatos = edadgatos + edad

         }
        }
        
        document.write("los perros son "+conteoperros+"<br>")
        document.write("los gatos son "+conteogatos+"<br>")
        document.write("la sumatoria de las edades de los perros es "+edadperros+"<br>")
        document.write("la sumatoria de las edades de los gatos es "+edadgatos+"<br>")



    