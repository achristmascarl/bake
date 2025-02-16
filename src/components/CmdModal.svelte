<script lang="ts">
  import { fade } from "svelte/transition";
  import Fuse from "fuse.js";

  let { closeCmdModal }: { closeCmdModal: () => void } = $props();
  let searchValue = $state("");
  let debounceTimeout: ReturnType<typeof setTimeout> | null = null;

  const exampleValues = [
    {
      name: "test",
      description: "hello world",
      icon: "test",
      tags: ["test", "hello", "world"],
    },
  ];
  const fuse = new Fuse(exampleValues, {
    keys: ["name", "description", "icon", "tags"],
  });

  function autofocus(element: HTMLElement) {
    element.focus();
  }
</script>

<main
  transition:fade={{ duration: 100 }}
  class="absolute inset-0 w-full h-full z-10 flex flex-col"
>
  <button
    class="absolute inset-0 w-full h-full z-0 bg-gray-300 dark:bg-gray-900 opacity-50"
    onclick={closeCmdModal}
    aria-label="close command modal"
  ></button>
  <div
    class="mx-auto mt-10 z-10 w-96 h-auto max-h-96 rounded-lg border border-gray-300 bg-white dark:bg-black dark:border-gray-600 dark:text-white p-2 shadow-md"
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
    <div>test</div>
  </div>
</main>
