<template>
  <ComponentEditor>
    <h1 slot="component-name">Basic Rounded Button</h1>
    <div slot="editor-pane">
      <TextInput label="Button Text" :value.sync="btnText"/>
      <DropdownList label="Border Radius" :data="[0, 1, 2, 3, 4]" :value.sync="borderRadius" />
      <DropdownList label="Font Size" :data="[6, 5, 4, 3, 2, 1]" :value.sync="fontSize" />
      <DropdownList label="Padding Horizontal" :data="[0, 1, 2, 3, 4, 5, 6, 7]" :value.sync="paddingH" />
      <DropdownList label="Padding Vertical" :data="[0, 1, 2, 3, 4, 5, 6, 7]" :value.sync="paddingV" />
      <DropdownListColors label="Button Text Color" :value.sync="fontColor" />
      <DropdownListColors label="Background Color" colorsFor="background" :value.sync="bgColor" />
    </div>
    <div slot="component-preview" v-html="computedSafeComponent"></div>
    <code class="html" slot="component-raw">{{ computedComponent }}</code>
  </ComponentEditor>
</template>

<script>
import sanitize from '@/utils/sanitize';
import converter from '@/tachyons-utils/converter';
import ComponentEditor from '@/slot-templates/ComponentEditor';
import TextInput from '@/components/form-elements/TextInput';
import DropdownList from '@/components/form-elements/DropdownList';
import DropdownListColors from '@/components/form-elements/DropdownListColors';

const component = (text, className) => `
<a class="${className}" href="#0">
  ${text}
</a>`.trim();

export default {
  name: 'basic-button',
  components: {
    DropdownList,
    DropdownListColors,
    TextInput,
    ComponentEditor,
  },
  data() {
    return {
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
      return converter.dataObjectToTachyonsString(this.$data, ['link dim dib']);
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
