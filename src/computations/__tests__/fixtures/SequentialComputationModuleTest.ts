import { Array_push } from "../../../__internal__/constants.js";
import {
  describe,
  expectArrayEquals,
  expectToThrowErrorAsync,
  testAsync,
} from "../../../__internal__/testing.js";
import {
  ComputationModule,
  SequentialComputationModule,
} from "../../../computations.js";
import { pipe, pipeAsync, pipeLazy } from "../../../functions.js";
import * as Computation from "../../Computation.js";

const SequentialComputationModuleTests = <
  TComputationModule extends ComputationModule &
    Pick<SequentialComputationModule, "forEach" | "gen">,
>(
  m: TComputationModule,
) =>
  describe(
    "SequentialComputationModule",

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
