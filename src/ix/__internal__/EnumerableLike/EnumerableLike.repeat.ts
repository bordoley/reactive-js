import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { Repeat } from "../../../containers";
import ContainerLike__repeat from "../../../containers/__internal__/ContainerLike/ContainerLike.repeat";
import {
  Optional,
  Predicate,
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
import { addTo, dispose } from "../../../util/DisposableLike";
import DisposableLike__mixin from "../../../util/__internal__/DisposableLike/DisposableLike.mixin";
import { hasCurrent, move } from "../../EnumeratorLike";
import EnumerableLike__create from "./EnumerableLike.create";
import EnumerableLike__enumerate from "./EnumerableLike.enumerate";

const EnumerableLike__repeat: Repeat<EnumerableLike>["repeat"] =
  /*@__PURE__*/ (<T>() => {
    type TProperties = {
      count: number;
      enumerator: Optional<EnumeratorLike<T>>;
      readonly shouldRepeat: Predicate<number>;
      readonly src: EnumerableLike<T>;
    };

    const createRepeatEnumerator = createInstanceFactory(
      mix(
        include(DisposableLike__mixin),
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
          init(DisposableLike__mixin, instance);

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
                EnumerableLike__enumerate(),
                addTo(this),
              );
            }

            let { enumerator } = this;
            while (!move(enumerator)) {
              this.count++;

              try {
                if (this.shouldRepeat(this.count)) {
                  enumerator = pipe(
                    this.src,
                    EnumerableLike__enumerate(),
                    addTo(this),
                  );
                  this.enumerator = enumerator;
                } else {
                  break;
                }
              } catch (cause) {
                pipe(this, dispose({ cause }));
                break;
              }
            }
          },
          get [EnumeratorLike_current](): T {
            unsafeCast<TProperties>(this);
            return hasCurrent(this)
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

    return ContainerLike__repeat<EnumerableLike, T>((delegate, predicate) =>
      EnumerableLike__create(() => createRepeatEnumerator(delegate, predicate)),
    );
  })();

export default EnumerableLike__repeat;
