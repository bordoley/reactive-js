[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / flatMap

# Function: flatMap()

> **flatMap**\<`TComputationType`, `TFlattenKey`\>(`m`): [`FlatMapOperator`](../interfaces/FlatMapOperator.md)\<`TComputationType`, `TFlattenKey`\>

## Type Parameters

• **TComputationType** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

• **TFlattenKey** *extends* `string` \| `number` \| `symbol`

## Parameters

### m

[`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<`TComputationType`, [`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputationType`, \{\}\>, `"map"`\> & \{ readonly \[key in string \| number \| symbol\]: key extends TFlattenKey ? \{ (): HigherOrderComputationOperator\<TComputationType, PureSynchronousComputationLike, PureSynchronousComputationOf\<TComputationType, T\>, T\>; (options: \{ innerType: TInnerLike \}): HigherOrderComputationOperator\<TComputationType, TInnerLike, HigherOrderInnerComputationOf\<TComputationType, TInnerLike, T\>, T\> \} : unknown \}

## Returns

[`FlatMapOperator`](../interfaces/FlatMapOperator.md)\<`TComputationType`, `TFlattenKey`\>
