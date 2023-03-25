[Reactive-JS](../README.md) / integrations/react-web

# Module: integrations/react-web

## Table of contents

### Hook Functions

- [useWindowLocation](integrations_react_web.md#usewindowlocation)
- [useWindowLocationStream](integrations_react_web.md#usewindowlocationstream)

### Other Functions

- [WindowLocationProvider](integrations_react_web.md#windowlocationprovider)

## Hook Functions

### useWindowLocation

▸ **useWindowLocation**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `canGoBack` | `boolean` |
| `goBack` | () => `void` |
| `push` | [`SideEffect1`](functions.md#sideeffect1)<[`WindowLocationURI`](../interfaces/integrations_web.WindowLocationURI.md) \| [`Updater`](functions.md#updater)<[`WindowLocationURI`](../interfaces/integrations_web.WindowLocationURI.md)\>\> |
| `replace` | [`SideEffect1`](functions.md#sideeffect1)<[`WindowLocationURI`](../interfaces/integrations_web.WindowLocationURI.md) \| [`Updater`](functions.md#updater)<[`WindowLocationURI`](../interfaces/integrations_web.WindowLocationURI.md)\>\> |
| `uri` | [`Optional`](functions.md#optional)<[`WindowLocationURI`](../interfaces/integrations_web.WindowLocationURI.md)\> |

___

### useWindowLocationStream

▸ **useWindowLocationStream**(): [`WindowLocationStreamLike`](../interfaces/integrations_web.WindowLocationStreamLike.md)

#### Returns

[`WindowLocationStreamLike`](../interfaces/integrations_web.WindowLocationStreamLike.md)

___

## Other Functions

### WindowLocationProvider

▸ **WindowLocationProvider**(`props`, `context?`): ``null`` \| `ReactElement`<`any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.children` | `ReactNode` |
| `props.priority?` | ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5`` |
| `context?` | `any` |

#### Returns

``null`` \| `ReactElement`<`any`, `any`\>
