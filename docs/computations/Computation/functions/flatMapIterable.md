[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Computation](../README.md) / flatMapIterable

# Function: flatMapIterable()

> **flatMapIterable**\<`TComputation`, `TFlattenKey`\>(`m`, `key`): [`ConcatMapIterableOperator`](../interfaces/ConcatMapIterableOperator.md)\<`TComputation`\>

## Type Parameters

• **TComputation** *extends* [`Computation`](../../type-aliases/Computation.md)

• **TFlattenKey** *extends* `string` \| `number` \| `symbol`

## Parameters

### m

`Pick`\<[`SynchronousComputationModule`](../../interfaces/SynchronousComputationModule.md)\<`TComputation`\>, `"map"` \| `"fromIterable"`\> & \{ readonly \[key in string \| number \| symbol\]: \{ (): HigherOrderComputationOperator\<TComputation, PureSynchronousComputationLike, PureSynchronousComputationOf\<TComputation, T\>, T\>; (options: \{ innerType: TInnerType \}): HigherOrderComputationOperator\<TComputation, TInnerType, ComputationOfInnerType\<TComputation, TInnerType, T\>, T\> \} \}

### key

`TFlattenKey`

## Returns

[`ConcatMapIterableOperator`](../interfaces/ConcatMapIterableOperator.md)\<`TComputation`\>
