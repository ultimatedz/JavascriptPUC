
setTimeout(() => {
    const a = 5;
    setTimeout(() => {
      const b = 10;
      setTimeout(() => {
        const c = 2;
        console.log((a + (b * c)))
      }, 800)
    }, 200)
  }, 500)
  