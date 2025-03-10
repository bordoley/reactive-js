[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / concatMapIterable

# Function: concatMapIterable()

> **concatMapIterable**\<`TComputation`\>(`m`): [`FlatMapIterableOperator`](../interfaces/FlatMapIterableOperator.md)\<`TComputation`\>

## Type Parameters

• **TComputation** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

## Parameters

### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<`TComputation`, [`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputation`\> & [`DeferredComputationModule`](../../interfaces/DeferredComputationModule.md)\<`TComputation`\>, `"map"` \| `"fromIterable"` \| `"concatAll"`\>

## Returns

[`FlatMapIterableOperator`](../interfaces/FlatMapIterableOperator.md)\<`TComputation`\>
