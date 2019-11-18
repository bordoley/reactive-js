import { Disposable, throwIfDisposed } from "../src/index";

test("throwIfDisposed", () => {
  expect(() => throwIfDisposed(Disposable.disposed)).toThrow();
});

describe("Disposable.disposed", () => {
  test("isDisposed", () => {
    expect(Disposable.disposed.isDisposed).toBeTruthy();
  });
});
