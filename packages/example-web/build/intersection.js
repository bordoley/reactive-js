(function (React, ReactDOMClient) {
  "use strict";

  const { MAX_SAFE_INTEGER, MAX_VALUE, MIN_SAFE_INTEGER, MIN_VALUE } = Number;
  const process =
    typeof global === "object"
      ? global.process
      : {
          env: {
            NODE_ENV: "development",
          },
        };
  const __DEV__ = process.env.NODE_ENV !== "production";

  const ReadonlyArray_getLength = arr => arr.length;

  /**
   * A function that always returns `false`.
   */
  const alwaysFalse = (..._args) => false;
  /**
   * A function that always returns `true`.
   */
  const alwaysTrue = (..._args) => true;
  // eslint-disable-next-line @typescript-eslint/ban-types
  const bind = (f, thiz) => f.bind(thiz);
  const bindMethod = (thiz, key) => bind(thiz[key], thiz);
  /**
   * The identity function.
   *
   * @returns `v`
   */
  const identity = v => v;
  /**
   * Returns a function that increments a number `x` by the value `incr`.
   */
  const incrementBy = incr => x => x + incr;
  // eslint-disable-next-line @typescript-eslint/ban-types
  const isFunction = f => typeof f === "function" || f instanceof Function;
  const isString = s => typeof s === "string" || s instanceof String;
  /**
   * Returns true if `option` is `none`.
   */
  const isNone = option => option === none;
  /**
   * Returns true if `option` is not `none`.
   */
  const isSome = option => option !== none;
  const isTrue = v => v;
  const newInstance = (Constructor, ...args) => new Constructor(...args);
  /**
   * An alias for undefined.
   */
  const none = undefined;
  const partial =
    (...args) =>
    f =>
    arg0 =>
      f(arg0, ...args);
  /**
   * Pipes `source` through a series of unary functions.
   */
  const pipeUnsafe = (source, ...operators) => {
    let acc = source;
    const length = ReadonlyArray_getLength(operators);
    for (let i = 0; i < length; i++) {
      acc = operators[i](acc);
    }
    return acc;
  };
  /**
   * Pipes `source` through a series of unary functions.
   */
  const pipe = pipeUnsafe;
  /**
   * Returns a `Factory` function that pipes the `source` through the provided operators.
   */
  const pipeLazy =
    (source, ...operators) =>
    () =>
      pipeUnsafe(source, ...operators);
  /**
   * Pipes `source` through a series of unary functions if it is not undefined.
   */
  const pipeSome = (source, ...operators) =>
    isSome(source) ? pipeUnsafe(source, ...operators) : none;
  const error = message => {
    const messageIsString = isString(message);
    const messageIsError = message instanceof Error;
    const errorMessage = messageIsString ? message : "";
    const errorCause =
      !messageIsString && !messageIsError && isSome(message)
        ? {
            cause: message,
          }
        : none;
    return messageIsError
      ? message
      : newInstance(Error, errorMessage, errorCause);
  };
  const raiseError = e => {
    throw e;
  };
  /**
   * Throws a javascript error using the provided message.
   */
  const raiseWithDebugMessage = message =>
    raiseError(error(__DEV__ ? message : none));
  /**
   * Returns a function that takes an arbitrary number of arguments and always returns `v`.
   */
  const returns =
    v =>
    (..._args) =>
      v;

  const { abs, floor, max, min, random } = Math;
  const clamp = (min, v, max) => (v > max ? max : v < min ? min : v);
  const clampPositiveInteger = v => floor(clamp(0, v, MAX_SAFE_INTEGER));

  const symbol = label => Symbol(__DEV__ ? label : none);

  /** @type {unique symbol} */
  const __BufferLike_capacity = /*@__PURE__*/ symbol("BufferLike_capacity");
  /** @type {unique symbol} */
  const __CollectionLike_count = /*@__PURE__*/ symbol("CollectionLike_count");
  /** @type {unique symbol} */
  const __DisposableLike_add = /*@__PURE__*/ symbol("DisposableLike_add");
  /** @type {unique symbol} */
  const __DisposableLike_dispose = /*@__PURE__*/ symbol(
    "DisposableLike_dispose",
  );
  /** @type {unique symbol} */
  const __DisposableLike_error = /*@__PURE__*/ symbol("DisposableLike_error");
  /** @type {unique symbol} */
  const __DisposableLike_isDisposed = /*@__PURE__*/ symbol(
    "DisposableLike_isDisposed",
  );
  /** @type {unique symbol} */
  const __EnumeratorLike_move = /*@__PURE__*/ symbol("EnumeratorLike_move");
  /** @type {unique symbol} */
  const __EnumeratorLike_current = /*@__PURE__*/ symbol(
    "EnumeratorLike_current",
  );
  /** @type {unique symbol} */
  const __EnumeratorLike_hasCurrent = /*@__PURE__*/ symbol(
    "EnumeratorLike_hasCurrent",
  );
  /** @type {unique symbol} */
  const __EventListenerLike_isErrorSafe = /*@__PURE__*/ symbol(
    "EventListenerLike_isErrorSafe",
  );
  /** @type {unique symbol} */
  const __EventListenerLike_notify = /*@__PURE__*/ symbol(
    "EventListenerLike_notify",
  );
  /** @type {unique symbol} */
  const __EventPublisherLike_listenerCount = /*@__PURE__*/ symbol(
    "EventPublisherLike_listenerCount",
  );
  /** @type {unique symbol} */
  const __EventSourceLike_addListener = /*@__PURE__*/ symbol(
    "EventSourceLike_addListener",
  );
  /** @type {unique symbol} */
  const __KeyedCollectionLike_get = /*@__PURE__*/ symbol(
    "KeyedCollectionLike_get",
  );
  /** @type {unique symbol} */
  const __QueueableLike_enqueue = /*@__PURE__*/ symbol("QueueableLike_enqueue");
  /** @type {unique symbol} */
  const __QueueableLike_backpressureStrategy = /*@__PURE__*/ symbol(
    "QueueableLike_backpressureStrategy",
  );
  /** @type {unique symbol} */
  const __ReplayableLike_buffer = /*@__PURE__*/ symbol("ReplayableLike_buffer");
  /** @type {unique symbol} */
  const __DelegatingLike_delegate = /*@__PURE__*/ symbol(
    "DelegatingLike_delegate",
  );
  /** @type {unique symbol} */
  const __MutableEnumeratorLike_reset = /*@__PURE__*/ symbol(
    "MutableEnumeratorLike_reset",
  );
  /** @type {unique symbol} */
  const __MutableKeyedCollectionLike_set = /*@__PURE__*/ symbol(
    "MutableKeyedCollectionLike_set",
  );
  /** @type {unique symbol} */
  const __QueueLike_head = /*@__PURE__*/ symbol("QueueLike_head");
  /** @type {unique symbol} */
  const __QueueLike_dequeue = /*@__PURE__*/ symbol("QueueLike_dequeue");
  /** @type {unique symbol} */
  const __StackLike_pop = /*@__PURE__*/ symbol("StackLike_pop");
  /** @type {unique symbol} */
  const __StackLike_head = /*@__PURE__*/ symbol("StackLike_head");
  /** @type {unique symbol} */
  const __DelegatingDisposableMixin_delegate = /*@__PURE__*/ symbol(
    "DelegatingDisposableMixin_delegate",
  );
  /** @type {unique symbol} */
  const __DisposableMixin_disposables = /*@__PURE__*/ symbol(
    "DisposableMixin_disposables",
  );
  /** @type {unique symbol} */
  const __IndexedQueueMixin_head = /*@__PURE__*/ symbol(
    "IndexedQueueMixin_head",
  );
  /** @type {unique symbol} */
  const __IndexedQueueMixin_tail = /*@__PURE__*/ symbol(
    "IndexedQueueMixin_tail",
  );
  /** @type {unique symbol} */
  const __IndexedQueueMixin_capacityMask = /*@__PURE__*/ symbol(
    "IndexedQueueMixin_capacityMask",
  );
  /** @type {unique symbol} */
  const __IndexedQueueMixin_values = /*@__PURE__*/ symbol(
    "IndexedQueueMixin_values",
  );
  /** @type {unique symbol} */
  const __LiftedLike_source = /*@__PURE__*/ symbol("LiftedLike_source");
  /** @type {unique symbol} */
  const __LiftedLike_operators = /*@__PURE__*/ symbol("LiftedLike_operators");
  /** @type {unique symbol} */
  const __ForEachLike_effect = /*@__PURE__*/ symbol("ForEachLike_effect");
  /** @type {unique symbol} */
  const __MappingLike_selector = /*@__PURE__*/ symbol("MappingLike_selector");
  /** @type {unique symbol} */
  const __PredicatedLike_predicate = /*@__PURE__*/ symbol(
    "PredicatedLike_predicate",
  );
  /** @type {unique symbol} */
  const __CreateEventSource_createDelegate = /*@__PURE__*/ symbol(
    "CreateEventSource_createDelegate",
  );
  /** @type {unique symbol} */
  const __Enumerator_private_current = /*@__PURE__*/ symbol(
    "Enumerator_private_current",
  );
  /** @type {unique symbol} */
  const __EventPublisher_listeners = /*@__PURE__*/ symbol(
    "EventPublisher_listeners",
  );
  /** @type {unique symbol} */
  const __IteratorEnumerator_iterator = /*@__PURE__*/ symbol(
    "IteratorEnumerator_iterator",
  );
  /** @type {unique symbol} */
  const __Object_init = /*@__PURE__*/ symbol("Object_init");
  /** @type {unique symbol} */
  const __Object_properties = /*@__PURE__*/ symbol("Object_properties");
  /** @type {unique symbol} */
  const __Object_prototype = /*@__PURE__*/ symbol("Object_prototype");

  const { create: create$2, getOwnPropertyDescriptors, prototype } = Object;

  function initUnsafe(mixin, instance, ...args) {
    const f = mixin[__Object_init];
    f(instance, ...args);
  }
  const init = initUnsafe;
  const include = (...mixins) => {
    const length = ReadonlyArray_getLength(mixins);
    if (length == 1) {
      return mixins[0];
    } else {
      let propertyDescriptions = {};
      let prototypeDescriptions = {};
      for (let i = 0; i < length; i++) {
        const mixin = mixins[i];
        propertyDescriptions = {
          ...propertyDescriptions,
          ...getOwnPropertyDescriptors(mixin[__Object_properties]),
        };
        prototypeDescriptions = {
          ...prototypeDescriptions,
          ...getOwnPropertyDescriptors(mixin[__Object_prototype]),
        };
      }
      return {
        [__Object_properties]: create$2(prototype, propertyDescriptions),
        [__Object_prototype]: create$2(prototype, prototypeDescriptions),
      };
    }
  };
  const mix = (
    initOrParent,
    propertiesOrInit,
    prototypeOrParent,
    nothingOrPrototype,
  ) => {
    if (isFunction(initOrParent)) {
      return {
        [__Object_init]: initOrParent,
        [__Object_properties]: propertiesOrInit ?? {},
        [__Object_prototype]: prototypeOrParent ?? {},
      };
    } else {
      const base = include(initOrParent, {
        [__Object_properties]: prototypeOrParent ?? {},
        [__Object_prototype]: nothingOrPrototype ?? {},
      });
      return {
        ...base,
        [__Object_init]: propertiesOrInit,
      };
    }
  };
  const createInstanceFactory = mixin => {
    const propertyDescription = getOwnPropertyDescriptors(
      mixin[__Object_properties],
    );
    const prototypeDescription = __DEV__
      ? {
          ...getOwnPropertyDescriptors(mixin[__Object_prototype]),
          constructor: {
            configurable: true,
            enumerable: false,
            value: mixin[__Object_init],
            writable: true,
          },
        }
      : getOwnPropertyDescriptors(mixin[__Object_prototype]);
    const prototype$1 = create$2(prototype, prototypeDescription);
    return (...args) => {
      const instance = create$2(prototype$1, propertyDescription);
      initUnsafe(mixin, instance, ...args);
      return instance;
    };
  };
  const props = o => {
    return o;
  };

  const Disposable_onError = teardown => disposable => {
    disposable[__DisposableLike_add](e => {
      if (isSome(e)) {
        teardown(e);
      }
    });
    return disposable;
  };

  const doDispose = (instance, disposable) => {
    const error = instance[__DisposableLike_error];
    if (isFunction(disposable)) {
      try {
        disposable(error);
      } catch (_) {
        /* Proactively catch Errors thrown in teardown logic. Teardown functions
         * shouldn't throw, so this is to prevent unexpected Errors.
         */
      }
    } else {
      disposable[__DisposableLike_dispose](error);
    }
  };
  const Disposable_mixin = /*@__PURE__*/ mix(
    function DisposableMixin(instance) {
      instance[__DisposableMixin_disposables] = newInstance(Set);
      return instance;
    },
    props({
      [__DisposableLike_error]: none,
      [__DisposableLike_isDisposed]: false,
      [__DisposableMixin_disposables]: none,
    }),
    {
      [__DisposableLike_dispose](error) {
        if (!this[__DisposableLike_isDisposed]) {
          this[__DisposableLike_error] = error;
          this[__DisposableLike_isDisposed] = true;
          const disposables = this[__DisposableMixin_disposables];
          for (const disposable of disposables) {
            disposables.delete(disposable);
            doDispose(this, disposable);
          }
        }
      },
      [__DisposableLike_add](disposable) {
        const disposables = this[__DisposableMixin_disposables];
        if (this === disposable) {
          return;
        } else if (this[__DisposableLike_isDisposed]) {
          doDispose(this, disposable);
        } else if (!disposables.has(disposable)) {
          disposables.add(disposable);
          if (!isFunction(disposable)) {
            disposable[__DisposableLike_add](_ => {
              disposables.delete(disposable);
            });
          }
        }
      },
    },
  );

  const Queue_indexedQueueMixin = /*@__PURE__*/ (() => {
    const copyArray = (src, head, tail, size) => {
      const capacity = src.length;
      const dest = newInstance(Array, size);
      let k = 0;
      let bound = head >= tail ? capacity : tail;
      for (let i = head; i < bound; i++) {
        dest[k++] = src[i];
      }
      bound = head >= tail ? tail : 0;
      for (let i = 0; i < bound; i++) {
        dest[k++] = src[i];
      }
      return dest;
    };
    const grow = instance => {
      const head = instance[__IndexedQueueMixin_head];
      const tail = instance[__IndexedQueueMixin_tail];
      if (tail !== head && tail !== 0) {
        return;
      }
      const values = instance[__IndexedQueueMixin_values] ?? [];
      const capacity = values.length;
      const capacityMask = instance[__IndexedQueueMixin_capacityMask];
      const count = instance[__CollectionLike_count];
      if (head === 0 || (tail === 0 && head < capacity >> 2)) {
        values.length <<= 1;
        instance[__IndexedQueueMixin_tail] = count + head;
      } else {
        const newCapacity = capacity << 1;
        const newList = copyArray(values, head, tail, newCapacity);
        instance[__IndexedQueueMixin_values] = newList;
        instance[__IndexedQueueMixin_head] = 0;
        instance[__IndexedQueueMixin_tail] = count;
      }
      instance[__IndexedQueueMixin_capacityMask] = (capacityMask << 1) | 1;
    };
    const shrink = instance => {
      const values = instance[__IndexedQueueMixin_values] ?? [];
      const capacity = values.length;
      const count = instance[__CollectionLike_count];
      if (count >= capacity >> 2 || capacity <= 32) {
        return;
      }
      const head = instance[__IndexedQueueMixin_head];
      const tail = instance[__IndexedQueueMixin_tail];
      const newCapacity = capacity >> 1;
      if (tail >= head && tail < newCapacity) {
        values.length >>= 1;
      } else {
        const newList = copyArray(values, head, tail, newCapacity);
        instance[__IndexedQueueMixin_values] = newList;
        instance[__IndexedQueueMixin_head] = 0;
        instance[__IndexedQueueMixin_tail] = count;
      }
      instance[__IndexedQueueMixin_capacityMask] = newCapacity - 1;
    };
    return pipe(
      mix(
        function IndexedQueueMixin(instance, capacity, backpressureStrategy) {
          instance[__QueueableLike_backpressureStrategy] = backpressureStrategy;
          instance[__BufferLike_capacity] = clampPositiveInteger(capacity);
          return instance;
        },
        props({
          [__CollectionLike_count]: 0,
          [__QueueableLike_backpressureStrategy]: "overflow",
          [__BufferLike_capacity]: MAX_SAFE_INTEGER,
          [__IndexedQueueMixin_head]: 0,
          [__IndexedQueueMixin_tail]: 0,
          [__IndexedQueueMixin_capacityMask]: 0,
          [__IndexedQueueMixin_values]: none,
        }),
        {
          get [__QueueLike_head]() {
            const head = this[__IndexedQueueMixin_head];
            const values = this[__IndexedQueueMixin_values] ?? [];
            return head === this[__IndexedQueueMixin_tail]
              ? none
              : values[head];
          },
          get [__StackLike_head]() {
            const head = this[__IndexedQueueMixin_head];
            const tail = this[__IndexedQueueMixin_tail];
            const values = this[__IndexedQueueMixin_values] ?? [];
            const index = tail > 0 ? tail - 1 : values.length - 1;
            return head === tail ? none : values[index];
          },
          [__QueueLike_dequeue]() {
            const tail = this[__IndexedQueueMixin_tail];
            const values = this[__IndexedQueueMixin_values] ?? [];
            let head = this[__IndexedQueueMixin_head];
            const item = head === tail ? none : values[head];
            if (head !== tail) {
              values[head] = none;
              head = (head + 1) & this[__IndexedQueueMixin_capacityMask];
              this[__IndexedQueueMixin_head] = head;
              this[__CollectionLike_count]--;
            }
            shrink(this);
            return item;
          },
          [__StackLike_pop]() {
            const head = this[__IndexedQueueMixin_head];
            const values = this[__IndexedQueueMixin_values] ?? [];
            const capacity = values.length;
            let tail = this[__IndexedQueueMixin_tail];
            const item =
              head === tail
                ? none
                : ((tail =
                    (tail - 1 + capacity) &
                    this[__IndexedQueueMixin_capacityMask]),
                  (this[__IndexedQueueMixin_tail] = tail),
                  this[__CollectionLike_count]--,
                  values[tail]);
            values[tail] = none;
            shrink(this);
            return item;
          },
          [__KeyedCollectionLike_get](index) {
            const count = this[__CollectionLike_count];
            const capacity = this[__IndexedQueueMixin_values]?.length ?? 0;
            const head = this[__IndexedQueueMixin_head];
            const values = this[__IndexedQueueMixin_values] ?? [];
            const headOffsetIndex = index + head;
            const tailOffsetIndex = headOffsetIndex - capacity;
            const computedIndex =
              index < 0 || index >= count
                ? raiseWithDebugMessage("index out of range")
                : headOffsetIndex < capacity
                ? headOffsetIndex
                : tailOffsetIndex;
            return values[computedIndex];
          },
          [__MutableKeyedCollectionLike_set](index, value) {
            const count = this[__CollectionLike_count];
            const capacity = this[__IndexedQueueMixin_values]?.length ?? 0;
            const head = this[__IndexedQueueMixin_head];
            const values = this[__IndexedQueueMixin_values] ?? [];
            const headOffsetIndex = index + head;
            const tailOffsetIndex = headOffsetIndex - capacity;
            const computedIndex =
              index < 0 || index >= count
                ? raiseWithDebugMessage("index out of range")
                : headOffsetIndex < capacity
                ? headOffsetIndex
                : tailOffsetIndex;
            const oldValue = values[computedIndex];
            values[computedIndex] = value;
            return oldValue;
          },
          [__QueueableLike_enqueue](item) {
            const backpressureStrategy =
              this[__QueueableLike_backpressureStrategy];
            let count = this[__CollectionLike_count];
            const capacity = this[__BufferLike_capacity];
            if (backpressureStrategy === "drop-latest" && count >= capacity) {
              return false;
            } else if (
              backpressureStrategy === "drop-oldest" &&
              count >= capacity
            ) {
              // We want to pop off the oldest value first, before enqueueing
              // to avoid unintentionally growing the queue.
              this[__QueueLike_dequeue]();
            } else if (backpressureStrategy === "throw" && count >= capacity) {
              // FIXME: Seems like we should have a known exception (symbol), that
              // a caller could safely catch in this case and then make its own decisions.
              // For instance using drop-latest is going to break priority queue,
              // so it would expect a known exception if it was configured for drop-latest
              // and handle it accordingly.
              raiseWithDebugMessage(
                "attempting to enque a value to a queue that is full",
              );
            }
            const values =
              this[__IndexedQueueMixin_values] ??
              ((this[__IndexedQueueMixin_capacityMask] = 31),
              (this[__IndexedQueueMixin_values] = newInstance(Array, 32)),
              this[__IndexedQueueMixin_values]);
            const capacityMask = this[__IndexedQueueMixin_capacityMask];
            let tail = this[__IndexedQueueMixin_tail];
            values[tail] = item;
            this[__CollectionLike_count]++;
            tail = (tail + 1) & capacityMask;
            this[__IndexedQueueMixin_tail] = tail;
            grow(this);
            return this[__CollectionLike_count] < this[__BufferLike_capacity];
          },
        },
      ),
      returns,
    );
  })();

  const Delegating_mixin = /*@__PURE__*/ (() => {
    return pipe(
      mix(
        function DelegatingDisposableMixin(instance, delegate) {
          instance[__DelegatingLike_delegate] = delegate;
          return instance;
        },
        props({
          [__DelegatingLike_delegate]: none,
        }),
        {},
      ),
      returns,
    );
  })();

  const Disposable_onDisposed = teardown => disposable => {
    disposable[__DisposableLike_add](teardown);
    return disposable;
  };

  const Disposable_delegatingMixin = /*@__PURE__*/ (() => {
    return mix(
      function DelegatingDisposableMixin(instance, delegate) {
        instance[__DelegatingDisposableMixin_delegate] = delegate;
        pipe(
          delegate,
          Disposable_onDisposed(_ => {
            instance[__DisposableLike_isDisposed] = true;
          }),
        );
        return instance;
      },
      props({
        [__DelegatingDisposableMixin_delegate]: none,
        [__DisposableLike_isDisposed]: false,
      }),
      {
        get [__DisposableLike_error]() {
          return this[__DelegatingDisposableMixin_delegate][
            __DisposableLike_error
          ];
        },
        [__DisposableLike_add](disposable) {
          this[__DelegatingDisposableMixin_delegate][__DisposableLike_add](
            disposable,
          );
        },
        [__DisposableLike_dispose](error) {
          this[__DelegatingDisposableMixin_delegate][__DisposableLike_dispose](
            error,
          );
        },
      },
    );
  })();

  const Container_pick =
    map =>
    (...keys) =>
      map(value => {
        let result = value;
        for (const key of keys) {
          result = result[key];
        }
        return result;
      });

  const Queue_createIndexedQueue = /*@__PURE__*/ (() =>
    createInstanceFactory(Queue_indexedQueueMixin()))();

  const MutableEnumerator_mixin = /*@__PURE__*/ (() => {
    return pipe(
      mix(
        function EnumeratorMixin(instance) {
          return instance;
        },
        props({
          [__Enumerator_private_current]: none,
          [__EnumeratorLike_hasCurrent]: false,
        }),
        {
          get [__EnumeratorLike_current]() {
            return this[__EnumeratorLike_hasCurrent]
              ? this[__Enumerator_private_current]
              : raiseWithDebugMessage("Enumerator does not have current value");
          },
          set [__EnumeratorLike_current](v) {
            this[__Enumerator_private_current] = v;
            this[__EnumeratorLike_hasCurrent] = true;
          },
          [__MutableEnumeratorLike_reset]() {
            this[__Enumerator_private_current] = none;
            this[__EnumeratorLike_hasCurrent] = false;
          },
        },
      ),
      returns,
    );
  })();

  const Container_ignoreElements = keep => () => keep(alwaysFalse);

  const Iterator_enumerate = /*@__PURE__*/ (() => {
    const createEnumerator = createInstanceFactory(
      mix(
        include(MutableEnumerator_mixin()),
        function IteratorEnumerator(instance, iterator) {
          init(MutableEnumerator_mixin(), instance);
          instance[__IteratorEnumerator_iterator] = iterator;
          return instance;
        },
        props({
          [__IteratorEnumerator_iterator]: none,
        }),
        {
          [__EnumeratorLike_move]() {
            this[__MutableEnumeratorLike_reset]();
            const next = this[__IteratorEnumerator_iterator].next();
            if (!next.done) {
              this[__EnumeratorLike_current] = next.value;
            }
            return this[__EnumeratorLike_hasCurrent];
          },
        },
      ),
    );
    return returns(createEnumerator);
  })();

  const Iterable_enumerate = /*@__PURE__*/ (() =>
    returns(iterable =>
      pipe(iterable[Symbol.iterator](), Iterator_enumerate()),
    ))();

  const EventPublisher_createWithPredicateAndSelector = /*@__PURE__*/ (() => {
    const createPublisherInstance = createInstanceFactory(
      mix(
        include(Disposable_mixin),
        function EventPublisher(instance, predicate, selector, replay) {
          init(Disposable_mixin, instance);
          instance[__EventPublisher_listeners] = newInstance(Set);
          instance[__PredicatedLike_predicate] = predicate;
          instance[__MappingLike_selector] = selector;
          // FIXME: use the mixin instead and return this from a getter;
          instance[__ReplayableLike_buffer] = Queue_createIndexedQueue(
            replay,
            "drop-oldest",
          );
          pipe(
            instance,
            Disposable_onDisposed(e => {
              const enumerator = pipe(
                instance[__EventPublisher_listeners],
                Iterable_enumerate(),
              );
              while (enumerator[__EnumeratorLike_move]()) {
                const listener = enumerator[__EnumeratorLike_current];
                listener[__DisposableLike_dispose](e);
              }
            }),
          );
          return instance;
        },
        props({
          [__EventPublisher_listeners]: none,
          [__ReplayableLike_buffer]: none,
          [__PredicatedLike_predicate]: none,
          [__MappingLike_selector]: none,
        }),
        {
          [__EventListenerLike_isErrorSafe]: true,
          get [__EventPublisherLike_listenerCount]() {
            return this[__EventPublisher_listeners].size;
          },
          [__EventListenerLike_notify](next) {
            if (this[__DisposableLike_isDisposed]) {
              return;
            }
            if (!this[__PredicatedLike_predicate](next)) {
              return;
            }
            const result = this[__MappingLike_selector](next);
            this[__ReplayableLike_buffer][__QueueableLike_enqueue](result);
            for (const listener of this[__EventPublisher_listeners]) {
              try {
                listener[__EventListenerLike_notify](result);
              } catch (e) {
                listener[__DisposableLike_dispose](error(e));
              }
            }
          },
          [__EventSourceLike_addListener](listener) {
            if (!this[__DisposableLike_isDisposed]) {
              const listeners = this[__EventPublisher_listeners];
              listeners.add(listener);
              pipe(
                listener,
                Disposable_onDisposed(_ => {
                  listeners.delete(listener);
                }),
              );
            }
            const buffer = this[__ReplayableLike_buffer];
            const count = buffer[__CollectionLike_count];
            try {
              for (let i = 0; i < count; i++) {
                const next = buffer[__KeyedCollectionLike_get](i);
                listener[__EventListenerLike_notify](next);
              }
            } catch (e) {
              listener[__DisposableLike_dispose](error(e));
            }
          },
        },
      ),
    );
    return (predicate, selector, options) => {
      const replay = clampPositiveInteger(options?.replay ?? 0);
      return createPublisherInstance(predicate, selector, replay);
    };
  })();

  const EventPublisher_create = options =>
    EventPublisher_createWithPredicateAndSelector(
      alwaysTrue,
      identity,
      options,
    );

  const EventPublisher_createRefCounted = /*@__PURE__*/ (() => {
    const createRefCountedEventPublisherInstance = createInstanceFactory(
      mix(
        include(Disposable_delegatingMixin, Delegating_mixin()),
        function RefCountedEventPublisher(instance, delegate) {
          init(Disposable_delegatingMixin, instance, delegate);
          init(Delegating_mixin(), instance, delegate);
          return instance;
        },
        props({}),
        {
          [__EventListenerLike_isErrorSafe]: true,
          get [__ReplayableLike_buffer]() {
            return this[__DelegatingLike_delegate][__ReplayableLike_buffer];
          },
          get [__EventPublisherLike_listenerCount]() {
            return this[__DelegatingLike_delegate][
              __EventPublisherLike_listenerCount
            ];
          },
          [__EventListenerLike_notify](next) {
            this[__DelegatingLike_delegate][__EventListenerLike_notify](next);
          },
          [__EventSourceLike_addListener](listener) {
            this[__DelegatingLike_delegate][__EventSourceLike_addListener](
              listener,
            );
            pipe(
              listener,
              Disposable_onDisposed(() => {
                if (this[__EventPublisherLike_listenerCount] === 0) {
                  this[__DisposableLike_dispose]();
                }
              }),
            );
          },
        },
      ),
    );
    return options => {
      const delegate = EventPublisher_create(options);
      return createRefCountedEventPublisherInstance(delegate);
    };
  })();

  const _empty$1 = {
    [__BufferLike_capacity]: 0,
    [__CollectionLike_count]: 0,
    [__KeyedCollectionLike_get](_) {
      return raiseWithDebugMessage("buffer is empty");
    },
  };
  const IndexedBufferCollection_empty = options => {
    const { [__BufferLike_capacity]: capacity = 0 } = options ?? {};
    return capacity === 0
      ? _empty$1
      : {
          [__BufferLike_capacity]: capacity,
          [__CollectionLike_count]: 0,
          [__KeyedCollectionLike_get]: _empty$1[__KeyedCollectionLike_get],
        };
  };

  const IndexedBufferCollection_createWithMutableDelegate = /*@__PURE__*/ (() =>
    createInstanceFactory(
      mix(
        include(Delegating_mixin()),
        function MutableDelegatingIndexedBufferCollection(instance, options) {
          init(
            Delegating_mixin(),
            instance,
            IndexedBufferCollection_empty(options),
          );
          return instance;
        },
        props({}),
        {
          get [__BufferLike_capacity]() {
            return this[__DelegatingLike_delegate][__BufferLike_capacity];
          },
          get [__CollectionLike_count]() {
            return this[__DelegatingLike_delegate][__CollectionLike_count];
          },
          [__KeyedCollectionLike_get](index) {
            return this[__DelegatingLike_delegate][__KeyedCollectionLike_get](
              index,
            );
          },
        },
      ),
    ))();

  const EventSource_create = /*@__PURE__*/ (() => {
    return createInstanceFactory(
      mix(
        include(Delegating_mixin()),
        function CreateEventSource(instance, setup, options = {}) {
          init(Delegating_mixin(), instance, none);
          instance[__ReplayableLike_buffer] =
            IndexedBufferCollection_createWithMutableDelegate({
              [__BufferLike_capacity]: options.replay,
            });
          instance[__CreateEventSource_createDelegate] = () => {
            const delegate = pipe(
              EventPublisher_createRefCounted(options),
              Disposable_onDisposed(() => {
                instance[__DelegatingLike_delegate] = none;
              }),
            );
            instance[__DelegatingLike_delegate] = delegate;
            try {
              setup(delegate);
            } catch (e) {
              delegate[__DisposableLike_dispose](error(e));
            }
            const buffer = delegate[__ReplayableLike_buffer];
            instance[__ReplayableLike_buffer][__DelegatingLike_delegate] =
              buffer;
            return delegate;
          };
          return instance;
        },
        props({
          [__CreateEventSource_createDelegate]: none,
          [__ReplayableLike_buffer]: none,
        }),
        {
          [__EventSourceLike_addListener](listener) {
            const delegate =
              this[__DelegatingLike_delegate] ??
              this[__CreateEventSource_createDelegate]();
            delegate[__EventSourceLike_addListener](listener);
          },
        },
      ),
    );
  })();

  const onDisposed = Disposable_onDisposed;
  const onError = Disposable_onError;

  const EventListener_create = /*@__PURE__*/ (() => {
    return createInstanceFactory(
      mix(
        include(Disposable_mixin),
        function EventListener(instance, notify) {
          init(Disposable_mixin, instance);
          instance[__EventListenerLike_notify] = notify;
          return instance;
        },
        props({
          [__EventListenerLike_notify]: none,
        }),
        {
          [__EventListenerLike_isErrorSafe]: false,
        },
      ),
    );
  })();

  const create$1 = EventListener_create;

  const createRefCounted = EventPublisher_createRefCounted;

  const _empty = {
    [__EventSourceLike_addListener]: function (listener) {
      listener[__DisposableLike_dispose]();
    },
    [__ReplayableLike_buffer]: /*@__PURE__*/ IndexedBufferCollection_empty(),
  };
  const EventSource_empty = () => _empty;

  class LiftedEventSource {
    [__LiftedLike_source];
    [__LiftedLike_operators];
    constructor(source, operators) {
      this[__LiftedLike_source] = source;
      this[__LiftedLike_operators] = operators;
    }
    get [__ReplayableLike_buffer]() {
      // Can only lift when the replay is 0
      return IndexedBufferCollection_empty();
    }
    [__EventSourceLike_addListener](listener) {
      pipeUnsafe(
        listener,
        ...this[__LiftedLike_operators],
        bindMethod(this[__LiftedLike_source], __EventSourceLike_addListener),
      );
    }
  }
  const EventSource_lift = operator => source => {
    const sourceSource = source[__LiftedLike_source] ?? source;
    const allFunctions = [operator, ...(source[__LiftedLike_operators] ?? [])];
    return newInstance(LiftedEventSource, sourceSource, allFunctions);
  };

  const EventSource_forEach = /*@__PURE__*/ (() => {
    const createForEachEventListener = (() =>
      createInstanceFactory(
        mix(
          include(Disposable_delegatingMixin, Delegating_mixin()),
          function ForEachEventListener(instance, delegate, effect) {
            init(Delegating_mixin(), instance, delegate);
            init(Disposable_delegatingMixin, instance, delegate);
            instance[__ForEachLike_effect] = effect;
            return instance;
          },
          props({
            [__ForEachLike_effect]: none,
          }),
          {
            [__EventListenerLike_isErrorSafe]: false,
            [__EventListenerLike_notify](next) {
              this[__ForEachLike_effect](next);
              this[__DelegatingLike_delegate][__EventListenerLike_notify](next);
            },
          },
        ),
      ))();
    return effect =>
      pipe(createForEachEventListener, partial(effect), EventSource_lift);
  })();

  const EventSource_keep = /*@__PURE__*/ (() => {
    const createKeepEventListener = (() =>
      createInstanceFactory(
        mix(
          include(Disposable_delegatingMixin, Delegating_mixin()),
          function KeepEventListener(instance, delegate, predicate) {
            init(Delegating_mixin(), instance, delegate);
            init(Disposable_delegatingMixin, instance, delegate);
            instance[__PredicatedLike_predicate] = predicate;
            return instance;
          },
          props({
            [__PredicatedLike_predicate]: none,
          }),
          {
            [__EventListenerLike_isErrorSafe]: false,
            [__EventListenerLike_notify](next) {
              if (this[__PredicatedLike_predicate](next)) {
                this[__DelegatingLike_delegate][__EventListenerLike_notify](
                  next,
                );
              }
            },
          },
        ),
      ))();
    return predicate =>
      pipe(createKeepEventListener, partial(predicate), EventSource_lift);
  })();

  const EventSource_ignoreElements =
    /*@__PURE__*/ Container_ignoreElements(EventSource_keep);

  const EventSource_map = /*@__PURE__*/ (() => {
    const createMapEventListener = (() =>
      createInstanceFactory(
        mix(
          include(Disposable_delegatingMixin, Delegating_mixin()),
          function MapEventListener(instance, delegate, selector) {
            init(Delegating_mixin(), instance, delegate);
            init(Disposable_delegatingMixin, instance, delegate);
            instance[__MappingLike_selector] = selector;
            return instance;
          },
          props({
            [__MappingLike_selector]: none,
          }),
          {
            [__EventListenerLike_isErrorSafe]: false,
            [__EventListenerLike_notify](next) {
              const mapped = this[__MappingLike_selector](next);
              this[__DelegatingLike_delegate][__EventListenerLike_notify](
                mapped,
              );
            },
          },
        ),
      ))();
    return selector =>
      pipe(createMapEventListener, partial(selector), EventSource_lift);
  })();

  const EventSource_pick = /*@__PURE__*/ Container_pick(EventSource_map);

  /**
   * @category Constructor
   */
  const create = EventSource_create;
  const empty = EventSource_empty;
  const forEach = EventSource_forEach;
  const ignoreElements = EventSource_ignoreElements;
  const keep = EventSource_keep;
  const pick = EventSource_pick;

  const intersectionWith = /*@__PURE__*/ (() => {
    const intersectionObservers = newInstance(Map);
    const eventPublishers = newInstance(Map);
    return (root = document, options) =>
      child =>
        create(listener => {
          const publisher =
            eventPublishers.get(root)?.get(child) ??
            (() => {
              const publisher = createRefCounted();
              const parentMap =
                eventPublishers.get(root) ??
                (() => {
                  const parentMap = newInstance(Map);
                  eventPublishers.set(root, parentMap);
                  return parentMap;
                })();
              parentMap.set(child, publisher);
              const intersectionObserver =
                intersectionObservers.get(root) ??
                (() => {
                  const cb = entries => {
                    for (const entry of entries) {
                      const { target } = entry;
                      const listener = eventPublishers.get(root)?.get(target);
                      if (isNone(listener)) {
                        continue;
                      }
                      listener[__EventListenerLike_notify](entry);
                    }
                  };
                  const intersectionObserver = newInstance(
                    IntersectionObserver,
                    cb,
                    { root },
                  );
                  intersectionObservers.set(root, intersectionObserver);
                  return intersectionObserver;
                })();
              intersectionObserver.observe(child);
              return pipe(
                publisher,
                onDisposed(() => {
                  const intersectionObserver = intersectionObservers.get(root);
                  intersectionObserver?.unobserve(child);
                  const childToPublisherMap = eventPublishers.get(root);
                  childToPublisherMap?.delete(child);
                  if ((childToPublisherMap?.size ?? 0) > 0) {
                    return;
                  }
                  eventPublishers.delete(root);
                  intersectionObserver?.disconnect();
                  intersectionObservers.delete(root);
                }),
              );
            })();
          publisher[__EventSourceLike_addListener](listener);
        }, options);
  })();

  const useEventSource = (eventSourceOrFactory, depsOrNone) => {
    const [state, updateState] = React.useState(none);
    const [error, updateError] = React.useState(none);
    const eventSource = isFunction(eventSourceOrFactory)
      ? React.useMemo(eventSourceOrFactory, depsOrNone)
      : eventSourceOrFactory;
    React.useEffect(() => {
      const listener = pipe(
        create$1(v => updateState(_ => v)),
        onError(updateError),
      );
      eventSource[__EventSourceLike_addListener](listener);
      return bindMethod(listener, __DisposableLike_dispose);
    }, [eventSource, updateState, updateError]);
    return isSome(error) ? raiseError(error) : state;
  };

  const IntersectionApp = () => {
    const [count, updateCount] = React.useState(10);
    const [endOfPageRef, setEndOfPage] = React.useState();
    useEventSource(() => {
      var _a;
      return (_a = pipeSome(
        endOfPageRef,
        intersectionWith(document, { replay: 1 }),
        pick("isIntersecting"),
        keep(isTrue),
        forEach(pipeLazy(incrementBy(10), updateCount)),
        ignoreElements(),
      )) !== null && _a !== void 0
        ? _a
        : empty();
    }, [endOfPageRef]);
    return React.createElement(
      "div",
      {
        style: {
          height: "100vh",
          overflowY: "scroll",
        },
      },
      Array(count)
        .fill(none)
        .map((_, i) =>
          React.createElement(
            "div",
            {
              key: i,
              style: {
                background: "#FFF",
                border: "1px solid #666",
                height: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
            },
            `Item ${i}`,
          ),
        ),
      React.createElement("div", {
        ref: setEndOfPage,
        style: {
          width: "1px",
          height: "1px",
        },
      }),
    );
  };
  const rootElement = document.getElementById("root");
  ReactDOMClient.createRoot(rootElement).render(
    React.createElement(IntersectionApp, null),
  );
})(React, ReactDOM);
