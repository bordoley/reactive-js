[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / FromObservableOperator

# Type Alias: FromObservableOperator()\<TComputationType, T\>

> **FromObservableOperator**\<`TComputationType`, `T`\>: \<`TObservable`\>(`iterable`) => `TObservable` *extends* [`PureDeferredObservableLike`](../interfaces/PureDeferredObservableLike.md) ? [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputationType`, `T`\> *extends* [`ComputationBaseOf`](ComputationBaseOf.md)\<`TComputationType`, `T`\> ? [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputationType`, `T`\> : [`MulticastComputationOf`](MulticastComputationOf.md)\<`TComputationType`, `T`\> & [`DisposableLike`](../../utils/interfaces/DisposableLike.md) : `TObservable` *extends* [`DeferredObservableWithSideEffectsLike`](../interfaces/DeferredObservableWithSideEffectsLike.md) ? [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\> *extends* [`ComputationBaseOf`](ComputationBaseOf.md)\<`TComputationType`, `T`\> ? [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\> : [`MulticastComputationOf`](MulticastComputationOf.md)\<`TComputationType`, `T`\> & [`DisposableLike`](../../utils/interfaces/DisposableLike.md) : `TObservable` *extends* [`MulticastObservableLike`](../interfaces/MulticastObservableLike.md) ? [`MulticastComputationOf`](MulticastComputationOf.md)\<`TComputationType`, `T`\> *extends* [`ComputationBaseOf`](ComputationBaseOf.md)\<`TComputationType`, `T`\> ? [`MulticastComputationOf`](MulticastComputationOf.md)\<`TComputationType`, `T`\> & [`DisposableLike`](../../utils/interfaces/DisposableLike.md) : [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputationType`, `T`\> : `never`

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](ComputationType.md)

• **T**

## Type Parameters

• **TObservable** *extends* [`ObservableLike`](../interfaces/ObservableLike.md)\<`T`\>

## Parameters

### iterable

`TObservable`

## Returns

`TObservable` *extends* [`PureDeferredObservableLike`](../interfaces/PureDeferredObservableLike.md) ? [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputationType`, `T`\> *extends* [`ComputationBaseOf`](ComputationBaseOf.md)\<`TComputationType`, `T`\> ? [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputationType`, `T`\> : [`MulticastComputationOf`](MulticastComputationOf.md)\<`TComputationType`, `T`\> & [`DisposableLike`](../../utils/interfaces/DisposableLike.md) : `TObservable` *extends* [`DeferredObservableWithSideEffectsLike`](../interfaces/DeferredObservableWithSideEffectsLike.md) ? [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\> *extends* [`ComputationBaseOf`](ComputationBaseOf.md)\<`TComputationType`, `T`\> ? [`DeferredComputationWithSideEffectsOf`](DeferredComputationWithSideEffectsOf.md)\<`TComputationType`, `T`\> : [`MulticastComputationOf`](MulticastComputationOf.md)\<`TComputationType`, `T`\> & [`DisposableLike`](../../utils/interfaces/DisposableLike.md) : `TObservable` *extends* [`MulticastObservableLike`](../interfaces/MulticastObservableLike.md) ? [`MulticastComputationOf`](MulticastComputationOf.md)\<`TComputationType`, `T`\> *extends* [`ComputationBaseOf`](ComputationBaseOf.md)\<`TComputationType`, `T`\> ? [`MulticastComputationOf`](MulticastComputationOf.md)\<`TComputationType`, `T`\> & [`DisposableLike`](../../utils/interfaces/DisposableLike.md) : [`PureDeferredComputationOf`](PureDeferredComputationOf.md)\<`TComputationType`, `T`\> : `never`
