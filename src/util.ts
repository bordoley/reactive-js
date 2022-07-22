import { init, properties, prototype } from "./__internal__/util/Disposable";
import { createObject } from "./__internal__/util/createObject";
import { DisposableLike } from "./util/DisposableLike";
import { Factory } from "./util/functions";

export const createDisposable: Factory<DisposableLike> = () => {
  const instance = createObject(prototype, properties);
  init(instance);
  return instance;
};
