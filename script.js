function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('ano')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique se os Dados estão corretos!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')//É a mesma coisa como colocar uma tag img no HTML com o id="foto"
        if (fsex[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'garotinho.jpg')
            } else if (idade < 21) {
                //Jovem Dinamico
                img.setAttribute('src', 'garoto.jpg')
            } else if (idade < 50) {
                //Adulto Ousado
                img.setAttribute('src', 'adulto.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        } else if (fsex[1].checked) {
            gen = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'garotinhas.jpg')
            } else if (idade < 21) {
                //Jovem Dinamica
                img.setAttribute('src', 'garota.jpg')
            } else if (idade < 50) {
                //Adulto Ousada
                img.setAttribute('src', 'adulta.jpg')
            } else {
                //Idosa
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img)
    }
}