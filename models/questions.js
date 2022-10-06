import { questionS } from '../models/Question.js'
import{data} from '../data/data.js'

// funcion especial que nos retorna todos los objetos  
export const newQuestion = data.map(q=>(new questionS(q.question, q.options, q.respuesta)))








 

