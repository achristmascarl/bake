<script lang="ts">
  import { fade } from "svelte/transition";
  import Fuse from "fuse.js";
  import { error, info } from "@tauri-apps/plugin-log";
  import { onMount } from "svelte";
  import { commands, type Recipe } from "../bindings";

  let { closeCmdModal }: { closeCmdModal: () => void } = $props();
  let searchValue = $state("");
  let recipeList: Recipe[] = $state([]);

  onMount(async () => {
    const res = await commands.listRecipes();
    if (res.status === "error") {
      error(res.error);
    } else {
      info(res.data.join(", "));
    }
  });

  const exampleValues: Recipe[] = [
    {
      id: "test",
      name: "test",
      description: "hello world",
      icon: "test",
      tags: ["test", "hello", "world"],
      bias: null,
    },
  ];

  const fuse = new Fuse(exampleValues, {
    keys: ["name", "description", "icon", "tags"],
  });

  $effect(() => {
    recipeList = fuse.search(searchValue).map((result) => result.item);
  });

  function autofocus(element: HTMLElement) {
    element.focus();
  }
</script>

<main
  transition:fade={{ duration: 75 }}
  class="absolute inset-0 w-full h-full z-10 flex flex-col"
>
  <button
    class="absolute inset-0 w-full h-full z-0 bg-gray-300 dark:bg-gray-900 opacity-50"
    onclick={closeCmdModal}
    aria-label="close command modal"
  ></button>
  <div
    class="mx-auto mt-10 z-10 w-96 h-auto max-h-96 rounded-lg border border-gray-300 bg-white dark:bg-black dark:border-gray-600 dark:text-white p-2 shadow-md"
    onblur={closeCmdModal}
  >
    <input
      value={searchValue}
      oninput={(event) => {
        searchValue = event.currentTarget.value ?? "";
      }}
      placeholder="Search for commands..."
      class="w-full focus:outline-none"
      use:autofocus
    />
    {#if recipeList.length}
      <ul class="mt-2">
        {#each recipeList as recipe}
          <li class="flex items-center space-x-2">
            <span class="text-lg">{recipe.icon}</span>
            <div>
              <p class="font-semibold">{recipe.name}</p>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                {recipe.description}
              </p>
            </div>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</main>
