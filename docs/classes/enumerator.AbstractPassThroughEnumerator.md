[Reactive-JS](../README.md) / [enumerator](../modules/enumerator.md) / AbstractPassThroughEnumerator

# Class: AbstractPassThroughEnumerator<T\>

[enumerator](../modules/enumerator.md).AbstractPassThroughEnumerator

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Enumerator`](enumerator.Enumerator.md)<`T`\>

  ↳ **`AbstractPassThroughEnumerator`**

## Table of contents

### Constructors

- [constructor](enumerator.AbstractPassThroughEnumerator.md#constructor)

### Properties

- [delegate](enumerator.AbstractPassThroughEnumerator.md#delegate)

### Accessors

- [T](enumerator.AbstractPassThroughEnumerator.md#t)
- [TContainerOf](enumerator.AbstractPassThroughEnumerator.md#tcontainerof)
- [current](enumerator.AbstractPassThroughEnumerator.md#current)
- [error](enumerator.AbstractPassThroughEnumerator.md#error)
- [hasCurrent](enumerator.AbstractPassThroughEnumerator.md#hascurrent)
- [isDisposed](enumerator.AbstractPassThroughEnumerator.md#isdisposed)

### Methods

- [add](enumerator.AbstractPassThroughEnumerator.md#add)
- [dispose](enumerator.AbstractPassThroughEnumerator.md#dispose)
- [move](enumerator.AbstractPassThroughEnumerator.md#move)

## Constructors

### constructor

• **new AbstractPassThroughEnumerator**<`T`\>(`delegate`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `delegate` | [`Enumerator`](enumerator.Enumerator.md)<`T`\> |

#### Overrides

[Enumerator](enumerator.Enumerator.md).[constructor](enumerator.Enumerator.md#constructor)

## Properties

### delegate

• `Readonly` **delegate**: [`Enumerator`](enumerator.Enumerator.md)<`T`\>

## Accessors

### T

• `get` **T**(): `unknown`

#### Returns

`unknown`

#### Inherited from

Enumerator.T

___

### TContainerOf

• `get` **TContainerOf**(): `this`

#### Returns

`this`

#### Inherited from

Enumerator.TContainerOf

___

### current

• `get` **current**(): `T`

#### Returns

`T`

#### Overrides

Enumerator.current

___

### error

• `get` **error**(): [`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

The error the `Disposable` was disposed with if disposed.

#### Returns

[`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

#### Inherited from

Enumerator.error

___

### hasCurrent

• `get` **hasCurrent**(): `boolean`

#### Returns

`boolean`

#### Overrides

Enumerator.hasCurrent

___

### isDisposed

• `get` **isDisposed**(): `boolean`

`true` if this resource has been disposed, otherwise false

#### Returns

`boolean`

#### Inherited from

Enumerator.isDisposed

## Methods

### add

▸ **add**(`this`, `disposable`, `ignoreChildErrors`): `void`

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`AbstractPassThroughEnumerator`](enumerator.AbstractPassThroughEnumerator.md)<`T`\> |
| `disposable` | [`DisposableOrTeardown`](../modules/disposable.md#disposableorteardown) |
| `ignoreChildErrors` | `boolean` |

#### Returns

`void`

`this`

#### Inherited from

[Enumerator](enumerator.Enumerator.md).[add](enumerator.Enumerator.md#add)

___

### dispose

▸ **dispose**(`this`, `error?`): `void`

Dispose the resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`AbstractPassThroughEnumerator`](enumerator.AbstractPassThroughEnumerator.md)<`T`\> | - |
| `error?` | [`Error`](../interfaces/disposable.Error.md) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Inherited from

[Enumerator](enumerator.Enumerator.md).[dispose](enumerator.Enumerator.md#dispose)

___

### move

▸ `Abstract` **move**(): `boolean`

#### Returns

`boolean`

#### Overrides

[Enumerator](enumerator.Enumerator.md).[move](enumerator.Enumerator.md#move)
