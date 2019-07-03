import { parseBoolean } from './index';

describe('parseBoolean', () => {
    it('should return true', () => {
        expect(parseBoolean('1', 'default')).toBe(true);
        expect(parseBoolean('TRUE', 'default')).toBe(true);
        expect(parseBoolean(true, 'default')).toBe(true);
    });
    it('should return false', () => {
        expect(parseBoolean('0', 'default')).toBe(false);
        expect(parseBoolean('FALSE', 'default')).toBe(false);
        expect(parseBoolean(false, 'default')).toBe(false);
    });
    it('should return default value', () => {
        expect(parseBoolean(' ', 'default')).toBe('default');
        expect(parseBoolean('Chuck Norris', 'default')).toBe('default');
    });
});
