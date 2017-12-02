import converter from './converter';

const mockData = {
  fontSize: 2,
  paddingH: 1,
  paddingV: 1,
  fontColor: 'white',
  bgColor: 'black',
  keyThatDoesntBelong: 'lol',
};

describe('converter.js', () => {
  describe('dataObjectToTachyonsString function', () => {
    it('should convert a `data` object into a tachyon class string', () => {
      const result = converter.dataObjectToTachyonsString(mockData);
      const expected = ['f2', 'ph1', 'pv1', 'white', 'bg-black'].join(' ');
      expect(result).toEqual(expected);
    });

    it('should convert a `data` object with extra classes into a tachyon class string', () => {
      const result = converter.dataObjectToTachyonsString(mockData, ['dim']);
      const expected = ['f2', 'ph1', 'pv1', 'white', 'bg-black', 'dim'].join(' ');
      expect(result).toEqual(expected);
    })
  });
})