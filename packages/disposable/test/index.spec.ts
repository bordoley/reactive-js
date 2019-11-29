import { createDisposable, createSerialDisposable, disposed, throwIfDisposed } from "../src/index";

test("throwIfDisposed", () => {
  expect(() => throwIfDisposed(disposed)).toThrow();
});

describe("Disposable", () => {
  test("create", () => {
    const disposable = createDisposable();
    expect(disposable.isDisposed).toBeFalsy();
    disposable.dispose();
    expect(disposable.isDisposed).toBeTruthy();
  });

  test("add", () => {
    const disposable = createDisposable();

    const children = [createDisposable(), createDisposable(), createDisposable(), createDisposable()];

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

    const anotherDisposable = createDisposable();
    disposable.add(anotherDisposable);
    expect(anotherDisposable.isDisposed).toBeTruthy();
  });

  test("remove", () => {
    const disposable = createDisposable();
    const child = createDisposable();

    disposable.add(child);
    disposable.remove(child);
    expect(child.isDisposed).toBeTruthy();
  });

  test("disposed", () => {
    expect(disposed.isDisposed).toBeTruthy();
  });

  test("dispose when teardown throws an exception", () => {
    const disposable = createDisposable();
    disposable.add(() => {
      throw new Error();
    });
    disposable.dispose();
  });
});


describe("SerialDisposable", () => {
  test("create", () => {
    const serialDisposable = createSerialDisposable();
    expect(serialDisposable.isDisposed).toBeFalsy();
    serialDisposable.dispose();
    expect(serialDisposable.isDisposed).toBeTruthy();
  });

  test("set disposable", () => {
    const serialDisposable = createSerialDisposable();
    const disposable = createDisposable();

    serialDisposable.disposable = disposable;
    expect(serialDisposable.disposable).toEqual(disposable);

    const anotherDisposable = createDisposable();
    serialDisposable.disposable = anotherDisposable;
    expect(serialDisposable.disposable).toEqual(anotherDisposable);
    expect(disposable.isDisposed).toBeTruthy();

    expect(anotherDisposable.isDisposed).toBeFalsy();
    serialDisposable.dispose();
    expect(anotherDisposable.isDisposed).toBeTruthy();

    const yetAnotherDisposable = createDisposable();
    serialDisposable.disposable = yetAnotherDisposable;
    expect(yetAnotherDisposable.isDisposed).toBeTruthy();
  });
});