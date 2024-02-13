[Reactive-JS](../README.md) / integrations/react/web

# Module: integrations/react/web

## Table of contents

### Functions

- [WindowLocationProvider](integrations_react_web.md#windowlocationprovider)
- [useAnimate](integrations_react_web.md#useanimate)
- [useAnimationGroup](integrations_react_web.md#useanimationgroup)
- [useScroll](integrations_react_web.md#usescroll)
- [useWindowLocation](integrations_react_web.md#usewindowlocation)

## Functions

### WindowLocationProvider

▸ **WindowLocationProvider**(`props`, `context?`): `ReactNode`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.children` | `ReactNode` |
| `props.windowLocation` | [`WindowLocationLike`](../interfaces/integrations_web.WindowLocationLike.md) |
| `context?` | `any` |

#### Returns

`ReactNode`

___

### useAnimate

▸ **useAnimate**\<`TElement`\>(`animation`): `Ref`\<`TElement`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TElement` | extends `HTMLElement` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animation` | [`Optional`](functions.md#optional)\<[`EventSourceLike`](../interfaces/events.EventSourceLike.md)\<[`CSSStyleMapLike`](../interfaces/integrations_web.CSSStyleMapLike.md)\>\> |

#### Returns

`Ref`\<`TElement`\>

▸ **useAnimate**\<`TElement`, `T`\>(`animation`, `selector`, `deps`): `Ref`\<`TElement`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TElement` | extends `HTMLElement` |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animation` | [`Optional`](functions.md#optional)\<[`EventSourceLike`](../interfaces/events.EventSourceLike.md)\<`T`\>\> |
| `selector` | [`Function1`](functions.md#function1)\<`T`, [`CSSStyleMapLike`](../interfaces/integrations_web.CSSStyleMapLike.md)\> |
| `deps` | readonly `unknown`[] |

#### Returns

`Ref`\<`TElement`\>

___

### useAnimationGroup

▸ **useAnimationGroup**\<`T`, `TEvent`, `TKey`\>(`animationGroup`, `options?`): [`Optional`](functions.md#optional)\<[`StreamLike`](../interfaces/concurrent.StreamLike.md)\<`TEvent`, `boolean`\> & [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)\<`TKey`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)\<`T`\>\>\>

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
| `options?` | \{ `mode`: ``"switching"`` ; `priority?`: ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5``  } \| \{ `mode`: ``"blocking"`` ; `priority?`: ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5``  } \| \{ `backpressureStrategy?`: [`BackpressureStrategy`](utils.md#backpressurestrategy) ; `capacity?`: `number` ; `mode`: ``"queueing"`` ; `priority?`: ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5``  } |

#### Returns

[`Optional`](functions.md#optional)\<[`StreamLike`](../interfaces/concurrent.StreamLike.md)\<`TEvent`, `boolean`\> & [`DictionaryLike`](../interfaces/collections.DictionaryLike.md)\<`TKey`, [`EventSourceLike`](../interfaces/events.EventSourceLike.md)\<`T`\>\>\>

___

### useScroll

▸ **useScroll**\<`TElement`\>(`callback`, `deps`): `Ref`\<`TElement`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TElement` | extends `HTMLElement` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`SideEffect1`](functions.md#sideeffect1)\<[`ScrollValue`](../interfaces/integrations_web.ScrollValue.md)\> |
| `deps` | readonly `unknown`[] |

#### Returns

`Ref`\<`TElement`\>

___

### useWindowLocation

▸ **useWindowLocation**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `canGoBack` | `boolean` |
| `goBack` | () => `void` |
| `push` | [`SideEffect1`](functions.md#sideeffect1)\<[`WindowLocationURI`](../interfaces/integrations_web.WindowLocationURI.md) \| [`Updater`](functions.md#updater)\<[`WindowLocationURI`](../interfaces/integrations_web.WindowLocationURI.md)\>\> |
| `replace` | [`SideEffect1`](functions.md#sideeffect1)\<[`WindowLocationURI`](../interfaces/integrations_web.WindowLocationURI.md) \| [`Updater`](functions.md#updater)\<[`WindowLocationURI`](../interfaces/integrations_web.WindowLocationURI.md)\>\> |
| `uri` | [`Optional`](functions.md#optional)\<[`WindowLocationURI`](../interfaces/integrations_web.WindowLocationURI.md)\> |
