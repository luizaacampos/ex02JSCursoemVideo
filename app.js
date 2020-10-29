function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('idade')
    var res = window.document.getElementById('image')

    if(fano.value.length == 0 || fano.value > ano){
        alert('ERROR: Verifique os dados e tentenovamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'homem'
            if (idade >= 0 && idade <= 12){
                //criança
                img.setAttribute('src','images/menino.jpg')
            }else if(idade > 12 && idade <= 65){
                //adulto
                img.setAttribute('src','images/homem.jpg')
            }else {
                //idoso
                img.setAttribute('src','images/idoso.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'mulher'
            if (idade >= 0 && idade <= 12){
                //criança
                img.setAttribute('src','images/menina.jpg')

            }else if(idade > 12 && idade <= 65){
                //adulto
                img.setAttribute('src','images/mulher.jpg')
            }else {
                //idoso
                img.setAttribute('src','images/idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

    
}