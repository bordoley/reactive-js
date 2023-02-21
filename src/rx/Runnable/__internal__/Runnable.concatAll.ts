import {
  DelegatingLike_delegate,
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins.js";
import { ConcatAll } from "../../../containers.js";
import { pipe, pipeLazy } from "../../../functions.js";
import { RunnableLike, SinkLike, SinkLike_notify } from "../../../rx.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_delegatingMixin from "../../../util/Disposable/__internal__/Disposable.delegatingMixin.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import { DelegatingDisposableLike } from "../../../util/__internal__/util.internal.js";
import Sink_createWithDelegate from "../../Sink/__internal__/Sink.createWithDelegate.js";
import Sink_sourceFrom from "../../Sink/__internal__/Sink.sourceFrom.js";
import Runnable_lift from "./Runnable.lift.js";

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
                delegate,
                Sink_createWithDelegate,
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
