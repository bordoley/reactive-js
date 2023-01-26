import {
  DistinctUntilChanged,
  SequenceLike,
  SequenceLike_data,
  SequenceLike_next,
} from "../../../containers";
import { Equality, isSome, none, strictEquality } from "../../../functions";

const Sequence$distinctUntilChanged: DistinctUntilChanged<SequenceLike>["distinctUntilChanged"] =
  /*@__PURE__*/ (() => {
    const _distinctUntilChanged =
      <T>(
        equality: Equality<T>,
        prevValue: T,
        next: SequenceLike<T>,
      ): SequenceLike<T> =>
      () => {
        let retval = next();
        while (true) {
          if (isSome(retval)) {
            if (!equality(prevValue, retval[SequenceLike_data])) {
              return {
                [SequenceLike_data]: retval[SequenceLike_data],
                [SequenceLike_next]: _distinctUntilChanged(
                  equality,
                  retval[SequenceLike_data],
                  retval[SequenceLike_next],
                ),
              };
            } else {
              retval = retval[SequenceLike_next]();
            }
          } else {
            return retval;
          }
        }
      };

    return <T>(options: { readonly equality?: Equality<T> } = {}) =>
      (seq: SequenceLike<T>) =>
      () => {
        const { equality = strictEquality } = options;
        const result = seq();
        return isSome(result)
          ? {
              [SequenceLike_data]: result[SequenceLike_data],
              [SequenceLike_next]: _distinctUntilChanged(
                equality,
                result[SequenceLike_data],
                result[SequenceLike_next],
              ),
            }
          : none;
      };
  })();

export default Sequence$distinctUntilChanged;
