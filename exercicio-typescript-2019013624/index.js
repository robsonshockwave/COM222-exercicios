class Pessoa {
    constructor(nome, dataNasc, sexo) {
        this._nome = nome;
        this._dataNasc = dataNasc;
        this._sexo = sexo;
    }
    get nome() {
        return this._nome;
    }
    get dataNasc() {
        return this._dataNasc;
    }
    get sexo() {
        return this._sexo;
    }
}
//-------------------------------
//-------------------------------
class Aluno extends Pessoa {
    constructor(nome, dataNasc, sexo, matricula) {
        super(nome, dataNasc, sexo);
        this.matricula = matricula;
    }
    getRelativeNome() {
        return this.nome;
    }
    getRelativeDataNasc() {
        return this.dataNasc;
    }
    getRelativeSexo() {
        return this.sexo;
    }
    get Matricula() {
        return this.matricula;
    }
}
//-------------------------------
//-------------------------------
class Professor extends Pessoa {
    constructor(nome, dataNasc, sexo, categoria) {
        super(nome, dataNasc, sexo);
        this.categoria = categoria;
    }
    getRelativeNome() {
        return this.nome;
    }
    getRelativeDataNasc() {
        return this.dataNasc;
    }
    getRelativeSexo() {
        return this.sexo;
    }
    get Categoria() {
        return this.categoria;
    }
}
//-------------------------------
//-------------------------------
class Turma {
    constructor(nome, ano, alunos) {
        this.nome = nome;
        this.ano = ano;
        this.alunos = alunos;
    }
    get Nome() {
        return this.nome;
    }
    get Ano() {
        return this.ano;
    }
    get Alunos() {
        return this.alunos;
    }
    get Professor() {
        return this.professor;
    }
    set Professor(value) {
        this.professor = value;
    }
}
//-------------------------------
//-------------------------------
class Disciplina {
    constructor(nome, professor) {
        this.nome = nome;
        this.professor = professor;
        this.turmas = [];
    }
    get Nome() {
        return this.nome;
    }
    get Professor() {
        return this.professor;
    }
    get Turmas() {
        return this.turmas;
    }
    adicionarTurmas(turmas) {
        this.turmas.push(turmas);
    }
}
//-------------------------------
//-------------------------------
let a1 = new Aluno('KURT COBAIN', '21-01-1980', 'MASCULINO', '1235');
let a2 = new Aluno('RAUL SEIXAIS', '01/01/1991', 'MASCULINO', '5432');
let a3 = new Aluno('RAIMUNDA', '22/02/1982', 'FEMININO', '3232');
let a4 = new Aluno('ANTONIA NATAL', '25/12/1985', 'MASCULINO', '2525');
let a5 = new Aluno('AXL ROSE', '03/03/1979', 'MASCULINO', '7777');
let todosAlunos = [a1, a2, a3, a4, a5];
let prof = new Professor('JOSUANA ALMEIDA', '09/09/1950', 'FEMININO', 'AMBIENTES DE TEC.INFO.');
let turma = new Turma('CIENCIA DA COMPUTACAO', '2021', todosAlunos);
let disciplina = new Disciplina('COM123', prof);
disciplina.adicionarTurmas(turma);
//-------------------------------
//-------------------------------
for (let i = 0; i < disciplina.Turmas.length; i++) {
    disciplina.Turmas[i].professor = disciplina.professor;
}
console.log(`\n\nNOME DA DISCIPLINA: ${disciplina.nome}
    PROFESSOR: ${disciplina.professor.nome}  
    CATEGORIA: ${disciplina.professor.categoria}`);
//-------------------------------
//-------------------------------
for (let i = 0; i < disciplina.Turmas.length; i++) {
    console.log(`TURMA: ${disciplina.Turmas[i].nome} - ANO: ${disciplina.Turmas[i].ano}\n`);
    for (let j = 0; j < disciplina.turmas[i].alunos.length; j++) {
        console.log(`> ALUNO NUMERO: ${j + 1}
        NOME DO ALUNO: ${disciplina.Turmas[i].Alunos[j].nome}
        NASCIMENTO: ${disciplina.Turmas[i].Alunos[j].dataNasc}
        SEXO: ${disciplina.Turmas[i].Alunos[j].sexo}
        NUMERO DE MATRICULA: ${disciplina.Turmas[i].Alunos[j].matricula}\n`);
    }
}
//-------------------------------
//-------------------------------
