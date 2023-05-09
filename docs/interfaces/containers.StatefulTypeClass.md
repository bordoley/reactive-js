[Reactive-JS](../README.md) / [containers](../modules/containers.md) / StatefulTypeClass

# Interface: StatefulTypeClass<C\>

[containers](../modules/containers.md).StatefulTypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Type`](containers.Container.Type.md) |

## Hierarchy

- **`StatefulTypeClass`**

  ↳ [`ObservableTypeClass`](containers.ObservableTypeClass.md)

## Table of contents

### Constructor Methods

- [defer](containers.StatefulTypeClass.md#defer)
- [throws](containers.StatefulTypeClass.md#throws)

### Operator Methods

- [catchError](containers.StatefulTypeClass.md#catcherror)
- [decodeWithCharset](containers.StatefulTypeClass.md#decodewithcharset)
- [encodeUtf8](containers.StatefulTypeClass.md#encodeutf8)
- [throwIfEmpty](containers.StatefulTypeClass.md#throwifempty)

## Constructor Methods

### defer

▸ **defer**<`T`\>(`factory`): [`Of`](../modules/containers.Container.md#of)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<[`Of`](../modules/containers.Container.md#of)<`C`, `T`\>\> |

#### Returns

[`Of`](../modules/containers.Container.md#of)<`C`, `T`\>

___

### throws

▸ **throws**<`T`\>(`options?`): [`Of`](../modules/containers.Container.md#of)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.raise?` | [`Factory`](../modules/functions.md#factory)<`unknown`\> |

#### Returns

[`Of`](../modules/containers.Container.md#of)<`C`, `T`\>

___

## Operator Methods

### catchError

▸ **catchError**<`T`\>(`onError`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`\>

Returns a Container which catches errors produced by the source and either continues with
the Container returned from the `onError` callback or swallows the error if
void is returned.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onError` | [`Function1`](../modules/functions.md#function1)<`unknown`, `void` \| [`Of`](../modules/containers.Container.md#of)<`C`, `T`\>\> | A function that takes source error and either returns a Container to continue with or void if the error should be propagated. |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `ArrayBuffer`, `string`\>

___

### encodeUtf8

▸ **encodeUtf8**(): [`Operator`](../modules/containers.Container.md#operator)<`C`, `string`, `Uint8Array`\>

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `string`, `Uint8Array`\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`): [`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`\>

Returns a Container that emits an error if the source completes without emitting a value.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<`unknown`\> | A factory function invoked to produce the error to be thrown. |

#### Returns

[`Operator`](../modules/containers.Container.md#operator)<`C`, `T`, `T`\>
