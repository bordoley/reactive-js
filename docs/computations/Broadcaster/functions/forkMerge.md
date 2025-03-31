[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [computations/Broadcaster](../README.md) / forkMerge

# Function: forkMerge()

## Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`, ...`tail`): [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

### Type Parameters

• **TIn**

• **TOut**

### Parameters

#### a

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

#### b

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

#### tail

...[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>[]

### Returns

[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

## Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`, `options`): [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

### Type Parameters

• **TIn**

• **TOut**

### Parameters

#### a

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

#### b

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

#### options

##### [ComputationLike_isPure]

[`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>

### Returns

[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

## Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`, `options`): `never`

### Type Parameters

• **TIn**

• **TOut**

### Parameters

#### a

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), \{ `[ComputationLike_isDeferred]`: `false`; `[ComputationLike_isPure]`: [`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>; `[ComputationLike_isSynchronous]`: `false`; `[DisposableContainerLike_add]`: `void`; `[SourceLike_subscribe]`: `void`; \}\>

#### b

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), \{ `[ComputationLike_isDeferred]`: `false`; `[ComputationLike_isPure]`: [`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>; `[ComputationLike_isSynchronous]`: `false`; `[DisposableContainerLike_add]`: `void`; `[SourceLike_subscribe]`: `void`; \}\>

#### options

##### [ComputationLike_isPure]

`false`

### Returns

`never`

## Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`, `c`, `options`): [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

### Type Parameters

• **TIn**

• **TOut**

### Parameters

#### a

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

#### b

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

#### c

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

#### options

##### [ComputationLike_isPure]

[`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>

### Returns

[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

## Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`, `c`, `options`): `never`

### Type Parameters

• **TIn**

• **TOut**

### Parameters

#### a

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), \{ `[ComputationLike_isDeferred]`: `false`; `[ComputationLike_isPure]`: [`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>; `[ComputationLike_isSynchronous]`: `false`; `[DisposableContainerLike_add]`: `void`; `[SourceLike_subscribe]`: `void`; \}\>

#### b

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), \{ `[ComputationLike_isDeferred]`: `false`; `[ComputationLike_isPure]`: [`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>; `[ComputationLike_isSynchronous]`: `false`; `[DisposableContainerLike_add]`: `void`; `[SourceLike_subscribe]`: `void`; \}\>

#### c

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), \{ `[ComputationLike_isDeferred]`: `false`; `[ComputationLike_isPure]`: [`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>; `[ComputationLike_isSynchronous]`: `false`; `[DisposableContainerLike_add]`: `void`; `[SourceLike_subscribe]`: `void`; \}\>

#### options

##### [ComputationLike_isPure]

`false`

### Returns

`never`

## Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`, `c`, `d`, `options`): [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

### Type Parameters

• **TIn**

• **TOut**

### Parameters

#### a

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

#### b

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

#### c

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

#### d

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), [`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)\>

#### options

##### [ComputationLike_isPure]

[`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>

### Returns

[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TOut`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md)

## Call Signature

> **forkMerge**\<`TIn`, `TOut`\>(`a`, `b`, `c`, `d`, `options`): `never`

### Type Parameters

• **TIn**

• **TOut**

### Parameters

#### a

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), \{ `[ComputationLike_isDeferred]`: `false`; `[ComputationLike_isPure]`: [`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>; `[ComputationLike_isSynchronous]`: `false`; `[DisposableContainerLike_add]`: `void`; `[SourceLike_subscribe]`: `void`; \}\>

#### b

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), \{ `[ComputationLike_isDeferred]`: `false`; `[ComputationLike_isPure]`: [`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>; `[ComputationLike_isSynchronous]`: `false`; `[DisposableContainerLike_add]`: `void`; `[SourceLike_subscribe]`: `void`; \}\>

#### c

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), \{ `[ComputationLike_isDeferred]`: `false`; `[ComputationLike_isPure]`: [`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>; `[ComputationLike_isSynchronous]`: `false`; `[DisposableContainerLike_add]`: `void`; `[SourceLike_subscribe]`: `void`; \}\>

#### d

[`Function1`](../../../functions/type-aliases/Function1.md)\<[`BroadcasterLike`](../../interfaces/BroadcasterLike.md)\<`TIn`\> & [`PureComputationLike`](../../interfaces/PureComputationLike.md), \{ `[ComputationLike_isDeferred]`: `false`; `[ComputationLike_isPure]`: [`Optional`](../../../functions/type-aliases/Optional.md)\<`true`\>; `[ComputationLike_isSynchronous]`: `false`; `[DisposableContainerLike_add]`: `void`; `[SourceLike_subscribe]`: `void`; \}\>

#### options

##### [ComputationLike_isPure]

`false`

### Returns

`never`
