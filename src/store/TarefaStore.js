import {defineStore} from "pinia";

export const useTarefaStore = defineStore("tarefaStore", {
  state: () => ({
    tarefas: [
      {id: 1, titulo: "comprar pão", isFav: false},
      {id: 2, titulo: "jogar W&R",   isFav: true}
    ]
  }),
  getters: {
    favoritas(){
      return this.tarefas.filter(t => t.isFav);
    },
    qtFavoritas(){
      return this.tarefas.reduce((ct, tarefa) => {
        return tarefa.isFav ? ct + 1 : ct;
      }, 0);
    },
    total: (state) => {
      return state.tarefas.length
    }
  },
  actions: {
    addTarefa(tarefa){
      this.tarefas.push(tarefa);
    },
    deletaTarefa(id){
      this.tarefas = this.tarefas.filter(tarefa => {
        return tarefa.id !== id;
      });
    },
    toggleFav(id){
      const tarefa = this.tarefas.find(tarefa => tarefa.id === id);
      tarefa.isFav = !tarefa.isFav;
    }
  }
});