<script>
  import '../app.css';

  export const prerender = true;
</script>

<svelte:head>
  <link rel="icon" href="%sveltekit.assets%/favicon.png" />
  <script src="https://kit.fontawesome.com/d28d35f71e.js" crossorigin="anonymous"></script>
</svelte:head>


<slot />


<style>
  @import url(//fonts.googleapis.com/css?family=Oswald);
  @import url(//fonts.googleapis.com/css?family=Source+Serif+4);
  @import url(//fonts.googleapis.com/css?family=Zen+Old+Mincho);
  @import url(//fonts.googleapis.com/css?family=BIZ+UDMincho);
  @import url(//fonts.googleapis.com/css?family=Abel);
</style>
