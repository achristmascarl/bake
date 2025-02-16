<script lang="ts">
  import { onMount } from "svelte";
  import * as monaco from "monaco-editor";
  import { theme } from "../lib/theme";
  import CmdModal from "../components/CmdModal.svelte";

  let { className = "" }: { className?: string } = $props();
  let cmdModalOpen = $state(false);
  let monacoContainer: HTMLElement;
  let monacoEditor: monaco.editor.IStandaloneCodeEditor;

  onMount(() => {
    monacoEditor = monaco.editor.create(monacoContainer, {
      value: ["function x() {", '\tconsole.log("Hello world!");', "}"].join(
        "\n",
      ),
      theme: $theme === "dark" ? "vs-dark" : "vs",
      quickSuggestions: false,
      minimap: { enabled: false },
      lineNumbersMinChars: 4,
      folding: false,
      contextmenu: false,
    });
  });

  function handleKeyDown(event: KeyboardEvent) {
    if (event.metaKey && event.key === "b") {
      cmdModalOpen = !cmdModalOpen;
    } else if (event.key === "Escape") {
      cmdModalOpen = false;
    }
  }
</script>

<svelte:window
  on:keyup={handleKeyDown}
  on:resize={() => monacoEditor.layout()}
/>
<main class={`relative w-full h-full ${className}`}>
  {#if cmdModalOpen}
    <CmdModal closeCmdModal={() => (cmdModalOpen = false)} />
  {/if}
  <div bind:this={monacoContainer} class="absolute inset-0"></div>
</main>
