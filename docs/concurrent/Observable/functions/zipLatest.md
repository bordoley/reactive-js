[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / zipLatest

# Function: zipLatest()

## Call Signature

> **zipLatest**\<`TA`, `TB`\>(`a`, `b`): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

### Type Parameters

• **TA**

• **TB**

### Parameters

#### a

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TA`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>

#### b

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TB`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\>

### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

## Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

### Type Parameters

• **TA**

• **TB**

• **TC**

### Parameters

#### a

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TA`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>

#### b

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TB`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\>

#### c

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TC`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TC`\>

### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

## Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

### Parameters

#### a

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TA`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>

#### b

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TB`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\>

#### c

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TC`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TC`\>

#### d

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TD`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TD`\>

### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

## Call Signature

> **zipLatest**\<`TA`, `TB`\>(`a`, `b`): [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

### Type Parameters

• **TA**

• **TB**

### Parameters

#### a

[`SynchronousComputationOf`](../../../computations/type-aliases/SynchronousComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TA`\>

#### b

[`SynchronousComputationOf`](../../../computations/type-aliases/SynchronousComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TB`\>

### Returns

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

## Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

### Type Parameters

• **TA**

• **TB**

• **TC**

### Parameters

#### a

[`SynchronousComputationOf`](../../../computations/type-aliases/SynchronousComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TA`\>

#### b

[`SynchronousComputationOf`](../../../computations/type-aliases/SynchronousComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TB`\>

#### c

[`SynchronousComputationOf`](../../../computations/type-aliases/SynchronousComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TC`\>

### Returns

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

## Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

### Parameters

#### a

[`SynchronousComputationOf`](../../../computations/type-aliases/SynchronousComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TA`\>

#### b

[`SynchronousComputationOf`](../../../computations/type-aliases/SynchronousComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TB`\>

#### c

[`SynchronousComputationOf`](../../../computations/type-aliases/SynchronousComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TC`\>

#### d

[`SynchronousComputationOf`](../../../computations/type-aliases/SynchronousComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TD`\>

### Returns

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

## Call Signature

> **zipLatest**\<`TA`, `TB`\>(`a`, `b`): [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

### Type Parameters

• **TA**

• **TB**

### Parameters

#### a

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TA`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>

#### b

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TB`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\>

### Returns

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

## Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

### Type Parameters

• **TA**

• **TB**

• **TC**

### Parameters

#### a

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TA`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>

#### b

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TB`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\>

#### c

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TC`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TC`\>

### Returns

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

## Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

### Parameters

#### a

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TA`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>

#### b

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TB`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\>

#### c

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TC`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TC`\>

#### d

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TD`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TD`\>

### Returns

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

## Call Signature

> **zipLatest**\<`TA`, `TB`\>(`a`, `b`): [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

### Type Parameters

• **TA**

• **TB**

### Parameters

#### a

[`DeferredComputationOf`](../../../computations/type-aliases/DeferredComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TA`\>

#### b

[`DeferredComputationOf`](../../../computations/type-aliases/DeferredComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TB`\>

### Returns

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

## Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

### Type Parameters

• **TA**

• **TB**

• **TC**

### Parameters

#### a

[`DeferredComputationOf`](../../../computations/type-aliases/DeferredComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TA`\>

#### b

[`DeferredComputationOf`](../../../computations/type-aliases/DeferredComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TB`\>

#### c

[`DeferredComputationOf`](../../../computations/type-aliases/DeferredComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TC`\>

### Returns

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

## Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

### Parameters

#### a

[`DeferredComputationOf`](../../../computations/type-aliases/DeferredComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TA`\>

#### b

[`DeferredComputationOf`](../../../computations/type-aliases/DeferredComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TB`\>

#### c

[`DeferredComputationOf`](../../../computations/type-aliases/DeferredComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TC`\>

#### d

[`DeferredComputationOf`](../../../computations/type-aliases/DeferredComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TD`\>

### Returns

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

## Call Signature

> **zipLatest**\<`TA`, `TB`\>(`a`, `b`): `NonNullable`\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>\>

### Type Parameters

• **TA**

• **TB**

### Parameters

#### a

`NonNullable`\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TA`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

#### b

`NonNullable`\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TB`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\>\>

### Returns

`NonNullable`\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>\>

## Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): `NonNullable`\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>\>

### Type Parameters

• **TA**

• **TB**

• **TC**

### Parameters

#### a

`NonNullable`\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TA`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

#### b

`NonNullable`\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TB`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\>\>

#### c

`NonNullable`\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TC`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TC`\>\>

### Returns

`NonNullable`\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>\>

## Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): `NonNullable`\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>\>

### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

### Parameters

#### a

`NonNullable`\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TA`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

#### b

`NonNullable`\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TB`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\>\>

#### c

`NonNullable`\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TC`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TC`\>\>

#### d

`NonNullable`\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TD`\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TD`\>\>

### Returns

`NonNullable`\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>\>

## Call Signature

> **zipLatest**\<`TA`, `TB`\>(`a`, `b`): [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

### Type Parameters

• **TA**

• **TB**

### Parameters

#### a

[`PureComputationOf`](../../../computations/type-aliases/PureComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TA`\>

#### b

[`PureComputationOf`](../../../computations/type-aliases/PureComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TB`\>

### Returns

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

## Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

### Type Parameters

• **TA**

• **TB**

• **TC**

### Parameters

#### a

[`PureComputationOf`](../../../computations/type-aliases/PureComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TA`\>

#### b

[`PureComputationOf`](../../../computations/type-aliases/PureComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TB`\>

#### c

[`PureComputationOf`](../../../computations/type-aliases/PureComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TC`\>

### Returns

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

## Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

### Parameters

#### a

[`PureComputationOf`](../../../computations/type-aliases/PureComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TA`\>

#### b

[`PureComputationOf`](../../../computations/type-aliases/PureComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TB`\>

#### c

[`PureComputationOf`](../../../computations/type-aliases/PureComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TC`\>

#### d

[`PureComputationOf`](../../../computations/type-aliases/PureComputationOf.md)\<[`ObservableComputation`](../interfaces/ObservableComputation.md), `TD`\>

### Returns

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\> & [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>
