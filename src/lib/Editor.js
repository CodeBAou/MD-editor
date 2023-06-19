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
        this.editorhtml.setAttribute('id',this.id);

        this.textarea   = document.createElement("textarea");

        this.textarea.addEventListener("change", (event) => {
            this.data.value = event.target.value;
        });
        
        this.openPallet();
        this.editorhtml.appendChild(this.textarea);
        
        console.log("---------------------new editor");
        console.log(this.data);
    }

    setValue( value ) { this.data.value = value;}
        
    setType( type )   { this.data.type = type;}

    getEditorData()   { return this.data;}
        
    getEditorHTML()   { return this.editorhtml; }
    
    openPallet(){
        let pallet = document.createElement('div');
        pallet.setAttribute('class','pallet');

        this.buttonT(pallet);
        this.buttonDelete(pallet);

        this.editorhtml.appendChild(pallet);
    }

    buttonSave(){
        //icon save
        let save = document.createElement('img');
        save.setAttribute('src','./icon/save.svg');
        save.setAttribute('class','icoPallet');

        save.addEventListenner('click',()=>{

        });

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
                 
                 t1.addEventListener('click',()=>{
 
                 });
 
                 t2.addEventListener('click',()=>{
 
                 });
 
                 t3.addEventListener('click',()=>{
 
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

    buttonDelete(pallet){

        let icon = document.createElement('img');
        icon.setAttribute('src','./icon/delete.svg');
        icon.setAttribute('class','icoPallet');

        icon.addEventListener('click', ()=>{
            this.editorhtml.remove();
        });

        pallet.appendChild(icon);
    }
}
