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

export const onSink = /*@__PURE__*/ createOnSink(createT);

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
