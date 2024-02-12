function apresenta(){

    let nome = document.getElementById("nome").value

    let ano = parseInt(document.getElementById("ano").value)

    const idade = new Date().getFullYear() - ano

    let mensagem = (`Sou ${nome} e tenho ${idade} anos`)
    
    document.getElementById("apresentacao").value = mensagem

}




