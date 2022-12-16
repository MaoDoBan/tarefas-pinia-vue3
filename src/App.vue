<template>
  <main>
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo">
      <h1>Tarefas</h1>
    </header>

    <div class="form-nova-tarefa">
      <FormTarefa/>
    </div>

    <nav class="filtro">
      <button @click="filtro = 'tudo'">     Todas</button>
      <button @click="filtro = 'favoritas'">Favoritas</button>
    </nav>

    <div class="loading" v-if="tarefaStore.loading">Carregando tarefas...</div>

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
  import FormTarefa from "./components/FormTarefa.vue";
  import {useTarefaStore} from "./store/TarefaStore";

  export default {
    components: {DetalhesTarefa, FormTarefa},
    setup(){
      const filtro = ref("tudo");
      const tarefaStore = useTarefaStore();
      tarefaStore.getTarefas();
      return {tarefaStore, filtro};
    }
  }
</script>
