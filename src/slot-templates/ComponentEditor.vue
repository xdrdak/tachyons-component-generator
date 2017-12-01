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
      <div class="w-70 flex justify-center">
        <!-- Object actual -->
        <div>
          <slot name="component-preview"></slot>
        </div>
        <!-- Markup output  -->
        <div>
          <slot name="component-output"></slot>
        </div>
      </div>
    </div>
  </div>
</template>