<script>
  import Nav from './Nav.svelte';
</script>

<div class="layout">
  <header>
    <Nav />
  </header>
  
  <main>
    <slot></slot>  
  </main>
</div>

<style>
  .layout {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  header {
    margin-bottom: 20px;
  }
</style>