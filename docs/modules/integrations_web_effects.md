[Reactive-JS](../README.md) / integrations/web/effects

# Module: integrations/web/effects

## Table of contents

### Functions

- [\_\_animate](integrations_web_effects.md#__animate)

## Functions

### \_\_animate

▸ **__animate**(`animation`): [`SideEffect1`](functions.md#sideeffect1)<[`Optional`](functions.md#optional)<``null`` \| `HTMLElement`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `animation` | [`EventSourceLike`](../interfaces/util.EventSourceLike.md)<[`CSSStyleMapLike`](../interfaces/integrations_web.CSSStyleMapLike.md)\> |

#### Returns

[`SideEffect1`](functions.md#sideeffect1)<[`Optional`](functions.md#optional)<``null`` \| `HTMLElement`\>\>

▸ **__animate**<`T`\>(`animation`, `selector`): [`SideEffect1`](functions.md#sideeffect1)<[`Optional`](functions.md#optional)<``null`` \| `HTMLElement`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `animation` | [`EventSourceLike`](../interfaces/util.EventSourceLike.md)<`T`\> |
| `selector` | (`ev`: `T`) => [`CSSStyleMapLike`](../interfaces/integrations_web.CSSStyleMapLike.md) |

#### Returns

[`SideEffect1`](functions.md#sideeffect1)<[`Optional`](functions.md#optional)<``null`` \| `HTMLElement`\>\>
