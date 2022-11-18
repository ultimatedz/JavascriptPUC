const circulo = {
    radius: 3,
    areaCirculo: function() {
      return (3.14 * this.radius * this.radius).toFixed(2)
    },
    perimetro: function() {
      return ((2 * 3.14) * this.radius).toFixed(2)
    }
  }
  
  console.log(circulo.areaCirculo())
  console.log(circulo.perimetro())