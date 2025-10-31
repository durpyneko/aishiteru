<script lang="ts">
  import { onMount } from "svelte";

  let section: HTMLElement | null = null;

  onMount(() => {
    if (!section) return;

    const spanSize = Math.min(window.innerWidth, window.innerHeight) * 0.08;
    const cols = Math.floor(window.innerWidth / spanSize);
    const rows = Math.floor(window.innerHeight / spanSize);
    const total = cols * rows;

    for (let i = 0; i < total; i++) {
      const span = document.createElement("span");
      span.classList.add("bg-span");
      section.appendChild(span);
    }
  });
</script>

<section
  bind:this={section}
  class="bg-section absolute top-0 left-0 w-screen h-screen flex justify-center items-center flex-wrap gap-0.5 overflow-hidden bg-black"
></section>
<div class="absolute top-0 left-0 w-screen h-screen z-2">
  <h1>Hello World!</h1>
</div>

<style>
  .bg-section {
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
    flex-wrap: wrap;
    overflow: hidden;
  }

  .bg-section::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(#000, #71426c, #000);
    animation: animate 5s linear infinite;
    z-index: 0;
  }

  @keyframes animate {
    0% {
      transform: translateY(-100%);
    }

    100% {
      transform: translateY(100%);
    }
  }
</style>
