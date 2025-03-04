[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / forkMerge

# Function: forkMerge()

> **forkMerge**\<`TIn`, `TOut`, `TInnerType`\>(`fst`, `snd`, ...`tail`): \<`TComputationIn`\>(`observable`) => `TComputationIn` *extends* [`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TIn`\> ? `TInnerType` *extends* [`PureDeferredComputationLike`](../../../computations/interfaces/PureDeferredComputationLike.md) ? [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TOut`\> : [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TOut`\> : [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TOut`\>

## Type Parameters

• **TIn**

• **TOut**

• **TInnerType** *extends* [`PureDeferredComputationLike`](../../../computations/interfaces/PureDeferredComputationLike.md) \| [`DeferredComputationWithSideEffectsLike`](../../../computations/interfaces/DeferredComputationWithSideEffectsLike.md) = [`PureDeferredComputationLike`](../../../computations/interfaces/PureDeferredComputationLike.md)

## Parameters

### fst

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\>, [`ComputationOfInnerType`](../../../computations/type-aliases/ComputationOfInnerType.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TInnerType`, `TOut`\>\>

### snd

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\>, [`ComputationOfInnerType`](../../../computations/type-aliases/ComputationOfInnerType.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TInnerType`, `TOut`\>\>

### tail

readonly \[[`Function1`](../../../functions/type-aliases/Function1.md)\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\>, [`ComputationOfInnerType`](../../../computations/type-aliases/ComputationOfInnerType.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TInnerType`, `TOut`\>\>, \{ `innerType`: `TInnerType`; \}\] | readonly [`Function1`](../../../functions/type-aliases/Function1.md)\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\>, [`ComputationOfInnerType`](../../../computations/type-aliases/ComputationOfInnerType.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TInnerType`, `TOut`\>\>[]

## Returns

`Function`

### Type Parameters

• **TComputationIn** *extends* [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\>

### Parameters

#### observable

`TComputationIn`

### Returns

`TComputationIn` *extends* [`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TIn`\> ? `TInnerType` *extends* [`PureDeferredComputationLike`](../../../computations/interfaces/PureDeferredComputationLike.md) ? [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TOut`\> : [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TOut`\> : [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TOut`\>
