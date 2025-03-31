[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Producer](../README.md) / withLatestFrom

# Function: withLatestFrom()

## Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

### Type Parameters

• **TA**

• **TB**

### Parameters

#### other

[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

## Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TA`, `T`\>

### Type Parameters

• **TA**

• **TB**

• **T**

### Parameters

#### other

[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### selector

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TA`, `T`\>

## Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

### Type Parameters

• **TA**

• **TB**

### Parameters

#### other

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TB`\>

### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

## Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TA`, `T`\>

### Type Parameters

• **TA**

• **TB**

• **T**

### Parameters

#### other

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TB`\>

#### selector

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TA`, `T`\>
