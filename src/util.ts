import { init, properties, prototype } from "./__internal__/util/Disposable";
import { createObjectFactory } from "./__internal__/util/Object";
import { DisposableLike } from "./util/DisposableLike";
import { Factory } from "./util/functions";

const createInstance = /*@__PURE__*/ createObjectFactory(prototype, properties);

export const createDisposable: Factory<DisposableLike> = () => {
  const instance = createInstance();
  init(instance);
  return instance;
};
