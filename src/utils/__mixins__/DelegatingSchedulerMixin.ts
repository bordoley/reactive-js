import {
  Mixin1,
  mix,
  props,
  proto,
  unsafeCast,
} from "../../__internal__/mixins.js";
import { Method1, SideEffect1, bind, none, pipe } from "../../functions.js";
import {
  ContinuationContextLike,
  DisposableContainerLike,
  DisposableLike,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
} from "../../utils.js";
import * as Disposable from "../Disposable.js";

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
      [DelegatingSchedulerMixin_scheduleCallback]: Method1<
        SideEffect1<ContinuationContextLike>,
        ContinuationContextLike
      >;
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

        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const instance = this;
        this[DelegatingSchedulerMixin_scheduleCallback] =
          function ObserverMixinSchedulerCallback(
            this: SideEffect1<ContinuationContextLike>,
            ctx: ContinuationContextLike,
          ) {
            instance[SchedulerLike_inContinuation] = true;
            this(ctx);
            instance[SchedulerLike_inContinuation] = false;
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

        get [SchedulerLike_now]() {
          unsafeCast<TProperties>(this);
          return this[DelegatingSchedulerMixin_scheduler][SchedulerLike_now];
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
          continuation: SideEffect1<ContinuationContextLike>,
          options?: {
            readonly delay?: number;
          },
        ): DisposableLike {
          return pipe(
            this[DelegatingSchedulerMixin_delegate][SchedulerLike_schedule](
              bind(
                this[DelegatingSchedulerMixin_scheduleCallback],
                continuation,
              ),
              options,
            ),
            Disposable.addToContainer(this),
          );
        },
      }),
    );
  })();

export default DelegatingSchedulerMixin;
