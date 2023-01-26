import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { ConcatAll } from "../../../containers";
import { pipe, pipeLazy } from "../../../functions";
import { RunnableLike, SinkLike, SinkLike_notify } from "../../../rx";
import Disposable_addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Disposable_bindTo from "../../../util/__internal__/Disposable/Disposable.bindTo";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import DelegateSink_create from "../DelegatingSink/DelegatingSink.create";
import DelegateSink_mixin from "../DelegatingSink/DelegatingSink.mixin";
import Sink_sourceFrom from "../Sink/Sink.sourceFrom";
import { DelegateSinkLike, DelegatingSinkLike_delegate } from "../rx.internal";
import Runnable_lift from "./Runnable.lift";

const Runnable_concatAll: ConcatAll<RunnableLike>["concatAll"] =
  /*@__PURE__*/ (<T>() => {
    const typedDelegatingSinkMixin = DelegateSink_mixin<T>();

    return pipeLazy(
      createInstanceFactory(
        mix(
          include(typedDelegatingSinkMixin),
          function RunnableConcatAll(
            instance: Pick<SinkLike<RunnableLike<T>>, typeof SinkLike_notify>,
            delegate: SinkLike<T>,
          ): SinkLike<RunnableLike<T>> {
            init(typedDelegatingSinkMixin, instance, delegate);
            pipe(instance, Disposable_bindTo(delegate));

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
                DelegateSink_create(delegate),
                Disposable_addTo<SinkLike<T>>(this),
                Sink_sourceFrom(next),
                Disposable_dispose(),
              );
            },
          },
        ),
      ),
      Runnable_lift,
    );
  })();

export default Runnable_concatAll;
