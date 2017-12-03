<template>
  <ComponentEditor>
    <h1 slot="component-name">Small Profile Card</h1>
    <div slot="editor-pane">
      <h4>Card Content</h4>
      <DropdownList label="Border Radius" :data="[0, 1, 2, 3, 4]" :value.sync="card.borderRadius" />
      <DropdownList label="Padding" :data="[0, 1, 2, 3, 4, 5, 6]" :value.sync="card.paddingAll" />
      <DropdownListColors label="Border Color" colorsFor="border" :value.sync="card.borderColor" />
      <DropdownListColors label="Background Color" colorsFor="background" :value.sync="card.bgColor" />
      <hr />
      <h4>Avatar</h4>
      <DropdownListColors label="Border Color" colorsFor="border" :value.sync="avatar.borderColor" />
      <hr />
      <h4>Card Heading</h4>
      <DropdownList label="Font Size" :data="[1, 2, 3, 4, 5, 6]" :value.sync="heading.fontSize" />
      <hr />
      <h4>Card Sub-Heading</h4>
      <DropdownList label="Font Size" :data="[1, 2, 3, 4, 5, 6]" :value.sync="subHeading.fontSize" />
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

const component = (cardClass, avatarClass, headingClass, subHeadingClass) => `
<article class="${cardClass} center ba">
  <div class="tc">
    <img src="/static/img/avatar.png" class="${avatarClass} br-100 h4 w4 dib ba pa2" title="Photo the Chief Moe Officer">
    <h1 class="${headingClass} mb2">Yuki W.</h1>
    <h2 class="${subHeadingClass} fw4 gray mt0">CMO (Chief Moe Officer)</h2>
  </div>
</article>`.trim();

export default {
  name: 'small-profile-card',
  components: {
    DropdownList,
    DropdownListColors,
    TextInput,
    ComponentEditor,
  },
  data() {
    return {
      card: {
        borderRadius: 3,
        paddingAll: 4,
        borderColor: 'black-10',
        bgColor: 'white',
      },
      avatar: {
        borderColor: 'black-05',
      },
      heading: {
        fontSize: 3,
      },
      subHeading: {
        fontSize: 5,
      },
    };
  },
  computed: {
    computedClass() {
      return [
        this.card,
        this.avatar,
        this.heading,
        this.subHeading,
      ].map(converter.dataObjectToTachyonsString);
    },
    computedComponent() {
      return component(
        ...this.computedClass,
      );
    },
    computedSafeComponent() {
      return component(
        ...this.computedClass.map(sanitize.encodeHTML),
      );
    },
  },
};
</script>
