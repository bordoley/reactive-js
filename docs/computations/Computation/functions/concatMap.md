[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / concatMap

# Function: concatMap()

> **concatMap**\<`TComputation`\>(`m`): [`FlatMapOperator`](../interfaces/FlatMapOperator.md)\<`TComputation`\>

## Type Parameters

• **TComputation** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

## Parameters

### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<`TComputation`, [`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputation`\> & [`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md)\<`TComputation`\>, `"map"` \| `"concatAll"`\>

## Returns

[`FlatMapOperator`](../interfaces/FlatMapOperator.md)\<`TComputation`\>
