import routerUtils from '@/router/router-utils';
import BasicButton from '@/components/BasicButton';
import SmallProfileCard from '@/components/SmallProfileCard';
import FormInputs from '@/components/FormInputs';

const components = [
  { name: 'BasicButton', component: BasicButton },
  { name: 'SmallProfileCard', component: SmallProfileCard },
  { name: 'FormInputs', component: FormInputs },
];

const routesMap = routerUtils.generateComponentRoutesMap(components.map(c => c.name));

const componentRoutedMap = routerUtils.reduceWithComponents(
  routesMap,
  components.map(c => c.component),
);

export {
  routesMap,
  componentRoutedMap,
};

export default componentRoutedMap;
