import {
  Mixin1,
  include,
  init,
  mix,
  props,
  proto,
  unsafeCast,
} from "../../__internal__/mixins.js";
import { none, returns } from "../../functions.js";
import DelegatingDisposableMixin from "../../utils/__mixins__/DelegatingDisposableMixin.js";
import {
  EventListenerLike_notify,
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import {
  LiftedSinkLike,
  LiftedSinkLike_subscription,
} from "../__internal__/LiftedSource.js";

export const DelegatingLiftedSinkLike_delegate = Symbol(
  "DelegatingLiftedSinkLike_delegate",
);

export const DelegatingLiftedSinkLike_onCompleted = Symbol(
  "DelegatingLiftedSinkLike_onCompleted",
);

export interface DelegatingLiftedSinkLike<
  TSubscription extends SinkLike,
  TA,
  TB = TA,
> extends LiftedSinkLike<TSubscription, TA> {
  readonly [DelegatingLiftedSinkLike_delegate]: LiftedSinkLike<
    TSubscription,
    TB
  >;

  [DelegatingLiftedSinkLike_onCompleted](): void;
}

type TPrototype<TSubscription extends SinkLike, TA, TB = TA> = Pick<
  DelegatingLiftedSinkLike<TSubscription, TA, TB>,
  | typeof EventListenerLike_notify
  | typeof SinkLike_isCompleted
  | typeof SinkLike_complete
  | typeof DelegatingLiftedSinkLike_onCompleted
>;

interface DelegatingLiftedSinkMixin {
  <TSubscription extends SinkLike, TA, TB>(): Mixin1<
    DelegatingLiftedSinkLike<TSubscription, TA, TB>,
    LiftedSinkLike<TSubscription, TB>,
    TPrototype<TSubscription, TA>
  >;

  <TSubscription extends SinkLike, T>(): Mixin1<
    DelegatingLiftedSinkLike<TSubscription, T>,
    LiftedSinkLike<TSubscription, T>,
    TPrototype<TSubscription, T>
  >;
}

const DelegatingLiftedSinkMixin: DelegatingLiftedSinkMixin = /*@__PURE__*/ (<
  TSubscription extends SinkLike,
  TA,
  TB,
>() => {
  const DelegatingLiftedSinkMixin_isCompleted = Symbol(
    "DelegatingLiftedSinkMixin_isCompleted",
  );
  type TProperties = {
    [DelegatingLiftedSinkLike_delegate]: LiftedSinkLike<TSubscription, TB>;
    [DelegatingLiftedSinkMixin_isCompleted]: boolean;
    [LiftedSinkLike_subscription]: TSubscription;
  };

  return returns(
    mix(
      include(DelegatingDisposableMixin),
      function DelegatingLiftedSinkMixin(
        this: TProperties & TPrototype<TSubscription, TA, TB>,
        delegate: LiftedSinkLike<TSubscription, TB>,
      ): DelegatingLiftedSinkLike<TSubscription, TA, TB> {
        this[DelegatingLiftedSinkLike_delegate] = delegate;
        this[LiftedSinkLike_subscription] =
          delegate[LiftedSinkLike_subscription];

        init(
          DelegatingDisposableMixin,
          this,
          delegate[LiftedSinkLike_subscription],
        );

        return this;
      },
      props<TProperties>({
        [DelegatingLiftedSinkLike_delegate]: none,
        [DelegatingLiftedSinkMixin_isCompleted]: false,
        [LiftedSinkLike_subscription]: none,
      }),
      proto<TPrototype<TSubscription, TA>>({
        get [SinkLike_isCompleted]() {
          unsafeCast<TProperties>(this);
          return this[LiftedSinkLike_subscription][SinkLike_isCompleted];
        },

        [DelegatingLiftedSinkLike_onCompleted](this: TProperties) {
          this[DelegatingLiftedSinkLike_delegate][SinkLike_complete]();
        },

        [EventListenerLike_notify](this: TProperties, next: TA) {
          this[DelegatingLiftedSinkLike_delegate][EventListenerLike_notify](
            next as unknown as TB,
          );
        },

        [SinkLike_complete](
          this: TProperties & TPrototype<TSubscription, TA, TB>,
        ) {
          const isCompleted = this[SinkLike_isCompleted];
          this[DelegatingLiftedSinkMixin_isCompleted] = true;

          if (!isCompleted) {
            this[DelegatingLiftedSinkLike_onCompleted]();
          }
        },
      }),
    ),
  );
})();

export default DelegatingLiftedSinkMixin;
