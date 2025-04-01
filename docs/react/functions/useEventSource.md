[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [react](../README.md) / useEventSource

# Function: useEventSource()

## Call Signature

> **useEventSource**\<`T`\>(`observable`, `options`?): [`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>

### Type Parameters

• **T**

### Parameters

#### observable

[`Optional`](../../functions/type-aliases/Optional.md)\<[`EventSourceLike`](../../computations/interfaces/EventSourceLike.md)\<`T`, [`EventListenerLike`](../../utils/interfaces/EventListenerLike.md)\<`T`\>\>\>

#### options?

##### priority?

`2` \| `1` \| `3` \| `4` \| `5`

### Returns

[`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>

## Call Signature

> **useEventSource**\<`T`\>(`factory`, `deps`, `options`?): [`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>

### Type Parameters

• **T**

### Parameters

#### factory

[`Factory`](../../functions/type-aliases/Factory.md)\<[`Optional`](../../functions/type-aliases/Optional.md)\<[`EventSourceLike`](../../computations/interfaces/EventSourceLike.md)\<`T`, [`EventListenerLike`](../../utils/interfaces/EventListenerLike.md)\<`T`\>\>\>\>

#### deps

readonly `unknown`[]

#### options?

##### priority?

`2` \| `1` \| `3` \| `4` \| `5`

### Returns

[`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>
