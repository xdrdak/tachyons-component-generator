<template>
  <ComponentEditor>
    <h1 slot="component-name">Basic Rounded Button</h1>
    <div slot="editor-pane">
      <TextInput label="Button Text" :value.sync="btnText"/>
      <DropdownList label="Border Radius" :data="[0, 1, 2, 3, 4]" :value.sync="btnRadius" />
      <DropdownList label="Font Size" :data="[6, 5, 4, 3, 2, 1]" :value.sync="fontSize" />
      <DropdownList label="Padding Horizontal" :data="[0, 1, 2, 3, 4, 5, 6, 7]" :value.sync="paddingH" />
      <DropdownList label="Padding Vertical" :data="[0, 1, 2, 3, 4, 5, 6, 7]" :value.sync="paddingV" />
      <DropdownList label="Button Text Color" :data="fontColors" :value.sync="btnFontColor" />
      <DropdownList label="Background Color" :data="bgColors" :value.sync="btnBgColor" />
    </div>
    <div slot="component-preview">
      <a :class="computedClass" href="#0">{{ btnText }}</a>
    </div>
  </ComponentEditor>
</template>

<script>
import { fontColors, bgColors } from '../tachyons-utils/colors';
import ComponentEditor from '../slot-templates/ComponentEditor';
import TextInput from './form-elements/TextInput';
import DropdownList from './form-elements/DropdownList';

export default {
  name: 'hello',
  components: {
    DropdownList,
    TextInput,
    ComponentEditor,
  },
  data() {
    return {
      fontColors,
      bgColors,
      btnText: 'Sample Text',
      btnRadius: 3,
      fontSize: 6,
      paddingH: 3,
      paddingV: 2,
      btnFontColor: 'white',
      btnBgColor: 'black',
    };
  },
  computed: {
    computedClass() {
      return [
        'link dim',
        this.btnFontColor,
        `bg-${this.btnBgColor}`,
        `pv${this.paddingV}`,
        `ph${this.paddingH}`,
        `f${this.fontSize}`,
        `br${this.btnRadius}`,
      ].join(' ');
    },
  },
};
</script>
