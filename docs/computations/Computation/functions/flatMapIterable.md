[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / flatMapIterable

# Function: flatMapIterable()

> **flatMapIterable**\<`TComputation`, `TFlattenKey`\>(`m`, `key`): [`FlatMapIterableOperator`](../interfaces/FlatMapIterableOperator.md)\<`TComputation`\>

## Type Parameters

• **TComputation** *extends* [`ComputationType`](../../type-aliases/ComputationType.md)

• **TFlattenKey** *extends* `string` \| `number` \| `symbol`

## Parameters

### m

`Pick`\<[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md)\<`TComputation`\>, `"map"` \| `"fromIterable"`\> & \{ readonly \[key in string \| number \| symbol\]: \{ (): HigherOrderComputationOperator\<TComputation, PureSynchronousComputationLike, PureSynchronousComputationOf\<TComputation, T\>, T\>; (options: \{ innerType: TInnerType \}): HigherOrderComputationOperator\<TComputation, TInnerType, HigherOrderInnerComputationOf\<TComputation, TInnerType, T\>, T\> \} \}

### key

`TFlattenKey`

## Returns

[`FlatMapIterableOperator`](../interfaces/FlatMapIterableOperator.md)\<`TComputation`\>
