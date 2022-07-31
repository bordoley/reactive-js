export const catchError: CatchError<RunnableLike<unknown>>["catchError"] =
  /*@__PURE__*/ decorateMap(
    class CatchErrorSink<T> extends AbstractDelegatingRunnableSink<T, T> {},
    decorateWithCatchErrorNotify(),
    decorateNotifyWithAssertions,
    createCatchErrorOperator(liftT),
  );

export const catchErrorT: CatchError<RunnableLike<unknown>> = {
  catchError,
};

export const decodeWithCharset: DecodeWithCharset<
  RunnableLike<unknown>
>["decodeWithCharset"] = /*@__PURE__*/ decorateMap(
  class DecodeWithCharsetSink extends AbstractDelegatingRunnableSink<
    ArrayBuffer,
    string
  > {
    constructor(
      delegate: ReactiveSinkLike<string>,
      readonly textDecoder: TextDecoder,
    ) {
      super(delegate);
    }
  },
  decorateWithDecodeWithCharsetNotify(),
  decorateNotifyWithAssertions,
  createDecodeWithCharsetOperator({
    ...liftT,
    ...fromArrayT,
  }),
);

export const decodeWithCharsetT: DecodeWithCharset<RunnableLike<unknown>> = {
  decodeWithCharset,
};

export const everySatisfy: EverySatisfy<RunnableLike<unknown>>["everySatisfy"] =
  /*@__PURE__*/ decorateMap(
    class EverySatisfySink<T> extends AbstractDelegatingRunnableSink<
      T,
      boolean
    > {
      constructor(
        delegate: ReactiveSinkLike<boolean>,
        readonly predicate: Predicate<T>,
      ) {
        super(delegate);
      }
    },
    decorateWithEverySatisfyNotify<RunnableLike<unknown>>(),
    decorateNotifyWithAssertions,
    createEverySatisfyOperator({ ...fromArrayT, ...liftT }),
  );

export const everySatisfyT: EverySatisfy<RunnableLike<unknown>> = {
  everySatisfy,
};

export const generate: Generate<RunnableLike<unknown>>["generate"] = <T>(
  generator: Updater<T>,
  initialValue: Factory<T>,
) => {
  const run = (sink: ReactiveSinkLike<T>) => {
    let acc = initialValue();
    while (!isDisposed(sink)) {
      acc = generator(acc);
      sink.notify(acc);
    }
  };
  return createRunnable(run);
};

export const generateT: Generate<RunnableLike<unknown>> = {
  generate,
};

export const onSink = /*@__PURE__*/ createOnSink(createT);

export const reduce: Reduce<RunnableLike<unknown>>["reduce"] =
  /*@__PURE__*/ decorateMap(
    class ReducerSink<T, TAcc> extends AbstractDelegatingRunnableSink<T, TAcc> {
      constructor(
        delegate: ReactiveSinkLike<TAcc>,
        readonly reducer: Reducer<T, TAcc>,
        public acc: TAcc,
      ) {
        super(delegate);
      }
    },
    decorateWithReduceNotify<RunnableLike<unknown>>(),
    decorateNotifyWithAssertions,
    createReduceOperator({ ...fromArrayT, ...liftT }),
  );

export const reduceT: Reduce<RunnableLike<unknown>> = {
  reduce,
};

export const someSatisfy: SomeSatisfy<RunnableLike<unknown>>["someSatisfy"] =
  /*@__PURE__*/ decorateMap(
    class SomeSatisfySink<T> extends AbstractDelegatingRunnableSink<
      T,
      boolean
    > {
      constructor(
        delegate: ReactiveSinkLike<boolean>,
        readonly predicate: Predicate<T>,
      ) {
        super(delegate);
      }
    },
    decorateWithSomeSatisfyNotify<RunnableLike<unknown>>(),
    decorateNotifyWithAssertions,
    createSomeSatisfyOperator({ ...fromArrayT, ...liftT }),
  );

export const someSatisfyT: SomeSatisfy<RunnableLike<unknown>> = {
  someSatisfy,
};

export const toRunnable: ToRunnable<RunnableLike<unknown>>["toRunnable"] = () =>
  identity;

export const toRunnableT: ToRunnable<RunnableLike<unknown>> = {
  toRunnable,
};

export const TContainerOf: RunnableLike<unknown> = undefined as any;
