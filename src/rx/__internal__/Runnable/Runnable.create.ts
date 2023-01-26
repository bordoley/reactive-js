import {
  Mutable,
  createInstanceFactory,
  mix,
  props,
} from "../../../__internal__/mixins";
import { SideEffect1, error, none, pipe } from "../../../functions";
import {
  ReactiveContainerLike_sinkInto,
  RunnableLike,
  SinkLike,
} from "../../../rx";
import Disposable$dispose from "../../../util/__internal__/Disposable/Disposable.dispose";

const Runnable$create: <T>(run: SideEffect1<SinkLike<T>>) => RunnableLike<T> =
  /*@__PURE__*/ (<T>() => {
    type TProperties = {
      readonly run: SideEffect1<SinkLike<T>>;
    };
    return createInstanceFactory(
      mix(
        function Runnable(
          instance: Pick<RunnableLike, typeof ReactiveContainerLike_sinkInto> &
            Mutable<TProperties>,
          run: SideEffect1<SinkLike<T>>,
        ): RunnableLike<T> {
          instance.run = run;
          return instance;
        },
        props<TProperties>({
          run: none,
        }),
        {
          [ReactiveContainerLike_sinkInto](
            this: {
              run: SideEffect1<SinkLike<T>>;
            },
            sink: SinkLike<T>,
          ) {
            try {
              this.run(sink);
              pipe(sink, Disposable$dispose());
            } catch (e) {
              pipe(sink, Disposable$dispose(error(e)));
            }
          },
        },
      ),
    );
  })();

export default Runnable$create;
