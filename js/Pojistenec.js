'use strict';

class Pojistenec {

    constructor(jmeno, prijmeni, datum, email, telefon, ulice, cp, mesto, psc) {
        this.jmeno = jmeno;
        this.prijmeni = prijmeni;
        this.datum = datum;
        this.email = email;
        this.telefon = telefon;
        this.ulice = ulice;
        this.cp = cp;
        this.mesto = mesto;
        this.psc = psc;
    }

    jeValidni() {
        return this.jmeno && this.prijmeni && this.datum && this.ulice && this.cp && this.mesto && this.psc;
    }

    formatujDoTabulky(index) {
        return `<tr>
                <th scope="row"></th>
                <td>${this.jmeno} ${this.prijmeni}</td>
                <td>${this.datum}</td>
                <td>${this.telefon}</td>
                <td>${this.email}</td>
                <td>${this.ulice} ${this.cp}<br/>${this.psc} ${this.mesto}</td>
                <td><button class="btn btn-danger" onclick="pojistenec.odstran(${index})">&times;</button></td>
            </tr>`;
    }
}

