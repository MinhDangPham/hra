function getNumber(): number {
  let cislo: number;
  do {
      cislo = Number(window.prompt("Zadej číslo"));
  } while (Number.isNaN(cislo));
  return cislo;
}

function randInt(min: number, max: number): number {
  return min + Math.round(Math.random() * (max - min));
}

function hraKonzole() {
  const min = 1;
  const max = 100;
  const tajneCislo = randInt(min, max);
  let pokusy = 0;
  let uhadnuto = false;

  alert(`Hádej číslo od ${min} do ${max}`);

  while (!uhadnuto) {
      const tip = getNumber();
      pokusy++;

      if (tip < tajneCislo) {
          alert("Moje číslo je větší");
      } else if (tip > tajneCislo) {
          alert("Moje číslo je menší");
      } else {
          alert(`Uhodl jsi na ${pokusy}. pokus! Moje číslo bylo ${tajneCislo}.`);
          uhadnuto = true;
      }
  }
}

// Spusťte hru
hraKonzole();
