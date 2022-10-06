
//@ts-check

import { questionS } from './Question.js'
import { newQuestion } from './questions.js';
   

export class Quiz {
   numPre = 0;
   score = 0 ;
   
   

   constructor (newQuestion){
     this.question=newQuestion;

   }


   /** esta funccion me ayuda a saber en que pregunta voy  */      
   
   NumPregunta(){
     return  this.question[this.numPre]
      

    }

   // esta funcion valida cunado se finalicen las preguntas 
    FinPregunta() 
    {
      return this.question.length === this.numPre  
    }
    
    
    /**esta me ayuda a sacar el puntaje  */
    NumPuntaje(question){
      console.log(question)
      if(this.NumPregunta().correrData(question)){
        this.score++
      }
      
      this.numPre++
      
      
      
    }
    
    
   
    
  }