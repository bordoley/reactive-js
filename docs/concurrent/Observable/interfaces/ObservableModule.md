[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [concurrent/Observable](../README.md) / ObservableModule

# Interface: ObservableModule

## Properties

### currentTime

> **currentTime**: [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`number`\>

## Methods

### backpressureStrategy()

> **backpressureStrategy**\<`T`\>(`capacity`, `backpressureStrategy`): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### capacity

`number`

##### backpressureStrategy

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

#### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

***

### buffer()

> **buffer**\<`T`\>(`options`?): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, readonly `T`[], [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count

`number`

#### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, readonly `T`[], [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

***

### catchError()

> **catchError**\<`T`\>(`onError`): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### onError

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<`Error`\>

#### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

***

### combineLatest()

#### Call Signature

> **combineLatest**\<`TA`, `TB`\>(`a`, `b`): [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### a

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TA`\>

###### b

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TB`\>

##### Returns

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

##### Parameters

###### a

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TA`\>

###### b

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TB`\>

###### c

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TC`\>

##### Returns

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

##### Parameters

###### a

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TA`\>

###### b

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TB`\>

###### c

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TC`\>

###### d

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TD`\>

##### Returns

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<[`Tuple5`](../../../functions/type-aliases/Tuple5.md)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

##### Parameters

###### a

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TA`\>

###### b

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TB`\>

###### c

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TC`\>

###### d

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TD`\>

###### e

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TE`\>

##### Returns

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<[`Tuple5`](../../../functions/type-aliases/Tuple5.md)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<[`Tuple6`](../../../functions/type-aliases/Tuple6.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

##### Parameters

###### a

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TA`\>

###### b

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TB`\>

###### c

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TC`\>

###### d

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TD`\>

###### e

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TE`\>

###### f

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TF`\>

##### Returns

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<[`Tuple6`](../../../functions/type-aliases/Tuple6.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<[`Tuple7`](../../../functions/type-aliases/Tuple7.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TA`\>

###### b

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TB`\>

###### c

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TC`\>

###### d

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TD`\>

###### e

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TE`\>

###### f

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TF`\>

###### g

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TG`\>

##### Returns

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<[`Tuple7`](../../../functions/type-aliases/Tuple7.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<[`Tuple8`](../../../functions/type-aliases/Tuple8.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TA`\>

###### b

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TB`\>

###### c

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TC`\>

###### d

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TD`\>

###### e

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TE`\>

###### f

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TF`\>

###### g

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TG`\>

###### h

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TH`\>

##### Returns

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<[`Tuple8`](../../../functions/type-aliases/Tuple8.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<[`Tuple9`](../../../functions/type-aliases/Tuple9.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TA`\>

###### b

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TB`\>

###### c

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TC`\>

###### d

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TD`\>

###### e

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TE`\>

###### f

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TF`\>

###### g

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TG`\>

###### h

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TH`\>

###### i

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TI`\>

##### Returns

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<[`Tuple9`](../../../functions/type-aliases/Tuple9.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`\>(`a`, `b`): [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### a

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TA`\>

###### b

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TB`\>

##### Returns

[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

##### Parameters

###### a

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TA`\>

###### b

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TB`\>

###### c

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TC`\>

##### Returns

[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

##### Parameters

###### a

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TA`\>

###### b

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TB`\>

###### c

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TC`\>

###### d

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TD`\>

##### Returns

[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<[`Tuple5`](../../../functions/type-aliases/Tuple5.md)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

##### Parameters

###### a

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TA`\>

###### b

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TB`\>

###### c

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TC`\>

###### d

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TD`\>

###### e

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TE`\>

##### Returns

[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<[`Tuple5`](../../../functions/type-aliases/Tuple5.md)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<[`Tuple6`](../../../functions/type-aliases/Tuple6.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

##### Parameters

###### a

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TA`\>

###### b

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TB`\>

###### c

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TC`\>

###### d

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TD`\>

###### e

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TE`\>

###### f

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TF`\>

##### Returns

[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<[`Tuple6`](../../../functions/type-aliases/Tuple6.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<[`Tuple7`](../../../functions/type-aliases/Tuple7.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TA`\>

###### b

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TB`\>

###### c

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TC`\>

###### d

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TD`\>

###### e

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TE`\>

###### f

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TF`\>

###### g

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TG`\>

##### Returns

[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<[`Tuple7`](../../../functions/type-aliases/Tuple7.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<[`Tuple8`](../../../functions/type-aliases/Tuple8.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TA`\>

###### b

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TB`\>

###### c

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TC`\>

###### d

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TD`\>

###### e

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TE`\>

###### f

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TF`\>

###### g

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TG`\>

###### h

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TH`\>

##### Returns

[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<[`Tuple8`](../../../functions/type-aliases/Tuple8.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

#### Call Signature

> **combineLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<[`Tuple9`](../../../functions/type-aliases/Tuple9.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TA`\>

###### b

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TB`\>

###### c

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TC`\>

###### d

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TD`\>

###### e

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TE`\>

###### f

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TF`\>

###### g

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TG`\>

###### h

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TH`\>

###### i

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TI`\>

##### Returns

[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<[`Tuple9`](../../../functions/type-aliases/Tuple9.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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

###### mode

[`ComputeMode`](../type-aliases/ComputeMode.md)

#### Returns

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>

***

### computeRunnable()

> **computeRunnable**\<`T`\>(`computation`, `options`?): [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### computation

[`Factory`](../../../functions/type-aliases/Factory.md)\<`T`\>

##### options?

###### mode

[`ComputeMode`](../type-aliases/ComputeMode.md)

#### Returns

[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\>

***

### concat()

#### Call Signature

> **concat**\<`T`\>(`fst`, `snd`, ...`tail`): [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### fst

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>

###### snd

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>

###### tail

...readonly [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>[]

##### Returns

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>

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

> **concat**\<`T`\>(`fst`, `snd`, ...`tail`): [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### fst

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

###### snd

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

###### tail

...readonly [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>[]

##### Returns

[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\>

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

...readonly [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)[]

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

...readonly [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)[]

##### Returns

[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>

***

### concatAll()

#### Call Signature

> **concatAll**\<`T`\>(): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>\>\>

##### Type Parameters

• **T**

##### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>\>\>

#### Call Signature

> **concatAll**\<`T`\>(`options`): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>\>\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### innerType

`Pick`\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

##### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>\>\>

#### Call Signature

> **concatAll**\<`T`\>(`options`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### innerType

`Pick`\<[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

##### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>, `T`\>

#### Call Signature

> **concatAll**\<`T`\>(`options`): [`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>\>\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### innerType

`Pick`\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

##### Returns

[`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>\>\>

#### Call Signature

> **concatAll**\<`T`\>(`options`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### innerType

`Pick`\<[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

***

### concatMany()

#### Call Signature

> **concatMany**\<`T`\>(`observables`): [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### observables

readonly [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>[]

##### Returns

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>

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

> **concatMany**\<`T`\>(`observables`): [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### observables

readonly [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>[]

##### Returns

[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\>

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

> **concatMap**\<`TA`, `TB`\>(`selector`): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`TA`, `TB`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TB`\>\>

##### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`TA`, `TB`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

#### Call Signature

> **concatMap**\<`TA`, `TB`\>(`selector`, `options`): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`TA`, `TB`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TB`\>\>

###### options

###### innerType

`Pick`\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

##### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`TA`, `TB`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

#### Call Signature

> **concatMap**\<`TA`, `TB`\>(`selector`, `options`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`TA`, `TB`\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`RunnableLike`](../../interfaces/RunnableLike.md)\<`TB`\>\>

###### options

###### innerType

`Pick`\<[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

##### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`TA`, `TB`\>

#### Call Signature

> **concatMap**\<`TA`, `TB`\>(`selector`, `options`): [`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`TA`, `TB`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TB`\>\>

###### options

###### innerType

`Pick`\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

##### Returns

[`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`TA`, `TB`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

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

`Pick`\<[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TB`\>\>

***

### concatWith()

#### Call Signature

> **concatWith**\<`T`\>(`snd`, ...`tail`): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### snd

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>

###### tail

...readonly [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>[]

##### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

#### Call Signature

> **concatWith**\<`T`\>(`snd`, ...`tail`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### snd

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

###### tail

...readonly [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>[]

##### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `T`\>

#### Call Signature

> **concatWith**\<`T`\>(`snd`, ...`tail`): [`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`T`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### snd

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>

###### tail

...readonly [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>[]

##### Returns

[`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`T`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

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

> **decodeWithCharset**(`options`?): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`ArrayBuffer`, `string`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`ArrayBuffer`\>\>

#### Parameters

##### options?

###### charset

`string`

###### fatal

`boolean`

###### ignoreBOM

`boolean`

#### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`ArrayBuffer`, `string`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`ArrayBuffer`\>\>

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

> **distinctUntilChanged**\<`T`\>(`options`?): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### equality

[`Equality`](../../../functions/type-aliases/Equality.md)\<`T`\>

#### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

***

### empty()

#### Call Signature

> **empty**\<`T`\>(): [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Returns

[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>

#### Call Signature

> **empty**\<`T`\>(`options`?): [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### options?

###### delay

`number`

##### Returns

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>

***

### encodeUtf8()

> **encodeUtf8**(): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`string`, `Uint8Array`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`string`\>\>

#### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`string`, `Uint8Array`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`string`\>\>

***

### endWith()

> **endWith**\<`T`\>(`value`, ...`values`): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### value

`T`

##### values

...readonly `T`[]

#### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

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

> **exhaust**\<`T`\>(): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>\>\>

##### Type Parameters

• **T**

##### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>\>\>

#### Call Signature

> **exhaust**\<`T`\>(`options`): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>\>\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### innerType

`Pick`\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

##### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>\>\>

#### Call Signature

> **exhaust**\<`T`\>(`options`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### innerType

`Pick`\<[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

##### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>, `T`\>

#### Call Signature

> **exhaust**\<`T`\>(`options`): [`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>\>\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### innerType

`Pick`\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

##### Returns

[`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>\>\>

#### Call Signature

> **exhaust**\<`T`\>(`options`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### innerType

`Pick`\<[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

***

### exhaustMap()

#### Call Signature

> **exhaustMap**\<`TA`, `TB`\>(`selector`): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`TA`, `TB`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TB`\>\>

##### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`TA`, `TB`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

#### Call Signature

> **exhaustMap**\<`TA`, `TB`\>(`selector`, `options`): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`TA`, `TB`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TB`\>\>

###### options

###### innerType

`Pick`\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

##### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`TA`, `TB`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

#### Call Signature

> **exhaustMap**\<`TA`, `TB`\>(`selector`, `options`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`TA`, `TB`\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`RunnableLike`](../../interfaces/RunnableLike.md)\<`TB`\>\>

###### options

###### innerType

`Pick`\<[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

##### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`TA`, `TB`\>

#### Call Signature

> **exhaustMap**\<`TA`, `TB`\>(`selector`, `options`): [`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`TA`, `TB`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TB`\>\>

###### options

###### innerType

`Pick`\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

##### Returns

[`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`TA`, `TB`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

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

`Pick`\<[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

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

###### backpressureStrategy

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity

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

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, `Iterable`\<`TB`\>\>

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

> **forkMerge**\<`TIn`, `TOut`\>(`ops`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TIn`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TOut`\>\>

#### Type Parameters

• **TIn**

• **TOut**

#### Parameters

##### ops

\[[`Function1`](../../../functions/type-aliases/Function1.md)\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\>, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TOut`\>\>, [`Function1`](../../../functions/type-aliases/Function1.md)\<[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`TIn`\>, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TOut`\>\>, `...tail: Function1<MulticastObservableLike<TIn>, ObservableLike<TOut>>[]`\]

#### Returns

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

> **fromAsyncIterable**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<`AsyncIterable`\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`AsyncIterable`\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

***

### fromEventSource()

> **fromEventSource**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventSourceLike`](../../../events/interfaces/EventSourceLike.md)\<`T`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`EventSourceLike`](../../../events/interfaces/EventSourceLike.md)\<`T`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>\>

***

### fromIterable()

> **fromIterable**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<`Iterable`\<`T`\>, [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### delay

`number`

###### delayStart

`boolean`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Iterable`\<`T`\>, [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\>\>

***

### fromPromise()

> **fromPromise**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<`Promise`\<`T`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`Promise`\<`T`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>\>

***

### fromReadonlyArray()

> **fromReadonlyArray**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count

`number`

###### delay

`number`

###### delayStart

`boolean`

###### start

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<readonly `T`[], [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>\>

***

### fromStore()

> **fromStore**\<`T`\>(): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`StoreLike`](../../../events/interfaces/StoreLike.md)\<`T`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`StoreLike`](../../../events/interfaces/StoreLike.md)\<`T`\>, [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\>\>

***

### fromValue()

> **fromValue**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<`T`, [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### delay

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<`T`, [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>\>

***

### generate()

> **generate**\<`T`\>(`generator`, `initialValue`, `options`?): [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### generator

[`Updater`](../../../functions/type-aliases/Updater.md)\<`T`\>

##### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`T`\>

##### options?

###### delay

`number`

###### delayStart

`boolean`

#### Returns

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>

***

### ignoreElements()

> **ignoreElements**\<`T`\>(): [`PureStatelessObservableOperator`](../type-aliases/PureStatelessObservableOperator.md)\<`unknown`, `T`\>

#### Type Parameters

• **T**

#### Returns

[`PureStatelessObservableOperator`](../type-aliases/PureStatelessObservableOperator.md)\<`unknown`, `T`\>

***

### keep()

> **keep**\<`T`\>(`predicate`): [`PureStatelessObservableOperator`](../type-aliases/PureStatelessObservableOperator.md)\<`T`, `T`\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`T`\>

#### Returns

[`PureStatelessObservableOperator`](../type-aliases/PureStatelessObservableOperator.md)\<`T`, `T`\>

***

### keyFrame()

> **keyFrame**(`duration`, `options`?): [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`number`\>

#### Parameters

##### duration

`number`

##### options?

###### easing

[`Function1`](../../../functions/type-aliases/Function1.md)\<`number`, `number`\>

#### Returns

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`number`\>

***

### lastAsync()

> **lastAsync**\<`T`\>(`scheduler`, `options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, `Promise`\<[`Optional`](../../../functions/type-aliases/Optional.md)\<`T`\>\>\>

#### Type Parameters

• **T**

#### Parameters

##### scheduler

[`SchedulerLike`](../../interfaces/SchedulerLike.md)

##### options?

###### backpressureStrategy

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity

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

> **map**\<`TA`, `TB`\>(`selector`): [`PureStatelessObservableOperator`](../type-aliases/PureStatelessObservableOperator.md)\<`TA`, `TB`\>

#### Type Parameters

• **TA**

• **TB**

#### Parameters

##### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, `TB`\>

#### Returns

[`PureStatelessObservableOperator`](../type-aliases/PureStatelessObservableOperator.md)\<`TA`, `TB`\>

***

### merge()

#### Call Signature

> **merge**\<`T`\>(`fst`, `snd`, ...`tail`): [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### fst

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>

###### snd

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>

###### tail

...readonly [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>[]

##### Returns

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>

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

> **merge**\<`T`\>(`fst`, `snd`, ...`tail`): [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### fst

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

###### snd

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

###### tail

...readonly [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>[]

##### Returns

[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\>

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

> **mergeAll**\<`T`\>(`options`?): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>\>\>

##### Type Parameters

• **T**

##### Parameters

###### options?

###### backpressureStrategy

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity

`number`

###### concurrency

`number`

##### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>\>\>

#### Call Signature

> **mergeAll**\<`T`\>(`options`): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>\>\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### backpressureStrategy

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity

`number`

###### concurrency

`number`

###### innerType

`Pick`\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

##### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>\>\>

#### Call Signature

> **mergeAll**\<`T`\>(`options`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### backpressureStrategy

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity

`number`

###### concurrency

`number`

###### innerType

`Pick`\<[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

##### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>, `T`\>

#### Call Signature

> **mergeAll**\<`T`\>(`options`): [`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>\>\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### backpressureStrategy

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity

`number`

###### concurrency

`number`

###### innerType

`Pick`\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

##### Returns

[`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>\>\>

#### Call Signature

> **mergeAll**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### options?

###### backpressureStrategy

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity

`number`

###### concurrency

`number`

###### innerType

`Pick`\<[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

***

### mergeMany()

#### Call Signature

> **mergeMany**\<`T`\>(`observables`): [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### observables

readonly [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>[]

##### Returns

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>

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

> **mergeMany**\<`T`\>(`observables`): [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\>

##### Type Parameters

• **T**

##### Parameters

###### observables

readonly [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>[]

##### Returns

[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\>

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

> **mergeMap**\<`TA`, `TB`\>(`selector`, `options`?): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`TA`, `TB`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TB`\>\>

###### options?

###### backpressureStrategy

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity

`number`

###### concurrency

`number`

##### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`TA`, `TB`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

#### Call Signature

> **mergeMap**\<`TA`, `TB`\>(`selector`, `options`): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`TA`, `TB`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TB`\>\>

###### options

###### backpressureStrategy

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity

`number`

###### concurrency

`number`

###### innerType

`Pick`\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

##### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`TA`, `TB`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

#### Call Signature

> **mergeMap**\<`TA`, `TB`\>(`selector`, `options`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`TA`, `TB`\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`RunnableLike`](../../interfaces/RunnableLike.md)\<`TB`\>\>

###### options

###### backpressureStrategy

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity

`number`

###### concurrency

`number`

###### innerType

`Pick`\<[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

##### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`TA`, `TB`\>

#### Call Signature

> **mergeMap**\<`TA`, `TB`\>(`selector`, `options`): [`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`TA`, `TB`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TB`\>\>

###### options

###### backpressureStrategy

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity

`number`

###### concurrency

`number`

###### innerType

`Pick`\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

##### Returns

[`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`TA`, `TB`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

#### Call Signature

> **mergeMap**\<`TA`, `TB`\>(`selector`, `options`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`TB`\>\>

###### options

###### backpressureStrategy

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity

`number`

###### concurrency

`number`

###### innerType

`Pick`\<[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TB`\>\>

***

### mergeWith()

#### Call Signature

> **mergeWith**\<`T`\>(`snd`, ...`tail`): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### snd

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>

###### tail

...readonly [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>[]

##### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

#### Call Signature

> **mergeWith**\<`T`\>(`snd`, ...`tail`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### snd

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>

###### tail

...readonly [`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>[]

##### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `T`\>

#### Call Signature

> **mergeWith**\<`T`\>(`snd`, ...`tail`): [`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`T`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### snd

[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>

###### tail

...readonly [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>[]

##### Returns

[`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`T`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

#### Call Signature

> **mergeWith**\<`T`\>(`snd`, ...`tail`): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### snd

[`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`T`\>

###### tail

...readonly [`PureObservableLike`](../../interfaces/PureObservableLike.md)\<`T`\>[]

##### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

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

###### autoDispose

`boolean`

###### backpressureStrategy

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity

`number`

###### replay

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

> **pairwise**\<`T`\>(): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`T`, `T`\>, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, [`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`T`, `T`\>, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

***

### reduce()

> **reduce**\<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>, `TAcc`\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### reducer

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>, `TAcc`\>

***

### repeat()

#### Call Signature

> **repeat**\<`T`\>(`predicate`): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `T`, [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`number`\>

##### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `T`, [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>\>

#### Call Signature

> **repeat**\<`T`\>(`count`): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `T`, [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### count

`number`

##### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `T`, [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>\>

#### Call Signature

> **repeat**\<`T`\>(): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `T`, [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>\>

##### Type Parameters

• **T**

##### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `T`, [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>\>

***

### retry()

> **retry**\<`T`\>(`shouldRetry`?): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `T`, [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### shouldRetry?

(`count`, `error`) => `boolean`

#### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `T`, [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>\>

***

### run()

> **run**\<`T`\>(`options`?): [`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### backpressureStrategy

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity

`number`

###### maxMicroTaskTicks

`number`

#### Returns

[`SideEffect1`](../../../functions/type-aliases/SideEffect1.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>\>

***

### scan()

> **scan**\<`T`, `TAcc`\>(`reducer`, `initialValue`): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `TAcc`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

• **TAcc**

#### Parameters

##### reducer

[`Reducer`](../../../functions/type-aliases/Reducer.md)\<`T`, `TAcc`\>

##### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

#### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `TAcc`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

***

### scanMany()

#### Call Signature

> **scanMany**\<`T`, `TAcc`\>(`scanner`, `initialValue`): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `TAcc`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

##### Type Parameters

• **T**

• **TAcc**

##### Parameters

###### scanner

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TAcc`, `T`, [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TAcc`\>\>

###### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

##### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `TAcc`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

#### Call Signature

> **scanMany**\<`T`, `TAcc`\>(`scanner`, `initialValue`, `options`): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `TAcc`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

##### Type Parameters

• **T**

• **TAcc**

##### Parameters

###### scanner

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TAcc`, `T`, [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TAcc`\>\>

###### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

###### options

###### innerType

`Pick`\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

##### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `TAcc`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

#### Call Signature

> **scanMany**\<`T`, `TAcc`\>(`scanner`, `initialValue`, `options`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `TAcc`\>

##### Type Parameters

• **T**

• **TAcc**

##### Parameters

###### scanner

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TAcc`, `T`, [`RunnableLike`](../../interfaces/RunnableLike.md)\<`TAcc`\>\>

###### initialValue

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TAcc`\>

###### options

###### innerType

`Pick`\<[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

##### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `TAcc`\>

#### Call Signature

> **scanMany**\<`T`, `TAcc`\>(`scanner`, `initialValue`, `options`): [`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`T`, `TAcc`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

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

`Pick`\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

##### Returns

[`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`T`, `TAcc`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

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

`Pick`\<[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TAcc`\>\>

***

### skipFirst()

> **skipFirst**\<`T`\>(`options`?): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count

`number`

#### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

***

### spring()

> **spring**(`options`?): [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`number`\>

#### Parameters

##### options?

###### damping

`number`

###### precision

`number`

###### stiffness

`number`

#### Returns

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`number`\>

***

### startWith()

> **startWith**\<`T`\>(`value`, ...`values`): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### value

`T`

##### values

...readonly `T`[]

#### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

***

### subscribe()

> **subscribe**\<`T`\>(`scheduler`, `options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

#### Type Parameters

• **T**

#### Parameters

##### scheduler

[`SchedulerLike`](../../interfaces/SchedulerLike.md)

##### options?

###### backpressureStrategy

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`DisposableLike`](../../../utils/interfaces/DisposableLike.md)\>

***

### subscribeOn()

> **subscribeOn**\<`T`\>(`scheduler`, `options`?): \<`TObservableIn`\>(`observable`) => `TObservableIn` *extends* [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\> ? [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\> : `TObservableIn` *extends* [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\> ? [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\> : `TObservableIn` *extends* [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\> ? [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\> : `TObservableIn` *extends* [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\> ? [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\> : `TObservableIn` *extends* [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\> ? [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\> : [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### scheduler

[`SchedulerLike`](../../interfaces/SchedulerLike.md)

##### options?

###### backpressureStrategy

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity

`number`

#### Returns

`Function`

##### Type Parameters

• **TObservableIn** *extends* [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

##### Parameters

###### observable

`TObservableIn`

##### Returns

`TObservableIn` *extends* [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\> ? [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\> : `TObservableIn` *extends* [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\> ? [`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)\<`T`\> : `TObservableIn` *extends* [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`T`\> ? [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\> : `TObservableIn` *extends* [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\> ? [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\> : `TObservableIn` *extends* [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\> ? [`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\> : [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>

***

### switchAll()

#### Call Signature

> **switchAll**\<`T`\>(): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>\>\>

##### Type Parameters

• **T**

##### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>\>\>

#### Call Signature

> **switchAll**\<`T`\>(`options`): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>\>\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### innerType

`Pick`\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

##### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>\>\>

#### Call Signature

> **switchAll**\<`T`\>(`options`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### innerType

`Pick`\<[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

##### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>, `T`\>

#### Call Signature

> **switchAll**\<`T`\>(`options`): [`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>\>\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### innerType

`Pick`\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

##### Returns

[`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`T`\>\>\>

#### Call Signature

> **switchAll**\<`T`\>(`options`): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### options

###### innerType

`Pick`\<[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<[`DeferredObservableLike`](../../interfaces/DeferredObservableLike.md)\<`T`\>\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`T`\>\>

***

### switchMap()

#### Call Signature

> **switchMap**\<`TA`, `TB`\>(`selector`): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`TA`, `TB`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TB`\>\>

##### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`TA`, `TB`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

#### Call Signature

> **switchMap**\<`TA`, `TB`\>(`selector`, `options`): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`TA`, `TB`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TB`\>\>

###### options

###### innerType

`Pick`\<[`PureRunnableLike`](../../interfaces/PureRunnableLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

##### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`TA`, `TB`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

#### Call Signature

> **switchMap**\<`TA`, `TB`\>(`selector`, `options`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`TA`, `TB`\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`RunnableLike`](../../interfaces/RunnableLike.md)\<`TB`\>\>

###### options

###### innerType

`Pick`\<[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

##### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`TA`, `TB`\>

#### Call Signature

> **switchMap**\<`TA`, `TB`\>(`selector`, `options`): [`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`TA`, `TB`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### selector

[`Function1`](../../../functions/type-aliases/Function1.md)\<`TA`, [`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md)\<`TB`\>\>

###### options

###### innerType

`Pick`\<[`PureDeferredObservableLike`](../../interfaces/PureDeferredObservableLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

##### Returns

[`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`TA`, `TB`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

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

`Pick`\<[`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md), *typeof* [`ObservableLike_isDeferred`](../../variables/ObservableLike_isDeferred.md) \| *typeof* [`ObservableLike_isPure`](../../variables/ObservableLike_isPure.md) \| *typeof* [`ObservableLike_isRunnable`](../../variables/ObservableLike_isRunnable.md)\>

##### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>, [`DeferredObservableWithSideEffectsLike`](../../interfaces/DeferredObservableWithSideEffectsLike.md)\<`TB`\>\>

***

### takeFirst()

> **takeFirst**\<`T`\>(`options`?): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count

`number`

#### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

***

### takeLast()

> **takeLast**\<`T`\>(`options`?): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### count

`number`

#### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

***

### takeUntil()

#### Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### notifier

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)

##### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

#### Call Signature

> **takeUntil**\<`T`\>(`notifier`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`T`, `T`\>

##### Type Parameters

• **T**

##### Parameters

###### notifier

[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)

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

> **takeUntil**\<`T`\>(`notifier`): [`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`T`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

##### Type Parameters

• **T**

##### Parameters

###### notifier

[`MulticastObservableLike`](../../interfaces/MulticastObservableLike.md)

##### Returns

[`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`T`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

***

### takeWhile()

> **takeWhile**\<`T`\>(`predicate`, `options`?): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### predicate

[`Predicate`](../../../functions/type-aliases/Predicate.md)\<`T`\>

##### options?

###### inclusive

`boolean`

#### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

***

### throttle()

> **throttle**\<`T`\>(`duration`, `options`?): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### duration

`number`

##### options?

###### mode

[`ThrottleMode`](../type-aliases/ThrottleMode.md)

#### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

***

### throwIfEmpty()

> **throwIfEmpty**\<`T`\>(`factory`, `options`?): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### factory

[`Factory`](../../../functions/type-aliases/Factory.md)\<`unknown`\>

##### options?

`undefined`

#### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`T`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>\>

***

### throws()

> **throws**\<`T`\>(`options`?): [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### delay

`number`

###### raise

[`Factory`](../../../functions/type-aliases/Factory.md)\<`unknown`\>

#### Returns

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>

***

### toEventSource()

> **toEventSource**\<`T`\>(`scheduler`, `options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`EventSourceLike`](../../../events/interfaces/EventSourceLike.md)\<`T`\>\>

#### Type Parameters

• **T**

#### Parameters

##### scheduler

[`SchedulerLike`](../../interfaces/SchedulerLike.md)

##### options?

###### backpressureStrategy

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, [`EventSourceLike`](../../../events/interfaces/EventSourceLike.md)\<`T`\>\>

***

### toReadonlyArray()

> **toReadonlyArray**\<`T`\>(`options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>, readonly `T`[]\>

#### Type Parameters

• **T**

#### Parameters

##### options?

###### backpressureStrategy

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity

`number`

###### maxMicroTaskTicks

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`RunnableLike`](../../interfaces/RunnableLike.md)\<`T`\>, readonly `T`[]\>

***

### toReadonlyArrayAsync()

> **toReadonlyArrayAsync**\<`T`\>(`scheduler`, `options`?): [`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, `Promise`\<readonly `T`[]\>\>

#### Type Parameters

• **T**

#### Parameters

##### scheduler

[`SchedulerLike`](../../interfaces/SchedulerLike.md)

##### options?

###### backpressureStrategy

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

###### capacity

`number`

#### Returns

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`ObservableLike`](../../interfaces/ObservableLike.md)\<`T`\>, `Promise`\<readonly `T`[]\>\>

***

### withCurrentTime()

> **withCurrentTime**\<`TA`, `TB`\>(`selector`): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`TA`, `TB`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

#### Type Parameters

• **TA**

• **TB**

#### Parameters

##### selector

[`Function2`](../../../functions/type-aliases/Function2.md)\<`number`, `TA`, `TB`\>

#### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`TA`, `TB`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

***

### withLatestFrom()

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`TA`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

##### Type Parameters

• **TA**

• **TB**

• **T**

##### Parameters

###### other

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TB`\>

###### selector

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

##### Returns

[`PureStatefulObservableOperator`](../type-aliases/PureStatefulObservableOperator.md)\<`TA`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

#### Call Signature

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`TA`, `T`\>

##### Type Parameters

• **TA**

• **TB**

• **T**

##### Parameters

###### other

[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<`TB`\>

###### selector

[`Function2`](../../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

##### Returns

[`ObservableOperatorWithSideEffects`](../type-aliases/ObservableOperatorWithSideEffects.md)\<`TA`, `T`\>

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

> **withLatestFrom**\<`TA`, `TB`, `T`\>(`other`, `selector`): [`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`TA`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

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

[`DeferringObservableOperator`](../type-aliases/DeferringObservableOperator.md)\<`TA`, `T`, [`ObservableLike`](../../interfaces/ObservableLike.md)\<`TA`\>\>

***

### zipLatest()

#### Call Signature

> **zipLatest**\<`TA`, `TB`\>(`a`, `b`): [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### a

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TA`\>

###### b

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TB`\>

##### Returns

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

##### Parameters

###### a

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TA`\>

###### b

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TB`\>

###### c

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TC`\>

##### Returns

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

##### Parameters

###### a

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TA`\>

###### b

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TB`\>

###### c

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TC`\>

###### d

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TD`\>

##### Returns

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<[`Tuple5`](../../../functions/type-aliases/Tuple5.md)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

##### Parameters

###### a

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TA`\>

###### b

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TB`\>

###### c

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TC`\>

###### d

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TD`\>

###### e

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TE`\>

##### Returns

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<[`Tuple5`](../../../functions/type-aliases/Tuple5.md)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<[`Tuple6`](../../../functions/type-aliases/Tuple6.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

##### Parameters

###### a

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TA`\>

###### b

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TB`\>

###### c

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TC`\>

###### d

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TD`\>

###### e

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TE`\>

###### f

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TF`\>

##### Returns

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<[`Tuple6`](../../../functions/type-aliases/Tuple6.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<[`Tuple7`](../../../functions/type-aliases/Tuple7.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TA`\>

###### b

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TB`\>

###### c

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TC`\>

###### d

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TD`\>

###### e

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TE`\>

###### f

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TF`\>

###### g

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TG`\>

##### Returns

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<[`Tuple7`](../../../functions/type-aliases/Tuple7.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<[`Tuple8`](../../../functions/type-aliases/Tuple8.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TA`\>

###### b

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TB`\>

###### c

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TC`\>

###### d

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TD`\>

###### e

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TE`\>

###### f

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TF`\>

###### g

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TG`\>

###### h

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TH`\>

##### Returns

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<[`Tuple8`](../../../functions/type-aliases/Tuple8.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<[`Tuple9`](../../../functions/type-aliases/Tuple9.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TA`\>

###### b

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TB`\>

###### c

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TC`\>

###### d

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TD`\>

###### e

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TE`\>

###### f

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TF`\>

###### g

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TG`\>

###### h

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TH`\>

###### i

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`TI`\>

##### Returns

[`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<[`Tuple9`](../../../functions/type-aliases/Tuple9.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`\>(`a`, `b`): [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### a

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TA`\>

###### b

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TB`\>

##### Returns

[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<[`Tuple2`](../../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

##### Parameters

###### a

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TA`\>

###### b

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TB`\>

###### c

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TC`\>

##### Returns

[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<[`Tuple3`](../../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

##### Parameters

###### a

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TA`\>

###### b

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TB`\>

###### c

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TC`\>

###### d

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TD`\>

##### Returns

[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<[`Tuple4`](../../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`\>(`a`, `b`, `c`, `d`, `e`): [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<[`Tuple5`](../../../functions/type-aliases/Tuple5.md)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

##### Parameters

###### a

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TA`\>

###### b

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TB`\>

###### c

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TC`\>

###### d

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TD`\>

###### e

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TE`\>

##### Returns

[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<[`Tuple5`](../../../functions/type-aliases/Tuple5.md)\<`TA`, `TB`, `TC`, `TD`, `TE`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`a`, `b`, `c`, `d`, `e`, `f`): [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<[`Tuple6`](../../../functions/type-aliases/Tuple6.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

##### Parameters

###### a

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TA`\>

###### b

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TB`\>

###### c

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TC`\>

###### d

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TD`\>

###### e

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TE`\>

###### f

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TF`\>

##### Returns

[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<[`Tuple6`](../../../functions/type-aliases/Tuple6.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`): [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<[`Tuple7`](../../../functions/type-aliases/Tuple7.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

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

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TA`\>

###### b

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TB`\>

###### c

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TC`\>

###### d

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TD`\>

###### e

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TE`\>

###### f

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TF`\>

###### g

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TG`\>

##### Returns

[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<[`Tuple7`](../../../functions/type-aliases/Tuple7.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`): [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<[`Tuple8`](../../../functions/type-aliases/Tuple8.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

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

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TA`\>

###### b

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TB`\>

###### c

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TC`\>

###### d

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TD`\>

###### e

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TE`\>

###### f

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TF`\>

###### g

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TG`\>

###### h

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TH`\>

##### Returns

[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<[`Tuple8`](../../../functions/type-aliases/Tuple8.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`\>\>

#### Call Signature

> **zipLatest**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>(`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`): [`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<[`Tuple9`](../../../functions/type-aliases/Tuple9.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TA`\>

###### b

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TB`\>

###### c

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TC`\>

###### d

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TD`\>

###### e

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TE`\>

###### f

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TF`\>

###### g

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TG`\>

###### h

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TH`\>

###### i

[`RunnableLike`](../../interfaces/RunnableLike.md)\<`TI`\>

##### Returns

[`RunnableWithSideEffectsLike`](../../interfaces/RunnableWithSideEffectsLike.md)\<[`Tuple9`](../../../functions/type-aliases/Tuple9.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `TG`, `TH`, `TI`\>\>

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
