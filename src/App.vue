<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo">
      <h1>Tarefas</h1>
    </header>

    <nav class="filtro">
      <button @click="filtro = 'tudo'">     Todas</button>
      <button @click="filtro = 'favoritas'">Favoritas</button>
    </nav>

    <div class="lista-tarefas" v-if="filtro === 'tudo'">
      <p>{{tarefaStore.total}} tarefas totais restantes</p>
      <div v-for="tarefa in tarefaStore.tarefas" :key="tarefa.id">
        <DetalhesTarefa :tarefa="tarefa"/>
      </div>
    </div>

    <div class="lista-tarefas" v-if="filtro === 'favoritas'">
      <p>{{tarefaStore.qtFavoritas}} tarefas favoritas restantes</p>
      <div v-for="tarefa in tarefaStore.favoritas" :key="tarefa.id">
        <DetalhesTarefa :tarefa="tarefa"/>
      </div>
    </div>
  </main>
</template>

<script>
  import {ref} from "vue";
  import DetalhesTarefa from "./components/DetalhesTarefa.vue";
  import {useTarefaStore} from "./store/TarefaStore";

  export default {
    components: {DetalhesTarefa},
    setup(){
      const filtro = ref("tudo");
      const tarefaStore = useTarefaStore();
      return {tarefaStore, filtro};
    }
  }
</script>
