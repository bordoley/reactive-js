[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Observable](../README.md) / combineLatest

# Function: combineLatest()

## Call Signature

> **combineLatest**\<`TA`, `TB`\>(`a`, `b`): [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

### Type Parameters

• **TA**

• **TB**

### Parameters

#### a

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### b

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

### Returns

[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

## Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

### Type Parameters

• **TA**

• **TB**

• **TC**

### Parameters

#### a

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### b

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### c

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TC`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

### Returns

[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

## Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

### Parameters

#### a

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### b

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### c

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TC`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### d

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TD`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

### Returns

[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

## Call Signature

> **combineLatest**\<`TA`, `TB`\>(`a`, `b`): [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

### Type Parameters

• **TA**

• **TB**

### Parameters

#### a

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TA`\>

#### b

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TB`\>

### Returns

[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

## Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

### Type Parameters

• **TA**

• **TB**

• **TC**

### Parameters

#### a

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TA`\>

#### b

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TB`\>

#### c

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TC`\>

### Returns

[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

## Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

### Parameters

#### a

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TA`\>

#### b

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TB`\>

#### c

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TC`\>

#### d

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TD`\>

### Returns

[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)
