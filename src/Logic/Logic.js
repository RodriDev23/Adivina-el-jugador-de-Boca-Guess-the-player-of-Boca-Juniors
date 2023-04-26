export function alphabet() {
    const startCharCode = 'a'.charCodeAt(0);
    const alphabet = [];
  
    for(let i = 0; i < 26; i++){
      const charCode = startCharCode + i;
      const letter  = String.fromCharCode(charCode);
      alphabet.push(letter);
    }
     return alphabet
     
   }
  


export const PLAYERS_NAMES = [
    "carrizo",
    "calvo",
    "delgado",
    "cagna",
    "bermúdez",
    "delgado",
    "palermo",
    "tevez",
    "schelotto",
    "battaglia",
    "palacio",
    "schiavi",
    "riquelme",
    "ibarra",
    "morel",
    "insua",
    "palermo",
    "romero",
    "rojo",
    "pol",
    "benedetto",
    "gago",
    "perez",
    "changuito",
    "oscar",
    "advincula",
    "villa",
    "fabra",
    "pulpo",
    "briasco",
    "varela",
    "vazquez",
    "pavon",
    "wanchope",
    "buffarini",
    "junior alonso",
    "mas",
    "izquierdoz",
    "chiki perez",
    "rivair",
    "campuzano",
    "bebelo",
    "almendra",
    "mac allister",
    "salvio",
    "hurtado",
    "roncaglia",
    "silva",
  ];


