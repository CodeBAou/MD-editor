/**
 * Cada Elem representa una seccion con los mismo estilos que un fichero .md.
 * Una seccion puede ser por ejemplo un titulo 1, titulo 2 o titulo 3 o una imagen, etc.
 * 
* Define Types
*  .t1
*  .t2
*  .t3
*  .bold
*  .cursive
*  .tachado
*  .cursivaAnidada
*  .NegritaCursiva
*  .SubScript
*  .EntreComillado
*  .Cita
*  .color
*  .EnlaceSeccion
*/


class Elem{

    constructor(data){

        this.elem  = null;

        /**
         this.data       = {
            type:'',
            order:order,
            value:''
           }
         */
        this.data  = data;


        switch(type){ //Select class by style
            case 't1':
                this.elem.setAttribute("class","t1");
                break;
            case 't2':
                this.elem.setAttribute("class","t2");
                break;
            case 't3':
                this.elem.setAttribute("class","t3");
                break;
            case 'bold':
                this.elem.setAttribute("class","bold");
                break;
            case 'cursiva':
                this.elem.setAttribute("class","cursiva");
                break;
            case 'tachado':
                this.elem.setAttribute("class","tachado");
                break;
            case 'cursivaAnidada':
                this.elem.setAttribute("class","cursivaAnidada");
                break;
            case 'negritaCursiva':
                this.elem.setAttribute("class","negritaCursiva");
                break;
            case 'subScript':
                this.elem.setAttribute("class","subScript");
                break;
            case 'superScript':
                this.elem.setAttribute("class","superScript");
                break;
            case 'entreComillado':
                this.elem.setAttribute("class","entreComillado");
                break;
            case 'cita':
                this.elem.setAttribute("class","cita");
                break;
            case 'color':
                this.elem.setAttribute("class","color");
                break;
            case 'vinculos':
                this.elem.setAttribute("class","vinculos");
                break;
            case 'enlaceSeccion':
                this.elem.setAttribute("class","enlaceSeccion");
                break;
        }
    }

    setValue(value) { this.data.value = value; }
    setType(type)   { this.data.type  = type; }

    getElemData()   { return this.data; }

    createNode(value){
        let div  = document.createElement("div");
        let span = document.createElement("span");
        span.setAttrubute('class','');
        let text = document.createTextNode(value);
        span.appendChild(text);
        div.appendChild(span);
        this.elem = div;
    }

    

    
}
