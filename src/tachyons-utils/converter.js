const tachyonsMap = {
  fontSize: 'f',
  paddingH: 'ph',
  paddingV: 'pv',
  fontColor: '',
  bgColor: 'bg-',
  borderColor: 'b--',
  borderRadius: 'br',
  borderWidth: 'bw',
  paddingAll: 'pa',
  outline: '',
};

function strategyOutline(_, data) {
  return data === 'yes' ? '' : 'outline-transparent';
}

function strategyBorderRadius(key, data) {
  return data === 'round' ? 'br-100' : (key + data);
}

function strategyBorderWidth(key, data) {
  return data === 'default' ? '' : (key + data);
}

function tachyonsEdgeCases(objectKey, tachyonsKey, data) {
  switch (objectKey) {
    case 'outline':
      return strategyOutline(tachyonsKey, data);
    case 'borderRadius':
      return strategyBorderRadius(tachyonsKey, data);
    case 'borderWidth':
      return strategyBorderWidth(tachyonsKey, data);
    default:
      return tachyonsKey + data;
  }
}

const dataObjectToTachyonsString = (data, extraClasses = []) => (
  Object.keys(data)
    .filter(key => tachyonsMap[key] !== undefined)
    .map(key => tachyonsEdgeCases(key, tachyonsMap[key], data[key]))
    .concat(extraClasses)
    .join(' ')
    .trim()
);

export default {
  dataObjectToTachyonsString,
};
