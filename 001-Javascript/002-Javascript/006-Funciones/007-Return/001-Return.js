function saluda (nombre,edad,email){
    cadena="";
    cadena+="Me llamo "+nombre+".\n";
    cadena+="Tengo "+edad+" años\n";
    cadena+="Mi correo es "+email+"\n";
    return cadena;
}
console.log(saluda("Jose",28,"jose@jose.com"));
console.log(saluda("Alex",27,"alex@alex.com"));
console.log(saluda("Felipe",26,"felipe@felipe.com"));
