[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Observable](../README.md) / forkMerge

# Function: forkMerge()

## Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`fst`, `snd`, ...`tail`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), [`PureDeferredComputationLike`](../../interfaces/PureDeferredComputationLike.md), `TIn`, `TOut`\>

### Type Parameters

• **TIn**

• **TOut**

### Parameters

#### fst

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\>, [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TOut`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TOut`\>\>

#### snd

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\>, [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TOut`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TOut`\>\>

#### tail

...[`Function1`](../../../functions/type-aliases/Function1.md)\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\>, [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TOut`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TOut`\>\>[]

### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), [`PureDeferredComputationLike`](../../interfaces/PureDeferredComputationLike.md), `TIn`, `TOut`\>

## Call Signature

> **forkMerge**\<`TIn`, `TOut`, `TInnerType`\>(`fst`, `snd`, ...`tail`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TInnerType`, `TIn`, `TOut`\>

### Type Parameters

• **TIn**

• **TOut**

• **TInnerType** *extends* [`DeferredComputationWithSideEffectsLike`](../../interfaces/DeferredComputationWithSideEffectsLike.md)

### Parameters

#### fst

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\>, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TInnerType`, `TOut`\>\>

#### snd

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\>, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TInnerType`, `TOut`\>\>

#### tail

...readonly \[[`Function1`](../../../functions/type-aliases/Function1.md)\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\>, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TInnerType`, `TOut`\>\>, \{ `innerType`: `TInnerType`; \}\]

### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TInnerType`, `TIn`, `TOut`\>

## Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`fst`, `snd`, ...`tail`): [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TIn`, `TOut`\>

### Type Parameters

• **TIn**

• **TOut**

### Parameters

#### fst

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TOut`\>\>

#### snd

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TOut`\>\>

#### tail

...readonly \[[`Function1`](../../../functions/type-aliases/Function1.md)\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TOut`\>\>, \{ `innerType`: [`MulticastComputationLike`](../../interfaces/MulticastComputationLike.md); \}\]

### Returns

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TIn`, `TOut`\>
