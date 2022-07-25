import {
  describe,
  expectArrayEquals,
  expectToThrowError,
  test,
} from "../../__internal__/testing";
import {
  ContainerLike,
  FromArray,
  Keep,
  ToReadonlyArray,
} from "../../containers";
import { pipe, pipeLazy } from "../../functions";

export const keep = <C extends ContainerLike>(
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
