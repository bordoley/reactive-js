[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / ForkMerge

# Interface: ForkMerge()\<TComputationType\>

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](../type-aliases/ComputationType.md)

> **ForkMerge**\<`TIn`, `TOut`\>(`fst`, `snd`, ...`tail`): [`ForkMergeDefaultOperator`](../type-aliases/ForkMergeDefaultOperator.md)\<`TComputationType`, `TIn`, `TOut`\>

## Type Parameters

• **TIn**

• **TOut**

## Parameters

### fst

[`ForkMergeDefaultInnerOperator`](../type-aliases/ForkMergeDefaultInnerOperator.md)\<`TComputationType`, `TIn`, `TOut`\>

### snd

[`ForkMergeDefaultInnerOperator`](../type-aliases/ForkMergeDefaultInnerOperator.md)\<`TComputationType`, `TIn`, `TOut`\>

### tail

...[`ForkMergeDefaultInnerOperator`](../type-aliases/ForkMergeDefaultInnerOperator.md)\<`TComputationType`, `TIn`, `TOut`\>[]

## Returns

[`ForkMergeDefaultOperator`](../type-aliases/ForkMergeDefaultOperator.md)\<`TComputationType`, `TIn`, `TOut`\>

> **ForkMerge**\<`TIn`, `TOut`, `TInnerLike`\>(`fst`, `snd`, ...`tail`): [`HigherOrderComputationOperator`](../type-aliases/HigherOrderComputationOperator.md)\<`TComputationType`, `TInnerLike`, `TIn`, `TOut`\>

## Type Parameters

• **TIn**

• **TOut**

• **TInnerLike** *extends* [`DeferredComputationWithSideEffectsLike`](DeferredComputationWithSideEffectsLike.md)

## Parameters

### fst

[`Function1`](../../functions/type-aliases/Function1.md)\<[`MulticastComputationOf`](../type-aliases/MulticastComputationOf.md)\<`TComputationType`, `TIn`\>, [`HigherOrderInnerComputationOf`](../type-aliases/HigherOrderInnerComputationOf.md)\<`TComputationType`, `TInnerLike`, `TOut`\>\>

### snd

[`Function1`](../../functions/type-aliases/Function1.md)\<[`MulticastComputationOf`](../type-aliases/MulticastComputationOf.md)\<`TComputationType`, `TIn`\>, [`HigherOrderInnerComputationOf`](../type-aliases/HigherOrderInnerComputationOf.md)\<`TComputationType`, `TInnerLike`, `TOut`\>\>

### tail

...readonly \[[`Function1`](../../functions/type-aliases/Function1.md)\<[`MulticastComputationOf`](../type-aliases/MulticastComputationOf.md)\<`TComputationType`, `TIn`\>, [`HigherOrderInnerComputationOf`](../type-aliases/HigherOrderInnerComputationOf.md)\<`TComputationType`, `TInnerLike`, `TOut`\>\>, \{ `innerType`: `TInnerLike`; \}\]

## Returns

[`HigherOrderComputationOperator`](../type-aliases/HigherOrderComputationOperator.md)\<`TComputationType`, `TInnerLike`, `TIn`, `TOut`\>

> **ForkMerge**\<`TIn`, `TOut`\>(`fst`, `snd`, ...`tail`): [`StatelessComputationOperator`](../type-aliases/StatelessComputationOperator.md)\<`TComputationType`, `TIn`, `TOut`\>

## Type Parameters

• **TIn**

• **TOut**

## Parameters

### fst

[`Function1`](../../functions/type-aliases/Function1.md)\<[`MulticastComputationOf`](../type-aliases/MulticastComputationOf.md)\<`TComputationType`, `TIn`\>, [`MulticastComputationOf`](../type-aliases/MulticastComputationOf.md)\<`TComputationType`, `TOut`\>\>

### snd

[`Function1`](../../functions/type-aliases/Function1.md)\<[`MulticastComputationOf`](../type-aliases/MulticastComputationOf.md)\<`TComputationType`, `TIn`\>, [`MulticastComputationOf`](../type-aliases/MulticastComputationOf.md)\<`TComputationType`, `TOut`\>\>

### tail

...readonly \[[`Function1`](../../functions/type-aliases/Function1.md)\<[`MulticastComputationOf`](../type-aliases/MulticastComputationOf.md)\<`TComputationType`, `TIn`\>, [`MulticastComputationOf`](../type-aliases/MulticastComputationOf.md)\<`TComputationType`, `TOut`\>\>, \{ `innerType`: [`MulticastComputationLike`](MulticastComputationLike.md); \}\]

## Returns

[`StatelessComputationOperator`](../type-aliases/StatelessComputationOperator.md)\<`TComputationType`, `TIn`, `TOut`\>
