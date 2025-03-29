[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / FromObservableOperator

# Type Alias: FromObservableOperator()\<TComputationType, T\>

> **FromObservableOperator**\<`TComputationType`, `T`\>: \<`TObservable`\>(`iterable`) => `TObservable` *extends* [`PureSynchronousObservableLike`](../interfaces/PureSynchronousObservableLike.md) ? `FromPureSynchronousOf`\<`TComputationType`, `T`\> : `TObservable` *extends* [`SynchronousObservableWithSideEffectsLike`](../interfaces/SynchronousObservableWithSideEffectsLike.md) ? `FromSynchronousWithSideEffectsOf`\<`TComputationType`, `T`\> : `TObservable` *extends* [`PureObservableLike`](../interfaces/PureObservableLike.md) ? `FromPureDeferredOf`\<`TComputationType`, `T`\> : `TObservable` *extends* [`ObservableWithSideEffectsLike`](../interfaces/ObservableWithSideEffectsLike.md) ? `FromDeferredWithSideEffectOf`\<`TComputationType`, `T`\> : `never`

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](ComputationType.md)

• **T**

## Type Parameters

• **TObservable** *extends* [`ObservableLike`](../interfaces/ObservableLike.md)\<`T`\>

## Parameters

### iterable

`TObservable`

## Returns

`TObservable` *extends* [`PureSynchronousObservableLike`](../interfaces/PureSynchronousObservableLike.md) ? `FromPureSynchronousOf`\<`TComputationType`, `T`\> : `TObservable` *extends* [`SynchronousObservableWithSideEffectsLike`](../interfaces/SynchronousObservableWithSideEffectsLike.md) ? `FromSynchronousWithSideEffectsOf`\<`TComputationType`, `T`\> : `TObservable` *extends* [`PureObservableLike`](../interfaces/PureObservableLike.md) ? `FromPureDeferredOf`\<`TComputationType`, `T`\> : `TObservable` *extends* [`ObservableWithSideEffectsLike`](../interfaces/ObservableWithSideEffectsLike.md) ? `FromDeferredWithSideEffectOf`\<`TComputationType`, `T`\> : `never`
