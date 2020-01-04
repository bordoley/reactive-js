import {
  createDisposable,
  createSerialDisposable,
  disposed,
  throwIfDisposed,
} from "../src/index";

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

    const children = [
      createDisposable(),
      createDisposable(),
      createDisposable(),
      createDisposable(),
    ];

    for (const child of children) {
      disposable.add(child);
    }

    for (const child of children) {
      expect(child.isDisposed).toBeFalsy();
    }

    disposable.dispose();

    for (const child of children) {
      expect(child.isDisposed).toBeTruthy();
    }

    const anotherDisposable = createDisposable();
    disposable.add(anotherDisposable);
    expect(anotherDisposable.isDisposed).toBeTruthy();
  });

  test("disposed", () => {
    expect(disposed.isDisposed).toBeTruthy();
    
    const child = createDisposable();
    disposed.add(child);

    expect(child.isDisposed).toBeTruthy();
  });

  test("dispose when teardown throws an exception", () => {
    const disposable = createDisposable(() => {
      throw new Error();
    });
    disposable.dispose();
  });

  test("dispose with error", () => {
    const error = { cause: null };

    const childTeardown = jest.fn();
    const child = createDisposable().add(e => childTeardown(e));
    const teardown = jest.fn();
    const disposable = createDisposable().add(child).add(e => teardown(e));
    disposable.dispose(error);

    const teardown2 = jest.fn();
    disposable.add(e => teardown2(e));

    const childTeardown2 = jest.fn();
    const child2 = createDisposable().add(e => childTeardown2(e));
    disposable.add(child2);

    expect(childTeardown).toBeCalledWith(error);
    expect(teardown).toBeCalledWith(error);
    expect(childTeardown2).toBeCalledWith(error);
    expect(teardown2).toBeCalledWith(error);
  })
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

    serialDisposable.inner = disposable;
    expect(serialDisposable.inner).toEqual(disposable);

    const anotherDisposable = createDisposable();
    serialDisposable.inner = anotherDisposable;
    expect(serialDisposable.inner).toEqual(anotherDisposable);
    expect(disposable.isDisposed).toBeTruthy();

    expect(anotherDisposable.isDisposed).toBeFalsy();
    serialDisposable.dispose();
    expect(anotherDisposable.isDisposed).toBeTruthy();

    const yetAnotherDisposable = createDisposable();
    serialDisposable.inner = yetAnotherDisposable;
    expect(yetAnotherDisposable.isDisposed).toBeTruthy();
  });
});
