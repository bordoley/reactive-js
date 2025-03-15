[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Observable](../README.md) / forkMerge

# Function: forkMerge()

## Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`fst`, `snd`, ...`tail`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TIn`\>, [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TOut`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TOut`\>\>

### Type Parameters

• **TIn**

• **TOut**

### Parameters

#### fst

[`Function1`](../../../functions/type-aliases/Function1.md)\<`NonNullable`\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\>\>, [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TOut`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TOut`\>\>

#### snd

[`Function1`](../../../functions/type-aliases/Function1.md)\<`NonNullable`\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\>\>, [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TOut`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TOut`\>\>

#### tail

...[`Function1`](../../../functions/type-aliases/Function1.md)\<`NonNullable`\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\>\>, [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TOut`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TOut`\>\>[]

### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TIn`\>, [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TOut`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TOut`\>\>

## Call Signature

> **forkMerge**\<`TIn`, `TOut`, `TInnerLike`\>(`fst`, `snd`, ...`tail`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TInnerLike`, `TIn`, `TOut`\>

### Type Parameters

• **TIn**

• **TOut**

• **TInnerLike** *extends* [`DeferredComputationWithSideEffectsLike`](../../interfaces/DeferredComputationWithSideEffectsLike.md)

### Parameters

#### fst

[`Function1`](../../../functions/type-aliases/Function1.md)\<`NonNullable`\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\>\>, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TInnerLike`, `TOut`\>\>

#### snd

[`Function1`](../../../functions/type-aliases/Function1.md)\<`NonNullable`\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\>\>, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TInnerLike`, `TOut`\>\>

#### tail

...readonly \[[`Function1`](../../../functions/type-aliases/Function1.md)\<`NonNullable`\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\>\>, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TInnerLike`, `TOut`\>\>, \{ `innerType`: `TInnerLike`; \}\]

### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TInnerLike`, `TIn`, `TOut`\>

## Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`fst`, `snd`, ...`tail`): [`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TIn`, `TOut`\>

### Type Parameters

• **TIn**

• **TOut**

### Parameters

#### fst

[`Function1`](../../../functions/type-aliases/Function1.md)\<`NonNullable`\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\>\>, `NonNullable`\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TOut`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TOut`\>\>\>

#### snd

[`Function1`](../../../functions/type-aliases/Function1.md)\<`NonNullable`\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\>\>, `NonNullable`\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TOut`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TOut`\>\>\>

#### tail

...readonly \[[`Function1`](../../../functions/type-aliases/Function1.md)\<`NonNullable`\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\>\>, `NonNullable`\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TOut`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TOut`\>\>\>, \{ `innerType`: [`MulticastComputationLike`](../../interfaces/MulticastComputationLike.md); \}\]

### Returns

[`StatelessComputationOperator`](../../type-aliases/StatelessComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TIn`, `TOut`\>
