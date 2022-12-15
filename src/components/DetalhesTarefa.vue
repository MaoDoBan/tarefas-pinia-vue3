<template>
  <div class="tarefa">
    <h3>{{tarefa.titulo}}</h3>
    <div class="icons">
      <i class="material-icons" @click="tarefaStore.deletaTarefa(tarefa.id)">delete</i>
      <i class="material-icons" @click="tarefaStore.toggleFav(tarefa.id)" :class="{favorita: tarefa.isFav}">favorite</i>
    </div>
  </div>
</template>

<script>
  import {useTarefaStore} from "../store/TarefaStore";

  export default {
    props: ["tarefa"],
    setup(){
      const tarefaStore = useTarefaStore();
      return {tarefaStore};
    }
  }
</script>