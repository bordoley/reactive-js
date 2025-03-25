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
  pipeAsync,
  pipeLazy,
  pipeLazyAsync,
} from "../../../functions.js";
import { increment } from "../../../math.js";

const ComputationModuleTests = <TComputationType extends ComputationType>(
  m: Pick<
    ComputationModule<TComputationType>,
    "gen" | "genPure" | "keep" | "map" | "toReadonlyArrayAsync"
  >,
  //  computations: ComputationTypeOf<TComputationType>,
) =>
  describe(
    "ComputationModule",
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
  );

export default ComputationModuleTests;
