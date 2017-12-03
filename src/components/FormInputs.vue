<template>
  <ComponentEditor>
    <h1 slot="component-name">Basic Form Input</h1>
    <div slot="editor-pane">
      <h4>Text Boxes</h4>
      <DropdownList label="Padding All" :data="[1, 2, 3]" :value.sync="textbox.paddingAll" />
      <DropdownList label="Border Radius" :data="[0, 1, 2, 3, 4]" :value.sync="textbox.borderRadius" />
      <DropdownList label="Border Width" :data="['default', 1, 2, 3]" :value.sync="textbox.borderWidth" />
      <DropdownListColors label="Border Color" colorsFor="border" :value.sync="textbox.borderColor" />
      <DropdownList label="Glowing Outline" :data="['yes', 'no']" :value.sync="textbox.outline" />
    </div>
    <div class="flex w-100" slot="component-preview" v-html="computedSafeComponent"></div>
    <code class="html" slot="component-raw">{{ computedComponent }}</code>
  </ComponentEditor>
</template>

<script>
// import sanitize from '@/utils/sanitize';
import converter from '@/tachyons-utils/converter';
import ComponentEditor from '@/slot-templates/ComponentEditor';
import TextInput from '@/components/form-elements/TextInput';
import DropdownList from '@/components/form-elements/DropdownList';
import DropdownListColors from '@/components/form-elements/DropdownListColors';

const component = textBoxClass => `
<form class="w-100">
  <div class="measure">
    <label for="name" class="f6 b db mb2">Name <span class="normal black-60">(some text)</span></label>
    <input id="name" class="ba mb2 db w-100 ${textBoxClass}" type="text" aria-describedby="name-desc">
    <small id="name-desc" class="f6 black-60 db mb2">Helper text for the form control.</small>
  </div>
  <div class="measure">
    <label for="name" class="f6 b db mb2">Email <span class="normal black-60"></span></label>
    <input id="name" class="ba mb2 db w-100 ${textBoxClass}" type="email" aria-describedby="name-desc">
  </div>
  <div class="measure mt3 tr">
    <input class="b ph3 pv2 input-reset ba b--none bg-blue white grow pointer f6 dib" type="submit" value="OK">
    <input class="b ph3 pv2 input-reset ba b--black-20 bg-transparent grow pointer f6 dib" type="submit" value="Cancel">
  </div>
</form>`.trim();


export default {
  name: 'basic-form-inputs',
  components: {
    DropdownList,
    DropdownListColors,
    TextInput,
    ComponentEditor,
  },
  data() {
    return {
      textbox: {
        paddingAll: 2,
        borderRadius: 0,
        borderColor: 'black-20',
        borderWidth: 'default',
        outline: 'yes',
      },
    };
  },
  computed: {
    computedClass() {
      return [
        converter.dataObjectToTachyonsString(this.textbox, [
          'input-reset',
        ]),
      ];
    },
    computedComponent() {
      return component(
        ...this.computedClass,
      );
    },
    computedSafeComponent() {
      return component(
        ...this.computedClass,
      );
    },
  },
};
</script>
