import { Generate } from "../../../containers";
import { Factory, Updater } from "../../../functions";
import { RunnableLike, SinkLike, SinkLike_notify } from "../../../rx";
import DisposableLike__isDisposed from "../../../util/__internal__/DisposableLike/DisposableLike.isDisposed";
import RunnableLike__create from "./RunnableLike.create";

const RunnableLike__generate: Generate<RunnableLike>["generate"] = <T>(
  generator: Updater<T>,
  initialValue: Factory<T>,
) =>
  RunnableLike__create((sink: SinkLike<T>) => {
    let acc = initialValue();
    while (!DisposableLike__isDisposed(sink)) {
      acc = generator(acc);
      sink[SinkLike_notify](acc);
    }
  });

export default RunnableLike__generate;
