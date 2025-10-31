<script lang="ts">
  import "../app.css";
  import "../components.css";
  import Header from "$lib/components/header.svelte";
  // import favicon from '$lib/assets/favicon.svg';

  let { children } = $props();
</script>

<Header title="home" />

{@render children?.()}
