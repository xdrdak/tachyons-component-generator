<template>
  <div>
    <div>
      <slot name="component-name"></slot>
    </div>
    <div class="flex items-center">
      <!-- Editor Pane-->
      <div class="w-20">
        <slot name="editor-pane"></slot>
      </div>
      <div class="w-80 flex pl3 flex-column">
        <!-- Object actual -->
        <div>
          <slot name="component-preview"></slot>
        </div>
        <!-- Markup output -->
        <div>
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