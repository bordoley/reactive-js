[Reactive-JS](../README.md) / [type-classes](../modules/type_classes.md) / StatefulTypeClass

# Interface: StatefulTypeClass<C\>

[type-classes](../modules/type_classes.md).StatefulTypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](types.Container.md) |

## Table of contents

### Constructor Methods

- [defer](type_classes.StatefulTypeClass.md#defer)
- [throws](type_classes.StatefulTypeClass.md#throws)

### Operator Methods

- [catchError](type_classes.StatefulTypeClass.md#catcherror)
- [decodeWithCharset](type_classes.StatefulTypeClass.md#decodewithcharset)
- [encodeUtf8](type_classes.StatefulTypeClass.md#encodeutf8)
- [throwIfEmpty](type_classes.StatefulTypeClass.md#throwifempty)

## Constructor Methods

### defer

▸ **defer**<`T`\>(`factory`): [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>\> |

#### Returns

[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>

___

### throws

▸ **throws**<`T`\>(`options?`): [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>

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

[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>

___

## Operator Methods

### catchError

▸ **catchError**<`T`\>(`onError`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`\>

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
| `onError` | [`Function1`](../modules/functions.md#function1)<`unknown`, `void` \| [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>\> | A function that takes source error and either returns a Container to continue with or void if the error should be propagated. |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`\>

___

### decodeWithCharset

▸ **decodeWithCharset**(`options?`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `ArrayBuffer`, `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.charset?` | `string` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `ArrayBuffer`, `string`\>

___

### encodeUtf8

▸ **encodeUtf8**(): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `string`, `Uint8Array`\>

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `string`, `Uint8Array`\>

___

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`\>

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

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`\>
