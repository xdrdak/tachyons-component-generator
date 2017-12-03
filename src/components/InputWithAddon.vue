<template>
  <ComponentEditor>
    <h1 slot="component-name">Input with Addon</h1>
    <div slot="editor-pane">
      <h4>Border Radius</h4>
      <DropdownList label="Border Radius" :data="[0, 1, 2, 3, 4]" :value.sync="common.borderRadius" />
      <DropdownListColors label="Border Color" colorsFor="border" :value.sync="common.borderColor" />
      <DropdownList label="Border Width" :data="['default', 1, 2, 3]" :value.sync="common.borderWidth" />
      <DropdownList label="Glowing Outline" :data="['yes', 'no']" :value.sync="common.outline" />
      <hr />
      <h4>Addon</h4>
      <DropdownListColors label="Background Color" colorsFor="background" :value.sync="button.bgColor" />
      <DropdownListColors label="Text Color" :value.sync="button.fontColor" />
    </div>
    <div slot="component-preview" class="w-100" v-html="computedSafeComponent"></div>
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

const component = (common, button) => `
<div>
  <div class="flex">
    <label class="clip" for="email-address">Email Address</label>
    <input class="f6 b--solid input-reset fl br--left ${common} br-0 bg-white pa3 lh-solid w-100" placeholder="Your Email Address" type="text" name="email-address" value="" id="email-address">
    <input class="f6 b button-reset fl br--right ${common} ${button} bl-0 pv3 tc bg-animate dim pointer w-20" type="submit" value="Subscribe">
  </div>
  <div class="flex mt3">
    <label class="clip" for="email-address">Email Address</label>
    <div class="f4 b button-reset fl br--left ${common} ${button} br-0 tc w-10 flex justify-center items-center">@</div>
    <input class="f6 b--solid input-reset fl br--right ${common} bl-0 bg-white pa3 lh-solid w-100" placeholder="Your Email Address" type="text" name="email-address" value="" id="email-address">
  </div>
</div>
`.trim();

export default {
  name: 'input-with-addon',
  components: {
    DropdownList,
    DropdownListColors,
    TextInput,
    ComponentEditor,
  },
  data() {
    return {
      common: {
        borderRadius: 2,
        borderColor: 'black-40',
        borderWidth: 1,
        outline: 'yes',
      },
      button: {
        bgColor: 'black-80',
        fontColor: 'white',
      },
    };
  },
  computed: {
    computedClass() {
      return [
        converter.dataObjectToTachyonsString(this.common),
        converter.dataObjectToTachyonsString(this.button),
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
