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
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose";

const Runnable_create: <T>(run: SideEffect1<SinkLike<T>>) => RunnableLike<T> =
  /*@__PURE__*/ (<T>() => {
    const Runnable_effect = Symbol("Runnable_effect");

    type TProperties = {
      readonly [Runnable_effect]: SideEffect1<SinkLike<T>>;
    };
    return createInstanceFactory(
      mix(
        function Runnable(
          instance: Pick<RunnableLike, typeof ReactiveContainerLike_sinkInto> &
            Mutable<TProperties>,
          effect: SideEffect1<SinkLike<T>>,
        ): RunnableLike<T> {
          instance[Runnable_effect] = effect;
          return instance;
        },
        props<TProperties>({
          [Runnable_effect]: none,
        }),
        {
          [ReactiveContainerLike_sinkInto](
            this: {
              [Runnable_effect]: SideEffect1<SinkLike<T>>;
            },
            sink: SinkLike<T>,
          ) {
            try {
              this[Runnable_effect](sink);
              pipe(sink, Disposable_dispose());
            } catch (e) {
              pipe(sink, Disposable_dispose(error(e)));
            }
          },
        },
      ),
    );
  })();

export default Runnable_create;
