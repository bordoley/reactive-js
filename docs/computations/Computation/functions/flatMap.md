[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / flatMap

# Function: flatMap()

> **flatMap**\<`TComputation`, `TFlattenKey`\>(`m`): [`FlatMapOperator`](../interfaces/FlatMapOperator.md)\<`TComputation`, `TFlattenKey`\>

## Type Parameters

• **TComputation** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

• **TFlattenKey** *extends* `string` \| `number` \| `symbol`

## Parameters

### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<`TComputation`, [`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputation`\>, `"map"`\> & \{ readonly \[key in string \| number \| symbol\]: key extends TFlattenKey ? \{ (): HigherOrderComputationOperator\<TComputation, PureSynchronousComputationLike, PureSynchronousComputationOf\<TComputation, T\>, T\>; (options: \{ innerType: TInnerType \}): HigherOrderComputationOperator\<TComputation, TInnerType, HigherOrderInnerComputationOf\<TComputation, TInnerType, T\>, T\> \} : unknown \}

## Returns

[`FlatMapOperator`](../interfaces/FlatMapOperator.md)\<`TComputation`, `TFlattenKey`\>
