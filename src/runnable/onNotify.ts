import { SideEffect1 } from "../functions";
import { RunnableOperator } from "../runnable";
import { createOnNotifyOperator } from "../source";
import { liftT } from "./lift";
import { Sink } from "./sinks";

/**
 * Returns an `ObservableLike` that forwards notifications to the provided `onNotify` function.
 *
 * @param onNotify The function that is invoked when the observable source produces values.
 */
export const onNotify: <T>(onNotify: SideEffect1<T>) => RunnableOperator<T, T> =
  createOnNotifyOperator(
    liftT,
    class OnNotifySink<T> extends Sink<T> {
      constructor(
        readonly delegate: Sink<T>,
        readonly onNotify: SideEffect1<T>,
      ) {
        super();
      }
    },
  );
