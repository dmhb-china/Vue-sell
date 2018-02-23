<template>
  <div id="app">
    <header></header>
    <div class="tab">
      I am Tab!
    </div>
    <div class="content">
      I am content!
    </div>
  </div>
</template>

<script>
  import header from './components/header/header';
  export default {
    name: 'App',
    components: {
      header
    }
  };
</script>

<style>

</style>
