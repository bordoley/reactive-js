import {
  describe,
  expectArrayEquals,
  expectToThrowError,
  test,
} from "../__internal__/testing";
import {
  ContainerLike,
  DistinctUntilChanged,
  FromArray,
  Keep,
  Map,
  Scan,
  ToReadonlyArray,
} from "../containers";
import { increment, pipe, pipeLazy, returns, sum } from "../functions";

export const distinctUntilChangedTest = <C extends ContainerLike>(
  m: DistinctUntilChanged<C> & FromArray<C> & ToReadonlyArray<C>,
) =>
  describe(
    "distinctUntilChanged",
    test(
      "when source has duplicates in order",
      pipeLazy(
        [1, 2, 2, 2, 2, 3, 3, 3, 4],
        m.fromArray(),
        m.distinctUntilChanged(),
        m.toReadonlyArray(),
        expectArrayEquals([1, 2, 3, 4]),
      ),
    ),
    test(
      "when source is empty",
      pipeLazy(
        [],
        m.fromArray(),
        m.distinctUntilChanged(),
        m.toReadonlyArray(),
        expectArrayEquals([]),
      ),
    ),
    test("when equality operator throws", () => {
      const err = new Error();
      const equality = <T>(_a: T, _b: T): boolean => {
        throw err;
      };

      pipe(
        pipeLazy(
          [1, 1],
          m.fromArray(),
          m.distinctUntilChanged({ equality }),
          m.toReadonlyArray(),
        ),
        expectToThrowError(err),
      );
    }),
  );

export const keepTests = <C extends ContainerLike>(
  m: Keep<C> & FromArray<C> & ToReadonlyArray<C>,
) =>
  describe(
    "keep",
    test(
      "keeps only values greater than 5",
      pipeLazy(
        [4, 8, 10, 7],
        m.fromArray(),
        m.keep(x => x > 5),
        m.toReadonlyArray(),
        expectArrayEquals([8, 10, 7]),
      ),
    ),
    test("when predicate throws", () => {
      const err = new Error();
      const predicate = <T>(_a: T): boolean => {
        throw err;
      };

      pipe(
        pipeLazy([1, 1], m.fromArray(), m.keep(predicate), m.toReadonlyArray()),
        expectToThrowError(err),
      );
    }),
  );

export const mapTests = <C extends ContainerLike>(
  m: Map<C> & FromArray<C> & ToReadonlyArray<C>,
) =>
  describe(
    "map",
    test(
      "maps every value",
      pipeLazy(
        [1, 2, 3],
        m.fromArray(),
        m.map(increment),
        m.toReadonlyArray(),
        expectArrayEquals([2, 3, 4]),
      ),
    ),
    test("when mapper throws", () => {
      const err = new Error();
      const mapper = <T>(_a: T): boolean => {
        throw err;
      };

      pipe(
        pipeLazy([1, 1], m.fromArray(), m.map(mapper), m.toReadonlyArray()),
        expectToThrowError(err),
      );
    }),
  );

export const scanTests = <C extends ContainerLike>(
  m: Scan<C> & FromArray<C> & ToReadonlyArray<C>,
) =>
  describe(
    "scan",
    test(
      "sums all the values in the array emitting intermediate values.",
      pipeLazy(
        [1, 1, 1],
        m.fromArray(),
        m.scan(sum, returns(0)),
        m.toReadonlyArray(),
        expectArrayEquals([1, 2, 3]),
      ),
    ),
    test("throws when the scan function throws", () => {
      const err = new Error();
      const scanner = <T>(_acc: T, _next: T): T => {
        throw err;
      };

      pipe(
        pipeLazy(
          [1, 1],
          m.fromArray(),
          m.scan(scanner, returns(0)),
          m.toReadonlyArray(),
        ),
        expectToThrowError(err),
      );
    }),
    test("throws when the initial value function throws", () => {
      const err = new Error();
      const initialValue = (): number => {
        throw err;
      };

      pipe(
        pipeLazy(
          [1, 1],
          m.fromArray(),
          m.scan(sum, initialValue),
          m.toReadonlyArray(),
        ),
        expectToThrowError(err),
      );
    }),
  );
