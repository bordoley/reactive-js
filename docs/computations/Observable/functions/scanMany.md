[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Observable](../README.md) / scanMany

# Function: scanMany()

## Call Signature

> **scanMany**\<`T`, `TAcc`\>(`scanner`, `initialValue`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`unknown`\>, `T`, `TAcc`\>

### Type Parameters

• **T**

• **TAcc**

### Parameters

#### scanner

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TAcc`, `T`, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TAcc`\>\>

#### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`unknown`\>, `T`, `TAcc`\>

## Call Signature

> **scanMany**\<`T`, `TAcc`, `TInnerLike`\>(`scanner`, `initialValue`, `options`): [`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TInnerLike`, `T`, `TAcc`\>

### Type Parameters

• **T**

• **TAcc**

• **TInnerLike** *extends* [`HigherOrderInnerComputationLike`](../../type-aliases/HigherOrderInnerComputationLike.md)

### Parameters

#### scanner

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TAcc`, `T`, [`HigherOrderInnerComputationOf`](../../type-aliases/HigherOrderInnerComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TInnerLike`, `T`\>\>

#### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### options

##### innerType

`TInnerLike`

### Returns

[`HigherOrderComputationOperator`](../../type-aliases/HigherOrderComputationOperator.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TInnerLike`, `T`, `TAcc`\>
