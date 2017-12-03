/**
 * @name generateComponentRoutesMap
 *
 * @param {Array} componentNames - Array of Strings
 *
 * @return {Array}
 */
const generateComponentRoutesMap = componentNames =>
  componentNames.map(name => ({ name, path: `/component/${name}` }));

/**
 * @name reduceWithComponents
 *
 * @param {Array} routesMap - Array of objects. Typically, comes from generateComponentRoutesMap.
 * @param {Array} components - Array of component imports.
 * @param {Component} missingComponentFiller (optional) - When component is missing, inject this.
 *
 * @return {Array} - A valid array for vue Router.
 */
const reduceWithComponents = (routesMap, components, missingComponentFiller = 'NOT_FOUND') =>
  routesMap.reduce((acc, val, index) => {
    acc.push({ ...val, component: components[index] || missingComponentFiller });
    return acc;
  }, []);

export default {
  generateComponentRoutesMap,
  reduceWithComponents,
};
