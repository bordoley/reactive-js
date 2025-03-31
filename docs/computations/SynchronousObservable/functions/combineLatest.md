[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/SynchronousObservable](../README.md) / combineLatest

# Function: combineLatest()

## Call Signature

> **combineLatest**\<`TA`, `TB`\>(`a`, `b`): [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

### Type Parameters

• **TA**

• **TB**

### Parameters

#### a

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TA`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### b

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

### Returns

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

## Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

### Type Parameters

• **TA**

• **TB**

• **TC**

### Parameters

#### a

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TA`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### b

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### c

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TC`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

### Returns

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

## Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

### Parameters

#### a

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TA`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### b

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TB`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### c

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TC`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

#### d

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TD`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

### Returns

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

## Call Signature

> **combineLatest**\<`TA`, `TB`\>(`a`, `b`): [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

### Type Parameters

• **TA**

• **TB**

### Parameters

#### a

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](../interfaces/SynchronousObservableComputation.md), `TA`\>

#### b

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](../interfaces/SynchronousObservableComputation.md), `TB`\>

### Returns

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

## Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

### Type Parameters

• **TA**

• **TB**

• **TC**

### Parameters

#### a

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](../interfaces/SynchronousObservableComputation.md), `TA`\>

#### b

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](../interfaces/SynchronousObservableComputation.md), `TB`\>

#### c

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](../interfaces/SynchronousObservableComputation.md), `TC`\>

### Returns

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

## Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)

### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

### Parameters

#### a

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](../interfaces/SynchronousObservableComputation.md), `TA`\>

#### b

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](../interfaces/SynchronousObservableComputation.md), `TB`\>

#### c

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](../interfaces/SynchronousObservableComputation.md), `TC`\>

#### d

[`ComputationOf`](../../type-aliases/ComputationOf.md)\<[`SynchronousObservableComputation`](../interfaces/SynchronousObservableComputation.md), `TD`\>

### Returns

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`ComputationWithSideEffectsLike`](../../interfaces/ComputationWithSideEffectsLike.md)
