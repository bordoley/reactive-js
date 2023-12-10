import { init } from "../../../__internal__/mixins.js";
import { ObserverLike } from "../../../concurrent.js";
import { pipe } from "../../../functions.js";
import { DisposableLike } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import ObserverMixin from "../../__mixins__/ObserverMixin.js";

const Observer_mixin_initFromDelegate: <T>(
  instance: DisposableLike,
  delegate: ObserverLike,
) => asserts instance is ObserverLike<T> = (
  instance: DisposableLike,
  delegate: ObserverLike,
) => {
  init(ObserverMixin(), instance, delegate, delegate);
  pipe(instance, Disposable.addTo(delegate));
};

export default Observer_mixin_initFromDelegate;
