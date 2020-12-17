const animals = ['cat', 'hamster', 'giraffe'];

animals.push('dragonfly');
console.log(animals);

function loadAnimals() {
    document.getElementById('animals').innerHTML = animals;
}

function addAnimal() {
    let animal = prompt(`What's your favourite animal?`);
    animals[animals.length] = animal;
    /* animal.length kadangi: 
    siuo metu array length yra 4
    o elementai skaiciuojasi nuo 0, taigi paskutinio elemento index yra 3
    taigi parasius animals.length visada bus index+1, taigi puiki vietele naujam elementui!
    */
    document.getElementById('animals').innerHTML = animals;
    // sitas ispausdina atnaujinta array'ju
}