const empresas = [
    { nome:'Samsung',valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938},
    { nome: 'Microsoft',valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975 },
    { nome: 'Intel',valorDeMercado: 117, CEO:'Brian Krzanich', anoDeCriacao: 1968},
    { nome: 'Facebook',valorDeMercado: 383, CEO:'Mark Zuckerberg', anoDeCriacao: 2004},
    { nome: 'Spotify',valorDeMercado: 30, CEO:'Daniel Ek', anoDeCriacao: 2006  },
    {nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976}
];

const exibeInformacoes = empresas.map( empresa => `${empresa.nome}` + ' CEO: ' + `${empresa.CEO}`);
console.log( exibeInformacoes )

const salario =[
    {id: 1, valorHora: 10.00, horasMes: 200},
    {id: 2, valorHora: 15.00, horasMes: 220},
    {id: 3, valorHora: 12.00, horasMes: 240},
    {id: 4, valorHora: 20.00, horasMes: 200},
    {id: 5, valorHora: 30.00, horasMes: 220},
];

salario.forEach(element => console.log(element.id, element.horasMes));

const salarioMes = salario.map(element => element.horasMes*element.valorHora)
console.log(salarioMes)
