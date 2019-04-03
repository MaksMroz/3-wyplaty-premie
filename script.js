let listaPracownikow = document.querySelectorAll('div[id^="pracownik"]');
let iluPracownikow = document.querySelectorAll('div[id^="pracownik"]').length;
let imie, czas, stawka;
let najlepsiPracownicy = document.querySelector('#najlepsi-pracownicy');
let najlepszyCzas = [];
let najlepszyPracownik = [];
console.log(iluPracownikow);


wyplata = () => {
    for (i = 0; i < iluPracownikow; i++) {
        imie = listaPracownikow[i].children[0].innerHTML; // imię
        czas = listaPracownikow[i].children[1].value; // czas
        stawka = listaPracownikow[i].children[2].value; // stawka

        if (czas < 100) {
            // stawka normalna i kolor czerwony
            listaPracownikow[i].children[3].innerText = czas * stawka + "zł"; // wypłata 
            listaPracownikow[i].children[0].style.backgroundColor = '#firebrick';
            listaPracownikow[i].children[0].style.color = '#ffffff';
        } else if (czas > 160) {
            // podwójna stawka
            listaPracownikow[i].children[3].innerText = (160 * stawka) + (czas - 160) * (stawka * 2) + "zł"; // wypłata + premia
        } else {
            // stawka normalna
            listaPracownikow[i].children[3].innerText = czas * stawka + "zł"; // wypłata
        }
    }
}

ktoJestNajlepszy = () => {
    for (i = 0; i < iluPracownikow; i++) {
        najlepszyCzas.push(listaPracownikow[i].children[1].value * 1); // tabela z czasem
        najlepszyPracownik.push(listaPracownikow[i].children[0].innerHTML); // tabela z imionami
    }
    let tabelaSortujaca = Array.from(najlepszyCzas); // tymczasowa tabela z czasami do posortowania
    tabelaSortujaca.sort((a, b) => {
        return b - a;
    });

    let jeden = najlepszyCzas.indexOf(tabelaSortujaca[0]);
    let dwa = najlepszyCzas.indexOf(tabelaSortujaca[1]);
    let trzy = najlepszyCzas.indexOf(tabelaSortujaca[2]);

    let best = [najlepszyPracownik[jeden], najlepszyPracownik[dwa], najlepszyPracownik[trzy]];
    najlepsiPracownicy.innerHTML = best.join(", ");
    najlepsiPracownicy.style.backgroundColor = 'firebrick';
    najlepsiPracownicy.style.padding = '3px';
    najlepsiPracownicy.style.color = '#ffffff';
}

calculate = () => {
    wyplata();
    ktoJestNajlepszy();
}

let btn = document.querySelector('#oblicz');
btn.addEventListener('click', calculate);