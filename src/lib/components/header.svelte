<script lang="ts">
  export let title = "loading...";
  export let icon = "glassy_butterfly_min.gif"; // /kikuri/GDb0vWyXMAApZ03.gif
  export let og_image = "glassy_butterfly_min.gif";
  export let description = "( •ᴗ•)⸝🍻⸜(•ᴗ• )";
</script>

<svelte:head>
  <title>{`⟡ ${title}`}</title>
  <link rel="icon" href={icon} />
  <meta property="og:image" content={og_image} />
  <meta name="description" content={description} />
</svelte:head>
