[Reactive-JS](../README.md) / integrations/web/WindowLocationStream

# Module: integrations/web/WindowLocationStream

## Table of contents

### Functions

- [goBack](integrations_web_WindowLocationStream.md#goback)
- [replaceWindowLocation](integrations_web_WindowLocationStream.md#replacewindowlocation)

## Functions

### goBack

▸ **goBack**(`stream`): [`WindowLocationStreamLike`](../interfaces/integrations_web.WindowLocationStreamLike.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | [`WindowLocationStreamLike`](../interfaces/integrations_web.WindowLocationStreamLike.md) |

#### Returns

[`WindowLocationStreamLike`](../interfaces/integrations_web.WindowLocationStreamLike.md)

___

### replaceWindowLocation

▸ **replaceWindowLocation**(`uri`): [`Function1`](functions.md#function1)<[`WindowLocationStreamLike`](../interfaces/integrations_web.WindowLocationStreamLike.md), [`WindowLocationStreamLike`](../interfaces/integrations_web.WindowLocationStreamLike.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | [`WindowLocationURI`](integrations_web.md#windowlocationuri) \| [`Updater`](functions.md#updater)<[`WindowLocationURI`](integrations_web.md#windowlocationuri)\> |

#### Returns

[`Function1`](functions.md#function1)<[`WindowLocationStreamLike`](../interfaces/integrations_web.WindowLocationStreamLike.md), [`WindowLocationStreamLike`](../interfaces/integrations_web.WindowLocationStreamLike.md)\>
