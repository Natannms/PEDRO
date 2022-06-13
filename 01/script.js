const botao = document.getElementById('botao')

//add evento ao elemento
botao.addEventListener('click', ()=>{
    const moeda = pegamoedas();
    
})

function prepare(param){
    document.getElementById('Name').innerHTML =  param.name;
    document.getElementById('High').innerHTML = param.high;
    document.getElementById('Low').innerHTML = param.low;
    document.getElementById('CodeIn').innerHTML =  param.codein
    document.getElementById('Create_date').innerHTML =  param.create_date
    document.getElementById('PctChange').innerHTML =  param.pctChange
    document.getElementById('Timestamp').innerHTML =  param.timestamp
    document.getElementById('VarBid').innerHTML =  param.varBid
    document.getElementById('Code').innerHTML =  param.code
    document.getElementById('Bid').innerHTML =  param.bid
    document.getElementById('Ask').innerHTML =  param.ask
}

function pegamoedas(){
    const primeiraMoeda = document.getElementById('primeiraMoeda').value
    const segundaMoeda = document.getElementById('segundaMoeda').value
    
    const url = `https://economia.awesomeapi.com.br/last/${primeiraMoeda}-${segundaMoeda}`;
    if(primeiraMoeda != segundaMoeda){
        const consulta = fetch(url)
        consulta.then(response =>{
           const res = response.json()
           res.then(body => {
    
                if(body.BRLUSD){
                    prepare(body.BRLUSD)
                }
    
                if(body.USDBRL){
                    prepare(body.USDBRL)
                }
    
                if(body.EURBRL){
                    prepare(body.EURBRL)
                }
    
                if(body.BRLEUR){
                    prepare(body.BRLEUR)
                }
    
                if(body.USDEUR){
                    prepare(body.USDEUR)
                }
    
                if(body.EURUSD){
                    prepare(body.EURUSD)
                }

           }).catch(erro => console.error(erro))
        }).catch(error => console.error(error))
    }else{
        alert('Moedas iguais')
    }
}
