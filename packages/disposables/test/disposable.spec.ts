import { Disposable, throwIfDisposed } from "../src/index";

test('throwIfDisposed', () => {
  expect(() => throwIfDisposed(Disposable.disposed)).toThrow();
})