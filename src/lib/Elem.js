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

        /**
         this.data       = {
            type:'',
            order:order,
            value:''
           }
         */
        this.data  = data;
        this.elem  = null;
        let value  = "";
        
        //Se definen el html y la clase segun el tipo de elemento
        switch( this.data.type ){ //Select class by style

            case 't1':

                this.elem = document.createElement('h1');
                this.elem.setAttribute("class","t1");
                value = document.createTextNode( this.data.value );
                this.elem.appendChild( value );
                break;

            case 't2':

                this.elem = document.createElement('h2');
                this.elem.setAttribute("class","t2");
                value = document.createTextNode( this.data.value );
                this.elem.appendChild( value );
                break;

            case 't3':

                this.elem = document.createElement('h3');
                this.elem.setAttribute("class","t3");
                value = document.createTextNode( this.data.value );
                this.elem.appendChild( value );
                break;

            case 'p':

                this.elem = document.createElement('p');
                this.elem.setAttribute("class","p");
                value = document.createTextNode( this.data.value );
                this.elem.appendChild( value );
                break;

            case 'b':

                this.elem = document.createElement('b');
                this.elem.setAttribute("class","b");
                break;

            case 'c':

                this.elem = document.createElement('i');
                this.elem.setAttribute("class","c");
                break;

            case 't':

                this.elem = document.createElement('del');
                this.elem.setAttribute("class","t");
                break;

            case 'cna':

                this.elem = document.createElement('b');
                let i = document.createElement('i');
                this.elem.setAttribute("class","cna");
                break;

            case 'nc':

                this.elem.setAttribute("class","nc");
                break;

            case 'sub':

                this.elem.setAttribute("class","sub");
                break;

            case 'sup':

                this.elem.setAttribute("class","sup");
                break;

            case 'ec':

                this.elem.setAttribute("class","ec");
                break;

            case 'cita':

                this.elem.setAttribute("class","cita");
                break;

            case 'bloque':

                this.elem.setAttribute("class","bloque");
                break;

            case 'url':

                this.elem.setAttribute("class","url");
                break;

            case 'img':

                this.elem.setAttribute("class","img");
                break;

            case 'ol':

                this.elem.setAttribute("class","ol");
                break;

            case 'ul':

                this.elem.setAttribute("class","ul");
                break;

            case 'la':

                this.elem.setAttribute("class","la");
                break;

            case 'lt':

                this.elem.setAttribute("class","lt");
                break;

            case 'user':
                
                this.elem.setAttribute("class","user");
                break;
        }

       
    }

    setValue(value) { this.data.value = value; }

    setType(type)   { this.data.type  = type; }

    getElemData()   { return this.data; }

    getHTML(){
        return this.elem;
    }

    

    
}
