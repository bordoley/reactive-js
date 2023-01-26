import { Generate } from "../../../containers";
import { Factory, Updater } from "../../../functions";
import { RunnableLike, SinkLike, SinkLike_notify } from "../../../rx";
import Disposable$isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import Runnable$create from "./Runnable.create";

const Runnable$generate: Generate<RunnableLike>["generate"] = <T>(
  generator: Updater<T>,
  initialValue: Factory<T>,
) =>
  Runnable$create((sink: SinkLike<T>) => {
    let acc = initialValue();
    while (!Disposable$isDisposed(sink)) {
      acc = generator(acc);
      sink[SinkLike_notify](acc);
    }
  });

export default Runnable$generate;
