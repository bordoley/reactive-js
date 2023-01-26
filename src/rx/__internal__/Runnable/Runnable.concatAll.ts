import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { ConcatAll } from "../../../containers";
import { pipe, pipeLazy } from "../../../functions";
import { RunnableLike, SinkLike, SinkLike_notify } from "../../../rx";
import Disposable$addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Disposable$bindTo from "../../../util/__internal__/Disposable/Disposable.bindTo";
import Disposable$dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import DelegateSink$create from "../DelegatingSink/DelegatingSink.create";
import DelegateSink$mixin from "../DelegatingSink/DelegatingSink.mixin";
import Sink$sourceFrom from "../Sink/Sink.sourceFrom";
import { DelegateSinkLike, DelegatingSinkLike_delegate } from "../rx.internal";
import Runnable$lift from "./Runnable.lift";

const Runnable$concatAll: ConcatAll<RunnableLike>["concatAll"] =
  /*@__PURE__*/ (<T>() => {
    const typedDelegatingSinkMixin = DelegateSink$mixin<T>();

    return pipeLazy(
      createInstanceFactory(
        mix(
          include(typedDelegatingSinkMixin),
          function RunnableConcatAll(
            instance: Pick<SinkLike<RunnableLike<T>>, typeof SinkLike_notify>,
            delegate: SinkLike<T>,
          ): SinkLike<RunnableLike<T>> {
            init(typedDelegatingSinkMixin, instance, delegate);
            pipe(instance, Disposable$bindTo(delegate));

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
                DelegateSink$create(delegate),
                Disposable$addTo<SinkLike<T>>(this),
                Sink$sourceFrom(next),
                Disposable$dispose(),
              );
            },
          },
        ),
      ),
      Runnable$lift,
    );
  })();

export default Runnable$concatAll;
