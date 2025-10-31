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

<div class="absolute top-0 left-0 h-screen w-screen z-3 pointer-events-none">
  <div class="flex justify-center p-4 pointer-events-auto">
    <span
      class="px-4 py-3 text-4xl font-medium text-white
         rounded-2xl border border-white/40
         bg-white/10 backdrop-blur-xl
         shadow-[0_4px_30px_rgba(0,0,0,0.1)]
         hover:bg-white/20 transition-all duration-300"
    >
      Hello World!
    </span>
  </div>
</div>
<section
  bind:this={section}
  class="bg-section absolute top-0 left-0 w-screen h-screen flex justify-center items-center flex-wrap gap-0.5 overflow-hidden bg-black"
></section>

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
