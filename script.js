const DATA_WAKACJI = new Date(2027, 5, 26);

/**
 * Dopisuje zero na początku liczby, jeśli jest ona mniejsza od 10.
 * @param {number} liczba - Liczba do sformatowania.
 * @returns {string} Liczba w formacie tekstowym, dwucyfrowym.
 * @author Kamil Kluska
 */
function dopiszZero(liczba) {
    if (liczba < 10) {
        return "0" + liczba;
    }
    return String(liczba);
}

/**
 * Pobiera aktualny czas i wyświetla go w formacie GG:MM:SS w elemencie HTML o id "zegar".
 * @returns {void} Funkcja nie zwraca żadnej wartości.
 * @author Kamil Kluska
 */
function pokazZegar() {
    const teraz = new Date();
    const godziny = dopiszZero(teraz.getHours());
    const minuty = dopiszZero(teraz.getMinutes());
    const sekundy = dopiszZero(teraz.getSeconds());
    document.getElementById("zegar").textContent = godziny + ":" + minuty + ":" + sekundy;
}

/**
 * Pobiera aktualną datę i wyświetla ją w formacie lokalnym (pl-PL) w elemencie HTML o id "data".
 * @returns {void} Funkcja nie zwraca żadnej wartości.
 * @author Kamil Kluska
 */
function pokazDate() {
    const teraz = new Date();
    document.getElementById("data").textContent = teraz.toLocaleDateString("pl-PL");
}

/**
 * Oblicza różnicę w dniach pomiędzy dwiema podanymi datami.
 * @param {Date} dataOd - Data początkowa (zazwyczaj dzisiejsza).
 * @param {Date} dataDo - Data docelowa.
 * @returns {number} Zaokrąglona w górę liczba dni pomiędzy datami.
 * @author Kamil Kluska
 */
function IleDniDo(dataOd, dataDo) {
    const roznicaMS = dataDo - dataOd;
    const msWDniu = 1000 * 60 * 60 * 24;
    return Math.ceil(roznicaMS / msWDniu);
}

/**
 * Oblicza ile dni zostało do wakacji i wyświetla wynik w elemencie HTML o id "dni".
 * @returns {void} Funkcja nie zwraca żadnej wartości.
 * @author Kamil Kluska
 */
function pokazDni() {
    const teraz = new Date();
    const dni = IleDniDo(teraz, DATA_WAKACJI);
    document.getElementById("dni").textContent = dni;
}

pokazDate();
pokazZegar();
pokazDni();
setInterval(pokazZegar, 1000);
