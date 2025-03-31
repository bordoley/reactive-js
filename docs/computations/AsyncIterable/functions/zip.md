[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/AsyncIterable](../README.md) / zip

# Function: zip()

## Call Signature

> **zip**\<`TA`, `TB`\>(`a`, `b`): [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

### Type Parameters

• **TA**

• **TB**

### Parameters

#### a

[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`TA`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### b

[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

### Returns

[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

## Call Signature

> **zip**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

### Type Parameters

• **TA**

• **TB**

• **TC**

### Parameters

#### a

[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`TA`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### b

[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### c

[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`TC`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

### Returns

[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

## Call Signature

> **zip**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

### Parameters

#### a

[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`TA`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### b

[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### c

[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`TC`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### d

[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<`TD`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

### Returns

[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

## Call Signature

> **zip**\<`TA`, `TB`\>(`a`, `b`): [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

### Type Parameters

• **TA**

• **TB**

### Parameters

#### a

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`AsyncIterableComputation`](../interfaces/AsyncIterableComputation.md), `TA`\>

#### b

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`AsyncIterableComputation`](../interfaces/AsyncIterableComputation.md), `TB`\>

### Returns

[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

## Call Signature

> **zip**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

### Type Parameters

• **TA**

• **TB**

• **TC**

### Parameters

#### a

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`AsyncIterableComputation`](../interfaces/AsyncIterableComputation.md), `TA`\>

#### b

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`AsyncIterableComputation`](../interfaces/AsyncIterableComputation.md), `TB`\>

#### c

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`AsyncIterableComputation`](../interfaces/AsyncIterableComputation.md), `TC`\>

### Returns

[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

## Call Signature

> **zip**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

### Parameters

#### a

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`AsyncIterableComputation`](../interfaces/AsyncIterableComputation.md), `TA`\>

#### b

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`AsyncIterableComputation`](../interfaces/AsyncIterableComputation.md), `TB`\>

#### c

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`AsyncIterableComputation`](../interfaces/AsyncIterableComputation.md), `TC`\>

#### d

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`AsyncIterableComputation`](../interfaces/AsyncIterableComputation.md), `TD`\>

### Returns

[`AsyncIterableLike`](../../interfaces/AsyncIterableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)
