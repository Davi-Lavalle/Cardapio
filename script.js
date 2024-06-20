let item = document.getElementById('item');
let dia = document.getElementById('dias');
let peso = document.getElementById('peso');
let altura = document.getElementById('altura');

let btnInserir = document.querySelectorAll('#botoes button')[0];
let btnExcluir = document.querySelectorAll('#botoes button')[1];
let btnEditar = document.querySelectorAll('#botoes button')[2];
let btnVerificar = document.getElementById('verificar');

let tabela = document.querySelector('#saida table');
let BD = [];
var tabela1;
btnInserir.onclick = function(){

    if(item.value != "" && dia.value != ""){
        let produto = new Object();
        produto.item = item.value;
        produto.dia = dia.value;
        
        produto.id = BD.length;
        BD.push(produto);

        switch (dia.value) {
            case "Segunda-feira":
              tabela1 = document.querySelectorAll('#saida #produtos td')[0];
              tabela1.innerHTML += `<tr><td><input type="checkbox" id="${produto.id}" onchange="verificar(this.id)"></td><td>${produto.item}</td></tr><br>`;
              break;
            case "Terça-feira":
              tabela1 = document.querySelectorAll('#saida #produtos td')[1];
              tabela1.innerHTML += `<tr><td><input type="checkbox" id="${produto.id}" onchange="verificar(this.id)"></td><td>${produto.item}</td></tr><br>`;
              break;
            case "Quarta-feira":
              tabela1 = document.querySelectorAll('#saida #produtos td')[2];
              tabela1.innerHTML += `<tr><td><input type="checkbox" id="${produto.id}" onchange="verificar(this.id)"></td><td>${produto.item}</td></tr><br>`;
              break;
            case "Quinta-feira":
              tabela1 = document.querySelectorAll('#saida #produtos td')[3];
              tabela1.innerHTML += `<tr><td><input type="checkbox" id="${produto.id}" onchange="verificar(this.id)"></td><td>${produto.item}</td></tr><br>`;
              break;
            case "Sexta-feira":
              tabela1 = document.querySelectorAll('#saida #produtos td')[4];
              tabela1.innerHTML += `<tr><td><input type="checkbox" id="${produto.id}" onchange="verificar(this.id)"></td><td>${produto.item}</td></tr><br>`;
              break;
            case "Sabado":
              tabela1 = document.querySelectorAll('#saida #produtos td')[5];
              tabela1.innerHTML += `<tr><td><input type="checkbox" id="${produto.id}" onchange="verificar(this.id)"></td><td>${produto.item}</td></tr><br>`;
              break;
            case "Domingo":
              tabela1 = document.querySelectorAll('#saida #produtos td')[6];
              tabela1.innerHTML += `<tr><td><input type="checkbox" id="${produto.id}" onchange="verificar(this.id)"></td><td>${produto.item}</td></tr><br>`;
              break;
           
          }
       
        alert("Item inserido com sucesso!!!");
        item.value = "";
        dia.value = "";

    }else{
        alert("Não pode adicionar itens fazios!!!")
    }

    
}

function verificar(id){
  let cont = 0;
  for (let i = 0; i < BD.length; i++){
      let elemento = document.querySelectorAll('#saida table #produtos td input')[i];
      if (elemento.checked){
          item.value = BD[elemento.id].item;
          dia.value = BD[elemento.id].dia;

          cont++;
          if (cont > 1){
              alert('Não é possível selecionar mais de 1 elemento.');
              elemento.checked = false;
              break;
          }
      }
  }
}

btnExcluir.onclick = function(){
  for (let i = 0; i < BD.length; i++){
    let elemento = document.querySelectorAll('#saida table #produtos td input')[i];
    if (elemento.checked){
          BD.splice(elemento.id, 1);
          tabela.innerHTML = `<tr><td>Segunda-feira</td><td>Terça-feira</td><td>Quarta-feira</td><td>Quinta-feira</td><td>Sexta-feira</td><td>Sabado</td><td>Domingo</td></tr>
          <tr id="produtos"><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>`;
          montarTabela();
          alert("Itens excluídos com sucesso!!!");
      }
  }
  tipo.value = "";
  dia.value = "";
  
}

function montarTabela(){  
  
  for (let i = 0; i < BD.length; i++){;
    switch (BD[i].dia) {
      case "Segunda-feira":
        tabela1 = document.querySelectorAll('#saida #produtos td')[0];
        tabela1.innerHTML += `<tr><td><input type="checkbox" id="${i}" onchange="verificar()"></td><td>${BD[i].item}</td></tr><br>`;
        break;
      case "Terça-feira":
        tabela1 = document.querySelectorAll('#saida #produtos td')[1];
        tabela1.innerHTML += `<tr><td><input type="checkbox" id="${i}" onchange="verificar()"></td><td>${BD[i].item}</td></tr><br>`;
        break;
      case "Quarta-feira":
        tabela1 = document.querySelectorAll('#saida #produtos td')[2];
        tabela1.innerHTML += `<tr><td><input type="checkbox" id="${i}" onchange="verificar()"></td><td>${BD[i].item}</td></tr><br>`;
        break;
      case "Quinta-feira":
        tabela1 = document.querySelectorAll('#saida #produtos td')[3];
        tabela1.innerHTML += `<tr><td><input type="checkbox" id="${i}" onchange="verificar()"></td><td>${BD[i].item}</td></tr><br>`;
        break;
      case "Sexta-feira":
        tabela1 = document.querySelectorAll('#saida #produtos td')[4];
        tabela1.innerHTML += `<tr><td><input type="checkbox" id="${i}" onchange="verificar()"></td><td>${BD[i].item}</td></tr><br>`;
        break;
      case "Sabado":
        tabela1 = document.querySelectorAll('#saida #produtos td')[5];
        tabela1.innerHTML += `<tr><td><input type="checkbox" id="${i}" onchange="verificar()"></td><td>${BD[i].item}</td></tr><br>`;
        break;
      case "Domingo":
        tabela1 = document.querySelectorAll('#saida #produtos td')[6];
        tabela1.innerHTML += `<tr><td><input type="checkbox" id="${i}" onchange="verificar()"></td><td>${BD[i].item}</td></tr><br>`;
        break;
     
    }
    
  }
}

btnEditar.onclick = function(){
  if(item.value != "" && dia.value != ""){
      for (let i = 0; i < BD.length; i++){
      let elemento = document.querySelectorAll('#saida table #produtos td input')[i];
        if (elemento.checked){
              BD[elemento.id].item = item.value;
              BD[elemento.id].dia = dia.value;

  
              tabela.innerHTML = `<tr><td>Segunda-feira</td><td>Terça-feira</td><td>Quarta-feira</td><td>Quinta-feira</td><td>Sexta-feira</td><td>Sabado</td><td>Domingo</td></tr>
              <tr id="produtos"><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>`;   
              montarTabela();
              alert("Itens editados com sucesso!!!");
             item.value = "";
             dia.value = "";
          }
      }    
  }else{
      alert("Não pode adicionar itens fazios!!!")
  }
}

function IMC(){
  if(peso.value != "" && altura.value != ""){
    let resposta = peso.value / (altura.value * altura.value )
    alert("Seu IMC: " + resposta.toFixed(2))
      if(resposta <= 18.5){
        alert("Você está abaixo do peso")
      }else if(resposta >= 18.5 && resposta < 24.9){
        alert("Você está com o peso ideal")
      }else if(resposta >= 25 && resposta < 29.9){
        alert("Você está levemente acima do peso")
      }else if(resposta >= 30 && resposta < 34.9){
        alert("Você está com obesidade grau 1")
      }else if(resposta >= 35 && resposta < 39.9){
        alert("Você está com peso severa")
      }else if(resposta >= 40){
        alert("Você está com peso mórbida")
  }
  peso.value = "";
  altura.value = "";
  }else{
    alert("Não pode verificar itens fazios!!!")
}
  
}

btnVerificar.addEventListener ( 'click', IMC );
