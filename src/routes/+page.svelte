<script lang="ts">
  import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
  import Editor from "../components/Editor.svelte";

  self.MonacoEnvironment = {
    getWorker(_, __) {
      return new editorWorker();
    },
  };
</script>

<main class="relative h-screen overflow-hidden bg-white dark:bg-black">
  <Editor />
</main>
