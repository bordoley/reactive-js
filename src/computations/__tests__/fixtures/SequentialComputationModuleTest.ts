import { Array_push } from "../../../__internal__/constants.js";
import {
  describe,
  expectArrayEquals,
  expectEquals,
  expectToThrowErrorAsync,
  testAsync,
} from "../../../__internal__/testing.js";
import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import {
  ComputationModule,
  SequentialComputationModule,
} from "../../../computations.js";
import {
  Optional,
  none,
  pipe,
  pipeAsync,
  pipeLazy,
  pipeLazyAsync,
} from "../../../functions.js";
import * as Computation from "../../Computation.js";

const SequentialComputationModuleTests = <
  TComputationModule extends ComputationModule &
    Pick<
      SequentialComputationModule,
      "catchError" | "concat" | "forEach" | "gen"
    >,
>(
  m: TComputationModule,
) =>
  describe(
    "SequentialComputationModule",
    describe(
      "catchError",

      testAsync("when the source throws", async () => {
        const e1 = "e1";
        let result: Optional<string> = none;
        await pipeAsync(
          Computation.raise(m)<number>({ raise: () => e1 }),
          m.catchError<number>((e: Error) => {
            result = e.message;
          }),
          m.toReadonlyArrayAsync(),
        );

        pipe(result, expectEquals<Optional<string>>(e1));
      }),
      testAsync("when the error handler throws an error", async () => {
        const e1 = "e1";
        const e2 = "e2";

        let result: Optional<unknown> = none;

        await pipeAsync(
          Computation.raise(m)<number>({ raise: () => e1 }),
          m.catchError<number>(_ => {
            throw e2;
          }),
          m.catchError<number>(e => {
            result = e.cause;
          }),
          m.toReadonlyArrayAsync(),
        );

        pipe(
          result as ReadonlyArray<Error>,
          ReadonlyArray.map(x => x.message),
          expectArrayEquals(["e2", "e1"]),
        );
      }),
      testAsync(
        "when error handler returns a computation",
        pipeLazyAsync(
          [1, 2, 3],
          Computation.fromReadonlyArray(m)(),
          Computation.concatWith(m)<number>(Computation.raise(m)()),
          m.catchError<number>(
            pipeLazy([4, 5, 6], Computation.fromReadonlyArray(m)()),
          ),
          m.toReadonlyArrayAsync<number>(),
          expectArrayEquals([1, 2, 3, 4, 5, 6]),
        ),
      ),
    ),

    describe(
      "forEach",
      testAsync("invokes the effect for each notified value", async () => {
        const result: number[] = [];

        await pipeAsync(
          [1, 2, 3],
          Computation.fromReadonlyArray(m)(),
          m.forEach((x: number) => {
            result[Array_push](x + 10);
          }),
          m.toReadonlyArrayAsync(),
        ),
          pipe(result, expectArrayEquals([11, 12, 13]));
      }),
      testAsync("when the effect function throws", async () => {
        const err = new Error();
        await pipeAsync(
          pipeLazy(
            [1, 1],
            Computation.fromReadonlyArray(m)(),
            m.forEach(_ => {
              throw err;
            }),
            m.toReadonlyArrayAsync(),
          ),
          expectToThrowErrorAsync(err),
        );
      }),
    ),
  );

export default SequentialComputationModuleTests;
