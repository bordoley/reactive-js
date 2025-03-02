[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / InteractiveComputationModule

# Interface: InteractiveComputationModule\<TComputation\>

## Extended by

- [`IterableModule`](../Iterable/interfaces/IterableModule.md)

## Type Parameters

• **TComputation** *extends* [`Computation`](../type-aliases/Computation.md)

## Methods

### zip()

#### Call Signature

> **zip**\<`TA`, `TB`\>(`a`, `b`): [`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputation`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### a

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputation`, `TA`\>

###### b

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputation`, `TB`\>

##### Returns

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputation`, [`Tuple2`](../../functions/type-aliases/Tuple2.md)\<`TA`, `TB`\>\>

#### Call Signature

> **zip**\<`TA`, `TB`, `TC`\>(`a`, `b`, `c`): [`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputation`, [`Tuple3`](../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

##### Parameters

###### a

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputation`, `TA`\>

###### b

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputation`, `TB`\>

###### c

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputation`, `TC`\>

##### Returns

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputation`, [`Tuple3`](../../functions/type-aliases/Tuple3.md)\<`TA`, `TB`, `TC`\>\>

#### Call Signature

> **zip**\<`TA`, `TB`, `TC`, `TD`\>(`a`, `b`, `c`, `d`): [`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputation`, [`Tuple4`](../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

##### Parameters

###### a

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputation`, `TA`\>

###### b

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputation`, `TB`\>

###### c

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputation`, `TC`\>

###### d

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputation`, `TD`\>

##### Returns

[`ComputationOf`](../type-aliases/ComputationOf.md)\<`TComputation`, [`Tuple4`](../../functions/type-aliases/Tuple4.md)\<`TA`, `TB`, `TC`, `TD`\>\>
