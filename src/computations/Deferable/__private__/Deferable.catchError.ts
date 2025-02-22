import {
  DeferableLike,
  DeferableLike_eval,
  SinkLike,
  SinkLike_complete,
} from "../../../computations.js";
import {
  Function1,
  Optional,
  SideEffect1,
  error,
  isSome,
  newInstance,
  none,
} from "../../../functions.js";
import type * as Deferable from "../../Deferable.js";

class CatchErrorDeferable<T> implements DeferableLike<T> {
  constructor(
    private readonly s: DeferableLike<T>,
    private readonly onError:
      | SideEffect1<Error>
      | Function1<Error, DeferableLike<T>>,
  ) {}

  [DeferableLike_eval](sink: SinkLike<T>): void {
    try {
      this.s[DeferableLike_eval](sink);
    } catch (e) {
      const err = error(e);
      let action: Optional<DeferableLike<T>> = none;

      try {
        action = this.onError(err) as Optional<DeferableLike<T>>;
      } catch (e) {
        throw error([error(e), err]);
      }

      if (isSome(action)) {
        action[DeferableLike_eval](sink);
      }
      sink[SinkLike_complete]();
    }
  }
}

const Deferable_catchError: Deferable.Signature["catchError"] =
  <T>(onError: SideEffect1<Error> | Function1<Error, DeferableLike<T>>) =>
  (deferable: DeferableLike<T>) =>
    newInstance(CatchErrorDeferable<T>, deferable, onError);

export default Deferable_catchError;
