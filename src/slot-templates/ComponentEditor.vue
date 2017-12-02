<template>
  <div>
    <div>
      <slot name="component-name"></slot>
    </div>
    <div class="flex items-center">
      <!-- Editor Pane-->
      <div class="w-30">
        <slot name="editor-pane"></slot>
      </div>
      <div class="w-70 flex pl3 flex-column">
        <!-- Object actual -->
        <div>
          <slot name="component-preview"></slot>
        </div>
        <!-- Markup output -->
        <div>
          <pre><slot name="component-raw"></slot></pre>
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