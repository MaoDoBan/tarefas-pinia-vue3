import {defineStore} from "pinia";

export const useTarefaStore = defineStore("tarefaStore", {
  state: () => ({
    tarefas: [
      {id: 1, titulo: "comprar pão", isFav: false},
      {id: 2, titulo: "jogar W&R",   isFav: true}
    ]
  })
});