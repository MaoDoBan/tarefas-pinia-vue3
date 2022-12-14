import {defineStore} from "pinia";

export const useTarefaStore = defineStore("tarefaStore", {
  state: () => ({
    tarefas: [
      {id: 1, title: "comprar pão", isFav: false},
      {id: 2, title: "jogar W&R", isFav: true}
    ],
    nome: "Salgado"
  })
});