[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Iterable](../README.md) / zip

# Function: zip()

## Call Signature

> **zip**\<`TA`, `TB`\>(`a`, `b`): [`IterableLike`](../../interfaces/IterableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

### Type Parameters

• **TA**

• **TB**

### Parameters

#### a

[`IterableLike`](../../interfaces/IterableLike.md)\<`TA`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### b

[`IterableLike`](../../interfaces/IterableLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

### Returns

[`IterableLike`](../../interfaces/IterableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

## Call Signature

> **zip**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`IterableLike`](../../interfaces/IterableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

### Type Parameters

• **TA**

• **TB**

• **TC**

### Parameters

#### a

[`IterableLike`](../../interfaces/IterableLike.md)\<`TA`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### b

[`IterableLike`](../../interfaces/IterableLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### c

[`IterableLike`](../../interfaces/IterableLike.md)\<`TC`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

### Returns

[`IterableLike`](../../interfaces/IterableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

## Call Signature

> **zip**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`IterableLike`](../../interfaces/IterableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

### Parameters

#### a

[`IterableLike`](../../interfaces/IterableLike.md)\<`TA`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### b

[`IterableLike`](../../interfaces/IterableLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### c

[`IterableLike`](../../interfaces/IterableLike.md)\<`TC`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### d

[`IterableLike`](../../interfaces/IterableLike.md)\<`TD`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

### Returns

[`IterableLike`](../../interfaces/IterableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

## Call Signature

> **zip**\<`TA`, `TB`\>(`a`, `b`): [`IterableLike`](../../interfaces/IterableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

### Type Parameters

• **TA**

• **TB**

### Parameters

#### a

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`IterableComputation`](../interfaces/IterableComputation.md), `TA`\>

#### b

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`IterableComputation`](../interfaces/IterableComputation.md), `TB`\>

### Returns

[`IterableLike`](../../interfaces/IterableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

## Call Signature

> **zip**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`IterableLike`](../../interfaces/IterableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

### Type Parameters

• **TA**

• **TB**

• **TC**

### Parameters

#### a

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`IterableComputation`](../interfaces/IterableComputation.md), `TA`\>

#### b

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`IterableComputation`](../interfaces/IterableComputation.md), `TB`\>

#### c

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`IterableComputation`](../interfaces/IterableComputation.md), `TC`\>

### Returns

[`IterableLike`](../../interfaces/IterableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

## Call Signature

> **zip**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`IterableLike`](../../interfaces/IterableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

### Parameters

#### a

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`IterableComputation`](../interfaces/IterableComputation.md), `TA`\>

#### b

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`IterableComputation`](../interfaces/IterableComputation.md), `TB`\>

#### c

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`IterableComputation`](../interfaces/IterableComputation.md), `TC`\>

#### d

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`IterableComputation`](../interfaces/IterableComputation.md), `TD`\>

### Returns

[`IterableLike`](../../interfaces/IterableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)
