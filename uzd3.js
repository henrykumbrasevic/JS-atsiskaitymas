const klausimas = prompt("Ar noretumėt monetos?")
let monetos = 0;

while (klausimas === 'taip'){
    monetos++
    alert(`Jūs turite ${monetos} monetą/as.`)
    const klausimas = prompt("Ar noretumėt monetos?")
    if (klausimas === 'ne'){
        break;
    }
}