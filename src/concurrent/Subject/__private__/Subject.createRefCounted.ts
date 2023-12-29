import {
  createInstanceFactory,
  include,
  init,
  mix,
  props,
  unsafeCast,
} from "../../../__internal__/mixins.js";
import {
  ObservableLike_observe,
  ObserverLike,
  SubjectLike,
  SubjectLike_observerCount,
} from "../../../concurrent.js";
import {
  EventListenerLike_isErrorSafe,
  SinkLike_notify,
} from "../../../events.js";
import { pipe } from "../../../functions.js";
import { DisposableLike_dispose } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import DelegatingDisposableMixin, {
  DelegatingDisposableLike,
  DelegatingDisposableLike_delegate,
} from "../../../utils/__mixins__/DelegatingDisposableMixin.js";
import type * as Subject from "../../Subject.js";
import DelegatingReplayObservableMixin from "../../__mixins__/DelegatingReplayObservableMixin.js";
import Subject_create from "./Subject.create.js";

const Subject_createRefCounted: Subject.Signature["createRefCounted"] =
  /*@__PURE__*/ (<T>() => {
    const createRefCountedSubjectInstance = createInstanceFactory(
      mix(
        include(
          DelegatingDisposableMixin<SubjectLike<T>>(),
          DelegatingReplayObservableMixin(),
        ),
        function RefCountedSubject(
          instance: Pick<
            SubjectLike<T>,
            | typeof EventListenerLike_isErrorSafe
            | typeof SinkLike_notify
            | typeof ObservableLike_observe
            | typeof SubjectLike_observerCount
          >,
          delegate: SubjectLike<T>,
        ): SubjectLike<T> {
          init(DelegatingDisposableMixin<SubjectLike<T>>(), instance, delegate);
          init(DelegatingReplayObservableMixin<T>(), instance, delegate);

          return instance;
        },
        props(),
        {
          get [SubjectLike_observerCount](): number {
            unsafeCast<DelegatingDisposableLike<SubjectLike<T>>>(this);
            return this[DelegatingDisposableLike_delegate][
              SubjectLike_observerCount
            ];
          },

          [EventListenerLike_isErrorSafe]: true as const,

          [SinkLike_notify](
            this: DelegatingDisposableLike<SubjectLike<T>>,
            next: T,
          ) {
            this[DelegatingDisposableLike_delegate][SinkLike_notify](next);
          },

          [ObservableLike_observe](
            this: DelegatingDisposableLike<SubjectLike<T>> & SubjectLike<T>,
            observer: ObserverLike<T>,
          ) {
            this[DelegatingDisposableLike_delegate][ObservableLike_observe](
              observer,
            );

            pipe(
              observer,
              Disposable.onDisposed(() => {
                if (this[SubjectLike_observerCount] === 0) {
                  this[DisposableLike_dispose]();
                }
              }),
            );
          },
        },
      ),
    );

    return (options?: { readonly replay?: number }) => {
      const delegate = Subject_create<T>(options);
      return createRefCountedSubjectInstance(delegate);
    };
  })();

export default Subject_createRefCounted;
