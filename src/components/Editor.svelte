<script lang="ts">
  import * as monaco from "monaco-editor";
  import { onMount } from "svelte";

  let { className = "" }: { className?: string } = $props();
  let monacoContainer: HTMLElement;
  let monacoEditor: monaco.editor.IStandaloneCodeEditor;

  onMount(() => {
    monacoEditor = monaco.editor.create(monacoContainer, {
      value: ["function x() {", '\tconsole.log("Hello world!");', "}"].join(
        "\n",
      ),
      quickSuggestions: false,
    });
  });
</script>

<svelte:window on:resize={() => monacoEditor.layout()} />
<main class={`relative ${className}`}>
  <div bind:this={monacoContainer} class="absolute inset-0"></div>
</main>
