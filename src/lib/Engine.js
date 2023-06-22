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
            this.load(this.newEditor());
        });
    }

    //Carga en el panel un elemento 
    load(elem){
        this.content.appendChild(elem);
    }

    newEditor(){

        let order = this.elems.length + this.editors.length ;

        //Contenedor principal del editor
        let contentEditor = document.createElement('div');
        contentEditor.setAttribute('class','contentEditor');
        contentEditor.setAttribute('id','order');

        //Contenedor para los botones guardar / eliminar
        let contentSAVEandDELETE = document.createElement('div');
        contentSAVEandDELETE.setAttribute('class','contentSD');

        //Contenedor para la parte de edicion
        let contentEDITOR = document.createElement('div');
        contentEDITOR.setAttribute('class','contentE');

        //Objecto editor con los elementos para editar los datos
        let editor = new Editor( order );
        this.editors.push(editor);
        console.log(this.editors);

        //carga de botones guardar y eliminar
        contentSAVEandDELETE.appendChild(this.getButonSave(order));
        contentSAVEandDELETE.appendChild(this.getButonDelete(order));
        contentEditor.appendChild(contentSAVEandDELETE);
        contentEditor.appendChild(editor.getEditorHTML());
      
        return contentEditor;
    }

    getEditorMode(){
        
    }

    getNormalMode(){

    }

    getButonSave(order){

        let save = document.createElement('img');
        save.setAttribute('src','./icon/save.svg');
        save.setAttribute('class','icoPallet');
        save.setAttribute('name',order);

        save.addEventListener('click', (e)=>{
            let order = e.target.name;
            let dataEditor = this.editors[parseInt(order)].getData();
            console.log(dataEditor);
            this.validaEditorData(dataEditor);
        });

        return save;
    }

    getButonDelete(order){

        let deletebtn = document.createElement('img');
        deletebtn.setAttribute('src','./icon/delete.svg');
        deletebtn.setAttribute('class','icoPallet');

        deletebtn.addEventListener('click',()=>{

        });

        return deletebtn;
    }

    //Guarda el elmento editor como elem, se borran textarea y se agrega el nuevo elem al dom
    guardar(){
      
    }

    validaEditorData(data){

        let state = false;
        
        console.log(typeof(data));

        switch(typeof(data)){
            case 'object':

                    if(data.type == "" || data.type == null || data.type == undefined ){
                       
                        //marcar div pallet con estilos invalido
                        document.getElementById('palletid').setAttribute('class','invalid');
                        console.log("x");
                        state = false;
                    }else{
                        state = true;
                        document.getElementById('palletid').setAttribute('class','pallet');
                    }

                    if(state == true && data.value == "" || data.value == null || data.value == undefined ){
                        //Marcar text area estilos invalido
                        document.getElementById('textareaid').setAttribute('class','textareaInvalid');
                        state = false;
                    }else{
                        state = true;
                        document.getElementById('textareaid').setAttribute('class','');
                    }


                break;

            default:
                state = false;
                break;        
        }

    }
}





