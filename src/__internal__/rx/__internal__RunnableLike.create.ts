import { SideEffect1, none, pipe } from "../../functions";
import { ReactiveContainerLike_sinkInto, RunnableLike } from "../../rx";
import { SinkLike } from "../../util";
import { dispose } from "../util/__internal__DisposableLike";
import {
  Mutable,
  createInstanceFactory,
  mixin,
  props,
} from "../util/__internal__Objects";

export const create: <T>(run: SideEffect1<SinkLike<T>>) => RunnableLike<T> =
  /*@__PURE__*/ (<T>() => {
    type TProperties = {
      readonly run: SideEffect1<SinkLike<T>>;
    };
    return createInstanceFactory(
      mixin(
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
              pipe(sink, dispose());
            } catch (cause) {
              pipe(sink, dispose({ cause }));
            }
          },
        },
      ),
    );
  })();
