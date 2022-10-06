export class questionS {
    /**
     * 
     * @param {string} question la pregunta
     * @param {string[]} options opciones de las preguntas 
     * @param {string} respuesta la respuesta correcta
     */
    
    
    constructor (question, options, respuesta){
        this.question= question;
        this.options= options;
        this.respuesta= respuesta;
    }

    correrData(options){
        
        return options===this.respuesta  /*true */
    }

}

