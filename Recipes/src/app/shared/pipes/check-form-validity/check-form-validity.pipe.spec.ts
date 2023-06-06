import { CheckFormValidityPipe } from './check-form-validity.pipe';

describe('CheckFormValidityPipe', () => {
  it('create an instance', () => {
    const pipe = new CheckFormValidityPipe();
    expect(pipe).toBeTruthy();
  });
});
