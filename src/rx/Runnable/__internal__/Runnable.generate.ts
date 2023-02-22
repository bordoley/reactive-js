import { Generate } from "../../../containers.js";
import { Factory, Updater } from "../../../functions.js";
import { RunnableLike, SinkLike, SinkLike_notify } from "../../../rx.js";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed.js";
import Runnable_create from "./Runnable.create.js";

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
