const tachyonsMap = {
  fontSize: 'f',
  paddingH: 'ph',
  paddingV: 'pv',
  fontColor: '',
  bgColor: 'bg-',
  borderRadius: 'br',
};

const dataObjectToTachyonsString = (data, extraClasses = []) => (
  Object.keys(data)
    .filter(key => tachyonsMap[key] !== undefined)
    .map(key => tachyonsMap[key] + data[key])
    .concat(extraClasses)
    .join(' ')
);

export default {
  dataObjectToTachyonsString,
};
