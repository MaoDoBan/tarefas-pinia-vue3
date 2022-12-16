import {defineStore} from "pinia";

export const useTarefaStore = defineStore("tarefaStore", {
  state: () => ({
    tarefas: [],
    loading: false
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
    async getTarefas(){
      this.loading = true;
      const reposta = await fetch("http://localhost:3000/tarefas");
      const tarefas = await reposta.json();
      setTimeout(() => {
        this.tarefas = tarefas;
        this.loading = false;
      }, 1500);
    },
    async addTarefa(tarefa){
      this.tarefas.push(tarefa);

      const res = await fetch("http://localhost:3000/tarefas", {
        method: "POST",
        body: JSON.stringify(tarefa),
        headers: {"Content-Type": "application/json"}
      });
      if(res.error) console.log(res.error);
    },
    async deletaTarefa(id){
      this.tarefas = this.tarefas.filter(tarefa => {
        return tarefa.id !== id;
      });

      const res = await fetch("http://localhost:3000/tarefas/" + id, { method: "DELETE" });
      if(res.error) console.log(res.error);
    },
    async toggleFav(id){
      const tarefa = this.tarefas.find(tarefa => tarefa.id === id);
      tarefa.isFav = !tarefa.isFav;

      const res = await fetch("http://localhost:3000/tarefas/" + id, {
        method: "PATCH",
        body: JSON.stringify({ isFav: tarefa.isFav }),
        headers: {"Content-Type": "application/json"}
      });
      if(res.error) console.log(res.error);
    }
  }
});