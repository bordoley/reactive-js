[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / concatMap

# Function: concatMap()

> **concatMap**\<`TComputationType`\>(`m`): [`ConcatMapOperator`](../interfaces/ConcatMapOperator.md)\<`TComputationType`\>

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

## Parameters

### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<`TComputationType`, [`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputationType`\> & [`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md)\<`TComputationType`\>, `"map"` \| `"concatAll"`\>

## Returns

[`ConcatMapOperator`](../interfaces/ConcatMapOperator.md)\<`TComputationType`\>
