[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / ObservableComputationFor

# Type Alias: ObservableComputationFor\<Type\>

> **ObservableComputationFor**\<`Type`\>: `Type` *extends* [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md) ? `MulticastObservableComputation` : `Type` *extends* [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md) ? `PureSynchronousObservableComputation` : `Type` *extends* [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md) ? `SynchronousObservableWithSideEffectsComputation` : `Type` *extends* [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md) ? `SynchronousObservableComputation` : `Type` *extends* [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md) ? `PuredDeferredObservableComputation` : `Type` *extends* [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md) ? `DeferredObservableWithSideEffectsComputation` : `Type` *extends* [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md) ? `DeferredObservableComputation` : `ObservableComputation`

## Type Parameters

• **Type** *extends* [`ObservableLike`](../../interfaces/ObservableLike.md)
