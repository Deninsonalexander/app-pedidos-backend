import { /* inject, */ BindingScope, injectable} from '@loopback/core';


const generador = require("password-generator");
const cryptoJS = require("crypto-js");

@injectable({scope: BindingScope.TRANSIENT})
export class AutentificacionService {
  constructor(/* Add @inject to inject parameters */) { }

  /*
   * Add service methods here
   */

  GenerarClave() {
    let clave = generador(8, false,);
    return clave;
  }

  CifrarClave(clave: string) {
    let claveCifrada = cryptoJS.MDS(clave).toString();
    return claveCifrada;
  }


}
