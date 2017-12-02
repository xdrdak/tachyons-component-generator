<template>
  <ComponentEditor>
    <h1 slot="component-name">Basic Rounded Button</h1>
    <div slot="editor-pane">
      <TextInput label="Button Text" :value.sync="btnText"/>
      <DropdownList label="Border Radius" :data="[0, 1, 2, 3, 4]" :value.sync="borderRadius" />
      <DropdownList label="Font Size" :data="[6, 5, 4, 3, 2, 1]" :value.sync="fontSize" />
      <DropdownList label="Padding Horizontal" :data="[0, 1, 2, 3, 4, 5, 6, 7]" :value.sync="paddingH" />
      <DropdownList label="Padding Vertical" :data="[0, 1, 2, 3, 4, 5, 6, 7]" :value.sync="paddingV" />
      <DropdownList label="Button Text Color" :data="fontColors" :value.sync="fontColor" />
      <DropdownList label="Background Color" :data="bgColors" :value.sync="bgColor" />
    </div>
    <div slot="component-preview" v-html="computedSafeComponent"></div>
    <code class="html" slot="component-raw">{{ computedComponent }}</code>
  </ComponentEditor>
</template>

<script>
import sanitize from '../utils/sanitize';
import { fontColors, bgColors } from '../tachyons-utils/colors';
import ComponentEditor from '../slot-templates/ComponentEditor';
import TextInput from './form-elements/TextInput';
import DropdownList from './form-elements/DropdownList';

const component = (text, className) => `
<a class="${className}" href="#0">
  ${text}
</a>`.trim();

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
      borderRadius: 3,
      fontSize: 6,
      paddingH: 3,
      paddingV: 2,
      fontColor: 'white',
      bgColor: 'black',
    };
  },
  computed: {
    computedClass() {
      return [
        'link dim',
        this.fontColor,
        `bg-${this.bgColor}`,
        `pv${this.paddingV}`,
        `ph${this.paddingH}`,
        `f${this.fontSize}`,
        `br${this.borderRadius}`,
      ].join(' ');
    },
    computedComponent() {
      return component(
        this.btnText,
        this.computedClass,
      );
    },
    computedSafeComponent() {
      return component(
        sanitize.encodeHTML(this.btnText),
        sanitize.encodeHTML(this.computedClass),
      );
    },
  },
};
</script>
