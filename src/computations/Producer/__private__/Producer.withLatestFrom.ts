import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
} from "../../../__internal__/mixins.js";
import { ProducerLike } from "../../../computations.js";
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
import LiftedConsumerMixin from "../../../utils/__mixins__/LiftedConsumerMixin.js";
import {
  LiftedListenerLike_notify,
  LiftedListenerLike_notifyDelegate,
} from "../../../utils/__mixins__/LiftedListenerMixin.js";
import { LiftedSinkLike } from "../../../utils/__mixins__/LiftedSinkMixin.js";
import {
  ConsumerLike,
  DisposableLike,
  DisposableLike_dispose,
} from "../../../utils.js";
import type * as Producer from "../../Producer.js";
import Producer_lift from "./Producer.lift.js";

const Producer_withLatestFrom: Producer.Signature["withLatestFrom"] =
  /*@__PURE__*/ (<TA, TB, T>() => {
    const WithLatestFromSink_hasLatest = Symbol("WithLatestFromSink_hasLatest");
    const WithLatestFromSink_otherLatest = Symbol(
      "WithLatestFromSink_otherLatest",
    );
    const WithLatestFromSink_selector = Symbol("WithLatestFromSink_selector");

    type TProperties = {
      [WithLatestFromSink_hasLatest]: boolean;
      [WithLatestFromSink_otherLatest]: Optional<TB>;
      [WithLatestFromSink_selector]: Function2<TA, TB, T>;
    };

    function onWithLatestFromSinkOtherSubscriptionComplete(
      this: TProperties & DisposableLike,
    ) {
      if (!this[WithLatestFromSink_hasLatest]) {
        this[DisposableLike_dispose]();
      }
    }

    function onOtherNotify(this: TProperties, next: TB) {
      this[WithLatestFromSink_hasLatest] = true;
      this[WithLatestFromSink_otherLatest] = next;
    }

    const createWithLatestFromSink = mixInstanceFactory(
      include(LiftedConsumerMixin()),
      function WithLatestFromSink(
        this: TProperties,
        delegate: ConsumerLike<T>,
        other: ProducerLike<TB>,
        selector: Function2<TA, TB, T>,
      ): ConsumerLike<TA> {
        init(LiftedConsumerMixin<TA, T>(), this, delegate, none);

        this[WithLatestFromSink_selector] = selector;

        pipe(
          other,
          Producer_addEventHandler(bind(onOtherNotify, this)),
          Disposable.addTo(this),
          DisposableContainer.onComplete(
            bind(onWithLatestFromSinkOtherSubscriptionComplete, this),
          ),
        );

        return this;
      },
      props<TProperties>({
        [WithLatestFromSink_hasLatest]: false,
        [WithLatestFromSink_otherLatest]: none,
        [WithLatestFromSink_selector]: none,
      }),
      proto({
        [LiftedListenerLike_notify](
          this: TProperties & LiftedSinkLike<TA, T>,
          next: TA,
        ) {
          if (this[WithLatestFromSink_hasLatest]) {
            const result = this[WithLatestFromSink_selector](
              next,
              this[WithLatestFromSink_otherLatest] as TB,
            );
            this[LiftedListenerLike_notifyDelegate](result);
          }
        },
      }),
    );

    return (
      other: ProducerLike<TB>,
      selector: Function2<TA, TB, T> = tuple as unknown as Function2<TA, TB, T>,
    ) =>
      pipe(createWithLatestFromSink, partial(other, selector), Producer_lift());
  })() as Producer.Signature["withLatestFrom"];

export default Producer_withLatestFrom;
