
import {questionS} from '/models/Question.js'
import { newQuestion } from './models/questions.js'
import{ Quiz} from './models/Quiz.js'
import { View } from './models/View.js'

/**
 * 
 * @param {Quiz} quiz  object
 * @param {View} view is object 
 */


/** la funcion ejecuta y pinta las opciones gracias a que ya vienen las instancias */

const renderPage =(quiz, view)=>{
    if(quiz.FinPregunta()){
        view.getscore(quiz.score);
    }

    
    
    else{
        view.getTitle(quiz.NumPregunta().question)
        view.getOtions(quiz.NumPregunta().options, (opt2)=>{
            quiz.NumPuntaje(opt2)
            renderPage(quiz, view)
        });
        
        view.NumFooter(quiz.numPre, newQuestion.length)
    }
}









const main = ()=>{
    /**instancio la clase y las mando con el llamado de la funcion  */
    const quiz =new Quiz(newQuestion)
    const view = new View()
    renderPage(quiz, view)
  
}

main()