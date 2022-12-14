<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo">
      <h1>Tarefas</h1>
    </header>

    <div class="lista-tarefas">
      <div v-for="tarefa in tarefaStore.tarefas" :key="tarefa.id">
        <DetalhesTarefa :tarefa="tarefa"/>
      </div>
    </div>
  </main>
</template>

<script>
  import DetalhesTarefa from "./components/DetalhesTarefa.vue";
  import {useTarefaStore} from "./store/TarefaStore";

  export default {
    components: {DetalhesTarefa},
    setup(){
      const tarefaStore = useTarefaStore();
      return {tarefaStore};
    }
  }
</script>
