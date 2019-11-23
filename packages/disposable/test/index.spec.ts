import { create, disposed, throwIfDisposed } from "../src/index";

test("throwIfDisposed", () => {
  expect(() => throwIfDisposed(disposed)).toThrow();
});

describe("Disposable", () => {
  test("create", () => {
    const disposable = create();
    expect(disposable.isDisposed).toBeFalsy();
    disposable.dispose();
    expect(disposable.isDisposed).toBeTruthy();
  });

  test("add", () => {
    const disposable = create();

    const children = [create(), create(), create(), create()];

    for (let child of children) {
      disposable.add(child);
    }

    for (let child of children) {
      expect(child.isDisposed).toBeFalsy();
    }

    disposable.dispose();

    for (let child of children) {
      expect(child.isDisposed).toBeTruthy();
    }

    const anotherDisposable = create();
    disposable.add(anotherDisposable);
    expect(anotherDisposable.isDisposed).toBeTruthy();
  });

  test("remove", () => {
    const disposable = create();
    const child = create();

    disposable.add(child);
    disposable.remove(child);
    expect(child.isDisposed).toBeTruthy();
  });

  test("disposed", () => {
    expect(disposed.isDisposed).toBeTruthy();
  });
});
