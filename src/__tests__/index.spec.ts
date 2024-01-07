import { launcher } from '..';

describe('launcher', () => {
  const mockAction = jest.fn();
  const launch = launcher(mockAction);

  describe('when first time `launch` is called', () => {
    it('should be called', () => {
      launch();
      expect(mockAction).toHaveBeenCalledTimes(1);
    });
  });

  describe('when `launch` is called more than once', () => {
    it('should not be called', () => {
      for (let i = 0; i < 100; i++) {
        launch();
      }
      expect(mockAction).toHaveBeenCalledTimes(1);
    });
  });
});
