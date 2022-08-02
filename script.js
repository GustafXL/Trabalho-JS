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
        res.innerHTML = `Idade calculada: ${idade}`
    }
}