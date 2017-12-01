<template>
  <div>
    <h1>Basic Rounded Button</h1>
    <div class="flex items-center">
      <!-- Editor Pane-->
      <div class="w-30">
        <TextInput label="Button Text" :value.sync="btnText"/>
        <DropdownList label="Border Radius" :data="[0, 1, 2, 3, 4]" :value.sync="btnRadius" />
        <DropdownList label="Font Size" :data="[6, 5, 4, 3, 2, 1]" :value.sync="fontSize" />
        <DropdownList label="Padding Horizontal" :data="[0, 1, 2, 3, 4, 5, 6, 7]" :value.sync="paddingH" />
        <DropdownList label="Padding Vertical" :data="[0, 1, 2, 3, 4, 5, 6, 7]" :value.sync="paddingV" />
      </div>
      <!-- Preview Pane -->
      <div class="w-70 flex justify-center">
        <!-- Object actual -->
        <div>
          <a :class="computedClass" href="#0">{{ btnText }}</a>
        </div>
        <!-- Markup output  -->
        <div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from './form-elements/TextInput';
import DropdownList from './form-elements/DropdownList';

export default {
  name: 'hello',
  components: {
    DropdownList,
    TextInput,
  },
  data() {
    return {
      btnText: 'Sample Text',
      btnRadius: 3,
      fontSize: 6,
      paddingH: 3,
      paddingV: 2,
    };
  },
  computed: {
    computedClass() {
      return [
        'link dim dib white bg-black',
        `pv${this.paddingV}`,
        `ph${this.paddingH}`,
        `f${this.fontSize}`,
        `br${this.btnRadius}`,
      ].join(' ');
    },
  },
};
</script>
