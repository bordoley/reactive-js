[**Reactive-JS**](../../../README.md) • **Docs**

***

[Reactive-JS](../../../README.md) / [concurrent/Streamable](../README.md) / animationGroup

# Function: animationGroup()

> **animationGroup**\<`T`, `TEvent`, `TKey`\>(`animationGroup`, `options`?): [`StreamableLike`](../../interfaces/StreamableLike.md)\<`TEvent`, `boolean`, [`StreamLike`](../../interfaces/StreamLike.md)\<`TEvent`, `boolean`\> & [`DictionaryLike`](../../../collections/interfaces/DictionaryLike.md)\<`TKey`, [`EventSourceLike`](../../../events/interfaces/EventSourceLike.md)\<`T`\>\>\>

## Type Parameters

• **T**

• **TEvent** = `unknown`

• **TKey** *extends* `string` = `string`

## Parameters

• **animationGroup**: [`ReadonlyObjectMapLike`](../../../collections/type-aliases/ReadonlyObjectMapLike.md)\<`TKey`, [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\> \| [`Function1`](../../../functions/type-aliases/Function1.md)\<`TEvent`, [`PureRunnableLike`](../../interfaces/PureRunnableLike.md)\<`T`\>\>\>

• **options?**: `object` \| `object` \| `object`

## Returns

[`StreamableLike`](../../interfaces/StreamableLike.md)\<`TEvent`, `boolean`, [`StreamLike`](../../interfaces/StreamLike.md)\<`TEvent`, `boolean`\> & [`DictionaryLike`](../../../collections/interfaces/DictionaryLike.md)\<`TKey`, [`EventSourceLike`](../../../events/interfaces/EventSourceLike.md)\<`T`\>\>\>
