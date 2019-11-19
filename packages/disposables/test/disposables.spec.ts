import { Disposable, SerialDisposable, throwIfDisposed } from "../src/index";

test("throwIfDisposed", () => {
  expect(() => throwIfDisposed(Disposable.disposed)).toThrow();
});

describe("Disposable", () => {
  test("create", () => {
    const disposable = Disposable.create();
    expect(disposable.isDisposed).toBeFalsy();
    disposable.dispose();
    expect(disposable.isDisposed).toBeTruthy();
  });

  test("add", () => {
    const disposable = Disposable.create();

    const children = [
      Disposable.create(),
      Disposable.create(),
      Disposable.create(),
      Disposable.create(),
    ];

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

    const anotherDisposable = Disposable.create();
    disposable.add(anotherDisposable);
    expect(anotherDisposable.isDisposed).toBeTruthy();
  });

  test("remove", () => {
    const disposable = Disposable.create();
    const child = Disposable.create();

    disposable.add(child);
    disposable.remove(child);
    expect(child.isDisposed).toBeTruthy();
  });

  test("disposed", () => {
    expect(Disposable.disposed.isDisposed).toBeTruthy();
  });
});

describe("SerialDisposable", () => {
  test("create", () => {
    const serialDisposable = SerialDisposable.create();
    expect(serialDisposable.isDisposed).toBeFalsy();
    serialDisposable.dispose();
    expect(serialDisposable.isDisposed).toBeTruthy();
  });

  test("set disposable", () => {
    const serialDisposable = SerialDisposable.create();
    const disposable = Disposable.create();

    serialDisposable.disposable = disposable;
    expect(serialDisposable.disposable).toEqual(disposable);

    const anotherDisposable = Disposable.create();
    serialDisposable.disposable = anotherDisposable;
    expect(serialDisposable.disposable).toEqual(anotherDisposable);
    expect(disposable.isDisposed).toBeTruthy();

    expect(anotherDisposable.isDisposed).toBeFalsy();
    serialDisposable.dispose();
    expect(anotherDisposable.isDisposed).toBeTruthy();

    const yetAnotherDisposable = Disposable.create();
    serialDisposable.disposable = yetAnotherDisposable;
    expect(yetAnotherDisposable.isDisposed).toBeTruthy();
  });
});
