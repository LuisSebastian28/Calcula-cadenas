import cadena from "./calcularCad"

describe("Cadena", () => {
    it("al ingresar una cadena de numeros vacia este deberia mostrar un total de 0", () => {
        expect(cadena("")).toEqual(0);
    });
    it("cadena con el numero 2 devuelve 2", () => {
        expect(cadena("2")).toEqual(2);
    });    
  });
