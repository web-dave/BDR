import { PagesPipe } from './pages.pipe';

describe('PagesPipe', () => {
  it('create an instance', () => {
    const pipe = new PagesPipe();
    expect(pipe).toBeTruthy();
  });
  it('should return "4: Affen"', () => {
    const pipe = new PagesPipe();
    expect(pipe.transform(4, 'Affen')).toBe('Affen: 4');
  });
  it('should return "42: Hurz"', () => {
    const pipe = new PagesPipe();
    expect(pipe.transform(42)).toBe('Hurz: 42');
  });
});
