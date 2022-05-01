// DEPARTAMENTO
function saludo(){
    console.log("hola desde github");
}
class Departamento {
    nameDepartamento: string;
  
    constructor(name: string) {
      this.nameDepartamento = name;
    }
  
    getName() {
      return this.nameDepartamento;
    }
  }
  
  class Piso {
    // Informacion compartida entre métodos para poder guardar:escribir, y que otro pida:lea.
    departamentos: Departamento[];
    namePiso: string;
  
    constructor(name: string) {
      this.namePiso = name;
      this.departamentos = [];
    }
  
    pushDepartamento(objDepto: Departamento) {
      // ya estoy en el piso que quiero, con el depto que quiero.
  
      console.log("this", this);
      // console.log("namePiso", this.namePiso);
      // console.log("departamentos", this.departamentos);
      console.log("obj depto recibido: ", objDepto);
  
      // console.log(this.departamentos.push(objDepto));
      // console.log(typeof this.departamentos.push(objDepto));
      // console.log(typeof this.departamentos, typeof this.namePiso);
  
      this.departamentos.push(objDepto);
      console.log("departamentos", this.departamentos);
    }
  
    getDepartamento() {
      // Obtener listado de todos los departamentos de ese piso
      return this.departamentos;
    }
  }
  
  class Edificio {
    arrayPisos: Piso[];
  
    constructor(pisos: Piso[]) {
      this.arrayPisos = pisos;
    }
  
    addDepartamentoToPiso(nombreDePiso: string, departamento: Departamento) {
      // Del array de pisos: planta baja y primer piso, busco el piso que me pasan.
      const objPiso = this.arrayPisos.find((objPiso) => {
        if (objPiso.namePiso == nombreDePiso) {
          return objPiso;
        } else {
          throw new Error("NO EXISTE EL PISO");
        }
      });
  
      // console.log("objPiso", objPiso);
      // console.log("obj depto pasado", departamento);
  
      objPiso?.pushDepartamento(departamento);
  
      // Si no existe el piso con ese nombre, muestra un error.
    }
  
    getDepartamentosByPiso(nombreDePiso: string) {
      // Devuelve todos los departamentos de ese piso en formato array de la class Departamento.
      const objPiso = this.arrayPisos.find((objPiso) => {
        if (objPiso.namePiso == nombreDePiso) return objPiso;
      });
      return objPiso?.getDepartamento();
    }
  }
  
  // no modificar este test
  function testClaseEdificio() {
    const unPiso = new Piso("planta baja");
    const otroPiso = new Piso("primer piso");
    const unEdificio = new Edificio([unPiso, otroPiso]);
    const deptoUno = new Departamento("depto uno");
    const deptoDos = new Departamento("depto dos");
    const deptoTres = new Departamento("depto tres");
    unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
    unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
    unEdificio.addDepartamentoToPiso("planta baja", deptoTres);
  
    const deptos = unEdificio.getDepartamentosByPiso("planta baja");
    const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");
  
    if (
      Array.isArray(deptosEmpty) &&
      deptosEmpty.length == 0 &&
      deptos.length == 3 &&
      deptos[2].getName() == "depto tres"
    ) {
      console.log("testClaseBandaApartment passed");
    } else {
      throw "testClaseBandaApartment not passed";
    }
  }
  
  function main() {
    testClaseEdificio();
  }
  main();
