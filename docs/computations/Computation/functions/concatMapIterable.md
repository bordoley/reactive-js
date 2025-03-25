[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / concatMapIterable

# Function: concatMapIterable()

> **concatMapIterable**\<`TComputationType`\>(`m`): [`ConcatMapIterableOperator`](../interfaces/ConcatMapIterableOperator.md)\<`TComputationType`\>

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

## Parameters

### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<`TComputationType`, [`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputationType`, \{\}\> & [`SequentialComputationModule`](../../interfaces/SequentialComputationModule.md)\<`TComputationType`, \{\}\>, `"map"` \| `"genPure"` \| `"concatAll"` \| `"gen"`\>

## Returns

[`ConcatMapIterableOperator`](../interfaces/ConcatMapIterableOperator.md)\<`TComputationType`\>
