[**Reactive-JS**](../../../../README.md) • **Docs**

***

[Reactive-JS](../../../../README.md) / [integrations/react/web](../README.md) / useAnimationGroup

# Function: useAnimationGroup()

> **useAnimationGroup**\<`T`, `TEvent`, `TKey`\>(`animationGroup`, `options`?): [`Optional`](../../../../functions/type-aliases/Optional.md)\<[`StreamLike`](../../../../concurrent/interfaces/StreamLike.md)\<`TEvent`, `boolean`\> & [`DictionaryLike`](../../../../collections/interfaces/DictionaryLike.md)\<`TKey`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`T`\>\>\>

## Type Parameters

• **T**

• **TEvent** = `unknown`

• **TKey** *extends* `string` = `string`

## Parameters

• **animationGroup**: [`ReadonlyObjectMapLike`](../../../../collections/type-aliases/ReadonlyObjectMapLike.md)\<`TKey`, [`PureRunnableLike`](../../../../concurrent/interfaces/PureRunnableLike.md)\<`T`\> \| [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEvent`, [`PureRunnableLike`](../../../../concurrent/interfaces/PureRunnableLike.md)\<`T`\>\>\>

• **options?**: `object` \| `object` \| `object`

## Returns

[`Optional`](../../../../functions/type-aliases/Optional.md)\<[`StreamLike`](../../../../concurrent/interfaces/StreamLike.md)\<`TEvent`, `boolean`\> & [`DictionaryLike`](../../../../collections/interfaces/DictionaryLike.md)\<`TKey`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`T`\>\>\>
