<template>
  <div>
    <h1>Basic Rounded Button</h1>
    <div class="flex items-center">
      <!-- Editor Pane-->
      <div class="w-30">
         <div class="measure">
          <label for="btntext" class="f6 b db mb2">Button Text</label>
          <input
            id="btntext"
            class="input-reset ba b--black-20 pa2 mb2 db w-100"
            type="text"
            aria-describedby="name-desc"
            v-model="btnText"
          >
        </div>
        <DropdownList
          label="Border Radius"
          :data="[0, 1, 2, 3, 4]"
          :value="btnRadius"
          v-on:update="updateBtnRadius"
        />
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
import DropdownList from './form-elements/DropdownList';

export default {
  name: 'hello',
  components: {
    DropdownList,
  },
  data() {
    return {
      btnText: 'Sample Text',
      btnRadius: 3,
    };
  },
  computed: {
    computedClass() {
      return [
        'f6 link dim ph3 pv2 mb2 dib white bg-black',
        `br${this.btnRadius}`,
      ].join(' ');
    },
  },
  methods: {
    updateBtnRadius(value) {
      this.btnRadius = value;
    },
  },
};
</script>
