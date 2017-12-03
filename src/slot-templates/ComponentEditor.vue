<template>
  <div class="mb3">
    <router-link to="/" class="f6 no-underline underline-hover blue dib v-mid mb0">Back</router-link>
    <div>
      <slot name="component-name"></slot>
    </div>
    <div class="flex">
      <!-- Editor Pane-->
      <div class="w-20">
        <slot name="editor-pane"></slot>
      </div>
      <div class="w-80 flex flex-column pl3 mt3">
        <!-- Object actual -->
        <div class="w-100 flex justify-center ba br2 b--black-10 pa3">
          <slot name="component-preview"></slot>
        </div>
        <!-- Markup output -->
        <div class="w-100">
          <pre class="bg-near-black light-green pa4 b br2"><slot name="component-raw"></slot></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SlotComponentEditor',
};
</script>

<style>
  pre {
    overflow: auto;
  }
</style>