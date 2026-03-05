// =====================
// CLASSE CLIENTE
// =====================
export class Cliente {
    #cpf

    constructor(nome, cpf, endereco) {
        this.nome = nome
        this.endereco = endereco
        this.telefones = new Set()
        this.#cpf = cpf
    }

    get cpf() {
        return this.#cpf
    }

    getNomeMaiusculo() {
        return this.nome.toUpperCase()
    }

    getNomeMinusculo() {
        return this.nome.toLowerCase()
    }

    adicionarTelefone(telefone) {
        this.telefones.add(telefone)
    }
}

// =====================
// CLASSE TELEFONE
// =====================
export class Telefone {
    constructor(ddd, numero) {
        this.ddd = ddd
        this.numero = numero
    }

    getNumeroCompleto() {
        return `(${this.ddd}) ${this.numero}`
    }
}

// =====================
// CLASSE ENDERECO
// =====================
export class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero
    }

    getRuaMaiuscula() {
        return this.rua.toUpperCase()
    }

    getRuaMinuscula() {
        return this.rua.toLowerCase()
    }
}

// =====================
// CLASSE EMPRESA
// =====================
export class Empresa {
    #cnpj

    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.razaoSocial = razaoSocial
        this.nomeFantasia = nomeFantasia
        this.#cnpj = cnpj
        this.endereco = endereco
        this.clientes = new Set()
        this.telefones = new Set()
    }

    get cnpj() {
        return this.#cnpj
    }

    getRazaoSocialMaiusculo() {
        return this.razaoSocial.toUpperCase()
    }

    getRazaoSocialMinusculo() {
        return this.razaoSocial.toLowerCase()
    }

    adicionarTelefone(telefone) {
        this.telefones.add(telefone)
    }

    adicionarCliente(cliente) {
        this.clientes.add(cliente)
    }

    // OBJETIVO 3
    detalhe() {
        let info = `Razão Social: ${this.razaoSocial}\n`
        info += `Nome Fantasia: ${this.nomeFantasia}\n`
        
         info += `------------------------------------\n`
        

        this.clientes.forEach(cliente => {
            info += `\nNome: ${cliente.nome}\n`
            info += `Estado: ${cliente.endereco.estado}, cidade: ${cliente.endereco.cidade}, rua: ${cliente.endereco.rua}, numero: ${cliente.endereco.numero}\n`
            
            cliente.telefones.forEach(tel => {
                info += `ddd:${tel.ddd} número: ${tel.numero}\n`
            })
        })

        return info
    }
}