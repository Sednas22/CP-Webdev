function calcular() {
    const h1 = parseInt(document.getElementById("h1").value) || 0;
    const h2 = parseInt(document.getElementById("h2").value) || 0;
    const m1 = parseInt(document.getElementById("m1").value) || 0;
    const m2 = parseInt(document.getElementById("m2").value) || 0; 
    const n1 = document.getElementById("horas");
    const n2 = document.getElementById("minutos");
 
  if(h1 > 23 || h2 > 23 || m1 > 59 || m2 > 59){
       alert("Insira valores válidos!\nHoras: 0-23; Minutos: 0-59.");
  }else{
    let inicio = h1 * 60 + m1;
    let fim = h2 * 60 + m2;
    if (fim <= inicio) {
      fim += 24 * 60;
    }
    let duracao = fim - inicio;
   
    let totalHoras = Math.floor(duracao / 60);
    let totalMinutos = duracao % 60;
   
    n1.textContent = totalHoras < 10 ? "0" + totalHoras : totalHoras;
    n2.textContent = totalMinutos < 10 ? "0" + totalMinutos : totalMinutos;
  }
  }