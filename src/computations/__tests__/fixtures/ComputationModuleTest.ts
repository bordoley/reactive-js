import {
  describe,
  expectArrayEquals,
  expectPromiseToThrow,
  expectToThrowErrorAsync,
  testAsync,
} from "../../../__internal__/testing.js";
import { ComputationModule, ComputationType } from "../../../computations.js";
import {
  bindMethod,
  greaterThan,
  pipe,
  pipeAsync,
  pipeLazy,
  pipeLazyAsync,
  returns,
} from "../../../functions.js";
import { increment } from "../../../math.js";

const ComputationModuleTests = <TComputationType extends ComputationType>(
  m: Pick<
    ComputationModule<TComputationType>,
    | "distinctUntilChanged"
    | "gen"
    | "genPure"
    | "keep"
    | "map"
    | "scan"
    | "toReadonlyArrayAsync"
  >,
  //  computations: ComputationTypeOf<TComputationType>,
) =>
  describe(
    "ComputationModule",
    describe(
      "distinctUntilChanged",
      testAsync(
        "when source has duplicates in order",
        pipeLazyAsync(
          bindMethod([1, 2, 2, 2, 2, 3, 3, 3, 4], Symbol.iterator),
          m.gen,
          m.distinctUntilChanged<number>(),
          m.toReadonlyArrayAsync<number>(),
          expectArrayEquals([1, 2, 3, 4]),
        ),
      ),
      testAsync(
        "when source is empty",
        pipeLazyAsync(
          bindMethod([], Symbol.iterator),
          m.gen,
          m.distinctUntilChanged<number>(),
          m.toReadonlyArrayAsync<number>(),
          expectArrayEquals<number>([]),
        ),
      ),
      testAsync("when equality operator throws", async () => {
        const err = new Error();
        const equality = <T>(_a: T, _b: T): boolean => {
          throw err;
        };

        await pipe(
          pipeLazy(
            bindMethod([1, 1], Symbol.iterator),
            m.gen,
            m.distinctUntilChanged({ equality }),
            m.toReadonlyArrayAsync(),
          ),
          expectToThrowErrorAsync(err),
        );
      }),
      testAsync(
        "with custom equality functions",
        pipeLazyAsync(
          bindMethod([1, 2, 2, 2, 2, 3, 3, 3, 4], Symbol.iterator),
          m.gen,
          m.distinctUntilChanged<number>({
            equality: () => true,
          }),
          m.toReadonlyArrayAsync<number>(),
          expectArrayEquals([1]),
        ),
      ),
    ),
    describe(
      "gen",
      testAsync(
        "iterating an array iterator",
        pipeLazyAsync(
          bindMethod([1, 2, 3], Symbol.iterator),
          m.gen<number>,
          m.toReadonlyArrayAsync<number>(),
          expectArrayEquals([1, 2, 3]),
        ),
      ),
      testAsync(
        "when the iterator throws",
        pipeLazy(
          function* () {
            throw new Error();
          },
          m.gen<number>,
          m.toReadonlyArrayAsync<number>(),
          expectPromiseToThrow,
        ),
      ),
    ),
    describe("genPure"),
    describe(
      "keep",
      testAsync(
        "keeps only values greater than 5",
        pipeLazyAsync(
          bindMethod([4, 8, 10, 7], Symbol.iterator),
          m.gen,
          m.keep(greaterThan(5)),
          m.toReadonlyArrayAsync<number>(),
          expectArrayEquals([8, 10, 7]),
        ),
      ),
      testAsync("when predicate throws", async () => {
        const err = new Error();
        const predicate = <T>(_a: T): boolean => {
          throw err;
        };

        await pipeAsync(
          pipeLazy(
            bindMethod([1, 1], Symbol.iterator),
            m.gen,
            m.keep(predicate),
            m.toReadonlyArrayAsync(),
          ),
          expectToThrowErrorAsync(err),
        );
      }),
    ),
    describe(
      "map",
      testAsync(
        "maps every value",
        pipeLazyAsync(
          bindMethod([1, 2, 3], Symbol.iterator),
          m.gen<number>,
          m.map<number, number>(increment),
          m.toReadonlyArrayAsync<number>(),
          expectArrayEquals([2, 3, 4]),
        ),
      ),
      testAsync("when selector throws", async () => {
        const err = new Error();
        const selector = <T>(_a: T): boolean => {
          throw err;
        };

        await pipeAsync(
          pipeLazy(
            bindMethod([1, 2, 3], Symbol.iterator),
            m.gen,
            m.map(selector),
            m.toReadonlyArrayAsync(),
          ),

          expectToThrowErrorAsync(err),
        );
      }),
    ),
    describe(
      "scan",
      testAsync(
        "sums all the values in the array emitting intermediate values.",
        pipeLazyAsync(
          bindMethod([1, 1, 1], Symbol.iterator),
          m.gen,
          m.scan<number, number>((a, b) => a + b, returns(0)),
          m.toReadonlyArrayAsync<number>(),
          expectArrayEquals([1, 2, 3]),
        ),
      ),
      testAsync("throws when the scan function throws", async () => {
        const err = new Error();
        const scanner = <T>(_acc: T, _next: T): T => {
          throw err;
        };

        await pipeAsync(
          pipeLazy(
            bindMethod([1, 1], Symbol.iterator),
            m.gen,
            m.scan(scanner, returns(0)),
            m.toReadonlyArrayAsync(),
          ),
          expectToThrowErrorAsync(err),
        );
      }),
      testAsync("throws when the initial value function throws", async () => {
        const err = new Error();
        const initialValue = (): number => {
          throw err;
        };

        await pipeAsync(
          pipeLazy(
            bindMethod([1, 1], Symbol.iterator),
            m.gen,
            m.scan<number, number>((a, b) => a + b, initialValue),
            m.toReadonlyArrayAsync<number>(),
          ),
          expectToThrowErrorAsync(err),
        );
      }),
    ),
  );

export default ComputationModuleTests;
