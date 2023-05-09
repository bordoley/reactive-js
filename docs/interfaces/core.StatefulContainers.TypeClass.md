[Reactive-JS](../README.md) / [core](../modules/core.md) / [StatefulContainers](../modules/core.StatefulContainers.md) / TypeClass

# Interface: TypeClass<C\>

[core](../modules/core.md).[StatefulContainers](../modules/core.StatefulContainers.md).TypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](core.Container.md) |

## Hierarchy

- **`TypeClass`**

  ↳ [`TypeClass`](core.ObservableContainers.TypeClass.md)

## Table of contents

### Constructor Methods

- [defer](core.StatefulContainers.TypeClass.md#defer)
- [throws](core.StatefulContainers.TypeClass.md#throws)

### Operator Methods

- [catchError](core.StatefulContainers.TypeClass.md#catcherror)
- [decodeWithCharset](core.StatefulContainers.TypeClass.md#decodewithcharset)
- [encodeUtf8](core.StatefulContainers.TypeClass.md#encodeutf8)
- [throwIfEmpty](core.StatefulContainers.TypeClass.md#throwifempty)

## Constructor Methods

### defer

▸ **defer**<`T`\>(`factory`): [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>\> |

#### Returns

[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

___

### throws

▸ **throws**<`T`\>(`options?`): [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

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

[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

___

## Operator Methods

### catchError

▸ **catchError**<`T`\>(`onError`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

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
| `onError` | [`Function1`](../modules/functions.md#function1)<`unknown`, `void` \| [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>\> | A function that takes source error and either returns a Container to continue with or void if the error should be propagated. |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `ArrayBuffer`, `string`\>

___

### encodeUtf8

▸ **encodeUtf8**(): [`Operator`](../modules/core.Containers.md#operator)<`C`, `string`, `Uint8Array`\>

#### Returns

[`Operator`](../modules/core.Containers.md#operator)<`C`, `string`, `Uint8Array`\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`): [`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>

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

[`Operator`](../modules/core.Containers.md#operator)<`C`, `T`, `T`\>
