import {
  SequenceLike,
  SequenceLike_data,
  SequenceLike_next,
  Zip,
} from "../../../containers";
import { callWith, getLength, isSome, none, pipe } from "../../../functions";
import Container$keepType from "../Container/Container.keepType";
import ReadonlyArray$keep from "../ReadonlyArray/ReadonlyArray.keep";
import ReadonlyArray$map from "../ReadonlyArray/ReadonlyArray.map";

const Sequence$zip: Zip<SequenceLike>["zip"] = /*@__PURE__*/ (() => {
  const zip =
    (...sequences: readonly SequenceLike[]): SequenceLike<readonly any[]> =>
    () => {
      const nextResults = pipe(
        sequences,
        ReadonlyArray$map(callWith()),
        Container$keepType({ keep: ReadonlyArray$keep }, isSome),
      );

      return getLength(nextResults) === getLength(sequences)
        ? {
            [SequenceLike_data]: pipe(
              nextResults,
              ReadonlyArray$map(x => x[SequenceLike_data]),
            ),
            [SequenceLike_next]: zip(
              ...pipe(
                nextResults,
                ReadonlyArray$map(x => x[SequenceLike_next]),
              ),
            ),
          }
        : none;
    };

  return zip as Zip<SequenceLike>["zip"];
})();

export default Sequence$zip;
