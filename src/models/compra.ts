import Cliente from "./cliente";

export default class Compra {
    constructor(
        public id:number,
        public tipoDePagamento:string,
        public total:number,
        public cliente:Cliente) {}
}
