
function circuloConstructor(raio){
    this.raio = raio;
  }
  circuloConstructor.prototype.areaCirculo = function() {
    return (3.14 * this.raio * this.raio).toFixed(2);
  }
  
  circuloConstructor.prototype.perimetro = function() {
    return (2 * 3.14 * this.raio).toFixed(2);
  }
  
  const circulo1 = new circuloConstructor(4);
  const circulo2 = new circuloConstructor(6);


  console.log(`Circulo Um:  Area- ${circulo1.areaCirculo()} Perimetro - ${circulo1.perimetro()}`)
  console.log(`Circulo Dois: Area- ${circulo2.areaCirculo()} Perimetro - ${circulo2.perimetro()}`)
  