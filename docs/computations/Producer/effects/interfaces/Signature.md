[**Reactive-JS**](../../../../README.md)

***

[Reactive-JS](../../../../README.md) / [computations/Producer/effects](../README.md) / Signature

# Interface: Signature

## Methods

### \_\_await()

> **\_\_await**\<`T`\>(`producer`): `T`

#### Type Parameters

• **T**

#### Parameters

##### producer

[`EventSourceLike`](../../../interfaces/EventSourceLike.md)\<`T`\>

#### Returns

`T`

***

### \_\_constant()

> **\_\_constant**\<`T`\>(`value`, ...`args`): `T`

#### Type Parameters

• **T**

#### Parameters

##### value

`T`

##### args

...`unknown`[]

#### Returns

`T`

***

### \_\_do()

#### Call Signature

> **\_\_do**(`fn`): `void`

##### Parameters

###### fn

[`SideEffect`](../../../../functions/type-aliases/SideEffect.md)

##### Returns

`void`

#### Call Signature

> **\_\_do**\<`TA`\>(`fn`, `a`): `void`

##### Type Parameters

• **TA**

##### Parameters

###### fn

[`SideEffect1`](../../../../functions/type-aliases/SideEffect1.md)\<`TA`\>

###### a

`TA`

##### Returns

`void`

#### Call Signature

> **\_\_do**\<`TA`, `TB`\>(`fn`, `a`, `b`): `void`

##### Type Parameters

• **TA**

• **TB**

##### Parameters

###### fn

[`SideEffect2`](../../../../functions/type-aliases/SideEffect2.md)\<`TA`, `TB`\>

###### a

`TA`

###### b

`TB`

##### Returns

`void`

#### Call Signature

> **\_\_do**\<`TA`, `TB`, `TC`\>(`fn`, `a`, `b`, `c`): `void`

##### Type Parameters

• **TA**

• **TB**

• **TC**

##### Parameters

###### fn

[`SideEffect3`](../../../../functions/type-aliases/SideEffect3.md)\<`TA`, `TB`, `TC`\>

###### a

`TA`

###### b

`TB`

###### c

`TC`

##### Returns

`void`

#### Call Signature

> **\_\_do**\<`TA`, `TB`, `TC`, `TD`\>(`fn`, `a`, `b`, `c`, `d`): `void`

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

##### Parameters

###### fn

[`SideEffect4`](../../../../functions/type-aliases/SideEffect4.md)\<`TA`, `TB`, `TC`, `TD`\>

###### a

`TA`

###### b

`TB`

###### c

`TC`

###### d

`TD`

##### Returns

`void`

#### Call Signature

> **\_\_do**\<`TA`, `TB`, `TC`, `TD`, `TE`\>(`fn`, `a`, `b`, `c`, `d`, `e`): `void`

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

##### Parameters

###### fn

[`SideEffect5`](../../../../functions/type-aliases/SideEffect5.md)\<`TA`, `TB`, `TC`, `TD`, `TE`\>

###### a

`TA`

###### b

`TB`

###### c

`TC`

###### d

`TD`

###### e

`TE`

##### Returns

`void`

#### Call Signature

> **\_\_do**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>(`fn`, `a`, `b`, `c`, `d`, `e`, `f`): `void`

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

##### Parameters

###### fn

[`SideEffect6`](../../../../functions/type-aliases/SideEffect6.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`\>

###### a

`TA`

###### b

`TB`

###### c

`TC`

###### d

`TD`

###### e

`TE`

###### f

`TF`

##### Returns

`void`

***

### \_\_memo()

#### Call Signature

> **\_\_memo**\<`T`\>(`fn`): `T`

##### Type Parameters

• **T**

##### Parameters

###### fn

[`Factory`](../../../../functions/type-aliases/Factory.md)\<`T`\>

##### Returns

`T`

#### Call Signature

> **\_\_memo**\<`TA`, `T`\>(`fn`, `a`): `T`

##### Type Parameters

• **TA**

• **T**

##### Parameters

###### fn

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TA`, `T`\>

###### a

`TA`

##### Returns

`T`

#### Call Signature

> **\_\_memo**\<`TA`, `TB`, `T`\>(`fn`, `a`, `b`): `T`

##### Type Parameters

• **TA**

• **TB**

• **T**

##### Parameters

###### fn

[`Function2`](../../../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

###### a

`TA`

###### b

`TB`

##### Returns

`T`

#### Call Signature

> **\_\_memo**\<`TA`, `TB`, `TC`, `T`\>(`fn`, `a`, `b`, `c`): `T`

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **T**

##### Parameters

###### fn

[`Function3`](../../../../functions/type-aliases/Function3.md)\<`TA`, `TB`, `TC`, `T`\>

###### a

`TA`

###### b

`TB`

###### c

`TC`

##### Returns

`T`

#### Call Signature

> **\_\_memo**\<`TA`, `TB`, `TC`, `TD`, `T`\>(`fn`, `a`, `b`, `c`, `d`): `T`

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **T**

##### Parameters

###### fn

[`Function4`](../../../../functions/type-aliases/Function4.md)\<`TA`, `TB`, `TC`, `TD`, `T`\>

###### a

`TA`

###### b

`TB`

###### c

`TC`

###### d

`TD`

##### Returns

`T`

#### Call Signature

> **\_\_memo**\<`TA`, `TB`, `TC`, `TD`, `TE`, `T`\>(`fn`, `a`, `b`, `c`, `d`, `e`): `T`

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **T**

##### Parameters

###### fn

[`Function5`](../../../../functions/type-aliases/Function5.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `T`\>

###### a

`TA`

###### b

`TB`

###### c

`TC`

###### d

`TD`

###### e

`TE`

##### Returns

`T`

#### Call Signature

> **\_\_memo**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `T`\>(`fn`, `a`, `b`, `c`, `d`, `e`, `f`): `T`

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

• **T**

##### Parameters

###### fn

[`Function6`](../../../../functions/type-aliases/Function6.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `T`\>

###### a

`TA`

###### b

`TB`

###### c

`TC`

###### d

`TD`

###### e

`TE`

###### f

`TF`

##### Returns

`T`

***

### \_\_subscribe()

> **\_\_subscribe**\<`T`\>(`src`): [`Optional`](../../../../functions/type-aliases/Optional.md)\<`T`\>

#### Type Parameters

• **T**

#### Parameters

##### src

[`EventSourceLike`](../../../interfaces/EventSourceLike.md)\<`T`\>

#### Returns

[`Optional`](../../../../functions/type-aliases/Optional.md)\<`T`\>

***

### \_\_using()

#### Call Signature

> **\_\_using**\<`T`\>(`fn`): `T`

##### Type Parameters

• **T** *extends* [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)

##### Parameters

###### fn

[`Factory`](../../../../functions/type-aliases/Factory.md)\<`T`\>

##### Returns

`T`

#### Call Signature

> **\_\_using**\<`TA`, `T`\>(`fn`, `a`): `T`

##### Type Parameters

• **TA**

• **T** *extends* [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)

##### Parameters

###### fn

[`Function1`](../../../../functions/type-aliases/Function1.md)\<`TA`, `T`\>

###### a

`TA`

##### Returns

`T`

#### Call Signature

> **\_\_using**\<`TA`, `TB`, `T`\>(`fn`, `a`, `b`): `T`

##### Type Parameters

• **TA**

• **TB**

• **T** *extends* [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)

##### Parameters

###### fn

[`Function2`](../../../../functions/type-aliases/Function2.md)\<`TA`, `TB`, `T`\>

###### a

`TA`

###### b

`TB`

##### Returns

`T`

#### Call Signature

> **\_\_using**\<`TA`, `TB`, `TC`, `T`\>(`fn`, `a`, `b`, `c`): `T`

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **T** *extends* [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)

##### Parameters

###### fn

[`Function3`](../../../../functions/type-aliases/Function3.md)\<`TA`, `TB`, `TC`, `T`\>

###### a

`TA`

###### b

`TB`

###### c

`TC`

##### Returns

`T`

#### Call Signature

> **\_\_using**\<`TA`, `TB`, `TC`, `TD`, `T`\>(`fn`, `a`, `b`, `c`, `d`): `T`

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **T** *extends* [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)

##### Parameters

###### fn

[`Function4`](../../../../functions/type-aliases/Function4.md)\<`TA`, `TB`, `TC`, `TD`, `T`\>

###### a

`TA`

###### b

`TB`

###### c

`TC`

###### d

`TD`

##### Returns

`T`

#### Call Signature

> **\_\_using**\<`TA`, `TB`, `TC`, `TD`, `TE`, `T`\>(`fn`, `a`, `b`, `c`, `d`, `e`): `T`

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **T** *extends* [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)

##### Parameters

###### fn

[`Function5`](../../../../functions/type-aliases/Function5.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `T`\>

###### a

`TA`

###### b

`TB`

###### c

`TC`

###### d

`TD`

###### e

`TE`

##### Returns

`T`

#### Call Signature

> **\_\_using**\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `T`\>(`fn`, `a`, `b`, `c`, `d`, `e`, `f`): `T`

##### Type Parameters

• **TA**

• **TB**

• **TC**

• **TD**

• **TE**

• **TF**

• **T** *extends* [`DisposableLike`](../../../../utils/interfaces/DisposableLike.md)

##### Parameters

###### fn

[`Function6`](../../../../functions/type-aliases/Function6.md)\<`TA`, `TB`, `TC`, `TD`, `TE`, `TF`, `T`\>

###### a

`TA`

###### b

`TB`

###### c

`TC`

###### d

`TD`

###### e

`TE`

###### f

`TF`

##### Returns

`T`
