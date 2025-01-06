[**Reactive-JS**](../../../../README.md)

***

[Reactive-JS](../../../../README.md) / [integrations/web/effects](../README.md) / \_\_animationGroup

# Function: \_\_animationGroup()

> **\_\_animationGroup**\<`T`, `TEvent`, `TKey`\>(`animationGroup`, `options`?): [`StreamLike`](../../../../concurrent/interfaces/StreamLike.md)\<`TEvent`, `boolean`\> & [`DictionaryLike`](../../../../collections/interfaces/DictionaryLike.md)\<`TKey`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`T`\>\>

## Type Parameters

• **T**

• **TEvent** = `unknown`

• **TKey** *extends* `string` = `string`

## Parameters

### animationGroup

[`ReadonlyObjectMapLike`](../../../../collections/type-aliases/ReadonlyObjectMapLike.md)\<`TKey`, [`PureRunnableLike`](../../../../concurrent/interfaces/PureRunnableLike.md)\<`T`\> \| [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEvent`, [`PureRunnableLike`](../../../../concurrent/interfaces/PureRunnableLike.md)\<`T`\>\>\>

### options?

\{ `mode`: `"switching"`; \} | \{ `mode`: `"blocking"`; \} | \{ `backpressureStrategy`: [`BackpressureStrategy`](../../../../utils/type-aliases/BackpressureStrategy.md); `capacity`: `number`; `mode`: `"queueing"`; \}

## Returns

[`StreamLike`](../../../../concurrent/interfaces/StreamLike.md)\<`TEvent`, `boolean`\> & [`DictionaryLike`](../../../../collections/interfaces/DictionaryLike.md)\<`TKey`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`T`\>\>
