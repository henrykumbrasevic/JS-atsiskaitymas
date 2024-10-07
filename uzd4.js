let names = [`Olivia`, `Jackson`, `Sophia`, `Elijah`, `Ava`, `Liam`, `Isabella`];

// --- funkcija kuri pašalina Olivia.
names.splice(0, 1);
console.log(names);

// --- funkcija kuri prideda vardą Mason į priekį.
names.unshift(`Mason`);
console.log(names);

// --- mano vardas masyvo pabaigoj.
names.push(`Henryk`)
console.log(names);


// --- funkcija kuri priima vardą ir jį pašalina iš masyvo.
names = names.filter(name => name !== `Olivia`)
console.log(names);

// 5-6 nebaigti.
