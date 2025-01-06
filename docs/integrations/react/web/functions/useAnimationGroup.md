[**Reactive-JS**](../../../../README.md)

***

[Reactive-JS](../../../../README.md) / [integrations/react/web](../README.md) / useAnimationGroup

# Function: useAnimationGroup()

> **useAnimationGroup**\<`T`, `TEvent`, `TKey`\>(`animationGroup`, `options`?): [`Optional`](../../../../functions/type-aliases/Optional.md)\<[`StreamLike`](../../../../concurrent/interfaces/StreamLike.md)\<`TEvent`, `boolean`\> & [`DictionaryLike`](../../../../collections/interfaces/DictionaryLike.md)\<`TKey`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`T`\>\>\>

## Type Parameters

• **T**

• **TEvent** = `unknown`

• **TKey** *extends* `string` = `string`

## Parameters

### animationGroup

[`ReadonlyObjectMapLike`](../../../../collections/type-aliases/ReadonlyObjectMapLike.md)\<`TKey`, [`PureRunnableLike`](../../../../concurrent/interfaces/PureRunnableLike.md)\<`T`\> \| [`Function1`](../../../../functions/type-aliases/Function1.md)\<`TEvent`, [`PureRunnableLike`](../../../../concurrent/interfaces/PureRunnableLike.md)\<`T`\>\>\>

### options?

\{ `mode`: `"switching"`; `priority`: `2` \| `1` \| `3` \| `4` \| `5`; \} | \{ `mode`: `"blocking"`; `priority`: `2` \| `1` \| `3` \| `4` \| `5`; \} | \{ `backpressureStrategy`: [`BackpressureStrategy`](../../../../utils/type-aliases/BackpressureStrategy.md); `capacity`: `number`; `mode`: `"queueing"`; `priority`: `2` \| `1` \| `3` \| `4` \| `5`; \}

## Returns

[`Optional`](../../../../functions/type-aliases/Optional.md)\<[`StreamLike`](../../../../concurrent/interfaces/StreamLike.md)\<`TEvent`, `boolean`\> & [`DictionaryLike`](../../../../collections/interfaces/DictionaryLike.md)\<`TKey`, [`EventSourceLike`](../../../../events/interfaces/EventSourceLike.md)\<`T`\>\>\>
