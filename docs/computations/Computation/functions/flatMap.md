[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / flatMap

# Function: flatMap()

> **flatMap**\<`TComputation`, `TFlattenKey`\>(`m`, `key`): [`ConcatMapOperator`](../interfaces/ConcatMapOperator.md)\<`TComputation`\>

## Type Parameters

• **TComputation** *extends* [`Computation`](../../type-aliases/Computation.md)

• **TFlattenKey** *extends* `string` \| `number` \| `symbol`

## Parameters

### m

`Pick`\<[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md)\<`TComputation`\>, `"map"`\> & \{ readonly \[key in string \| number \| symbol\]: \{ (): HigherOrderComputationOperator\<TComputation, PureSynchronousComputationLike, PureSynchronousComputationOf\<TComputation, T\>, T\>; (options: \{ innerType: TInnerType \}): HigherOrderComputationOperator\<TComputation, TInnerType, ComputationOfInnerType\<TComputation, TInnerType, T\>, T\> \} \}

### key

`TFlattenKey`

## Returns

[`ConcatMapOperator`](../interfaces/ConcatMapOperator.md)\<`TComputation`\>
