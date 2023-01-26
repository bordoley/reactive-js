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
  none,
  pipe,
  raise,
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
  type TProperties = {
    count: number;
    enumerator: Optional<EnumeratorLike<T>>;
    readonly shouldRepeat: Predicate<number>;
    readonly src: EnumerableLike<T>;
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

        instance.src = src;
        instance.shouldRepeat = shouldRepeat;

        return instance;
      },
      props<TProperties>({
        count: 0,
        enumerator: none,
        shouldRepeat: none,
        src: none,
      }),
      {
        [SourceLike_move](this: TProperties & EnumeratorLike<T>) {
          if (isNone(this.enumerator)) {
            this.enumerator = pipe(
              this.src,
              Enumerable_enumerate(),
              Disposable_addTo(this),
            );
          }

          let { enumerator } = this;
          while (!Enumerator_move(enumerator)) {
            this.count++;

            try {
              if (this.shouldRepeat(this.count)) {
                enumerator = pipe(
                  this.src,
                  Enumerable_enumerate(),
                  Disposable_addTo(this),
                );
                this.enumerator = enumerator;
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
            ? this.enumerator?.[EnumeratorLike_current] ?? raise()
            : raise();
        },
        get [EnumeratorLike_hasCurrent]() {
          unsafeCast<TProperties>(this);
          return this.enumerator?.[EnumeratorLike_hasCurrent] ?? false;
        },
      },
    ),
  );

  return Container_repeat<EnumerableLike, T>((delegate, predicate) =>
    Enumerable_create(() => createRepeatEnumerator(delegate, predicate)),
  );
})();

export default Enumerable_repeat;
