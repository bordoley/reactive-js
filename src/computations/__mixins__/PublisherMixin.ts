import {
  Set_add,
  Set_delete,
  Set_has,
  Set_size,
} from "../../__internal__/constants.js";
import {
  Mixin1,
  include,
  init,
  mix,
  props,
  proto,
} from "../../__internal__/mixins.js";
import {
  ComputationLike_isDeferred,
  ComputationLike_isSynchronous,
  PublisherLike,
  SourceLike_subscribe,
} from "../../computations.js";
import {
  Method,
  Optional,
  error,
  isNone,
  isSome,
  newInstance,
  none,
  pipe,
  returns,
} from "../../functions.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import DisposableMixin from "../../utils/__mixins__/DisposableMixin.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  ListenerLike,
  ListenerLike_notify,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import * as Iterable from "../Iterable.js";

type TPrototype<T> = Omit<
  PublisherLike<T>,
  keyof DisposableLike | typeof SinkLike_isCompleted
>;

type TOptions = Optional<{ readonly autoDispose?: boolean }>;

const PublisherMixin: <T>() => Mixin1<
  PublisherLike<T>,
  TOptions,
  TPrototype<T>
> = /*@__PURE__*/ (<T>() => {
  const Publisher_listeners = Symbol("Publisher_listeners");
  const Publisher_onSinkDisposed = Symbol("Publisher_onSinkDisposed");

  type TProperties = {
    [SinkLike_isCompleted]: boolean;
    [Publisher_listeners]: Optional<Set<ListenerLike<T>> | ListenerLike<T>>;
    [Publisher_onSinkDisposed]: Method<ListenerLike<T>>;
  };

  function onPublisherDisposed(this: TProperties, e: Optional<Error>) {
    const maybeListeners = this[Publisher_listeners];
    const listeners =
      maybeListeners instanceof Set
        ? maybeListeners
        : isSome(maybeListeners)
          ? [maybeListeners]
          : [];

    if (isSome(e)) {
      for (const listener of listeners) {
        listener[DisposableLike_dispose](e);
      }
    }

    this[Publisher_listeners] = none;
    this[SinkLike_isCompleted] = true;
  }

  return returns(
    mix(
      include(DisposableMixin),
      function PublisherMixin(
        this: TPrototype<T> & TProperties,
        options: TOptions,
      ): PublisherLike<T> {
        init(DisposableMixin, this);

        const autoDispose = options?.autoDispose ?? false;

        pipe(this, DisposableContainer.onDisposed(onPublisherDisposed));

        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const instance = this;
        this[Publisher_onSinkDisposed] = function onSinkDisposed(
          this: ListenerLike<T>,
        ) {
          const maybeListeners = instance[Publisher_listeners];

          if (maybeListeners instanceof Set) {
            maybeListeners[Set_delete](this);
          } else if (maybeListeners === this) {
            instance[Publisher_listeners] = none;
          }

          if (maybeListeners instanceof Set && maybeListeners[Set_size] == 1) {
            instance[Publisher_listeners] =
              Iterable.first<ListenerLike<T>>()(maybeListeners);
          }

          if (autoDispose && isNone(instance[Publisher_listeners])) {
            instance[DisposableLike_dispose]();
          }
        };

        return this;
      },
      props<TProperties>({
        [SinkLike_isCompleted]: false,
        [Publisher_listeners]: none,
        [Publisher_onSinkDisposed]: none,
      }),
      proto<TPrototype<T>>({
        [ComputationLike_isDeferred]: false as const,
        [ComputationLike_isSynchronous]: false as const,

        [ListenerLike_notify](this: TProperties & PublisherLike<T>, next: T) {
          if (this[SinkLike_isCompleted]) {
            return;
          }

          const maybeListeners = this[Publisher_listeners];
          const listeners =
            maybeListeners instanceof Set
              ? maybeListeners
              : isSome(maybeListeners)
                ? [maybeListeners]
                : [];

          for (const listener of listeners) {
            try {
              listener[ListenerLike_notify](next);
            } catch (e) {
              listener[DisposableLike_dispose](error(e));
            }
          }
        },

        [SinkLike_complete](this: TProperties & PublisherLike<T>) {
          const isCompleted = this[SinkLike_isCompleted];
          this[SinkLike_isCompleted] = true;

          if (isCompleted) {
            return;
          }

          const maybeListeners = this[Publisher_listeners];
          const listeners =
            maybeListeners instanceof Set
              ? maybeListeners
              : isSome(maybeListeners)
                ? [maybeListeners]
                : [];

          for (const listener of listeners) {
            listener[DisposableLike_dispose]();
          }

          this[DisposableLike_dispose]();
        },

        [SourceLike_subscribe](
          this: TProperties & PublisherLike<T>,
          listener: ListenerLike<T>,
        ) {
          const maybeListeners = this[Publisher_listeners];

          if (
            this[DisposableLike_isDisposed] ||
            listener === this ||
            (maybeListeners instanceof Set &&
              maybeListeners[Set_has](listener)) ||
            maybeListeners === listener
          ) {
            return;
          }

          if (maybeListeners instanceof Set) {
            maybeListeners[Set_add](listener);
          } else if (isSome(maybeListeners)) {
            const listeners = (this[Publisher_listeners] =
              newInstance<Set<ListenerLike<T>>>(Set));
            listeners[Set_add](maybeListeners);
            listeners[Set_add](listener);
          } else {
            this[Publisher_listeners] = listener;
          }

          pipe(
            listener,
            DisposableContainer.onDisposed(this[Publisher_onSinkDisposed]),
          );
        },
      }),
    ),
  );
})();

export default PublisherMixin;
