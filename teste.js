import { Empresa, Cliente, Telefone, Endereco } from './modulo.js'

// Empresa
const endEmpresa = new Endereco("SP", "São José dos Campos", "Av. Cassiano Ricardo", "600")
const minhaEmpresa = new Empresa("Tecnologia Inovadora LTDA", "DevTech", "12.345.678/0001-90", endEmpresa)

// Telefones da empresa
minhaEmpresa.adicionarTelefone(new Telefone("12", "39411000"))
minhaEmpresa.adicionarTelefone(new Telefone("12", "39412000"))

// Criando 5 clientes
const clientes = [
    new Cliente("Noah Conrado", "111.111.111-11", new Endereco("SP", "SJC", "Rua Tiradentes", "10")),
    new Cliente("Maria Eduarda", "222.222.222-22", new Endereco("MG", "BH", "Rua Ouro Preto", "20")),
    new Cliente("Ana Beatriz", "333.333.333-33", new Endereco("RJ", "Rio", "Rua Santa Carla", "30")),
    new Cliente("Lucas Oliveira", "444.444.444-44", new Endereco("PR", "Curitiba", "Rua Florência", "40")),
    new Cliente("Carla Souza", "555.555.555-55", new Endereco("SC", "Floripa", "Rua Santo Antônio", "50"))
]

// Adicionando telefones e clientes
clientes.forEach(cliente => {
    cliente.adicionarTelefone(new Telefone("11", "999999999"))
    cliente.adicionarTelefone(new Telefone("11", "988888888"))
    minhaEmpresa.adicionarCliente(cliente)
})

console.log(minhaEmpresa.detalhe())