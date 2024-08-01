[**Reactive-JS**](../../../README.md) • **Docs**

***

[Reactive-JS](../../../README.md) / [integrations/react](../README.md) / useStream

# Function: useStream()

## useStream(streamable, options)

> **useStream**\<`TStreamable`\>(`streamable`, `options`?): [`Optional`](../../../functions/type-aliases/Optional.md)\<[`StreamOf`](../../../concurrent/type-aliases/StreamOf.md)\<`TStreamable`\>\>

### Type Parameters

• **TStreamable** *extends* [`StreamableLike`](../../../concurrent/interfaces/StreamableLike.md)\<`unknown`, `unknown`, [`StreamLike`](../../../concurrent/interfaces/StreamLike.md)\<`unknown`, `unknown`\>\>

### Parameters

• **streamable**: `TStreamable`

• **options?**

• **options.backpressureStrategy?**: [`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

• **options.capacity?**: `number`

• **options.priority?**: `2` \| `1` \| `3` \| `4` \| `5`

• **options.replay?**: `number`

### Returns

[`Optional`](../../../functions/type-aliases/Optional.md)\<[`StreamOf`](../../../concurrent/type-aliases/StreamOf.md)\<`TStreamable`\>\>

## useStream(factory, dep, options)

> **useStream**\<`TStreamable`\>(`factory`, `dep`, `options`?): [`Optional`](../../../functions/type-aliases/Optional.md)\<[`StreamOf`](../../../concurrent/type-aliases/StreamOf.md)\<`TStreamable`\>\>

### Type Parameters

• **TStreamable** *extends* [`StreamableLike`](../../../concurrent/interfaces/StreamableLike.md)\<`unknown`, `unknown`, [`StreamLike`](../../../concurrent/interfaces/StreamLike.md)\<`unknown`, `unknown`\>\>

### Parameters

• **factory**: [`Factory`](../../../functions/type-aliases/Factory.md)\<`TStreamable`\>

• **dep**: readonly `unknown`[]

• **options?**

• **options.backpressureStrategy?**: [`BackpressureStrategy`](../../../utils/type-aliases/BackpressureStrategy.md)

• **options.capacity?**: `number`

• **options.priority?**: `2` \| `1` \| `3` \| `4` \| `5`

• **options.replay?**: `number`

### Returns

[`Optional`](../../../functions/type-aliases/Optional.md)\<[`StreamOf`](../../../concurrent/type-aliases/StreamOf.md)\<`TStreamable`\>\>
