import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { Repeat } from "../../../containers";
import Container_repeat from "../../../containers/__internal__/Container/Container.repeat";
import {
  Optional,
  Predicate,
  error,
  isNone,
  isSome,
  none,
  pipe,
  raiseWithDebugMessage,
  unsafeCast,
} from "../../../functions";
import {
  EnumerableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  SourceLike_move,
} from "../../../ix";
import Disposable_addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable_mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import Enumerator_hasCurrent from "../Enumerator/Enumerator.hasCurrent";
import Enumerator_move from "../Enumerator/Enumerator.move";
import Enumerable_create from "./Enumerable.create";
import Enumerable_enumerate from "./Enumerable.enumerate";

const Enumerable_repeat: Repeat<EnumerableLike>["repeat"] = /*@__PURE__*/ (<
  T,
>() => {
  const RepeatEnumerator_count = Symbol("RepeatEnumerator_count");
  const RepeatEnumerator_enumerator = Symbol("RepeatEnumerator_enumerator");
  const RepeatEnumerator_shouldRepeat = Symbol("RepeatEnumerator_shouldRepeat");
  const RepeatEnumerator_src = Symbol("RepeatEnumerator_src");

  type TProperties = {
    [RepeatEnumerator_count]: number;
    [RepeatEnumerator_enumerator]: Optional<EnumeratorLike<T>>;
    readonly [RepeatEnumerator_shouldRepeat]: Predicate<number>;
    readonly [RepeatEnumerator_src]: EnumerableLike<T>;
  };

  const createRepeatEnumerator = createInstanceFactory(
    mix(
      include(Disposable_mixin),
      function RepeatEnumerator(
        instance: Pick<
          EnumeratorLike<T>,
          | typeof SourceLike_move
          | typeof EnumeratorLike_current
          | typeof EnumeratorLike_hasCurrent
        > &
          Mutable<TProperties>,
        src: EnumerableLike<T>,
        shouldRepeat: Predicate<number>,
      ): EnumeratorLike<T> {
        init(Disposable_mixin, instance);

        instance[RepeatEnumerator_src] = src;
        instance[RepeatEnumerator_shouldRepeat] = shouldRepeat;

        return instance;
      },
      props<TProperties>({
        [RepeatEnumerator_count]: 0,
        [RepeatEnumerator_enumerator]: none,
        [RepeatEnumerator_shouldRepeat]: none,
        [RepeatEnumerator_src]: none,
      }),
      {
        [SourceLike_move](this: TProperties & EnumeratorLike<T>) {
          if (isNone(this[RepeatEnumerator_enumerator])) {
            this[RepeatEnumerator_enumerator] = pipe(
              this[RepeatEnumerator_src],
              Enumerable_enumerate(),
              Disposable_addTo(this),
            );
          }

          let { [RepeatEnumerator_enumerator]: enumerator } = this;
          while (isSome(enumerator) && !Enumerator_move(enumerator)) {
            this[RepeatEnumerator_count]++;

            try {
              if (
                this[RepeatEnumerator_shouldRepeat](
                  this[RepeatEnumerator_count],
                )
              ) {
                enumerator = pipe(
                  this[RepeatEnumerator_src],
                  Enumerable_enumerate(),
                  Disposable_addTo(this),
                );
                this[RepeatEnumerator_enumerator] = enumerator;
              } else {
                break;
              }
            } catch (e) {
              pipe(this, Disposable_dispose(error(e)));
              break;
            }
          }
        },
        get [EnumeratorLike_current](): T {
          unsafeCast<TProperties>(this);
          return Enumerator_hasCurrent(this)
            ? (this[RepeatEnumerator_enumerator] as EnumeratorLike<T>)[
                EnumeratorLike_current
              ]
            : raiseWithDebugMessage("Enumerator does not have current value");
        },
        get [EnumeratorLike_hasCurrent]() {
          unsafeCast<TProperties>(this);
          return (
            this[RepeatEnumerator_enumerator]?.[EnumeratorLike_hasCurrent] ??
            false
          );
        },
      },
    ),
  );

  return Container_repeat<EnumerableLike, T>((delegate, predicate) =>
    Enumerable_create(() => createRepeatEnumerator(delegate, predicate)),
  );
})();

export default Enumerable_repeat;
