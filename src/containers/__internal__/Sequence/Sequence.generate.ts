import {
  Generate,
  SequenceLike,
  SequenceLike_data,
  SequenceLike_next,
} from "../../../containers";
import { Factory, Updater } from "../../../functions";

const Sequence$generate: Generate<SequenceLike>["generate"] =
  /*@__PURE__*/ (() => {
    const _generate =
      <T>(generator: Updater<T>, data: T): SequenceLike<T> =>
      () => ({
        [SequenceLike_data]: data,
        [SequenceLike_next]: _generate(generator, generator(data)),
      });

    return <T>(generator: Updater<T>, initialValue: Factory<T>) =>
      () => {
        const acc = generator(initialValue());
        return _generate(generator, acc)();
      };
  })();

export default Sequence$generate;
