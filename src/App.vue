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

    <div class="loading" v-if="loading">Carregando tarefas...</div>

    <div class="lista-tarefas" v-if="filtro === 'tudo'">
      <p>{{total}} tarefas totais restantes</p>
      <div v-for="tarefa in tarefas" :key="tarefa.id">
        <DetalhesTarefa :tarefa="tarefa"/>
      </div>
    </div>

    <div class="lista-tarefas" v-if="filtro === 'favoritas'">
      <p>{{qtFavoritas}} tarefas favoritas restantes</p>
      <div v-for="tarefa in favoritas" :key="tarefa.id">
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
import { storeToRefs } from "pinia";

export default {
  components: {DetalhesTarefa, FormTarefa},
  setup(){
    const filtro = ref("tudo");
    const tarefaStore = useTarefaStore();

    const {tarefas, loading, favoritas, total, qtFavoritas} = storeToRefs(tarefaStore);

    tarefaStore.getTarefas();
    return {tarefaStore, filtro, tarefas, loading, favoritas, total, qtFavoritas};
  }
}
</script>
