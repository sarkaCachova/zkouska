'use strict';

class Pojisteni {
    constructor() {
        this.jmenoInput = document.getElementById("jmeno");
        this.prijmeniInput = document.getElementById("prijmeni");
        this.datumInput = document.getElementById("datum");
        this.emailInput = document.getElementById("email");
        this.telefonInput = document.getElementById("telefon");
        this.uliceInput = document.getElementById("ulice");
        this.cpInput = document.getElementById("cp");
        this.mestoInput = document.getElementById("mesto");
        this.pscInput = document.getElementById("psc");
        this.potvrditButton = document.getElementById("potvrdit");
        this.novyForm = document.getElementById("novy-form");
        this.seznam = document.getElementById("seznam-pojistenych");

        this.pojistenci = this.nactiData();
    }

    nastavUdalosti() {
        this.novyForm.onsubmit = (e) => {
            e.preventDefault();
            this.ulozPojistence();

        }
        this.potvrditButton.onclick = (e) => {
            e.preventDefault();
            const pojistenec = new Pojistenec(
                this.jmenoInput.value,
                this.prijmeniInput.value,
                this.datumInput.value,
                this.emailInput.value,
                this.telefonInput.value,
                this.uliceInput.value,
                this.cpInput.value,
                this.mestoInput.value,
                this.pscInput.value
            );

            if (!pojistenec.jeValidni()) {
                alert('Vyplňte povinné údaje');
                return;
            }

            this.pojistenci.push(pojistenec);
            this.novyForm.reset();
            this.ulozData(this.pojistenci);
            this.vypisSeznam();
        };
    }

    odstran(index) {
        this.pojistenci.splice(index, 1);
        this.ulozData(this.pojistenci);
        this.vypisSeznam();
    }

    vypisSeznam() {
        let output = `<table class='table table-stripped'>
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Jméno</th>
                    <th scope="col">Datum narození</th>
                    <th scope="col">Tel.</th>
                    <th scope="col">Email</th>
                    <th scope="col">Adresa</th>
                    <th scope="col">Smazat</th>
                </tr>
            </thead>
            <tbody>`;

        for (let i = 0; i < this.pojistenci.length; i++) {
            output += this.pojistenci[i].formatujDoTabulky(i);
        }

        output += '</tbody></table>';

        this.seznam.innerHTML = output;
    }

    ulozData(data) {
        localStorage.setItem("pojistenci", JSON.stringify(data));
    }

    nactiData() {
        const jsonData = localStorage.getItem("pojistenci");
        if (!jsonData) {
            return [];
        }

        const dataPole = JSON.parse(jsonData);

        let dataObjekty = [];
        for (let i = 0; i < dataPole.length; i++) {
            dataObjekty[i] = Object.assign(new Pojistenec, dataPole[i]);
        }

        return dataObjekty;
    }
}
