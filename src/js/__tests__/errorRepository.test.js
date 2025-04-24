import ErrorRepository from '../ErrorRepository';

test('should get error by code', () => {
  const errorRepository = new ErrorRepository();
  const error = errorRepository.translate(404);

  expect(error).toBe('User Not Found');
});

test('should return Unknown error', () => {
  const errorRepository = new ErrorRepository();
  const error = errorRepository.translate(444);

  expect(error).toBe('Unknown error');
});
