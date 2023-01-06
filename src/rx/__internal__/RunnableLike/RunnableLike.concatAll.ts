import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { ConcatAll } from "../../../containers";
import { pipe, pipeLazy } from "../../../functions";
import { RunnableLike, SinkLike, SinkLike_notify } from "../../../rx";
import DisposableLike__addTo from "../../../util/__internal__/DisposableLike/DisposableLike.addTo";
import DisposableLike__bindTo from "../../../util/__internal__/DisposableLike/DisposableLike.bindTo";
import DisposableLike__dispose from "../../../util/__internal__/DisposableLike/DisposableLike.dispose";
import DelegateSinkLike__create from "../DelegatingSinkLike/DelegatingSinkLike.create";
import DelegateSinkLike__mixin from "../DelegatingSinkLike/DelegatingSinkLike.mixin";
import SinkLike__sourceFrom from "../SinkLike/SinkLike.sourceFrom";
import { DelegateSinkLike, DelegatingSinkLike_delegate } from "../rx.internal";
import RunnableLike__lift from "./RunnableLike.lift";

const RunnableLike__concatAll: ConcatAll<RunnableLike>["concatAll"] =
  /*@__PURE__*/ (<T>() => {
    const typedDelegatingSinkMixin = DelegateSinkLike__mixin<T>();

    return pipeLazy(
      createInstanceFactory(
        mix(
          include(typedDelegatingSinkMixin),
          function RunnableConcatAll(
            instance: Pick<SinkLike<RunnableLike<T>>, typeof SinkLike_notify>,
            delegate: SinkLike<T>,
          ): SinkLike<RunnableLike<T>> {
            init(typedDelegatingSinkMixin, instance, delegate);
            pipe(instance, DisposableLike__bindTo(delegate));

            return instance;
          },
          {},
          {
            [SinkLike_notify](
              this: DelegateSinkLike<T>,
              next: RunnableLike<T>,
            ) {
              const { [DelegatingSinkLike_delegate]: delegate } = this;
              pipe(
                DelegateSinkLike__create(delegate),
                DisposableLike__addTo<SinkLike<T>>(this),
                SinkLike__sourceFrom(next),
                DisposableLike__dispose(),
              );
            },
          },
        ),
      ),
      RunnableLike__lift,
    );
  })();

export default RunnableLike__concatAll;
