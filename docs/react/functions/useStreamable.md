[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [react](../README.md) / useStreamable

# Function: useStreamable()

## Call Signature

> **useStreamable**\<`TStreamable`\>(`streamable`, `options`?): [`Optional`](../../functions/type-aliases/Optional.md)\<[`StreamOf`](../../computations/type-aliases/StreamOf.md)\<`TStreamable`\>\>

### Type Parameters

• **TStreamable** *extends* [`StreamableLike`](../../computations/interfaces/StreamableLike.md)\<`unknown`, `unknown`, [`StreamLike`](../../computations/interfaces/StreamLike.md)\<`unknown`, `unknown`\>\>

### Parameters

#### streamable

`TStreamable`

#### options?

##### backpressureStrategy?

[`BackpressureStrategy`](../../utils/type-aliases/BackpressureStrategy.md)

##### capacity?

`number`

##### priority?

`2` \| `1` \| `3` \| `4` \| `5`

##### scheduler?

[`SchedulerLike`](../../utils/interfaces/SchedulerLike.md)

### Returns

[`Optional`](../../functions/type-aliases/Optional.md)\<[`StreamOf`](../../computations/type-aliases/StreamOf.md)\<`TStreamable`\>\>

## Call Signature

> **useStreamable**\<`TStreamable`\>(`factory`, `dep`, `options`?): [`Optional`](../../functions/type-aliases/Optional.md)\<[`StreamOf`](../../computations/type-aliases/StreamOf.md)\<`TStreamable`\>\>

### Type Parameters

• **TStreamable** *extends* [`StreamableLike`](../../computations/interfaces/StreamableLike.md)\<`unknown`, `unknown`, [`StreamLike`](../../computations/interfaces/StreamLike.md)\<`unknown`, `unknown`\>\>

### Parameters

#### factory

[`Factory`](../../functions/type-aliases/Factory.md)\<`TStreamable`\>

#### dep

readonly `unknown`[]

#### options?

##### backpressureStrategy?

[`BackpressureStrategy`](../../utils/type-aliases/BackpressureStrategy.md)

##### capacity?

`number`

##### priority?

`2` \| `1` \| `3` \| `4` \| `5`

##### scheduler?

[`SchedulerLike`](../../utils/interfaces/SchedulerLike.md)

### Returns

[`Optional`](../../functions/type-aliases/Optional.md)\<[`StreamOf`](../../computations/type-aliases/StreamOf.md)\<`TStreamable`\>\>
