import {
  SideEffect1,
  SideEffect2,
  newInstance,
  pipe,
} from "../../../functions.js";
import type { DisposableContainerLike } from "../../../utils.js";
import type * as DisposableContainer from "../../DisposableContainer.js";
import DisposableContainer_onComplete from "./DisposableContainer.onComplete.js";
import DisposableContainer_onError from "./DisposableContainer.onError.js";

const DisposableContainer_toPromise: DisposableContainer.Signature["toPromise"] =
  (disposable: DisposableContainerLike) =>
    newInstance<
      Promise<void>,
      SideEffect2<SideEffect1<void>, SideEffect1<unknown>>
    >(Promise, (resolve: SideEffect1<void>, reject: SideEffect1<unknown>) =>
      pipe(
        disposable,
        DisposableContainer_onComplete(resolve),
        DisposableContainer_onError(reject),
      ),
    );

export default DisposableContainer_toPromise;
