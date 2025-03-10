[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / flatMapIterable

# Function: flatMapIterable()

> **flatMapIterable**\<`TComputation`, `TFlattenKey`, `TModule`\>(`m`): [`FlatMapIterableOperator`](../interfaces/FlatMapIterableOperator.md)\<`TComputation`, `TFlattenKey`\>

## Type Parameters

• **TComputation** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

• **TFlattenKey** *extends* `string` \| `number` \| `symbol`

• **TModule** *extends* [`PickComputationModule`](../../type-aliases/PickComputationModule.md)\<`TComputation`, [`ComputationModule`](../../interfaces/ComputationModule.md)\<`TComputation`\>, `"map"` \| `"fromIterable"`\> & \{ readonly \[key in string \| number \| symbol\]: key extends TFlattenKey ? \{ (): HigherOrderComputationOperator\<TComputation, PureSynchronousComputationLike, PureSynchronousComputationOf\<TComputation, T\>, T\>; (options: \{ innerType: TInnerType \}): HigherOrderComputationOperator\<TComputation, TInnerType, HigherOrderInnerComputationOf\<TComputation, TInnerType, T\>, T\> \} : unknown \}

## Parameters

### m

`TModule`

## Returns

[`FlatMapIterableOperator`](../interfaces/FlatMapIterableOperator.md)\<`TComputation`, `TFlattenKey`\>
