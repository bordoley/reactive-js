[Reactive-JS](../README.md) / integrations/web/effects

# Module: integrations/web/effects

## Table of contents

### Functions

- [\_\_animate](integrations_web_effects.md#__animate)
- [\_\_animationGroup](integrations_web_effects.md#__animationgroup)

## Functions

### \_\_animate

▸ **__animate**(`animation`): [`SideEffect1`](functions.md#sideeffect1)\<[`Optional`](functions.md#optional)\<``null`` \| `HTMLElement`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `animation` | [`EventSourceLike`](../interfaces/events.EventSourceLike.md)\<[`CSSStyleMapLike`](../interfaces/integrations_web.CSSStyleMapLike.md)\> |

#### Returns

[`SideEffect1`](functions.md#sideeffect1)\<[`Optional`](functions.md#optional)\<``null`` \| `HTMLElement`\>\>

▸ **__animate**\<`T`\>(`animation`, `selector`): [`SideEffect1`](functions.md#sideeffect1)\<[`Optional`](functions.md#optional)\<``null`` \| `HTMLElement`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animation` | [`EventSourceLike`](../interfaces/events.EventSourceLike.md)\<`T`\> |
| `selector` | (`ev`: `T`) => [`CSSStyleMapLike`](../interfaces/integrations_web.CSSStyleMapLike.md) |

#### Returns

[`SideEffect1`](functions.md#sideeffect1)\<[`Optional`](functions.md#optional)\<``null`` \| `HTMLElement`\>\>

___

### \_\_animationGroup

▸ **__animationGroup**\<`T`, `TEvent`, `TKey`\>(`animationGroup`, `options?`): [`StreamLike`](../interfaces/concurrent.StreamLike.md)\<`TEvent`, `boolean`\> & [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)\<`TKey`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)\<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TEvent` | `unknown` |
| `TKey` | extends `string` = `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animationGroup` | [`ReadonlyObjectMapLike`](collections.md#readonlyobjectmaplike)\<`TKey`, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\> \| [`Function1`](functions.md#function1)\<`TEvent`, [`PureRunnableLike`](../interfaces/concurrent.PureRunnableLike.md)\<`T`\>\>\> |
| `options?` | \{ `mode`: ``"switching"``  } \| \{ `mode`: ``"blocking"``  } \| \{ `backpressureStrategy?`: [`BackpressureStrategy`](utils.md#backpressurestrategy) ; `capacity?`: `number` ; `mode`: ``"queueing"``  } |

#### Returns

[`StreamLike`](../interfaces/concurrent.StreamLike.md)\<`TEvent`, `boolean`\> & [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)\<`TKey`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)\<`T`\>\>
