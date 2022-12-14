<template>
  <div class="tarefa">
    <h3>{{tarefa.titulo}}</h3>
    <div class="icons">
      <i class="material-icons">delete</i>
      <i class="material-icons">favorite</i>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["tarefa"],
  }
</script>