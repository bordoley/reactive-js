[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / ObservableModule

# Interface: ObservableModule

## Properties

### currentTime

> **currentTime**: [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`number`\>

## Methods

### backpressureStrategy()

> **backpressureStrategy**\<`T`\>(`capacity`, `backpressureStrategy`): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### capacity

`number`

##### backpressureStrategy

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

#### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, `T`\>

***

### buffer()

> **buffer**\<`T`\>(`options`?): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, readonly `T`[]\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, readonly `T`[]\>

***

### catchError()

> **catchError**\<`T`\>(`onError`): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### onError

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`Error`\>

#### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, `T`\>

***

### combineLatest()

#### Call Signature

> **combineLatest**\<`TA`, `TB`\>(`a`, `b`): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### a

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TA`\>

###### b

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TB`\>

##### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

##### Parameters

###### a

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TA`\>

###### b

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TB`\>

###### c

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TC`\>

##### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

##### Parameters

###### a

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TA`\>

###### b

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TB`\>

###### c

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TC`\>

###### d

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TD`\>

##### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<[`Tuple5`](../../../functions/type-aliases/Tuple5.md)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

##### Parameters

###### a

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TA`\>

###### b

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TB`\>

###### c

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TC`\>

###### d

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TD`\>

###### e

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TE`\>

##### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<[`Tuple5`](../../../functions/type-aliases/Tuple5.md)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<[`Tuple6`](../../../functions/type-aliases/Tuple6.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

##### Parameters

###### a

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TA`\>

###### b

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TB`\>

###### c

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TC`\>

###### d

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TD`\>

###### e

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TE`\>

###### f

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TF`\>

##### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<[`Tuple6`](../../../functions/type-aliases/Tuple6.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<[`Tuple7`](../../../functions/type-aliases/Tuple7.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

• **TG**

##### Parameters

###### a

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TA`\>

###### b

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TB`\>

###### c

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TC`\>

###### d

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TD`\>

###### e

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TE`\>

###### f

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TF`\>

###### g

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TG`\>

##### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<[`Tuple7`](../../../functions/type-aliases/Tuple7.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<[`Tuple8`](../../../functions/type-aliases/Tuple8.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

• **TG**

• **TH**

##### Parameters

###### a

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TA`\>

###### b

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TB`\>

###### c

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TC`\>

###### d

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TD`\>

###### e

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TE`\>

###### f

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TF`\>

###### g

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TG`\>

###### h

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TH`\>

##### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<[`Tuple8`](../../../functions/type-aliases/Tuple8.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<[`Tuple9`](../../../functions/type-aliases/Tuple9.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

• **TG**

• **TH**

• **TI**

##### Parameters

###### a

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TA`\>

###### b

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TB`\>

###### c

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TC`\>

###### d

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TD`\>

###### e

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TE`\>

###### f

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TF`\>

###### g

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TG`\>

###### h

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TH`\>

###### i

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TI`\>

##### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<[`Tuple9`](../../../functions/type-aliases/Tuple9.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`\>(`a`, `b`): [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### a

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TA`\>

###### b

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TB`\>

##### Returns

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

##### Parameters

###### a

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TA`\>

###### b

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TB`\>

###### c

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TC`\>

##### Returns

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

##### Parameters

###### a

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TA`\>

###### b

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TB`\>

###### c

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TC`\>

###### d

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TD`\>

##### Returns

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<[`Tuple5`](../../../functions/type-aliases/Tuple5.md)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

##### Parameters

###### a

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TA`\>

###### b

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TB`\>

###### c

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TC`\>

###### d

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TD`\>

###### e

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TE`\>

##### Returns

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<[`Tuple5`](../../../functions/type-aliases/Tuple5.md)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<[`Tuple6`](../../../functions/type-aliases/Tuple6.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

##### Parameters

###### a

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TA`\>

###### b

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TB`\>

###### c

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TC`\>

###### d

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TD`\>

###### e

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TE`\>

###### f

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TF`\>

##### Returns

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<[`Tuple6`](../../../functions/type-aliases/Tuple6.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<[`Tuple7`](../../../functions/type-aliases/Tuple7.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

• **TG**

##### Parameters

###### a

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TA`\>

###### b

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TB`\>

###### c

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TC`\>

###### d

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TD`\>

###### e

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TE`\>

###### f

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TF`\>

###### g

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TG`\>

##### Returns

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<[`Tuple7`](../../../functions/type-aliases/Tuple7.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<[`Tuple8`](../../../functions/type-aliases/Tuple8.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

• **TG**

• **TH**

##### Parameters

###### a

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TA`\>

###### b

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TB`\>

###### c

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TC`\>

###### d

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TD`\>

###### e

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TE`\>

###### f

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TF`\>

###### g

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TG`\>

###### h

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TH`\>

##### Returns

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<[`Tuple8`](../../../functions/type-aliases/Tuple8.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<[`Tuple9`](../../../functions/type-aliases/Tuple9.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

• **TG**

• **TH**

• **TI**

##### Parameters

###### a

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TA`\>

###### b

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TB`\>

###### c

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TC`\>

###### d

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TD`\>

###### e

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TE`\>

###### f

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TF`\>

###### g

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TG`\>

###### h

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TH`\>

###### i

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TI`\>

##### Returns

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<[`Tuple9`](../../../functions/type-aliases/Tuple9.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`\>(`a`, `b`): [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### a

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TA`\>

###### b

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TB`\>

##### Returns

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

##### Parameters

###### a

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TA`\>

###### b

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TB`\>

###### c

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TC`\>

##### Returns

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

##### Parameters

###### a

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TA`\>

###### b

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TB`\>

###### c

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TC`\>

###### d

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TD`\>

##### Returns

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple5`](../../../functions/type-aliases/Tuple5.md)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

##### Parameters

###### a

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TA`\>

###### b

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TB`\>

###### c

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TC`\>

###### d

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TD`\>

###### e

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TE`\>

##### Returns

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple5`](../../../functions/type-aliases/Tuple5.md)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple6`](../../../functions/type-aliases/Tuple6.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

##### Parameters

###### a

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TA`\>

###### b

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TB`\>

###### c

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TC`\>

###### d

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TD`\>

###### e

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TE`\>

###### f

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TF`\>

##### Returns

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple6`](../../../functions/type-aliases/Tuple6.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple7`](../../../functions/type-aliases/Tuple7.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

• **TG**

##### Parameters

###### a

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TA`\>

###### b

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TB`\>

###### c

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TC`\>

###### d

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TD`\>

###### e

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TE`\>

###### f

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TF`\>

###### g

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TG`\>

##### Returns

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple7`](../../../functions/type-aliases/Tuple7.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple8`](../../../functions/type-aliases/Tuple8.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

• **TG**

• **TH**

##### Parameters

###### a

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TA`\>

###### b

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TB`\>

###### c

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TC`\>

###### d

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TD`\>

###### e

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TE`\>

###### f

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TF`\>

###### g

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TG`\>

###### h

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TH`\>

##### Returns

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple8`](../../../functions/type-aliases/Tuple8.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple9`](../../../functions/type-aliases/Tuple9.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

• **TG**

• **TH**

• **TI**

##### Parameters

###### a

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TA`\>

###### b

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TB`\>

###### c

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TC`\>

###### d

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TD`\>

###### e

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TE`\>

###### f

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TF`\>

###### g

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TG`\>

###### h

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TH`\>

###### i

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TI`\>

##### Returns

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple9`](../../../functions/type-aliases/Tuple9.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`\>(`a`, `b`): [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### a

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>

###### b

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\>

##### Returns

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

##### Parameters

###### a

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>

###### b

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\>

###### c

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TC`\>

##### Returns

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

##### Parameters

###### a

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>

###### b

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\>

###### c

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TC`\>

###### d

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TD`\>

##### Returns

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<[`Tuple5`](../../../functions/type-aliases/Tuple5.md)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

##### Parameters

###### a

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>

###### b

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\>

###### c

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TC`\>

###### d

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TD`\>

###### e

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TE`\>

##### Returns

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<[`Tuple5`](../../../functions/type-aliases/Tuple5.md)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<[`Tuple6`](../../../functions/type-aliases/Tuple6.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

##### Parameters

###### a

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>

###### b

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\>

###### c

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TC`\>

###### d

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TD`\>

###### e

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TE`\>

###### f

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TF`\>

##### Returns

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<[`Tuple6`](../../../functions/type-aliases/Tuple6.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<[`Tuple7`](../../../functions/type-aliases/Tuple7.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

• **TG**

##### Parameters

###### a

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>

###### b

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\>

###### c

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TC`\>

###### d

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TD`\>

###### e

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TE`\>

###### f

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TF`\>

###### g

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TG`\>

##### Returns

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<[`Tuple7`](../../../functions/type-aliases/Tuple7.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<[`Tuple8`](../../../functions/type-aliases/Tuple8.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

• **TG**

• **TH**

##### Parameters

###### a

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>

###### b

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\>

###### c

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TC`\>

###### d

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TD`\>

###### e

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TE`\>

###### f

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TF`\>

###### g

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TG`\>

###### h

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TH`\>

##### Returns

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<[`Tuple8`](../../../functions/type-aliases/Tuple8.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<[`Tuple9`](../../../functions/type-aliases/Tuple9.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

• **TG**

• **TH**

• **TI**

##### Parameters

###### a

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>

###### b

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\>

###### c

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TC`\>

###### d

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TD`\>

###### e

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TE`\>

###### f

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TF`\>

###### g

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TG`\>

###### h

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TH`\>

###### i

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TI`\>

##### Returns

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<[`Tuple9`](../../../functions/type-aliases/Tuple9.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

***

### computeDeferred()

> **computeDeferred**\<`T`\>(`computation`, `options`?): [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### computation

[`Factory`](../../../functions/type-aliases/Factory.md)\<`T`\>

##### options?

###### mode?

[`ComputeMode`](../type-aliases/ComputeMode.md)

#### Returns

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>

***

### computeSynchronousObservable()

> **computeSynchronousObservable**\<`T`\>(`computation`, `options`?): [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### computation

[`Factory`](../../../functions/type-aliases/Factory.md)\<`T`\>

##### options?

###### mode?

[`ComputeMode`](../type-aliases/ComputeMode.md)

#### Returns

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\>

***

### concat()

#### Call Signature

> **concat**\<`T`\>(`fst`, `snd`, ...`tail`): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### fst

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>

###### snd

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>

###### tail

...readonly [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>[]

##### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>

#### Call Signature

> **concat**\<`T`\>(`fst`, `snd`, ...`tail`): [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### fst

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>

###### snd

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>

###### tail

...readonly [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>[]

##### Returns

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>

#### Call Signature

> **concat**\<`T`\>(`fst`, `snd`, ...`tail`): [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### fst

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>

###### snd

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>

###### tail

...readonly [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>[]

##### Returns

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\>

#### Call Signature

> **concat**\<`T`\>(`fst`, `snd`, ...`tail`): [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### fst

[`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>

###### snd

[`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>

###### tail

...readonly [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>[]

##### Returns

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>

#### Call Signature

> **concat**\<`T`\>(`fst`, `snd`, ...`tail`): [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### fst

[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>

###### snd

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>

###### tail

...readonly [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`unknown`\>[]

##### Returns

[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>

#### Call Signature

> **concat**\<`T`\>(`fst`, `snd`, ...`tail`): [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### fst

[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>

###### snd

[`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>

###### tail

...readonly [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`unknown`\>[]

##### Returns

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>

***

### concatAll()

#### Call Signature

> **concatAll**\<`T`\>(): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>, `T`\>

##### Type Parameters

• **T**

##### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>, `T`\>

#### Call Signature

> **concatAll**\<`T`\>(`options`): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### innerType

`Pick`\<[`PureSynchronousComputationLike`](../../../computations/interfaces/PureSynchronousComputationLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

##### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>, `T`\>

#### Call Signature

> **concatAll**\<`T`\>(`options`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### innerType

`Pick`\<[`SynchronousComputationWithSideEffectsLike`](../../../computations/interfaces/SynchronousComputationWithSideEffectsLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

##### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, `T`\>

#### Call Signature

> **concatAll**\<`T`\>(`options`): [`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### innerType

`Pick`\<[`PureDeferredComputationLike`](../../../computations/interfaces/PureDeferredComputationLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

##### Returns

[`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>, `T`\>

#### Call Signature

> **concatAll**\<`T`\>(`options`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### innerType

`Pick`\<[`DeferredComputationWithSideEffectsLike`](../../../computations/interfaces/DeferredComputationWithSideEffectsLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

***

### concatMany()

#### Call Signature

> **concatMany**\<`T`\>(`observables`): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### observables

readonly [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>[]

##### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>

#### Call Signature

> **concatMany**\<`T`\>(`observables`): [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### observables

readonly [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>[]

##### Returns

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>

#### Call Signature

> **concatMany**\<`T`\>(`observables`): [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### observables

readonly [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>[]

##### Returns

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\>

#### Call Signature

> **concatMany**\<`T`\>(`observables`): [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### observables

readonly [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>[]

##### Returns

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>

#### Call Signature

> **concatMany**\<`T`\>(`observables`): [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### observables

readonly \[[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>, [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>\]

##### Returns

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>

#### Call Signature

> **concatMany**\<`T`\>(`observables`): [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### observables

readonly \[[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>, [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>\]

##### Returns

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>

***

### concatMap()

#### Call Signature

> **concatMap**\<`TA`, `TB`\>(`selector`): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`TA`, `TB`\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TB`\>\>

##### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`TA`, `TB`\>

#### Call Signature

> **concatMap**\<`TA`, `TB`\>(`selector`, `options`): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`TA`, `TB`\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TB`\>\>

###### options

###### innerType

`Pick`\<[`PureSynchronousComputationLike`](../../../computations/interfaces/PureSynchronousComputationLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

##### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`TA`, `TB`\>

#### Call Signature

> **concatMap**\<`TA`, `TB`\>(`selector`, `options`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`TA`, `TB`\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TB`\>\>

###### options

###### innerType

`Pick`\<[`SynchronousComputationWithSideEffectsLike`](../../../computations/interfaces/SynchronousComputationWithSideEffectsLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

##### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`TA`, `TB`\>

#### Call Signature

> **concatMap**\<`TA`, `TB`\>(`selector`, `options`): [`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`TA`, `TB`\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TB`\>\>

###### options

###### innerType

`Pick`\<[`PureDeferredComputationLike`](../../../computations/interfaces/PureDeferredComputationLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

##### Returns

[`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`TA`, `TB`\>

#### Call Signature

> **concatMap**\<`TA`, `TB`\>(`selector`, `options`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`TB`\>\>

###### options

###### innerType

`Pick`\<[`DeferredComputationWithSideEffectsLike`](../../../computations/interfaces/DeferredComputationWithSideEffectsLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TB`\>\>

***

### concatWith()

#### Call Signature

> **concatWith**\<`T`\>(`snd`, ...`tail`): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### snd

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>

###### tail

...readonly [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>[]

##### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, `T`\>

#### Call Signature

> **concatWith**\<`T`\>(`snd`, ...`tail`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### snd

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>

###### tail

...readonly [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>[]

##### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `T`\>

#### Call Signature

> **concatWith**\<`T`\>(`snd`, ...`tail`): [`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### snd

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>

###### tail

...readonly [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>[]

##### Returns

[`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`T`, `T`\>

#### Call Signature

> **concatWith**\<`T`\>(`snd`, ...`tail`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\> \| [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### snd

[`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>

###### tail

...readonly [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>[]

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\> \| [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

***

### create()

> **create**\<`T`\>(`f`): [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### f

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<[`ObserverLike`](../../interfaces/ObserverLike.md)\<`T`\>\>

#### Returns

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>

***

### debug()

> **debug**\<`T`\>(): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `T`\>

#### Type Parameters

• **T**

#### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `T`\>

***

### decodeWithCharset()

> **decodeWithCharset**(`options`?): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`ArrayBuffer`, `string`\>

#### Parameters

##### options?

###### charset?

`string`

###### fatal?

`boolean`

###### ignoreBOM?

`boolean`

#### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`ArrayBuffer`, `string`\>

***

### defer()

> **defer**\<`T`\>(`f`): [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### f

[`Factory`](../../../functions/type-aliases/Factory.md)\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>\>

#### Returns

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>

***

### dispatchTo()

> **dispatchTo**\<`T`\>(`dispatcher`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### dispatcher

[`DispatcherLike`](../../interfaces/DispatcherLike.md)\<`T`\>

#### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `T`\>

***

### distinctUntilChanged()

> **distinctUntilChanged**\<`T`\>(`options`?): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### equality?

[`Equality`](../../../functions/type-aliases/Equality.md)\<`T`\>

#### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, `T`\>

***

### empty()

#### Call Signature

> **empty**\<`T`\>(): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>

#### Call Signature

> **empty**\<`T`\>(`options`?): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### options?

###### delay

`number`

##### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>

***

### encodeUtf8()

> **encodeUtf8**(): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`string`, `Uint8Array`\<`ArrayBufferLike`\>\>

#### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`string`, `Uint8Array`\<`ArrayBufferLike`\>\>

***

### endWith()

> **endWith**\<`T`\>(`value`, ...`values`): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### value

`T`

##### values

...readonly `T`[]

#### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, `T`\>

***

### enqueue()

> **enqueue**\<`T`\>(`queue`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### queue

[`QueueableLike`](../../../utils/interfaces/QueueableLike.md)\<`T`\>

#### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `T`\>

***

### exhaust()

#### Call Signature

> **exhaust**\<`T`\>(): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>, `T`\>

##### Type Parameters

• **T**

##### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>, `T`\>

#### Call Signature

> **exhaust**\<`T`\>(`options`): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### innerType

`Pick`\<[`PureSynchronousComputationLike`](../../../computations/interfaces/PureSynchronousComputationLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

##### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>, `T`\>

#### Call Signature

> **exhaust**\<`T`\>(`options`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### innerType

`Pick`\<[`SynchronousComputationWithSideEffectsLike`](../../../computations/interfaces/SynchronousComputationWithSideEffectsLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

##### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, `T`\>

#### Call Signature

> **exhaust**\<`T`\>(`options`): [`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### innerType

`Pick`\<[`PureDeferredComputationLike`](../../../computations/interfaces/PureDeferredComputationLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

##### Returns

[`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, `T`\>

#### Call Signature

> **exhaust**\<`T`\>(`options`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### innerType

`Pick`\<[`DeferredComputationWithSideEffectsLike`](../../../computations/interfaces/DeferredComputationWithSideEffectsLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

***

### exhaustMap()

#### Call Signature

> **exhaustMap**\<`TA`, `TB`\>(`selector`): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`TA`, `TB`\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TB`\>\>

##### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`TA`, `TB`\>

#### Call Signature

> **exhaustMap**\<`TA`, `TB`\>(`selector`, `options`): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`TA`, `TB`\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TB`\>\>

###### options

###### innerType

`Pick`\<[`PureSynchronousComputationLike`](../../../computations/interfaces/PureSynchronousComputationLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

##### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`TA`, `TB`\>

#### Call Signature

> **exhaustMap**\<`TA`, `TB`\>(`selector`, `options`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`TA`, `TB`\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TB`\>\>

###### options

###### innerType

`Pick`\<[`SynchronousComputationWithSideEffectsLike`](../../../computations/interfaces/SynchronousComputationWithSideEffectsLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

##### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`TA`, `TB`\>

#### Call Signature

> **exhaustMap**\<`TA`, `TB`\>(`selector`, `options`): [`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`TA`, `TB`\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TB`\>\>

###### options

###### innerType

`Pick`\<[`PureDeferredComputationLike`](../../../computations/interfaces/PureDeferredComputationLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

##### Returns

[`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`TA`, `TB`\>

#### Call Signature

> **exhaustMap**\<`TA`, `TB`\>(`selector`, `options`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`TB`\>\>

###### options

###### innerType

`Pick`\<[`DeferredComputationWithSideEffectsLike`](../../../computations/interfaces/DeferredComputationWithSideEffectsLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TB`\>\>

***

### firstAsync()

> **firstAsync**\<`T`\>(`scheduler`, `options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, `Promise`\<[`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>\>

#### Type Parameters

• **T**

#### Parameters

##### scheduler

[`SchedulerLike`](../../interfaces/SchedulerLike.md)

##### options?

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, `Promise`\<[`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>\>

***

### flatMapAsync()

> **flatMapAsync**\<`TA`, `TB`\>(`f`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TB`\>\>

#### Type Parameters

• **TA**

• **TB**

#### Parameters

##### f

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TA`, `AbortSignal`, `Promise`\<`TB`\>\>

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TB`\>\>

***

### flatMapIterable()

> **flatMapIterable**\<`TA`, `TB`\>(`selector`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`TA`, `TB`\>

#### Type Parameters

• **TA**

• **TB**

#### Parameters

##### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, `Iterable`\<`TB`, `any`, `any`\>\>

#### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`TA`, `TB`\>

***

### forEach()

> **forEach**\<`T`\>(`effect`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### effect

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`T`\>

#### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `T`\>

***

### forkMerge()

#### Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`fst`, `snd`, ...`tail`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TOut`\>\>

##### Type Parameters

• **TIn**

• **TOut**

##### Parameters

###### fst

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TOut`\>\>

###### snd

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TOut`\>\>

###### tail

...readonly [`Function1`](../../../functions/type-aliases/Function1.md)\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TOut`\>\>[]

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TOut`\>\>

#### Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`fst`, `snd`, ...`tail`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TOut`\>\>

##### Type Parameters

• **TIn**

• **TOut**

##### Parameters

###### fst

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\>, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TOut`\>\>

###### snd

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\>, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TOut`\>\>

###### tail

...readonly [`Function1`](../../../functions/type-aliases/Function1.md)\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\>, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TOut`\>\>[]

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TOut`\>\>

***

### fromAsyncFactory()

> **fromAsyncFactory**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`Function1`](../../../functions/type-aliases/Function1.md)\<`AbortSignal`, `Promise`\<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`Function1`](../../../functions/type-aliases/Function1.md)\<`AbortSignal`, `Promise`\<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

***

### fromAsyncIterable()

> **fromAsyncIterable**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<`AsyncIterable`\<`T`, `any`, `any`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`AsyncIterable`\<`T`, `any`, `any`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

***

### fromEventSource()

> **fromEventSource**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventSourceLike`](../../../events/interfaces/EventSourceLike.md)\<`T`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventSourceLike`](../../../events/interfaces/EventSourceLike.md)\<`T`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>\>

***

### fromIterable()

> **fromIterable**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<`Iterable`\<`T`, `any`, `any`\>, [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### delay

`number`

###### delayStart?

`boolean`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Iterable`\<`T`, `any`, `any`\>, [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\>\>

***

### fromPromise()

> **fromPromise**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<`Promise`\<`T`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Promise`\<`T`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>\>

***

### fromReadonlyArray()

> **fromReadonlyArray**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

###### delay?

`number`

###### delayStart?

`boolean`

###### start?

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>\>

***

### fromStore()

> **fromStore**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`StoreLike`](../../../events/interfaces/StoreLike.md)\<`T`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`StoreLike`](../../../events/interfaces/StoreLike.md)\<`T`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>\>

***

### fromValue()

> **fromValue**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<`T`, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### delay

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`T`, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>\>

***

### generate()

> **generate**\<`T`\>(`generator`, `initialValue`, `options`?): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### generator

[`Updater`](../../../functions/type-aliases/Updater.md)\<`T`\>

##### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`T`\>

##### options?

###### count?

`number`

###### delay?

`number`

###### delayStart?

`boolean`

#### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>

***

### ignoreElements()

> **ignoreElements**\<`T`\>(): [`ObservableOperator`](../type-aliases/ObservableOperator.md)\<`unknown`, `T`\>

#### Type Parameters

• **T**

#### Returns

[`ObservableOperator`](../type-aliases/ObservableOperator.md)\<`unknown`, `T`\>

***

### keep()

> **keep**\<`T`\>(`predicate`): [`ObservableOperator`](../type-aliases/ObservableOperator.md)\<`T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`T`\>

#### Returns

[`ObservableOperator`](../type-aliases/ObservableOperator.md)\<`T`, `T`\>

***

### keyFrame()

> **keyFrame**(`duration`, `options`?): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`number`\>

#### Parameters

##### duration

`number`

##### options?

###### easing?

[`Function1`](../../../functions/type-aliases/Function1.md)\<`number`, `number`\>

#### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`number`\>

***

### last()

> **last**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

###### maxMicroTaskTicks?

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, [`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>

***

### lastAsync()

> **lastAsync**\<`T`\>(`scheduler`, `options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, `Promise`\<[`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>\>

#### Type Parameters

• **T**

#### Parameters

##### scheduler

[`SchedulerLike`](../../interfaces/SchedulerLike.md)

##### options?

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, `Promise`\<[`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>\>

***

### log()

> **log**\<`T`\>(): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `T`\>

#### Type Parameters

• **T**

#### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `T`\>

***

### map()

> **map**\<`TA`, `TB`\>(`selector`): [`ObservableOperator`](../type-aliases/ObservableOperator.md)\<`TA`, `TB`\>

#### Type Parameters

• **TA**

• **TB**

#### Parameters

##### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, `TB`\>

#### Returns

[`ObservableOperator`](../type-aliases/ObservableOperator.md)\<`TA`, `TB`\>

***

### merge()

#### Call Signature

> **merge**\<`T`\>(`fst`, `snd`, ...`tail`): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### fst

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>

###### snd

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>

###### tail

...readonly [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>[]

##### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>

#### Call Signature

> **merge**\<`T`\>(`fst`, `snd`, ...`tail`): [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### fst

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>

###### snd

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>

###### tail

...readonly [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>[]

##### Returns

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>

#### Call Signature

> **merge**\<`T`\>(`fst`, `snd`, ...`tail`): [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### fst

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>

###### snd

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>

###### tail

...readonly [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>[]

##### Returns

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\>

#### Call Signature

> **merge**\<`T`\>(`fst`, `snd`, ...`tail`): [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### fst

[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>

###### snd

[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>

###### tail

...readonly [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>[]

##### Returns

[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>

#### Call Signature

> **merge**\<`T`\>(`fst`, `snd`, ...`tail`): [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### fst

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`T`\>

###### snd

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`T`\>

###### tail

...readonly [`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`T`\>[]

##### Returns

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>

#### Call Signature

> **merge**\<`T`\>(`fst`, `snd`, ...`tail`): [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### fst

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

###### snd

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

###### tail

...readonly [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>[]

##### Returns

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>

***

### mergeAll()

#### Call Signature

> **mergeAll**\<`T`\>(`options`?): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### options?

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

###### concurrency?

`number`

##### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>, `T`\>

#### Call Signature

> **mergeAll**\<`T`\>(`options`): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

###### concurrency?

`number`

###### innerType

`Pick`\<[`PureSynchronousComputationLike`](../../../computations/interfaces/PureSynchronousComputationLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

##### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>, `T`\>

#### Call Signature

> **mergeAll**\<`T`\>(`options`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

###### concurrency?

`number`

###### innerType

`Pick`\<[`SynchronousComputationWithSideEffectsLike`](../../../computations/interfaces/SynchronousComputationWithSideEffectsLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

##### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, `T`\>

#### Call Signature

> **mergeAll**\<`T`\>(`options`): [`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

###### concurrency?

`number`

###### innerType

`Pick`\<[`PureDeferredComputationLike`](../../../computations/interfaces/PureDeferredComputationLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

##### Returns

[`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>, `T`\>

#### Call Signature

> **mergeAll**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### options?

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

###### concurrency?

`number`

###### innerType

`Pick`\<[`DeferredComputationWithSideEffectsLike`](../../../computations/interfaces/DeferredComputationWithSideEffectsLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

***

### mergeMany()

#### Call Signature

> **mergeMany**\<`T`\>(`observables`): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### observables

readonly [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>[]

##### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>

#### Call Signature

> **mergeMany**\<`T`\>(`observables`): [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### observables

readonly [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>[]

##### Returns

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>

#### Call Signature

> **mergeMany**\<`T`\>(`observables`): [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### observables

readonly [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>[]

##### Returns

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\>

#### Call Signature

> **mergeMany**\<`T`\>(`observables`): [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### observables

readonly [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>[]

##### Returns

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>

#### Call Signature

> **mergeMany**\<`T`\>(`observables`): [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### observables

readonly [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>[]

##### Returns

[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>

#### Call Signature

> **mergeMany**\<`T`\>(`observables`): [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### observables

readonly [`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`T`\>[]

##### Returns

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>

#### Call Signature

> **mergeMany**\<`T`\>(`observables`): [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### observables

readonly [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>[]

##### Returns

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>

***

### mergeMap()

#### Call Signature

> **mergeMap**\<`TA`, `TB`\>(`selector`, `options`?): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`TA`, `TB`\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TB`\>\>

###### options?

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

###### concurrency?

`number`

##### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`TA`, `TB`\>

#### Call Signature

> **mergeMap**\<`TA`, `TB`\>(`selector`, `options`): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`TA`, `TB`\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TB`\>\>

###### options

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

###### concurrency?

`number`

###### innerType

`Pick`\<[`PureSynchronousComputationLike`](../../../computations/interfaces/PureSynchronousComputationLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

##### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`TA`, `TB`\>

#### Call Signature

> **mergeMap**\<`TA`, `TB`\>(`selector`, `options`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`TA`, `TB`\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TB`\>\>

###### options

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

###### concurrency?

`number`

###### innerType

`Pick`\<[`SynchronousComputationWithSideEffectsLike`](../../../computations/interfaces/SynchronousComputationWithSideEffectsLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

##### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`TA`, `TB`\>

#### Call Signature

> **mergeMap**\<`TA`, `TB`\>(`selector`, `options`): [`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`TA`, `TB`\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TB`\>\>

###### options

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

###### concurrency?

`number`

###### innerType

`Pick`\<[`PureDeferredComputationLike`](../../../computations/interfaces/PureDeferredComputationLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

##### Returns

[`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`TA`, `TB`\>

#### Call Signature

> **mergeMap**\<`TA`, `TB`\>(`selector`, `options`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`TB`\>\>

###### options

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

###### concurrency?

`number`

###### innerType

`Pick`\<[`DeferredComputationWithSideEffectsLike`](../../../computations/interfaces/DeferredComputationWithSideEffectsLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TB`\>\>

***

### mergeWith()

#### Call Signature

> **mergeWith**\<`T`\>(`snd`, ...`tail`): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### snd

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>

###### tail

...readonly [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>[]

##### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, `T`\>

#### Call Signature

> **mergeWith**\<`T`\>(`snd`, ...`tail`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### snd

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>

###### tail

...readonly [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>[]

##### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `T`\>

#### Call Signature

> **mergeWith**\<`T`\>(`snd`, ...`tail`): [`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### snd

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>

###### tail

...readonly [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>[]

##### Returns

[`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`T`, `T`\>

#### Call Signature

> **mergeWith**\<`T`\>(`snd`, ...`tail`): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### snd

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`T`\>

###### tail

...readonly [`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`T`\>[]

##### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, `T`\>

#### Call Signature

> **mergeWith**\<`T`\>(`snd`, ...`tail`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### snd

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

###### tail

...readonly [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>[]

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

***

### multicast()

> **multicast**\<`T`\>(`scheduler`, `options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Type Parameters

• **T**

#### Parameters

##### scheduler

[`SchedulerLike`](../../interfaces/SchedulerLike.md)

##### options?

###### autoDispose?

`boolean`

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

###### replay?

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\> & [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

***

### never()

> **never**\<`T`\>(): [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Returns

[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>

***

### notify()

> **notify**\<`T`\>(`eventListener`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### eventListener

[`EventListenerLike`](../../../events/interfaces/EventListenerLike.md)\<`T`\>

#### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `T`\>

***

### onSubscribe()

#### Call Signature

> **onSubscribe**\<`T`\>(`f`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### f

[`Factory`](../../../functions/type-aliases/Factory.md)\<[`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

##### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `T`\>

#### Call Signature

> **onSubscribe**\<`T`\>(`f`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### f

[`Factory`](../../../functions/type-aliases/Factory.md)\<[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<[`Optional`](../../../functions/type-aliases/Optional.md)\<`Error`\>\>\>

##### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `T`\>

#### Call Signature

> **onSubscribe**\<`T`\>(`f`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### f

[`SideEffect`](../../../functions/type-aliases/SideEffect.md)

##### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `T`\>

***

### pairwise()

> **pairwise**\<`T`\>(): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`T`, `T`\>\>

#### Type Parameters

• **T**

#### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`T`, `T`\>\>

***

### raise()

> **raise**\<`T`\>(`options`?): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### delay?

`number`

###### raise?

[`Factory`](../../../functions/type-aliases/Factory.md)\<`unknown`\>

#### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>

***

### reduce()

> **reduce**\<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### reducer

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, `TAcc`\>

***

### repeat()

#### Call Signature

> **repeat**\<`T`\>(`predicate`): [`ObservableOperator`](../type-aliases/ObservableOperator.md)\<`T`, `T`, [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`unknown`\>\>

##### Type Parameters

• **T**

##### Parameters

###### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`number`\>

##### Returns

[`ObservableOperator`](../type-aliases/ObservableOperator.md)\<`T`, `T`, [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`unknown`\>\>

#### Call Signature

> **repeat**\<`T`\>(`count`): [`ObservableOperator`](../type-aliases/ObservableOperator.md)\<`T`, `T`, [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`unknown`\>\>

##### Type Parameters

• **T**

##### Parameters

###### count

`number`

##### Returns

[`ObservableOperator`](../type-aliases/ObservableOperator.md)\<`T`, `T`, [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`unknown`\>\>

#### Call Signature

> **repeat**\<`T`\>(): [`ObservableOperator`](../type-aliases/ObservableOperator.md)\<`T`, `T`, [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`unknown`\>\>

##### Type Parameters

• **T**

##### Returns

[`ObservableOperator`](../type-aliases/ObservableOperator.md)\<`T`, `T`, [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`unknown`\>\>

***

### retry()

> **retry**\<`T`\>(`shouldRetry`?): [`ObservableOperator`](../type-aliases/ObservableOperator.md)\<`T`, `T`, [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`unknown`\>\>

#### Type Parameters

• **T**

#### Parameters

##### shouldRetry?

(`count`, `error`) => `boolean`

#### Returns

[`ObservableOperator`](../type-aliases/ObservableOperator.md)\<`T`, `T`, [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`unknown`\>\>

***

### run()

> **run**\<`T`\>(`options`?): [`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

###### maxMicroTaskTicks?

`number`

#### Returns

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>\>

***

### scan()

> **scan**\<`T`, `TAcc`\>(`reducer`, `initialValue`): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### reducer

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, `TAcc`\>

***

### scanMany()

#### Call Signature

> **scanMany**\<`T`, `TAcc`\>(`scanner`, `initialValue`): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, `TAcc`\>

##### Type Parameters

• **T**

• **TAcc**

##### Parameters

###### scanner

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TAcc`, `T`, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TAcc`\>\>

###### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

##### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, `TAcc`\>

#### Call Signature

> **scanMany**\<`T`, `TAcc`\>(`scanner`, `initialValue`, `options`): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, `TAcc`\>

##### Type Parameters

• **T**

• **TAcc**

##### Parameters

###### scanner

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TAcc`, `T`, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TAcc`\>\>

###### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

###### options

###### innerType

`Pick`\<[`PureSynchronousComputationLike`](../../../computations/interfaces/PureSynchronousComputationLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

##### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, `TAcc`\>

#### Call Signature

> **scanMany**\<`T`, `TAcc`\>(`scanner`, `initialValue`, `options`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `TAcc`\>

##### Type Parameters

• **T**

• **TAcc**

##### Parameters

###### scanner

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TAcc`, `T`, [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TAcc`\>\>

###### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

###### options

###### innerType

`Pick`\<[`SynchronousComputationWithSideEffectsLike`](../../../computations/interfaces/SynchronousComputationWithSideEffectsLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

##### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `TAcc`\>

#### Call Signature

> **scanMany**\<`T`, `TAcc`\>(`scanner`, `initialValue`, `options`): [`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`T`, `TAcc`\>

##### Type Parameters

• **T**

• **TAcc**

##### Parameters

###### scanner

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TAcc`, `T`, [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TAcc`\>\>

###### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

###### options

###### innerType

`Pick`\<[`PureDeferredComputationLike`](../../../computations/interfaces/PureDeferredComputationLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

##### Returns

[`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`T`, `TAcc`\>

#### Call Signature

> **scanMany**\<`T`, `TAcc`\>(`scanner`, `initialValue`, `options`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TAcc`\>\>

##### Type Parameters

• **T**

• **TAcc**

##### Parameters

###### scanner

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TAcc`, `T`, [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`TAcc`\>\>

###### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

###### options

###### innerType

`Pick`\<[`DeferredComputationWithSideEffectsLike`](../../../computations/interfaces/DeferredComputationWithSideEffectsLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TAcc`\>\>

***

### skipFirst()

> **skipFirst**\<`T`\>(`options`?): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, `T`\>

***

### spring()

> **spring**(`options`?): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`number`\>

#### Parameters

##### options?

###### damping?

`number`

###### precision?

`number`

###### stiffness?

`number`

#### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`number`\>

***

### startWith()

> **startWith**\<`T`\>(`value`, ...`values`): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### value

`T`

##### values

...readonly `T`[]

#### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, `T`\>

***

### subscribe()

> **subscribe**\<`T`\>(`scheduler`, `options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Type Parameters

• **T**

#### Parameters

##### scheduler

[`SchedulerLike`](../../interfaces/SchedulerLike.md)

##### options?

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

***

### subscribeOn()

> **subscribeOn**\<`T`\>(`scheduler`, `options`?): \<`TObservableIn`\>(`observable`) => `TObservableIn` *extends* [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\> ? [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\> : `TObservableIn` *extends* [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\> ? [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\> : `TObservableIn` *extends* [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\> ? [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\> : `TObservableIn` *extends* [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\> ? [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\> : `TObservableIn` *extends* [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\> ? [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\> : [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### scheduler

[`SchedulerLike`](../../interfaces/SchedulerLike.md)

##### options?

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

#### Returns

`Function`

##### Type Parameters

• **TObservableIn** *extends* [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

##### Parameters

###### observable

`TObservableIn`

##### Returns

`TObservableIn` *extends* [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\> ? [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\> : `TObservableIn` *extends* [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\> ? [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\> : `TObservableIn` *extends* [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`T`\> ? [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\> : `TObservableIn` *extends* [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\> ? [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\> : `TObservableIn` *extends* [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\> ? [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\> : [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

***

### switchAll()

#### Call Signature

> **switchAll**\<`T`\>(): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>, `T`\>

##### Type Parameters

• **T**

##### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>, `T`\>

#### Call Signature

> **switchAll**\<`T`\>(`options`): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### innerType

`Pick`\<[`PureSynchronousComputationLike`](../../../computations/interfaces/PureSynchronousComputationLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

##### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`T`\>, `T`\>

#### Call Signature

> **switchAll**\<`T`\>(`options`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### innerType

`Pick`\<[`SynchronousComputationWithSideEffectsLike`](../../../computations/interfaces/SynchronousComputationWithSideEffectsLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

##### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, `T`\>

#### Call Signature

> **switchAll**\<`T`\>(`options`): [`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### innerType

`Pick`\<[`PureDeferredComputationLike`](../../../computations/interfaces/PureDeferredComputationLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

##### Returns

[`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>, `T`\>

#### Call Signature

> **switchAll**\<`T`\>(`options`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### innerType

`Pick`\<[`DeferredComputationWithSideEffectsLike`](../../../computations/interfaces/DeferredComputationWithSideEffectsLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

***

### switchMap()

#### Call Signature

> **switchMap**\<`TA`, `TB`\>(`selector`): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`TA`, `TB`\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TB`\>\>

##### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`TA`, `TB`\>

#### Call Signature

> **switchMap**\<`TA`, `TB`\>(`selector`, `options`): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`TA`, `TB`\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TB`\>\>

###### options

###### innerType

`Pick`\<[`PureSynchronousComputationLike`](../../../computations/interfaces/PureSynchronousComputationLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

##### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`TA`, `TB`\>

#### Call Signature

> **switchMap**\<`TA`, `TB`\>(`selector`, `options`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`TA`, `TB`\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TB`\>\>

###### options

###### innerType

`Pick`\<[`SynchronousComputationWithSideEffectsLike`](../../../computations/interfaces/SynchronousComputationWithSideEffectsLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

##### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`TA`, `TB`\>

#### Call Signature

> **switchMap**\<`TA`, `TB`\>(`selector`, `options`): [`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`TA`, `TB`\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TB`\>\>

###### options

###### innerType

`Pick`\<[`PureDeferredComputationLike`](../../../computations/interfaces/PureDeferredComputationLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

##### Returns

[`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`TA`, `TB`\>

#### Call Signature

> **switchMap**\<`TA`, `TB`\>(`selector`, `options`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`TB`\>\>

###### options

###### innerType

`Pick`\<[`DeferredComputationWithSideEffectsLike`](../../../computations/interfaces/DeferredComputationWithSideEffectsLike.md), *typeof* [`ComputationLike_isPure`](../../../computations/variables/ComputationLike_isPure.md) \| *typeof* [`ComputationLike_isDeferred`](../../../computations/variables/ComputationLike_isDeferred.md) \| *typeof* [`ComputationLike_isSynchronous`](../../../computations/variables/ComputationLike_isSynchronous.md)\>

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TB`\>\>

***

### takeFirst()

> **takeFirst**\<`T`\>(`options`?): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, `T`\>

***

### takeLast()

> **takeLast**\<`T`\>(`options`?): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count?

`number`

#### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, `T`\>

***

### takeUntil()

#### Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### notifier

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)

##### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, `T`\>

#### Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### notifier

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)

##### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `T`\>

#### Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### notifier

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

#### Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### notifier

[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)

##### Returns

[`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`T`, `T`\>

***

### takeWhile()

> **takeWhile**\<`T`\>(`predicate`, `options`?): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`T`\>

##### options?

###### inclusive?

`boolean`

#### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, `T`\>

***

### throttle()

> **throttle**\<`T`\>(`duration`, `options`?): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### duration

`number`

##### options?

###### mode?

[`ThrottleMode`](../type-aliases/ThrottleMode.md)

#### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, `T`\>

***

### throwIfEmpty()

> **throwIfEmpty**\<`T`\>(`factory`): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../../functions/type-aliases/Factory.md)\<`unknown`\>

#### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`T`, `T`\>

***

### toEventSource()

> **toEventSource**\<`T`\>(`scheduler`, `options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`EventSourceLike`](../../../events/interfaces/EventSourceLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### scheduler

[`SchedulerLike`](../../interfaces/SchedulerLike.md)

##### options?

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`EventSourceLike`](../../../events/interfaces/EventSourceLike.md)\<`T`\>\>

***

### toReadonlyArray()

> **toReadonlyArray**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, readonly `T`[]\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

###### maxMicroTaskTicks?

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, readonly `T`[]\>

***

### toReadonlyArrayAsync()

> **toReadonlyArrayAsync**\<`T`\>(`scheduler`, `options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, `Promise`\<readonly `T`[]\>\>

#### Type Parameters

• **T**

#### Parameters

##### scheduler

[`SchedulerLike`](../../interfaces/SchedulerLike.md)

##### options?

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, `Promise`\<readonly `T`[]\>\>

***

### toRunnable()

> **toRunnable**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, [`RunnableLike`](../../../computations/interfaces/RunnableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity?

`number`

###### maxMicroTaskTicks?

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`T`\>, [`RunnableLike`](../../../computations/interfaces/RunnableLike.md)\<`T`\>\>

***

### withCurrentTime()

> **withCurrentTime**\<`TA`, `TB`\>(`selector`): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`TA`, `TB`\>

#### Type Parameters

• **TA**

• **TB**

#### Parameters

##### selector

[`Function2`](../../../functions/type-aliases/Function2.md)\<`number`, `TA`, `TB`\>

#### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`TA`, `TB`\>

***

### withLatestFrom()

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### other

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TB`\>

##### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`TA`, `T`\>

##### Type Parameters

• **TA**

• **TB**

• **T**

##### Parameters

###### other

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TB`\>

###### selector

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

##### Returns

[`DeferredReactiveObservableOperator`](../type-aliases/DeferredReactiveObservableOperator.md)\<`TA`, `T`\>

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### other

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`TB`\>

##### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`TA`, `T`\>

##### Type Parameters

• **TA**

• **TB**

• **T**

##### Parameters

###### other

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<`TB`\>

###### selector

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

##### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`TA`, `T`\>

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### other

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TB`\>

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>\>

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

##### Type Parameters

• **TA**

• **TB**

• **T**

##### Parameters

###### other

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TB`\>

###### selector

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`\>(`other`): [`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### other

[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TB`\>

##### Returns

[`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`TA`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`TA`, `T`\>

##### Type Parameters

• **TA**

• **TB**

• **T**

##### Parameters

###### other

[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TB`\>

###### selector

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

##### Returns

[`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`TA`, `T`\>

***

### zipLatest()

#### Call Signature

> **zipLatest**\<`TA`, `TB`\>(`a`, `b`): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### a

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TA`\>

###### b

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TB`\>

##### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

##### Parameters

###### a

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TA`\>

###### b

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TB`\>

###### c

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TC`\>

##### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

##### Parameters

###### a

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TA`\>

###### b

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TB`\>

###### c

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TC`\>

###### d

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TD`\>

##### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<[`Tuple5`](../../../functions/type-aliases/Tuple5.md)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

##### Parameters

###### a

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TA`\>

###### b

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TB`\>

###### c

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TC`\>

###### d

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TD`\>

###### e

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TE`\>

##### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<[`Tuple5`](../../../functions/type-aliases/Tuple5.md)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<[`Tuple6`](../../../functions/type-aliases/Tuple6.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

##### Parameters

###### a

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TA`\>

###### b

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TB`\>

###### c

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TC`\>

###### d

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TD`\>

###### e

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TE`\>

###### f

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TF`\>

##### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<[`Tuple6`](../../../functions/type-aliases/Tuple6.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<[`Tuple7`](../../../functions/type-aliases/Tuple7.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

• **TG**

##### Parameters

###### a

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TA`\>

###### b

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TB`\>

###### c

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TC`\>

###### d

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TD`\>

###### e

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TE`\>

###### f

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TF`\>

###### g

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TG`\>

##### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<[`Tuple7`](../../../functions/type-aliases/Tuple7.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<[`Tuple8`](../../../functions/type-aliases/Tuple8.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

• **TG**

• **TH**

##### Parameters

###### a

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TA`\>

###### b

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TB`\>

###### c

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TC`\>

###### d

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TD`\>

###### e

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TE`\>

###### f

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TF`\>

###### g

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TG`\>

###### h

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TH`\>

##### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<[`Tuple8`](../../../functions/type-aliases/Tuple8.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<[`Tuple9`](../../../functions/type-aliases/Tuple9.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

• **TG**

• **TH**

• **TI**

##### Parameters

###### a

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TA`\>

###### b

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TB`\>

###### c

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TC`\>

###### d

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TD`\>

###### e

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TE`\>

###### f

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TF`\>

###### g

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TG`\>

###### h

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TH`\>

###### i

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<`TI`\>

##### Returns

[`PureSynchronousObservableLike`](../../interfaces/PureSynchronousObservableLike.md)\<[`Tuple9`](../../../functions/type-aliases/Tuple9.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`\>(`a`, `b`): [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### a

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TA`\>

###### b

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TB`\>

##### Returns

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

##### Parameters

###### a

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TA`\>

###### b

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TB`\>

###### c

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TC`\>

##### Returns

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

##### Parameters

###### a

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TA`\>

###### b

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TB`\>

###### c

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TC`\>

###### d

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TD`\>

##### Returns

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<[`Tuple5`](../../../functions/type-aliases/Tuple5.md)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

##### Parameters

###### a

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TA`\>

###### b

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TB`\>

###### c

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TC`\>

###### d

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TD`\>

###### e

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TE`\>

##### Returns

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<[`Tuple5`](../../../functions/type-aliases/Tuple5.md)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<[`Tuple6`](../../../functions/type-aliases/Tuple6.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

##### Parameters

###### a

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TA`\>

###### b

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TB`\>

###### c

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TC`\>

###### d

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TD`\>

###### e

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TE`\>

###### f

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TF`\>

##### Returns

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<[`Tuple6`](../../../functions/type-aliases/Tuple6.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<[`Tuple7`](../../../functions/type-aliases/Tuple7.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

• **TG**

##### Parameters

###### a

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TA`\>

###### b

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TB`\>

###### c

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TC`\>

###### d

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TD`\>

###### e

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TE`\>

###### f

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TF`\>

###### g

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TG`\>

##### Returns

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<[`Tuple7`](../../../functions/type-aliases/Tuple7.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<[`Tuple8`](../../../functions/type-aliases/Tuple8.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

• **TG**

• **TH**

##### Parameters

###### a

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TA`\>

###### b

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TB`\>

###### c

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TC`\>

###### d

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TD`\>

###### e

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TE`\>

###### f

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TF`\>

###### g

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TG`\>

###### h

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TH`\>

##### Returns

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<[`Tuple8`](../../../functions/type-aliases/Tuple8.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<[`Tuple9`](../../../functions/type-aliases/Tuple9.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

• **TG**

• **TH**

• **TI**

##### Parameters

###### a

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TA`\>

###### b

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TB`\>

###### c

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TC`\>

###### d

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TD`\>

###### e

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TE`\>

###### f

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TF`\>

###### g

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TG`\>

###### h

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TH`\>

###### i

[`SynchronousObservableLike`](../../interfaces/SynchronousObservableLike.md)\<`TI`\>

##### Returns

[`SynchronousObservableWithSideEffectsLike`](../../interfaces/SynchronousObservableWithSideEffectsLike.md)\<[`Tuple9`](../../../functions/type-aliases/Tuple9.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`\>(`a`, `b`): [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### a

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TA`\>

###### b

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TB`\>

##### Returns

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

##### Parameters

###### a

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TA`\>

###### b

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TB`\>

###### c

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TC`\>

##### Returns

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

##### Parameters

###### a

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TA`\>

###### b

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TB`\>

###### c

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TC`\>

###### d

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TD`\>

##### Returns

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple5`](../../../functions/type-aliases/Tuple5.md)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

##### Parameters

###### a

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TA`\>

###### b

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TB`\>

###### c

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TC`\>

###### d

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TD`\>

###### e

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TE`\>

##### Returns

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple5`](../../../functions/type-aliases/Tuple5.md)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple6`](../../../functions/type-aliases/Tuple6.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

##### Parameters

###### a

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TA`\>

###### b

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TB`\>

###### c

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TC`\>

###### d

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TD`\>

###### e

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TE`\>

###### f

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TF`\>

##### Returns

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple6`](../../../functions/type-aliases/Tuple6.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple7`](../../../functions/type-aliases/Tuple7.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

• **TG**

##### Parameters

###### a

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TA`\>

###### b

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TB`\>

###### c

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TC`\>

###### d

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TD`\>

###### e

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TE`\>

###### f

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TF`\>

###### g

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TG`\>

##### Returns

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple7`](../../../functions/type-aliases/Tuple7.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple8`](../../../functions/type-aliases/Tuple8.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

• **TG**

• **TH**

##### Parameters

###### a

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TA`\>

###### b

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TB`\>

###### c

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TC`\>

###### d

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TD`\>

###### e

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TE`\>

###### f

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TF`\>

###### g

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TG`\>

###### h

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TH`\>

##### Returns

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple8`](../../../functions/type-aliases/Tuple8.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple9`](../../../functions/type-aliases/Tuple9.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

• **TG**

• **TH**

• **TI**

##### Parameters

###### a

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TA`\>

###### b

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TB`\>

###### c

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TC`\>

###### d

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TD`\>

###### e

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TE`\>

###### f

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TF`\>

###### g

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TG`\>

###### h

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TH`\>

###### i

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`TI`\>

##### Returns

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<[`Tuple9`](../../../functions/type-aliases/Tuple9.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`\>(`a`, `b`): [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### a

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>

###### b

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\>

##### Returns

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

##### Parameters

###### a

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>

###### b

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\>

###### c

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TC`\>

##### Returns

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

##### Parameters

###### a

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>

###### b

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\>

###### c

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TC`\>

###### d

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TD`\>

##### Returns

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<[`Tuple5`](../../../functions/type-aliases/Tuple5.md)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

##### Parameters

###### a

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>

###### b

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\>

###### c

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TC`\>

###### d

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TD`\>

###### e

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TE`\>

##### Returns

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<[`Tuple5`](../../../functions/type-aliases/Tuple5.md)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<[`Tuple6`](../../../functions/type-aliases/Tuple6.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

##### Parameters

###### a

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>

###### b

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\>

###### c

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TC`\>

###### d

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TD`\>

###### e

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TE`\>

###### f

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TF`\>

##### Returns

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<[`Tuple6`](../../../functions/type-aliases/Tuple6.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<[`Tuple7`](../../../functions/type-aliases/Tuple7.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

• **TG**

##### Parameters

###### a

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>

###### b

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\>

###### c

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TC`\>

###### d

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TD`\>

###### e

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TE`\>

###### f

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TF`\>

###### g

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TG`\>

##### Returns

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<[`Tuple7`](../../../functions/type-aliases/Tuple7.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<[`Tuple8`](../../../functions/type-aliases/Tuple8.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

• **TG**

• **TH**

##### Parameters

###### a

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>

###### b

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\>

###### c

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TC`\>

###### d

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TD`\>

###### e

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TE`\>

###### f

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TF`\>

###### g

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TG`\>

###### h

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TH`\>

##### Returns

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<[`Tuple8`](../../../functions/type-aliases/Tuple8.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<[`Tuple9`](../../../functions/type-aliases/Tuple9.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

• **TG**

• **TH**

• **TI**

##### Parameters

###### a

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>

###### b

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TB`\>

###### c

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TC`\>

###### d

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TD`\>

###### e

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TE`\>

###### f

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TF`\>

###### g

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TG`\>

###### h

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TH`\>

###### i

[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TI`\>

##### Returns

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<[`Tuple9`](../../../functions/type-aliases/Tuple9.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>
