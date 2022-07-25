import {
  Equality,
  Factory,
  Function1,
  Option,
  SideEffect,
  arrayEquality,
  getLength,
  ignore,
  isNone,
  isSome,
  none,
  raise,
  strictEquality,
} from "../functions";
import { __DENO__ } from "./env";

export const DescribeType = 1;
export const TestType = 2;
export const TestAsyncType = 3;

export type Describe = {
  readonly type: typeof DescribeType;
  readonly name: string;
  readonly tests: readonly TestGroup[];
};

export type Test = {
  readonly type: typeof TestType;
  readonly name: string;
  readonly f: Function1<string, SideEffect>;
};

export type TestAsync = {
  readonly type: typeof TestAsyncType;
  readonly name: string;
  readonly f: Function1<string, Factory<Promise<void>>>;
};

export type TestGroup = Describe | Test | TestAsync;

const createDescribe = (name: string, ...tests: TestGroup[]): Describe => ({
  type: DescribeType,
  name,
  tests,
});

export { createDescribe as describe };

const createTest = (name: string, f: SideEffect): Test => ({
  type: TestType,
  name,
  f: (ctx: string) => () => {
    ignore(ctx);
    f();
  },
});

export { createTest as test };

export const testAsync = (
  name: string,
  f: Factory<Promise<void>>,
): TestAsync => ({
  type: TestAsyncType,
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
  let errorThrown: Option<unknown> = none;
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

export const expectEquals =
  <T>(b: T, valueEquality = strictEquality) =>
  (a: T) => {
    if (!valueEquality(a, b)) {
      raise(`expected ${JSON.stringify(b)}\nreceieved: ${JSON.stringify(a)}`);
    }
  };

export const expectArrayEquals =
  <T>(b: readonly T[], valueEquality: Equality<T> = strictEquality) =>
  (a: readonly T[]) => {
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

export const expectToHaveBeenCalledTimes =
  (times: number) => (fn: MockFunction) => {
    if (getLength(fn.calls) !== times) {
      raise(
        `expected fn to be called ${times} times, but was only called ${getLength(
          fn.calls,
        )} times.`,
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

declare const Deno: any;

const createTests = (testGroup: TestGroup, parents: readonly string[]) => {
  const path = [...parents, testGroup.name];

  if (testGroup.type === DescribeType) {
    const forEachCreateTests = () => {
      const { tests } = testGroup;

      for (const test of tests) {
        createTests(test, path);
      }
    };

    if (__DENO__) {
      forEachCreateTests();
    } else {
      describe(testGroup.name, () => {
        forEachCreateTests();
      });
    }
  } else {
    const name = path.join(":");

    if (__DENO__) {
      Deno.test(name, testGroup.f(name));
    } else {
      test(testGroup.name, testGroup.f(name));
    }
  }
};

export const runTests = (testGroups: TestGroup[]) => {
  for (const test of testGroups) {
    createTests(test, []);
  }
};
