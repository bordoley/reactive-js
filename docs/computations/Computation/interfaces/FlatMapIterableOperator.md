[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / FlatMapIterableOperator

# Interface: FlatMapIterableOperator()\<TComputation\>

## Type Parameters

• **TComputation** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

> **FlatMapIterableOperator**\<`TA`, `TB`\>(`selector`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<`TComputation`, [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), `TA`, `TB`\>

## Type Parameters

• **TA**

• **TB**

## Parameters

### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`TB`\>\>

## Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<`TComputation`, [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), `TA`, `TB`\>

> **FlatMapIterableOperator**\<`TA`, `TB`\>(`selector`, `options`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<`TComputation`, [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), `TA`, `TB`\>

## Type Parameters

• **TA**

• **TB**

## Parameters

### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureIterableLike`](../../interfaces/PureIterableLike.md)\<`TB`\>\>

### options

#### innerType

[`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md)

## Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<`TComputation`, [`PureSynchronousComputationLike`](../../interfaces/PureSynchronousComputationLike.md), `TA`, `TB`\>

> **FlatMapIterableOperator**\<`TA`, `TB`\>(`selector`, `options`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<`TComputation`, [`SynchronousComputationWithSideEffectsLike`](../../interfaces/SynchronousComputationWithSideEffectsLike.md), `TA`, `TB`\>

## Type Parameters

• **TA**

• **TB**

## Parameters

### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`IterableLike`](../../interfaces/IterableLike.md)\<`TB`\>\>

### options

#### innerType

[`SynchronousComputationWithSideEffectsLike`](../../interfaces/SynchronousComputationWithSideEffectsLike.md)

## Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<`TComputation`, [`SynchronousComputationWithSideEffectsLike`](../../interfaces/SynchronousComputationWithSideEffectsLike.md), `TA`, `TB`\>
