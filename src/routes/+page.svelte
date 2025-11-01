<script lang="ts">
  import { onMount } from "svelte";
  import type { Lanyard } from "./lanyard/+server";

  let section: HTMLElement | null = null;
  let lanyard = $state<Lanyard | null>(null);

  onMount(async () => {
    // * Background
    if (!section) return;

    // const baseSize = 40;
    // const scale = Math.min(window.innerWidth, window.innerHeight) / 1080;
    // const spanSize = baseSize * scale;
    const spanSize = Math.min(window.innerWidth, window.innerHeight) * 0.08;
    const cols = Math.floor(window.innerWidth / spanSize);
    const rows = Math.floor(window.innerHeight / spanSize);
    const total = cols * rows;

    for (let i = 0; i < total; i++) {
      const span = document.createElement("span");
      span.classList.add("bg-span");
      section.appendChild(span);
    }

    // * Lanyard / Discord API
    const response = await fetch("/lanyard");
    lanyard = await response.json();
  });
</script>

<div class="absolute top-0 left-0 h-screen w-screen z-3 pointer-events-none">
  <div class="flex flex-col p-4 px-[30vw] text-neutral-400 pointer-events-auto">
    {#if lanyard}
      <div class="flex flex-col gap-2">
        <div class="flex flex-row gap-2 items-center">
          <img
            class="size-10 rounded-full"
            src="https://cdn.discordapp.com/avatars/{lanyard.data.discord_user
              .id}/{lanyard.data.discord_user.avatar}.png?size=64"
            alt=""
          />
          <span class="text-2xl">
            {lanyard.data.discord_user.global_name} ({lanyard.data.discord_user
              .username})
          </span>
        </div>
        <span class=""
          >{lanyard.data.activities.find((a: any) => a.id === "custom")
            ?.state}</span
        >
      </div>
    {:else}
      <span class="text-2xl">Loading user...</span>
    {/if}
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
