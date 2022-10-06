

export class View{
  constructor(){}
  
  
  getTitle(pregunta){
    const question = document.querySelector('#question') 
    question.innerHTML= pregunta
  }
  
  getOtions(opt, callback){
    
    const choises = document.querySelector('#choises')
    /** linea donde se ingresa el template */
    choises.innerHTML = ''
    
     /**llamado del template  */
      //  const templa = document.querySelector('#templa-btn').content
      //  const fracment = document.createDocumentFragment();// creacion del fracment 



       //funccion que crea el recorrido del array

      for (let i = 0; i < opt.length; i++) {

       const button = document.createElement("button");
       button.innerHTML = opt[i];
       button.className = "btn";
                
        button.addEventListener("click", (e)=> callback(opt[i]))
          
        
        choises.append(button)
      
    
            }
            
          }

          getscore(score){
             const viwScore = `
               <h1> tu puntaje es </h1>
                <h1>${score}</h1>
             `   
         const sco =  document.getElementById('quiz')
                 
             sco.innerHTML = viwScore

              }

              /**
               * 
               * @param {NumFooter} string 
               *
               */

            NumFooter(numPre, total){
              const element = document.getElementById('progress')
              element.innerHTML = `<h1>Questionario ${numPre} de ${total}</h1>`

            }
        }


