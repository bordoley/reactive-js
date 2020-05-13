import { Factory, Function, SideEffect, SideEffect1 } from "../functions.ts";

export type BenchmarkTest<TData> = {
  name: string;
  factory: Function<TData, Promise<SideEffect>>;
};

export type BenchmarkGroup<TData> = {
  name: string;
  setup: Factory<TData>;
  tests: readonly BenchmarkTest<TData>[];
};

export const benchmarkTest = <TData, T>(
  name: string,
  setup: Function<TData, Promise<T>>,
  run: SideEffect1<T>,
): BenchmarkTest<TData> => {
  const factory = async (data: TData) => {
    const v = await setup(data);
    return () => run(v);
  };

  return { name, factory };
};

export const benchmarkGroup = <TData>(
  name: string,
  setup: Factory<TData>,
  ...tests: readonly BenchmarkTest<TData>[]
): BenchmarkGroup<TData> => ({ name, setup, tests });
