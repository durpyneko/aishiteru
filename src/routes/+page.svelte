<script lang="ts">
  import { onMount } from "svelte";
  import type { Lanyard } from "./lanyard/+server";

  import { HouseIcon, GithubIcon, TwitterIcon } from "@lucide/svelte";
  import Loader3 from "$lib/components/loader-3.svelte";

  let page_title = $state<string | null>();
  import bg_video from "$lib/assets/background_compressed_min.mp4";

  let lanyard = $state<Lanyard | null>(null);
  let activity = $state<any>(undefined);
  $effect(() => {
    if (!lanyard) return;
    const activities = lanyard.data.activities.map((a: any) => ({ ...a }));

    const act = activities.find(
      (a) => a.id !== "custom" && a.name !== "Spotify",
    );

    console.log("[LOGGER:DEBUG] activity >", act);
    console.log("[LOGGER:DEBUG] activity.state >", act.name);

    activity = act;
  });

  onMount(async () => {
    page_title = "home"; // document.title

    const response = await fetch("/lanyard");
    lanyard = await response.json();
  });
</script>

<div class="relative h-screen w-screen overflow-hidden">
  <video
    id="background-video"
    class="absolute top-0 left-0 w-full h-full object-cover z-0 filter brightness-[0.4]"
    autoplay
    muted
    loop
    playsinline
  >
    <source src={bg_video} type="video/mp4" />
  </video>

  <div
    class="relative z-1 flex flex-col items-center justify-center h-full w-full text-white"
  >
    <span class="flex flex-row items-center gap-2 text-2xl mb-4 animate-y-move"
      ><span class="text-lg">//</span>{page_title}</span
    >

    <div
      class="h-[calc(100%-6rem)] w-full flex sm:flex-row flex-col justify-center items-center sm:gap-4"
    >
      <div
        class="h-full flex flex-col text-lg items-center justify-center border border-dashed hover:border-solid transition-all duration-500 ease-in-out border-[rgba(255,255,255,0.3)] bg-[rgba(225,225,225,0.02)] rounded-full p-6 px-4 backdrop-blur-md"
      >
        <div class="h-full flex flex-col justify-between">
          <span class="text-2xl">⋆.˚</span>
          <div class="hover:animate-pulse"><HouseIcon /></div>
        </div>
      </div>
      <!-- if only i knew a better way to do the mr -->
      <div
        class="h-full w-[65%] sm:w-[50%] md:w-[60%] xl:w-[40%] border border-dashed hover:border-solid transition-all duration-500 ease-in-out border-[rgba(255,255,255,0.3)] bg-[rgba(225,225,225,0.02)] rounded-4xl px-6 py-7 backdrop-blur-md"
      >
        {#if lanyard}
          <div class="animate-fade-in">
            <div class="flex justify-between items-center">
              <span class="text-3xl font-bold">durpyneko</span>
              <img
                class="size-12 rounded-full"
                src="https://cdn.discordapp.com/avatars/{lanyard.data
                  .discord_user.id}/{lanyard.data.discord_user
                  .avatar}.png?size=64"
                alt=""
              />
            </div>
            {#if activity}
              <span class="font-bold">
                <span class="font-normal">Playing</span>
                {activity.name}
              </span>
            {/if}
            <div
              class="flex flex-row gap-2 mt-1 p-2 bg-[rgba(225,225,225,0.02)] rounded-md"
            >
              <span class=""
                >{lanyard.data.activities.find((a: any) => a.id === "custom")
                  ?.emoji.name}</span
              >
              <span class=""
                >{lanyard.data.activities.find((a: any) => a.id === "custom")
                  ?.state}</span
              >
            </div>
            <div
              class="w-full bg-[rgba(255,255,255,0.1)] h-px rounded-full my-2"
            ></div>
          </div>
          <!-- divider? yes / no -->
        {:else}
          <div class="w-full flex justify-center">
            <Loader3 />
          </div>
        {/if}
      </div>
      <div
        class="h-full flex flex-col items-center justify-center gap-4 border border-dashed hover:border-solid transition-all duration-500 ease-in-out border-[rgba(255,255,255,0.3)] bg-[rgba(225,225,225,0.02)] rounded-full p-6 px-4 backdrop-blur-md"
      >
        <div class="h-full flex flex-col justify-between">
          <div></div>
          <div class="flex flex-col gap-4">
            <!-- hover show thing on the top wth blur and color "Github" "Xitter" -->
            <div class="hover:animate-pulse"><GithubIcon /></div>
            <div class="hover:animate-pulse"><TwitterIcon /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
