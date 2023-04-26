[Reactive-JS](../README.md) / integrations/web

# Module: integrations/web

## Table of contents

### Container Interfaces

- [WindowLocationStreamLike](../interfaces/integrations_web.WindowLocationStreamLike.md)

### Other Interfaces

- [Rect](../interfaces/integrations_web.Rect.md)
- [ScrollState](../interfaces/integrations_web.ScrollState.md)
- [ScrollValue](../interfaces/integrations_web.ScrollValue.md)
- [WindowLocationURI](../interfaces/integrations_web.WindowLocationURI.md)

### Type Aliases

- [CSSStyleKey](integrations_web.md#cssstylekey)

### Variables

- [windowLocation](integrations_web.md#windowlocation)

### Functions

- [createEventSource](integrations_web.md#createeventsource)

## Type Aliases

### CSSStyleKey

Ƭ **CSSStyleKey**: keyof `Omit`<`CSSStyleDeclaration`, ``"item"`` \| ``"length"`` \| ``"parentRule"`` \| ``"getPropertyPriority"`` \| ``"getPropertyValue"`` \| ``"removeProperty"`` \| ``"setProperty"`` \| `number` \| typeof `Symbol.iterator`\>

## Variables

### windowLocation

• `Const` **windowLocation**: [`StreamableLike`](../interfaces/streaming.StreamableLike.md)<[`Updater`](functions.md#updater)<[`WindowLocationURI`](../interfaces/integrations_web.WindowLocationURI.md)\> \| [`WindowLocationURI`](../interfaces/integrations_web.WindowLocationURI.md), [`WindowLocationURI`](../interfaces/integrations_web.WindowLocationURI.md), [`WindowLocationStreamLike`](../interfaces/integrations_web.WindowLocationStreamLike.md)\>

## Functions

### createEventSource

▸ **createEventSource**(`url`, `options?`): [`ObservableLike`](../interfaces/rx.ObservableLike.md)<{ `data`: `string` ; `id`: `string` ; `type`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` \| `URL` |
| `options?` | `EventSourceInit` & { `events?`: readonly `string`[]  } |

#### Returns

[`ObservableLike`](../interfaces/rx.ObservableLike.md)<{ `data`: `string` ; `id`: `string` ; `type`: `string`  }\>
