
//function carregar(){
   // window.document.write("teste")
//img.src = 'img/almoço2400px.png'
//}

///*
function carregar(){
  
    var msg1 = window.document.querySelector('div#msg1')
    var msg2 = window.document.querySelector('div#msg2')
    var msg3 = window.document.querySelector('div#msg3')
    var img = window.document.querySelector('img#img')

    var diapc = new Date()
    var mespc = new Date()
    var anopc = new Date()
    var diasempc = new Date()
    var horapc = new Date()
    var minpc = new Date()
    var segpc = new Date()
    
    var dia = diapc.getDate()
    var mes = mespc.getMonth()
    var ano = anopc.getFullYear()
    var diasem = diasempc.getDay()
    var hora = horapc.getHours()
    var min = minpc.getMinutes()
    var seg = segpc.getSeconds()
    var diasemn = ""

    switch (diasem){
        case 0: 
            diasemn = "Domingo"
            break
        case 1: 
            diasemn = "Segunda - Feira"
            break
        case 2: 
            diasemn = "Terça - Feira"
            break
        case 3: 
            diasemn = "Quarta - Feira"
            break
        case 4: 
            diasemn = "Quinta - Feira"
            break
        case 5: 
            diasemn = "Sexta - Feira"
            break
        case 6: 
            diasemn = "Sabádo"
            break
        default: 
            diasemn = "[ERRO] Dia da Semana incorreto"
            break
    }
  
    
    if (hora >=6 && hora <12){
        //Bom café!
        img.src = 'img/cafe400px.png'
        window.document.body.style.background = '#958C84'
        msg3.innerHTML = "Bom dia, tenha um bom café!"
    } else if(hora >=12 && hora <=14){
       //Bom almoço!
        img.src = 'img/almoço2400px.png'
        window.document.body.style.background = '#A89C96'
        msg3.innerHTML = "Boa tarde, tenha um bom almoço!"
    } else if(hora >14 && hora <18){
        //Bom lanche!
         img.src = 'img/panqueca400px.png'
         window.document.body.style.background = '#A89C96'
         msg3.innerHTML = "Boa tarde, tenha um bom lanche!"
     } else if (hora >=18 && hora <20){
        //Boa janta!
        img.src = 'img/Hamburguer3400px.png'
        window.document.body.style.background = '#C26306'
        msg3.innerHTML = "Boa noite, tenha uma boa janta!"
    } else if (hora >=20 || hora < 6){
        //Bom sonhos!
        img.src = 'img/cafe400px.png'
        //window.document.body.style.background = '#C26306'
        msg3.innerHTML = "Boa noite, tenha bons sonhos!"
    }
    
    msg1.innerHTML = ` ${diasemn} - ${dia}/${mes+1}/${ano}`
    msg2.innerHTML =  `${hora}:${min}:${seg}`
}  
