/**
 * Este es el motor que y se encarga de ordenar las secciones de .md y convertir cada secion
 * a modo elem (representa los mismos estilos que un .md ) o modo edición (Funcionalida para editar la seccion).
 * 
 * Entre sus funcionalidades estan:
 *  . crear/eliminar secciones
 *  . editar secciones
 *  . cambiar el orden de las secciones mediante drag and drop.
 *  . traducir a sintaxis .md y guardar fichero
 *  . cargar un fichero .md para su edicion
 */

class Engine{

    constructor(){
        
        this.content = document.getElementsByTagName("main")[0];
        this.elems   = [];
        this.editors = [null];

        document.getElementById('addmenu').addEventListener('click', ()=>{
            this.content.appendChild(this.newEditor()); 
        });
    }

  
        
    newEditor(){

        let order = this.elems.length + this.editors.length ;

        //Contenedor principal del editor
        let contentEditor = document.createElement('div');
        contentEditor.setAttribute('class','contentEditor');
        contentEditor.setAttribute('id',order);

        //Contenedor para la parte de edicion
        let contentEDITOR = document.createElement('div');
        contentEDITOR.setAttribute('class','contentE');

        //Objecto editor con los elementos para editar los datos
        let editor = new Editor( order, this.createElem);
        this.editors.push(editor);

        contentEditor.appendChild(editor.getHTML());
      
        return contentEditor;
    }

    //Convierte el elemento editor en elem (Estilos .md )
    createElem( dataEditor ){
        
        document.getElementById( dataEditor.order ).remove();

        let elemcontent = document.createElement('div');
        elemcontent.setAttribute('class','elemcontent');
        elemcontent.setAttribute('id',dataEditor.order);

        let elem = new Elem( dataEditor );

        elemcontent.appendChild( elem.getHTML() );
        
        document.getElementsByTagName("main")[0].appendChild(elemcontent);
    }

    
}





