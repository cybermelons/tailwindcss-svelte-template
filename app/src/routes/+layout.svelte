<script>
  import '../app.css';

  export const prerender = true;

  // Put the following line into <style> to use a google font
  // @import url(//fonts.googleapis.com/css?family=Oswald);
</script>

<svelte:head>
  <link rel="icon" href="%sveltekit.assets%/favicon.png" />
</svelte:head>


<slot />


