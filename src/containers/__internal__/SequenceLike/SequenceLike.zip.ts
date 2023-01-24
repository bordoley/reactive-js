import {
  SequenceLike,
  SequenceLike_data,
  SequenceLike_next,
  Zip,
} from "../../../containers";
import { callWith, getLength, isSome, none, pipe } from "../../../functions";
import ContainerLike__keepType from "../ContainerLike/ContainerLike.keepType";
import ReadonlyArrayLike__keep from "../ReadonlyArrayLike/ReadonlyArrayLike.keep";
import ReadonlyArrayLike__map from "../ReadonlyArrayLike/ReadonlyArrayLike.map";

const SequenceLike__zip: Zip<SequenceLike>["zip"] = /*@__PURE__*/ (() => {
  const zip =
    (...sequences: readonly SequenceLike[]): SequenceLike<readonly any[]> =>
    () => {
      const nextResults = pipe(
        sequences,
        ReadonlyArrayLike__map(callWith()),
        ContainerLike__keepType({ keep: ReadonlyArrayLike__keep }, isSome),
      );

      return getLength(nextResults) === getLength(sequences)
        ? {
            [SequenceLike_data]: pipe(
              nextResults,
              ReadonlyArrayLike__map(x => x[SequenceLike_data]),
            ),
            [SequenceLike_next]: zip(
              ...pipe(
                nextResults,
                ReadonlyArrayLike__map(x => x[SequenceLike_next]),
              ),
            ),
          }
        : none;
    };

  return zip as Zip<SequenceLike>["zip"];
})();

export default SequenceLike__zip;
