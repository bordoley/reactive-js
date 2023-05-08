import {
  Container,
  DispatcherLike,
  ObservableContainer,
} from "../../../core.js";
import { partial, pipe } from "../../../functions.js";
import Enumerable_lift from "../../Enumerable/__internal__/Enumerable.lift.js";
import Observer_createDispatchToObserver from "../../Observer/__internal__/Observer.createDispatchToObserver.js";

type ObservableDispatchTo = <C extends ObservableContainer, T = unknown>(
  dispatcher: DispatcherLike<T>,
) => Container.Operator<C, T, T>;
const Observable_dispatchTo: ObservableDispatchTo = (<T>(
  dispatcher: DispatcherLike<T>,
) =>
  pipe(
    Observer_createDispatchToObserver,
    partial(dispatcher),
    Enumerable_lift,
  )) as ObservableDispatchTo;

export default Observable_dispatchTo;
