// Objetivo2

import { Empresa, Cliente, Telefone, Endereco } from './modulo.js'

// Empresa
const endEmpresa = new Endereco("SP", "São José dos Campos", "Av. Cassiano Ricardo", "600")
const minhaEmpresa = new Empresa("Tecnologia Inovadora LTDA", "DevTech", "12.345.678/0001-90", endEmpresa)

// Telefones da empresa
minhaEmpresa.adicionarTelefone(new Telefone("12", "39411000"))
minhaEmpresa.adicionarTelefone(new Telefone("12", "39412000"))

// Criando 5 clientes e 2 telefones cadas 

//Cliente 1
const c1 = new Cliente(
    "Noah Conrado",
    "481.251.121-61",
    new Endereco("SP", "SJC", "Rua Tiradentes", "10")
)

c1.adicionarTelefone(new Telefone("12", "39411000"))
c1.adicionarTelefone(new Telefone("12", "39412000"))

minhaEmpresa.adicionarCliente(c1)

// Cliente 2
const c2 = new Cliente(
    "Maria Eduarda",
    "902.657.123-22",
    new Endereco("MG", "BH", "Rua Ouro Preto", "20")
)

c2.adicionarTelefone(new Telefone("12", "91210001"))
c2.adicionarTelefone(new Telefone("31", "32220002"))

minhaEmpresa.adicionarCliente(c2)

// Cliente 3
const c3 = new Cliente(
    "Ana Beatriz",
    "143.893.126-33",
    new Endereco("RJ", "Rio", "Rua Santa Carla", "30")
)

c3.adicionarTelefone(new Telefone("21", "993330003"))
c3.adicionarTelefone(new Telefone("21", "25330003"))

minhaEmpresa.adicionarCliente(c3)


//Cliente 4
const c4 = new Cliente(
    "Lucas Oliveira",
    "482.238.098-44",
    new Endereco("PR", "Curitiba", "Rua Florência", "40")
)

c4.adicionarTelefone(new Telefone("41", "994440004"))
c4.adicionarTelefone(new Telefone("41", "33440004"))

minhaEmpresa.adicionarCliente(c4)

//  ;) 
// Cliente 5
const c5 = new Cliente(
    "Carla Souza",
    "534.472.328-55",
    new Endereco("SC", "Floripa", "Rua Santo Antônio", "50")
)

c5.adicionarTelefone(new Telefone("48", "995550005"))
c5.adicionarTelefone(new Telefone("48", "32550005"))

minhaEmpresa.adicionarCliente(c5)



console.log(minhaEmpresa.detalhe())