[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Producer](../README.md) / forkMerge

# Function: forkMerge()

## Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TIn`, `TOut`\>

### Type Parameters

• **TIn**

• **TOut**

### Parameters

#### a

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ProducerLike`](../../interfaces/ProducerLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

#### b

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ProducerLike`](../../interfaces/ProducerLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TIn`, `TOut`\>

## Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`, `options`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TIn`, `TOut`\>

### Type Parameters

• **TIn**

• **TOut**

### Parameters

#### a

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ProducerLike`](../../interfaces/ProducerLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

#### b

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ProducerLike`](../../interfaces/ProducerLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

#### options

##### [ComputationLike_isPure]

[`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>

### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TIn`, `TOut`\>

## Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`, `options`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TIn`, `TOut`\>

### Type Parameters

• **TIn**

• **TOut**

### Parameters

#### a

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TOut`\>\>

#### b

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TOut`\>\>

#### options

##### [ComputationLike_isPure]

`false`

### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TIn`, `TOut`\>

## Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`, `c`, `options`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TIn`, `TOut`\>

### Type Parameters

• **TIn**

• **TOut**

### Parameters

#### a

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ProducerLike`](../../interfaces/ProducerLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

#### b

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ProducerLike`](../../interfaces/ProducerLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

#### c

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ProducerLike`](../../interfaces/ProducerLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

#### options

##### [ComputationLike_isPure]

[`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>

### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TIn`, `TOut`\>

## Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`, `c`, `options`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TIn`, `TOut`\>

### Type Parameters

• **TIn**

• **TOut**

### Parameters

#### a

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TOut`\>\>

#### b

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TOut`\>\>

#### c

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TOut`\>\>

#### options

##### [ComputationLike_isPure]

`false`

### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TIn`, `TOut`\>

## Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`, `c`, `d`, `options`): [`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TIn`, `TOut`\>

### Type Parameters

• **TIn**

• **TOut**

### Parameters

#### a

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ProducerLike`](../../interfaces/ProducerLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

#### b

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ProducerLike`](../../interfaces/ProducerLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

#### c

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ProducerLike`](../../interfaces/ProducerLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

#### d

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ProducerLike`](../../interfaces/ProducerLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

#### options

##### [ComputationLike_isPure]

[`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>

### Returns

[`PureComputationOperator`](../../type-aliases/PureComputationOperator.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TIn`, `TOut`\>

## Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`, `c`, `d`, `options`): [`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TIn`, `TOut`\>

### Type Parameters

• **TIn**

• **TOut**

### Parameters

#### a

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TOut`\>\>

#### b

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TOut`\>\>

#### c

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TOut`\>\>

#### d

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TOut`\>\>

#### options

##### [ComputationLike_isPure]

`false`

### Returns

[`ComputationOperatorWithSideEffects`](../../type-aliases/ComputationOperatorWithSideEffects.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TIn`, `TOut`\>
