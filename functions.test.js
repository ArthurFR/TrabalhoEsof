var functions = require('./functions.js');
var convertTo10 = functions.convertTo10;
var convertFrom10 = functions.convertFrom10;
var verifyNumber = functions.verifyNumber;


describe('Testando função que verifica número e se a base estão corretos', () =>{

    test('Verificando vazio para a base 10', () => {
      expect(verifyNumber(' ',2)).toBe(-1);
    });

    test('Verificando falha binário para a base 10', () => {
      expect(verifyNumber('19',2)).toBe(-1);
    });

    test('Verificando falha base 8 para a base 10', () => {
      expect(verifyNumber('19',8)).toBe(-1);
    });
});

describe('Testando conversoes para a base 10', () =>{

    test('Convertendo binário para base 10', () => {
      expect(Number(convertTo10('1010',2))).toBe(10);
    });

    test('Convertendo da base 8 para base 10', () => {
      expect(Number(convertTo10('12',8))).toBe(10);
    });

    test('Convertendo base 10 para binário', () => {
      expect(convertTo10('A',16)).toBe(10);
    });
});

describe('Testando conversoes da base 10 para outras bases', () =>{

    test('Convertendo para binário', () => {
      expect(Number(convertFrom10(10,2))).toBe(1010);
    });

    test('Convertendo para base 8', () => {
      expect(Number(convertFrom10(10,8))).toBe(12);
    });

    test('Convertendo para a base 16', () => {
      expect(convertFrom10(10,16)).toBe('A');
    });
});
