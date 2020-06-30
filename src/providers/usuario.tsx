import Cliente from '../models/cliente';
import firebase from "firebase";
import 'firebase/firestore'

export class clienteProvider {

    private userID:string;
    private db: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>;

    constructor() {
    this.userID = firebase.auth().currentUser.uid;
    this.db = firebase.firestore().collection('cliente');
    }

    cadastrar(cliente: Cliente){
        let doc = this.db.doc();
        this.db.doc(cliente.id).set(cliente);
    }
    excluir(id: string){
        this.db.doc(id).delete();
    }
    buscar(cliente: Cliente){


    }
    editar(cliente: Cliente){
        this.db.doc(cliente.id).set(cliente);

    }
}