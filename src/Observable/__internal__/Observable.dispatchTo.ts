import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_createDispatchToObserver from "../../Observer/__internal__/Observer.createDispatchToObserver.js";
import { partial, pipe } from "../../functions.js";
import {
  Containers,
  DispatcherLike,
  ObservableContainer,
} from "../../types.js";

type ObservableDispatchTo = <C extends ObservableContainer, T = unknown>(
  dispatcher: DispatcherLike<T>,
) => Containers.Operator<C, T, T>;
const Observable_dispatchTo: ObservableDispatchTo = (<T>(
  dispatcher: DispatcherLike<T>,
) =>
  pipe(
    Observer_createDispatchToObserver,
    partial(dispatcher),
    Enumerable_lift,
  )) as ObservableDispatchTo;

export default Observable_dispatchTo;
