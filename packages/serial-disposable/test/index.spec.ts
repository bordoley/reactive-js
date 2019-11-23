import { create as disposableCreate } from "@reactive-js/disposable";
import { create } from "../src/index";

describe("SerialDisposable", () => {
  test("create", () => {
    const serialDisposable = create();
    expect(serialDisposable.isDisposed).toBeFalsy();
    serialDisposable.dispose();
    expect(serialDisposable.isDisposed).toBeTruthy();
  });

  test("set disposable", () => {
    const serialDisposable = create();
    const disposable = disposableCreate();

    serialDisposable.disposable = disposable;
    expect(serialDisposable.disposable).toEqual(disposable);

    const anotherDisposable = disposableCreate();
    serialDisposable.disposable = anotherDisposable;
    expect(serialDisposable.disposable).toEqual(anotherDisposable);
    expect(disposable.isDisposed).toBeTruthy();

    expect(anotherDisposable.isDisposed).toBeFalsy();
    serialDisposable.dispose();
    expect(anotherDisposable.isDisposed).toBeTruthy();

    const yetAnotherDisposable = disposableCreate();
    serialDisposable.disposable = yetAnotherDisposable;
    expect(yetAnotherDisposable.isDisposed).toBeTruthy();
  });
});
