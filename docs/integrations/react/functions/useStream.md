[**Reactive-JS**](../../../README.md)

***

[Reactive-JS](../../../README.md) / [integrations/react](../README.md) / useStream

# Function: useStream()

## Call Signature

> **useStream**\<`TStreamable`\>(`streamable`, `options`?): [`Optional`](../../../functions/type-aliases/Optional.md)\<[`StreamOf`](../../../computations/type-aliases/StreamOf.md)\<`TStreamable`\>\>

### Type Parameters

• **TStreamable** *extends* [`StreamableLike`](../../../computations/interfaces/StreamableLike.md)\<`unknown`, `unknown`, [`StreamLike`](../../../computations/interfaces/StreamLike.md)\<`unknown`, `unknown`\>\>

### Parameters

#### streamable

`TStreamable`

#### options?

##### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

##### capacity?

`number`

##### priority?

`2` \| `1` \| `3` \| `4` \| `5`

##### replay?

`number`

### Returns

[`Optional`](../../../functions/type-aliases/Optional.md)\<[`StreamOf`](../../../computations/type-aliases/StreamOf.md)\<`TStreamable`\>\>

## Call Signature

> **useStream**\<`TStreamable`\>(`factory`, `dep`, `options`?): [`Optional`](../../../functions/type-aliases/Optional.md)\<[`StreamOf`](../../../computations/type-aliases/StreamOf.md)\<`TStreamable`\>\>

### Type Parameters

• **TStreamable** *extends* [`StreamableLike`](../../../computations/interfaces/StreamableLike.md)\<`unknown`, `unknown`, [`StreamLike`](../../../computations/interfaces/StreamLike.md)\<`unknown`, `unknown`\>\>

### Parameters

#### factory

[`Factory`](../../../functions/type-aliases/Factory.md)\<`TStreamable`\>

#### dep

readonly `unknown`[]

#### options?

##### backpressureStrategy?

[`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

##### capacity?

`number`

##### priority?

`2` \| `1` \| `3` \| `4` \| `5`

##### replay?

`number`

### Returns

[`Optional`](../../../functions/type-aliases/Optional.md)\<[`StreamOf`](../../../computations/type-aliases/StreamOf.md)\<`TStreamable`\>\>
