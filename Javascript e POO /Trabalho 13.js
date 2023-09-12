class Boletim {
    constructor (nota1, nota2, nota3, disciplina) {
        this.nota1 = nota1
        this.nota2 = nota2
        this.nota3 = nota3
        this.disciplina = disciplina
    }
    get media() {
        return Number((this.nota1 + this.nota2 + this.nota3)/3)
    }
    set materia(novaDisciplina) {
        this.disciplina = novaDisciplina
    }
}

let novoBoletim = new Boletim(9, 8, 7)

console.log(novoBoletim.media)

novoBoletim.materia = 'Português'

console.log(novoBoletim.disciplina)
