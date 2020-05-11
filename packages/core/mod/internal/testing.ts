import { referenceEquals, arrayEquals } from "../functions.ts";
import { Option, isSome, isNone, none } from "../option.ts";

export const enum TestGroupType {
  Describe = 1,
  Test = 2,
  TestAsync = 3,
}

export type Describe = {
  readonly type: TestGroupType.Describe;
  readonly name: string;
  readonly tests: readonly TestGroup[];
};

export type Test = {
  readonly type: TestGroupType.Test;
  readonly name: string;
  readonly f: () => void;
};

export type TestAsync = {
  readonly type: TestGroupType.TestAsync;
  readonly name: string;
  readonly f: () => Promise<void>;
};

export type TestGroup = Describe | Test | TestAsync;

export const describe = (name: string, ...tests: TestGroup[]): Describe => ({
  type: TestGroupType.Describe,
  name,
  tests,
});

export const test = (name: string, f: () => void): Test => ({
  type: TestGroupType.Test,
  name,
  f,
});

export const testAsync = (name: string, f: () => Promise<void>): TestAsync => ({
  type: TestGroupType.TestAsync,
  name,
  f,
});

export const expectToThrow = (f: () => void) => {
  let didThrow = false;
  try {
    f();
  } catch (_e) {
    didThrow = true;
  }

  if (!didThrow) {
    throw new Error("expected function to throw");
  }
};

export const expectToThrowError = (error: unknown) => (f: () => void) => {
  let didThrow = false;
  let errorThrown = none;
  try {
    f();
  } catch (e) {
    didThrow = true;
    errorThrown = e;
  }

  if (!didThrow) {
    throw new Error("expected function to throw");
  } else if (errorThrown !== error) {
    throw new Error(
      `expected ${JSON.stringify(error)}\nreceieved: ${JSON.stringify(
        errorThrown,
      )}`,
    );
  }
};

export const expectEquals = <T>(b: T, valuesAreEqual = referenceEquals) => (
  a: T,
) => {
  if (!valuesAreEqual(a, b)) {
    throw new Error(
      `expected ${JSON.stringify(b)}\nreceieved: ${JSON.stringify(a)}`,
    );
  }
};

const arrayReferenceEquals = arrayEquals(referenceEquals);
export const expectArrayEquals = <T>(
  b: readonly T[],
  valuesAreEqual?: (a: T, b: T) => boolean,
) => (a: readonly T[]) => {
  const equals = isNone(valuesAreEqual)
    ? arrayReferenceEquals
    : arrayEquals(valuesAreEqual);
  if (!equals(a, b)) {
    throw new Error(
      `expected ${JSON.stringify(b)}\nreceieved: ${JSON.stringify(a)}`,
    );
  }
};

export const expectTrue = (v: boolean) => {
  if (!v) {
    throw new Error("expected true");
  }
};

export const expectFalse = (v: boolean) => {
  if (v) {
    throw new Error("expected false");
  }
};

export const expectNone = (v: Option<unknown>) => {
  if (isSome(v)) {
    throw new Error(`expected none but recieved ${v}`);
  }
};

export const expectSome = (v: Option<unknown>) => {
  if (isNone(v)) {
    throw new Error(`expected Some(?) but recieved None`);
  }
};

type MockFunction = {
  (...v: any[]): any;
  readonly calls: any[][];
};

export const mockFn = (retval?: any): MockFunction => {
  const calls: any[][] = [];
  const cb = (...args: any[]) => {
    calls.push(args);
    return retval;
  };
  cb.calls = calls;

  return cb;
};

export const expectToHaveBeenCalledTimes = (times: number) => (
  fn: MockFunction,
) => {
  if (fn.calls.length !== times) {
    throw new Error(
      `expected fn to be called ${times} times, but was only called ${fn.calls.length} times.`,
    );
  }
};

export const expectPromiseToThrow = async (promise: Promise<any>) => {
  let didThrow = false;
  try {
    await promise;
  } catch (_) {
    didThrow = true;
  }

  if (!didThrow) {
    throw new Error("expected function to throw");
  }
};
