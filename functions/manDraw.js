
const draw = (fail) => {
  switch (fail) {
    case 1:
      return(`
     ________
    |       
    |       
    |      
    |       
    |      
    |
  __|__ 
`)
      // break;

    case 2:
      return(`
     ________
    |       |
    |       
    |      
    |       
    |      
    |
  __|__ 
`)
      // break;

    case 3:
      return(`
     ________
    |       |
    |       O
    |      
    |       
    |      
    |
  __|__ 
`)
      // break;

    case 4:
      return(`
     ________
    |       |
    |       O
    |      /|/
    |       
    |      
    |
  __|__ 
`)
      // break;

    case 5:
      return(`
      ________
     |       |
     |       O
     |      /|/
     |       |
     |      
     |
   __|__ 
 `)
      // break;

    case 6:
      return(`
      ________
     |       |
     |       O
     |      /|/
     |       |
     |      / 
     |
   __|__ 
 `)
      // break;
    case 7:
      return(`
      ________
     |       |
     |       O
     |      /|/
     |       |
     |      / /
     |
   __|__ 
 
   GAME OVER
 `)
      // break;

  }
}


module.exports = {draw}