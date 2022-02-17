const people = ['Rafa', 'Diego', 'Dani', 'Rod', 'deda']
const upperCasePeopleThatStartWithD = people.filter(person => person.startsWith('D') ||   person.startsWith('d') ).map(dperson => dperson.toUpperCase());
console.log(upperCasePeopleThatStartWithD); 