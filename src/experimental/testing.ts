import {
  strictEquality,
  arrayEquality,
  Factory,
  Equality,
  SideEffect,
  Function1,
  ignore,
  raise,
} from "../functions";
import { Option, isSome, isNone, none } from "../option";

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
  readonly f: Function1<string, SideEffect>;
};

export type TestAsync = {
  readonly type: TestGroupType.TestAsync;
  readonly name: string;
  readonly f: Function1<string, Factory<Promise<void>>>;
};

export type TestGroup = Describe | Test | TestAsync;

export const describe = (name: string, ...tests: TestGroup[]): Describe => ({
  type: TestGroupType.Describe,
  name,
  tests,
});

export const test = (name: string, f: SideEffect): Test => ({
  type: TestGroupType.Test,
  name,
  f: (ctx: string) => () => {
    ignore(ctx);
    f();
  },
});

export const testAsync = (
  name: string,
  f: Factory<Promise<void>>,
): TestAsync => ({
  type: TestGroupType.TestAsync,
  name,
  f: (ctx: string) => async () => {
    ignore(ctx);
    await f();
  },
});

export const expectToThrow = (f: SideEffect) => {
  let didThrow = false;
  try {
    f();
  } catch (_e) {
    didThrow = true;
  }

  if (!didThrow) {
    raise("expected function to throw");
  }
};

export const expectToThrowError = (error: unknown) => (f: SideEffect) => {
  let didThrow = false;
  let errorThrown = none;
  try {
    f();
  } catch (e) {
    didThrow = true;
    errorThrown = e;
  }

  if (!didThrow) {
    raise("expected function to throw");
  } else if (errorThrown !== error) {
    raise(
      `expected ${JSON.stringify(error)}\nreceieved: ${JSON.stringify(
        errorThrown,
      )}`,
    );
  }
};

export const expectEquals = <T>(b: T, valueEquality = strictEquality) => (
  a: T,
) => {
  if (!valueEquality(a, b)) {
    raise(`expected ${JSON.stringify(b)}\nreceieved: ${JSON.stringify(a)}`);
  }
};

export const expectArrayEquals = <T>(
  b: readonly T[],
  valueEquality: Equality<T> = strictEquality,
) => (a: readonly T[]) => {
  const equals = arrayEquality(valueEquality);
  if (!equals(a, b)) {
    raise(`expected ${JSON.stringify(b)}\nreceieved: ${JSON.stringify(a)}`);
  }
};

export const expectTrue = (v: boolean) => {
  if (!v) {
    raise("expected true");
  }
};

export const expectFalse = (v: boolean) => {
  if (v) {
    raise("expected false");
  }
};

export const expectNone = (v: Option<unknown>) => {
  if (isSome(v)) {
    raise(`expected none but recieved ${v}`);
  }
};

export const expectSome = (v: Option<unknown>) => {
  if (isNone(v)) {
    raise(`expected Some(?) but recieved None`);
  }
};

type MockFunction = {
  (...v: readonly any[]): any;
  readonly calls: readonly ReadonlyArray<any>[];
};

export const mockFn = (retval?: any): MockFunction => {
  const calls: ReadonlyArray<any>[] = [];
  const cb = (...args: readonly any[]) => {
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
    raise(
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
    raise("expected function to throw");
  }
};
