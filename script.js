let nomeAluno = prompt('Insira o nome do Aluno')
let nota2 = ''
let nota3 = ''
let nota4 = '' 
let nota5 = ''
let nota6 = ''
let mediaNota = ''


if (nomeAluno.length < 5) {
    alert('o Nome deve ter no minimo 5 caracteres')
} else {
    let presencaAluno = parseInt(prompt('Insira a presença do Aluno (Valor de 1 à 10)'))
    if (presencaAluno <= 0 || presencaAluno > 10) {
        alert('insira um valor entre 1 e 10 para a presença do aluno')
    }
    else {
        let materia1 = prompt('Insira a primeira matéria que deseja atribuir a nota')
        let nota1 = parseInt(prompt`Insira a nota de ${materia1}`)
        if (nota1 <= 0 || nota1 > 10) {
            alert('insira um valor entre 1 e 10 para a presença do aluno')
        }
        else {
            let materia2 = prompt('Insira a segunda matéria que deseja atribuir a nota')
            nota2 = parseInt(prompt`Insira a nota de ${materia2}`)
        }
        if (nota2 <= 0 || nota2 > 10) {
            alert('insira um valor entre 1 e 10 para a presença do aluno')
        }
        else {
            let materia3 = prompt('Insira a terceira matéria que deseja atribuir a nota')
            nota3 = parseInt(prompt`Insira a nota de ${materia3}`)
        }
        if (nota3 <= 0 || nota3 > 10) {
            alert('insira um valor entre 1 e 10 para a presença do aluno')
        }
        else {
            let materia4 = prompt('Insira a quarta matéria que deseja atribuir a nota')
            nota4 = parseInt(prompt`Insira a nota de ${materia4}`)
        }
        if (nota4 <= 0 || nota4 > 10) {
            alert('insira um valor entre 1 e 10 para a presença do aluno')
        }
        else {
            let materia5 = prompt('Insira a quinta matéria que deseja atribuir a nota')
            nota5 = parseInt(prompt`Insira a nota de ${materia5}`)
        }
        if (nota5 <= 0 || nota5 > 10) {
            alert('insira um valor entre 1 e 10 para a presença do aluno')
        }
        else {
            let materia6 = prompt('Insira a sexta matéria que deseja atribuir a nota')
            nota6 = parseInt(prompt`Insira a nota de ${materia6}`)
        }
        if (nota6 <= 0 || nota6 > 10) {
            alert('insira um valor entre 1 e 10 para a presença do aluno')
        }
        else {
            let somaNota = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6)
            mediaNota = somaNota / 6
            alert(`media é ${mediaNota} `)
        }
        if (mediaNota >= 8 && presencaAluno >= 6) {
            alert(
                `A media do ${nomeAluno} é de ${mediaNota} e sua presença é de ${presencaAluno}: O Aluno está APROVADO!`)
        
        } else {
            alert(
                `A media do ${nomeAluno} é de ${mediaNota} e sua presença é de ${presencaAluno}: O Aluno está Reprovado!`)
        }
        
    }
}






