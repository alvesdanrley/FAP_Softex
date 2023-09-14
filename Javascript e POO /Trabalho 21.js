class Livro {
    constructor(paginas, autor, titulo) {
        this.titulo = titulo
        this.autor = autor
        this.paginas = paginas
    }

    abrir() {
        console.log('Você abriu o livro') //Método para informar que o livro foi aberto
    }

    ler() {
        console.log('Você está lendo o livro.') // Método para informar sobre a leitura do livro
    }

    fechar() {
        console.log('Você fechou o livro.') // Método para informar sobre o fechamento do livro.
    }
}
const livro1 = new Livro(200, 'Machado de Assis', 'Dom Casmurro')
livro1.abrir()
livro1.ler()
livro1.fechar()

class Usuario {
    constructor(login, senha, permissao) {
        this.login = login
        this.senha = senha
        this.permissao = permissao
    }

    entrada(password) {
        if (this.senha === password) {
            console.log('Entrou!')
        } else {
            console.log('Senha incorreta')
        }
    }
    
    saudacao() {
        console.log(`Bem-vindo de volta, ${this.login}`)
    }

    logout() {
        console.log('Saindo da sua conta.')
    }
}

const usuario1 = new Usuario('danrley123', 12345, true)

usuario1.entrada(12345)
usuario1.saudacao()
usuario1.logout()
