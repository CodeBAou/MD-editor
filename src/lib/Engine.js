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
        this.editors = [];

        document.getElementById('addmenu').addEventListener('click', ()=>{
            this.newElem();
        });
    }

    newElem(){

        let order = this.elems.length + this.editors.length +1;

        let contentEditor = document.createElement('div');
        contentEditor.setAttribute('class','contentEditor');

        let saveBTN = document.createElement('img');
        saveBTN.setAttribute('src','./icon/save.svg');
        saveBTN.setAttribute('class','iconsave');

        saveBTN.addEventListener('click',()=>{    //Editor Guardar
            //Editor get data
            //Elem set data
        });

        let editor = new Editor( order );
        this.editors.push(editor);

        contentEditor.appendChild(saveBTN);
        contentEditor.appendChild(editor.getEditorHTML());

        this.content.appendChild(contentEditor);
    }

    getEditorMode(){
        
    }

    getNormalMode(){

    }

    //Guarda el elmento editor como elem, se borran textarea y se agrega el nuevo elem al dom
    guardar(){
      
    }

}





