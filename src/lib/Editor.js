//
//
/**
 * Representa un Elem.js en modo edicion, contiene todos los elemento para editar una secion
 * de un fichero .md.
 * Contiene los elementos necesarios para la edicion de una seccion.
 */
class Editor{
    
    constructor(order){

        this.data       = {
            type:'',
            order:order,
            value:''
        }

        this.editorhtml = document.createElement("div");
        this.editorhtml.setAttribute('class','editorhtml');
        this.editorhtml.setAttribute('id',order);

        this.textarea   = document.createElement("textarea");
        this.textarea.setAttribute('id','textareaid');

        this.textarea.addEventListener("change", (event) => { //Define Value
            this.data.value = event.target.value;
        });
        
        this.openPallet();
        this.editorhtml.appendChild( this.textarea );
        
        
    }

    setValue( value ) { this.data.value = value;}
        
    setType( type )   { this.data.type = type;}

    getData()   { return this.data;}
        
    getEditorHTML()   { return this.editorhtml; }
    
    openPallet(){
        let pallet = document.createElement('div');
        pallet.setAttribute('class','pallet');
        pallet.setAttribute('id','palletid');
        this.buttonT(pallet);
        this.editorhtml.appendChild(pallet);
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
         
         pallet.appendChild(t);
    }

   
}
