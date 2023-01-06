import ContainerLike__repeat from "../../../containers/__internal__/ContainerLike/ContainerLike.repeat";
import { pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import DisposableLike__addTo from "../../../util/__internal__/DisposableLike/DisposableLike.addTo";
import DisposableLike__dispose from "../../../util/__internal__/DisposableLike/DisposableLike.dispose";
import DisposableLike__isDisposed from "../../../util/__internal__/DisposableLike/DisposableLike.isDisposed";
import DelegateSinkLike__create from "../DelegatingSinkLike/DelegatingSinkLike.create";
import SinkLike__sourceFrom from "../SinkLike/SinkLike.sourceFrom";
import RunnableLike__create from "./RunnableLike.create";

const RunnableLike__repeat = /*@__PURE__*/ (<T>() => {
  return ContainerLike__repeat<RunnableLike, T>((delegate, predicate) =>
    RunnableLike__create(sink => {
      let count = 0;
      do {
        pipe(
          DelegateSinkLike__create(sink),
          DisposableLike__addTo(sink),
          SinkLike__sourceFrom(delegate),
          DisposableLike__dispose(),
        );
        count++;
      } while (!DisposableLike__isDisposed(sink) && predicate(count));
    }),
  );
})();

export default RunnableLike__repeat;
