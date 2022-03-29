import cadena from "./calcularCad"

describe("Cadena", () => {
    it("al ingresar una cadena de numeros vacia este deberia mostrar un total de 0", () => {
        const string = "";
        expect(cadena(string)).toEqual(0);
    });
    it("cadena con el numero 2 devuelve 2", () => {
        const string = "2";
        expect(cadena(string)).toEqual(2);
    });
    it("cadena con dos numeros 1,2 devuelve 3", () => {
        const string = "6,7";
        expect(cadena(string)).toEqual(13);
    });
  });
