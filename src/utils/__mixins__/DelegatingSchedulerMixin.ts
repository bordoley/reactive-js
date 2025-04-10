import {
  Mixin1,
  mix,
  props,
  proto,
  unsafeCast,
} from "../../__internal__/mixins.js";
import { bind, none, pipe } from "../../functions.js";
import {
  ClockLike_now,
  DisposableContainerLike,
  DisposableLike,
  EnumeratorLike_current,
  SchedulerContinuation,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
  SyncEnumeratorLike_moveNext,
} from "../../utils.js";
import * as Disposable from "../Disposable.js";
import * as Iterator from "../__internal__/Iterator.js";

type TReturn = Omit<SchedulerLike, keyof DisposableContainerLike>;
type TPrototype = Omit<
  SchedulerLike,
  keyof DisposableContainerLike | typeof SchedulerLike_inContinuation
>;

const DelegatingSchedulerMixin: Mixin1<TReturn, TPrototype> =
  /*@__PURE__*/ (() => {
    const DelegatingSchedulerMixin_delegate = Symbol(
      "DelegatingSchedulerMixin_delegate",
    );
    const DelegatingSchedulerMixin_scheduler = Symbol(
      "DelegatingSchedulerMixin_scheduler",
    );
    const DelegatingSchedulerMixin_scheduleCallback = Symbol(
      "DelegatingSchedulerMixin_scheduleCallback",
    );
    type TProperties = {
      [DelegatingSchedulerMixin_delegate]: SchedulerLike;
      [DelegatingSchedulerMixin_scheduler]: SchedulerLike;
      [DelegatingSchedulerMixin_scheduleCallback]: SchedulerContinuation;
      [SchedulerLike_inContinuation]: boolean;
    };

    return mix(
      function DelegatingSchedulerMixin(
        this: TPrototype & TProperties,
        delegate: SchedulerLike,
      ): TReturn {
        this[DelegatingSchedulerMixin_delegate] = delegate;

        this[DelegatingSchedulerMixin_scheduler] =
          (delegate as unknown as TProperties)[
            DelegatingSchedulerMixin_scheduler
          ] ?? delegate;

        const instance = this as unknown as SchedulerLike & TProperties;
        this[DelegatingSchedulerMixin_scheduleCallback] =
          function* DelegatingSchedulerMixinSchedulerCallback(
            this: SchedulerContinuation,
          ) {
            const enumerator = pipe(
              this(instance),
              Iterator.toSyncEnumerator(),
            );
            instance[SchedulerLike_inContinuation] = true;
            while (enumerator[SyncEnumeratorLike_moveNext]()) {
              const delay = enumerator[EnumeratorLike_current];

              instance[SchedulerLike_inContinuation] = false;
              yield delay;
              instance[SchedulerLike_inContinuation] = true;
            }
            instance[SchedulerLike_inContinuation] = false;

            Disposable.raiseIfDisposedWithError(enumerator);
          };

        return this;
      },
      props<TProperties>({
        [DelegatingSchedulerMixin_delegate]: none,
        [DelegatingSchedulerMixin_scheduler]: none,
        [DelegatingSchedulerMixin_scheduleCallback]: none,
        [SchedulerLike_inContinuation]: false,
      }),
      proto<TPrototype>({
        get [SchedulerLike_maxYieldInterval]() {
          unsafeCast<TProperties>(this);
          return this[DelegatingSchedulerMixin_scheduler][
            SchedulerLike_maxYieldInterval
          ];
        },

        get [ClockLike_now]() {
          unsafeCast<TProperties>(this);
          return this[DelegatingSchedulerMixin_scheduler][ClockLike_now];
        },

        get [SchedulerLike_shouldYield]() {
          unsafeCast<TProperties>(this);
          return this[DelegatingSchedulerMixin_scheduler][
            SchedulerLike_shouldYield
          ];
        },

        [SchedulerLike_requestYield](this: TProperties) {
          this[DelegatingSchedulerMixin_scheduler][
            SchedulerLike_requestYield
          ]();
        },

        [SchedulerLike_schedule](
          this: TProperties & SchedulerLike & DisposableLike,
          continuation: SchedulerContinuation,
        ): DisposableLike {
          return pipe(
            this[DelegatingSchedulerMixin_delegate][SchedulerLike_schedule](
              bind(
                this[DelegatingSchedulerMixin_scheduleCallback],
                continuation,
              ),
            ),
            Disposable.addToContainer(this),
          );
        },
      }),
    );
  })();

export default DelegatingSchedulerMixin;
