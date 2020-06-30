import firebase from "firebase";
import 'firebase/firestore'
import Item from "../models/item";

export class pizzaProvider {

    private userID:string;
    private db: firebase.firestore.CollectionReference<firebase.firestore.DocumentData>;

    constructor() {
        this.userID = firebase.auth().currentUser.uid;
        this.db = firebase.firestore().collection('itens');
    }

    cadastrar(item: Item) {
        let doc = this.db.doc();
        item.id = doc.id;
        item.usuarioID = this.userID;
        delete item.imagem;
        doc.set(Object.assign({}, item)).then(r => {
            console.log('Sucesso');
        }).catch(e => {
            console.log('Erro')
            console.log(e)
        })
    }


    excluir(id: string){
        this.db.doc(id).delete();
    }

    async buscarTodos(): Promise<Item[]> {
        return this.db.get().then(resultados =>{
            let itens = []
            resultados.forEach(doc =>{
                itens.push(doc.data())
            });
            return itens
        })
    }

    buscar(id: string): Promise<Item> {
        return this.db.doc(id).get().then(resultado =>{
            if(resultado.exists){
                let dados = resultado.data();
                let item = Object.assign(new Item(), dados);
                return item;
            }
            return null;
        })
    }

    editar(item: Item){
        this.db.doc(item.id).set(item);

    }
}