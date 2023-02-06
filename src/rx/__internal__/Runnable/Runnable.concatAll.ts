import {
  DelegatingLike_delegate,
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { ConcatAll } from "../../../containers";
import { pipe, pipeLazy } from "../../../functions";
import { RunnableLike, SinkLike, SinkLike_notify } from "../../../rx";
import Disposable_addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Disposable_delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import { DelegatingDisposableLike } from "../../../util/__internal__/util.internal";
import DelegateSink_create from "../DelegatingSink/DelegatingSink.create";
import Sink_sourceFrom from "../Sink/Sink.sourceFrom";
import Runnable_lift from "./Runnable.lift";

const Runnable_concatAll: ConcatAll<RunnableLike>["concatAll"] =
  /*@__PURE__*/ (<T>() =>
    pipeLazy(
      createInstanceFactory(
        mix(
          include(Disposable_delegatingMixin()),
          function RunnableConcatAll(
            instance: Pick<SinkLike<RunnableLike<T>>, typeof SinkLike_notify>,
            delegate: SinkLike<T>,
          ): SinkLike<RunnableLike<T>> {
            init(Disposable_delegatingMixin(), instance, delegate);
            return instance;
          },
          {},
          {
            [SinkLike_notify](
              this: DelegatingDisposableLike<SinkLike<T>>,
              next: RunnableLike<T>,
            ) {
              const { [DelegatingLike_delegate]: delegate } = this;
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
    ))();

export default Runnable_concatAll;
