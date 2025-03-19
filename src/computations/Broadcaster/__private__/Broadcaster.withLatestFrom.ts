import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { BroadcasterLike } from "../../../computations.js";
import {
  Function2,
  Optional,
  bind,
  none,
  partial,
  pipe,
  tuple,
} from "../../../functions.js";
import * as Disposable from "../../../utils/Disposable.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import LiftedListenerMixin, {
  LiftedListenerLike,
  LiftedListenerLike_notify,
  LiftedListenerLike_notifyDelegate,
} from "../../../utils/__mixins__/LiftedListenerMixin.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  ListenerLike,
} from "../../../utils.js";
import type * as Broadcaster from "../../Broadcaster.js";
import Broadcaster_addEventHandler from "./Broadcaster.addEventHandler.js";
import Broadcaster_lift from "./Broadcaster.lift.js";

const Broadcaster_withLatestFrom: Broadcaster.Signature["withLatestFrom"] =
  /*@__PURE__*/ (<TA, TB, T>() => {
    const WithLatestFromListener_hasLatest = Symbol(
      "WithLatestFromListener_hasLatest",
    );
    const WithLatestFromListener_otherLatest = Symbol(
      "WithLatestFromListener_otherLatest",
    );
    const WithLatestFromListener_selector = Symbol(
      "WithLatestFromListener_selector",
    );

    type TProperties = {
      [WithLatestFromListener_hasLatest]: boolean;
      [WithLatestFromListener_otherLatest]: Optional<TB>;
      [WithLatestFromListener_selector]: Function2<TA, TB, T>;
    };

    function onWithLatestFromListenerOtherSubscriptionComplete(
      this: TProperties & DisposableLike,
    ) {
      if (!this[WithLatestFromListener_hasLatest]) {
        this[DisposableLike_dispose]();
      }
    }

    function onOtherNotify(this: TProperties, next: TB) {
      this[WithLatestFromListener_hasLatest] = true;
      this[WithLatestFromListener_otherLatest] = next;
    }

    const createWithLatestFromListener = mixInstanceFactory(
      include(LiftedListenerMixin()),
      function WithLatestFromListener(
        this: TProperties,
        delegate: ListenerLike<T>,
        other: BroadcasterLike<TB>,
        selector: Function2<TA, TB, T>,
      ): ListenerLike<TA> {
        init(LiftedListenerMixin<TA, T>(), this, delegate, none);

        this[WithLatestFromListener_selector] = selector;

        pipe(
          other,
          Broadcaster_addEventHandler(bind(onOtherNotify, this)),
          Disposable.addTo(this),
          DisposableContainer.onComplete(
            bind(onWithLatestFromListenerOtherSubscriptionComplete, this),
          ),
        );

        return this;
      },
      props<TProperties>({
        [WithLatestFromListener_hasLatest]: false,
        [WithLatestFromListener_otherLatest]: none,
        [WithLatestFromListener_selector]: none,
      }),
      proto({
        [LiftedListenerLike_notify](
          this: TProperties & LiftedListenerLike<TA, T>,
          next: TA,
        ) {
          if (this[WithLatestFromListener_hasLatest]) {
            const result = this[WithLatestFromListener_selector](
              next,
              this[WithLatestFromListener_otherLatest] as TB,
            );
            this[LiftedListenerLike_notifyDelegate](result);
          }
        },
      }),
    );

    return (
      other: BroadcasterLike<TB>,
      selector: Function2<TA, TB, T> = tuple as unknown as Function2<TA, TB, T>,
    ) =>
      pipe(
        createWithLatestFromListener,
        partial(other, selector),
        Broadcaster_lift,
      );
  })() as Broadcaster.Signature["withLatestFrom"];

export default Broadcaster_withLatestFrom;
