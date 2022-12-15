<template>
  <form @submit.prevent="criarTarefa">
    <input type="text" placeholder="Eu preciso..." v-model="novaTarefa">
    <button>Add</button>
  </form>
</template>

<script>
import {ref} from "vue";
import {useTarefaStore} from "../store/TarefaStore";
export default {
  setup(){
    const tarefaStore = useTarefaStore();
    const novaTarefa = ref("");
    const criarTarefa = () => {
      if (novaTarefa.value.length > 0) {
        tarefaStore.addTarefa({
          titulo: novaTarefa.value,
          isFav: false,
          id: Math.floor(Math.random() * 1000000)
        });
        novaTarefa.value = "";
      }
    };
    return {criarTarefa, novaTarefa};
  }
}
</script>