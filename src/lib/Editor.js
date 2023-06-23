//
//
/**
 * Representa un Elem.js en modo edicion, contiene todos los elemento para editar una secion
 * de un fichero .md.
 * Contiene los elementos necesarios para la edicion de una seccion.
 */
class Editor{
    
    constructor(order, createElem){

        this.data       = {
            type:'',
            order:order,
            value:''
        }

        this.createElem = createElem;

        this.editorhtml = document.createElement("div");
        this.editorhtml.setAttribute('class','editorhtml');
        this.editorhtml.setAttribute('id',this.data.order);

        this.createPallet();
        this.createTextArea();

        this.editorhtml.appendChild( this.textarea );
        
    }

    setValue( value ) { this.data.value = value;}
        
    setType( type )   { this.data.type = type;}

    getData()   { return this.data;}
        
    getHTML()   { return this.editorhtml; }
    
    createPallet(){

        let pallet = document.createElement('div');
        pallet.setAttribute('class','pallet');
        pallet.setAttribute('id','palletid');

        //contenedor para los botones de tipo
        let contentAtributes = document.createElement('div');
        contentAtributes.setAttribute('class','contentAtributes');
        contentAtributes.appendChild(this.buttonT(pallet));
        pallet.appendChild( contentAtributes );

        //contenedor para los botones sabe y delete
        let contentSaveDel = document.createElement('div');
        contentSaveDel.setAttribute('class','contentSaveDel');
        contentSaveDel.appendChild( this.ButonSave() );
        contentSaveDel.appendChild( this.ButonDelete() );
        pallet.appendChild( contentSaveDel );

        this.editorhtml.appendChild(pallet);  
    }

    createTextArea(pallet){

        this.textarea   = document.createElement("textarea");
        this.textarea.setAttribute('id','textareaid');

        this.textarea.addEventListener("change", (event) => { //Define Value
            this.data.value = event.target.value;
        });

        this.editorhtml.appendChild(this.textarea);        
    }

    buttonT(pallet){

         //icon titulo
         let t = document.createElement('img');
         t.setAttribute('src','./icon/t.svg');
         t.setAttribute('class','icoPallet');
 
         let open = false;
 
         t.addEventListener('click',()=>{//SUBMENU
 
             if(open == false){
 
                 open = true;
 
                 let submenu = document.createElement('div');
                 submenu.setAttribute('class','submenu');
                 submenu.setAttribute('id','submenu'+this.order);
 
                 let list = document.createElement('ul');
 
                 let t1 = document.createElement('li');
                 let t2 = document.createElement('li');
                 let t3 = document.createElement('li');
                 
                 t1.setAttribute('class','itemMeu');
                 t2.setAttribute('class','itemMeu');
                 t3.setAttribute('class','itemMeu');
 
                 let t1btn = document.createElement('input');
                 t1btn.setAttribute("type",'button');
                 t1btn.setAttribute('value','titulo 1');
 
                 let t2btn = document.createElement('input');
                 t2btn.setAttribute('type','button');
                 t2btn.setAttribute('value','titulo 2');
 
                 let t3btn = document.createElement('input');
                 t3btn.setAttribute('type','button');
                 t3btn.setAttribute('value','titulo 3');
 
                 t1.appendChild( t1btn );
                 t2.appendChild( t2btn);
                 t3.appendChild( t3btn );
                 
                 t1.addEventListener('click',()=>{ //Define type
                    this.data.type = "t1";
                    document.getElementById('submenu'+this.order).remove();
                    
                 });
 
                 t2.addEventListener('click',()=>{//Define Type
                    this.data.type = "t2";
                    document.getElementById('submenu'+this.order).remove();
                 });
 
                 t3.addEventListener('click',()=>{//Define Type
                    this.data.type = "t3";
                    document.getElementById('submenu'+this.order).remove();
                 });
 
                 list.appendChild(t1);
                 list.appendChild(t2);
                 list.appendChild(t3);
 
                 submenu.appendChild(list);
                 pallet.appendChild(submenu);

             }
 
             else 
             {
                 open = false;
                 document.getElementsByClassName('submenu')[0].remove();
             }
         });
         
        return t;
    }

    ButonSave(){
       
        let save = document.createElement('img');
        save.setAttribute('src','./icon/save.svg');
        save.setAttribute('class','icoPallet');
        save.setAttribute('name',this.data.order);

        save.addEventListener('click', (e)=>{
            //Validar datos del editor
            if( this.validaEditorData( this.data ) ){
                //Convierte el editor en elem
                this.createElem(this.data);
            }
        });

        return save;
    }

    ButonDelete(){

        let deletebtn = document.createElement('img');
        deletebtn.setAttribute('src','./icon/delete.svg');
        deletebtn.setAttribute('class','icoPallet');

        deletebtn.addEventListener('click',()=>{

        });

        return deletebtn;
    }

    validaEditorData(data){

        let state = false;

        switch( typeof(data) ){
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

        return state;

    }
   
}
