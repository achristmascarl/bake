<script lang="ts">
  import { onMount } from "svelte";
  import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
  import Editor from "../components/Editor.svelte";
  import { commands } from "../bindings";

  self.MonacoEnvironment = {
    getWorker(_, __) {
      return new editorWorker();
    },
  };

  onMount(() => {
    commands.showMainWindow();
  });
</script>

<main class="relative h-screen overflow-hidden bg-white dark:bg-black">
  <Editor />
</main>
