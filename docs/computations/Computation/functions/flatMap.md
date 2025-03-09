[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / flatMap

# Function: flatMap()

> **flatMap**\<`TComputation`, `TFlattenKey`\>(`m`, `key`): [`FlatMapOperator`](../interfaces/FlatMapOperator.md)\<`TComputation`\>

## Type Parameters

• **TComputation** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

• **TFlattenKey** *extends* `string` \| `number` \| `symbol`

## Parameters

### m

`Pick`\<[`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputation`\>, `"map"`\> & \{ readonly \[key in string \| number \| symbol\]: \{ (): HigherOrderComputationOperator\<TComputation, PureSynchronousComputationLike, PureSynchronousComputationOf\<TComputation, T\>, T\>; (options: \{ innerType: TInnerType \}): HigherOrderComputationOperator\<TComputation, TInnerType, HigherOrderInnerComputationOf\<TComputation, TInnerType, T\>, T\> \} \}

### key

`TFlattenKey`

## Returns

[`FlatMapOperator`](../interfaces/FlatMapOperator.md)\<`TComputation`\>
