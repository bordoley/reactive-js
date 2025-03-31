[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Producer](../README.md) / zipLatest

# Function: zipLatest()

## Call Signature

> **zipLatest**\<`TA`, `TB`\>(`a`, `b`): [`ProducerLike`](../../interfaces/ProducerLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

### Type Parameters

• **TA**

• **TB**

### Parameters

#### a

[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TA`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### b

[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

### Returns

[`ProducerLike`](../../interfaces/ProducerLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

## Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ProducerLike`](../../interfaces/ProducerLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

### Type Parameters

• **TA**

• **TB**

• **TC**

### Parameters

#### a

[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TA`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### b

[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### c

[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TC`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

### Returns

[`ProducerLike`](../../interfaces/ProducerLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

## Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ProducerLike`](../../interfaces/ProducerLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

### Parameters

#### a

[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TA`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### b

[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### c

[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TC`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### d

[`ProducerLike`](../../interfaces/ProducerLike.md)\<`TD`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

### Returns

[`ProducerLike`](../../interfaces/ProducerLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

## Call Signature

> **zipLatest**\<`TA`, `TB`\>(`a`, `b`): [`ProducerLike`](../../interfaces/ProducerLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

### Type Parameters

• **TA**

• **TB**

### Parameters

#### a

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TA`\>

#### b

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TB`\>

### Returns

[`ProducerLike`](../../interfaces/ProducerLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

## Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ProducerLike`](../../interfaces/ProducerLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

### Type Parameters

• **TA**

• **TB**

• **TC**

### Parameters

#### a

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TA`\>

#### b

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TB`\>

#### c

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TC`\>

### Returns

[`ProducerLike`](../../interfaces/ProducerLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

## Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ProducerLike`](../../interfaces/ProducerLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

### Parameters

#### a

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TA`\>

#### b

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TB`\>

#### c

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TC`\>

#### d

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ProducerComputation`](../interfaces/ProducerComputation.md), `TD`\>

### Returns

[`ProducerLike`](../../interfaces/ProducerLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)
