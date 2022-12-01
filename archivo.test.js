const{
    nombre,edad,nuevoBool,nuevaResta,nuevaMultiplicacion,nuevoModulo,
} = require("./index.js");

describe("edad", function () {
    it("Debe ser un número", function(){
        expect(typeof edad).toBe('number');
    })
})
describe("nombre", function () {
    it("Debe ser una cadena", function(){
        expect(typeof nombre).toBe('string');
    })
})
describe("nuevoBool", function () {
    it("Debe ser una boolean", function(){
        expect(typeof nuevoBool).toBe('boolean');
    })
})
describe("nuevaResta", function () {
    it("Debe ser una resta", function(){
        expect(nuevaResta).toBe(true);
    })
})
describe("nuevaMultiplicacion", function () {
    it("Debe ser una multiplicacion", function(){
        expect(nuevaMultiplicacion).toBe(true);
    })
})
describe("nuevoModulo", function () {
    it("Debe ser 1", function(){
        expect(nuevoModulo).toBe(true);
    })
})