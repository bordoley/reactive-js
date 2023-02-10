import { Generate } from "../../../containers";
import { Factory, Updater } from "../../../functions";
import { RunnableLike, SinkLike, SinkLike_notify } from "../../../rx";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed";
import Runnable_create from "./Runnable.create";

const Runnable_generate: Generate<RunnableLike>["generate"] = <T>(
  generator: Updater<T>,
  initialValue: Factory<T>,
) =>
  Runnable_create((sink: SinkLike<T>) => {
    let acc = initialValue();
    while (!Disposable_isDisposed(sink)) {
      acc = generator(acc);
      sink[SinkLike_notify](acc);
    }
  });

export default Runnable_generate;
