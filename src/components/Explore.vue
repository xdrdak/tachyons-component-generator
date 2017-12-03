<template>
  <div>
    <ul class="list pl0 measure center">
      <li
        class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30"
        v-for="item in components"
        :key="item.route"
      >
        <router-link
          class="f6 no-underline underline-hover blue dib v-mid mb0"
          :to="item.route"
        >
          {{item.label}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Explore',
  data() {
    return {
      components: [
        {
          label: 'Basic Button',
          route: '/component/BasicButton',
        },
        {
          label: 'Small Profile Card',
          route: '/component/SmallProfileCard',
        },
      ],
    };
  },
};
</script>