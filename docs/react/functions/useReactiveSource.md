[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [react](../README.md) / useReactiveSource

# Function: useReactiveSource()

## Call Signature

> **useReactiveSource**\<`T`\>(`observable`, `options`?): [`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>

### Type Parameters

• **T**

### Parameters

#### observable

[`Optional`](../../functions/type-aliases/Optional.md)\<[`SourceLike`](../../computations/interfaces/SourceLike.md)\<`T`, [`EventListenerLike`](../../utils/interfaces/EventListenerLike.md)\<`T`\>\>\>

#### options?

##### priority?

`2` \| `1` \| `3` \| `4` \| `5`

### Returns

[`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>

## Call Signature

> **useReactiveSource**\<`T`\>(`factory`, `deps`, `options`?): [`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>

### Type Parameters

• **T**

### Parameters

#### factory

[`Factory`](../../functions/type-aliases/Factory.md)\<[`Optional`](../../functions/type-aliases/Optional.md)\<[`SourceLike`](../../computations/interfaces/SourceLike.md)\<`T`, [`EventListenerLike`](../../utils/interfaces/EventListenerLike.md)\<`T`\>\>\>\>

#### deps

readonly `unknown`[]

#### options?

##### priority?

`2` \| `1` \| `3` \| `4` \| `5`

### Returns

[`Optional`](../../functions/type-aliases/Optional.md)\<`T`\>
