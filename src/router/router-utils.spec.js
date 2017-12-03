import routerUtils from './router-utils';

const components = ['Lion', 'Tiger', 'Bear'];

describe('router-utils.js', () => {
  describe('generateComponentRoutesMap function', () => {
    it('convert an array of strings into a valid component routesmap', () => {
      const result = routerUtils.generateComponentRoutesMap(components);
      const expected = [
        { name: 'Lion', path: '/component/Lion' },
        { name: 'Tiger', path: '/component/Tiger' },
        { name: 'Bear', path: '/component/Bear' },
      ];
      expect(result).toEqual(expected);
    });
  });

  describe('reduceWithComponents function', () => {
    it('convert a routesMap into an object capable of being read by the router', () => {
      const result = routerUtils.reduceWithComponents(
        routerUtils.generateComponentRoutesMap(components),
        ['ComponentLion', 'ComponentTiger', 'ComponentBear'],
      );
      const expected = [
        { name: 'Lion', path: '/component/Lion', component: 'ComponentLion' },
        { name: 'Tiger', path: '/component/Tiger', component: 'ComponentTiger'},
        { name: 'Bear', path: '/component/Bear', component: 'ComponentBear' },
      ];
      expect(result).toEqual(expected);
    });

    it('converts missing components into NOT_FOUND', () => {
      const result = routerUtils.reduceWithComponents(
        routerUtils.generateComponentRoutesMap(components),
        ['ComponentLion', 'ComponentTiger'],
      );
      const expected = [
        { name: 'Lion', path: '/component/Lion', component: 'ComponentLion' },
        { name: 'Tiger', path: '/component/Tiger', component: 'ComponentTiger'},
        { name: 'Bear', path: '/component/Bear', component: 'NOT_FOUND' },
      ];
      expect(result).toEqual(expected);
    });
  });
})