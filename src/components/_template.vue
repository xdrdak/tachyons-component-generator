<template>
  <ComponentEditor>
    <h1 slot="component-name">__INSERT COMPONENT NAME__</h1>
    <div slot="editor-pane">
    </div>
    <div slot="component-preview" v-html="computedSafeComponent"></div>
    <code class="html" slot="component-raw">{{ computedComponent }}</code>
  </ComponentEditor>
</template>

<script>
// import sanitize from '@/utils/sanitize';
// import converter from '@/tachyons-utils/converter';
import ComponentEditor from '@/slot-templates/ComponentEditor';
import TextInput from '@/components/form-elements/TextInput';
import DropdownList from '@/components/form-elements/DropdownList';
import DropdownListColors from '@/components/form-elements/DropdownListColors';

const component = () => ''.trim();

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
    };
  },
  computed: {
    computedClass() {
      return '';
    },
    computedComponent() {
      return component();
    },
    computedSafeComponent() {
      return component();
    },
  },
};
</script>
