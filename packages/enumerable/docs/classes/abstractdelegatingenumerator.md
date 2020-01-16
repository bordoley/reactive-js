[@reactive-js/enumerable](../README.md) › [AbstractDelegatingEnumerator](abstractdelegatingenumerator.md)

# Class: AbstractDelegatingEnumerator <**TReq, TA, TB**>

## Type parameters

▪ **TReq**

▪ **TA**

▪ **TB**

## Hierarchy

* [AbstractEnumerator](abstractenumerator.md)‹TReq, TB›

  ↳ **AbstractDelegatingEnumerator**

## Implements

* [EnumeratorLike](../interfaces/enumeratorlike.md)‹TReq, TB›
* [EnumeratorLike](../interfaces/enumeratorlike.md)‹TReq, TB›

## Index

### Constructors

* [constructor](abstractdelegatingenumerator.md#constructor)

### Properties

* [add](abstractdelegatingenumerator.md#add)
* [delegate](abstractdelegatingenumerator.md#delegate)
* [disposable](abstractdelegatingenumerator.md#disposable)
* [dispose](abstractdelegatingenumerator.md#dispose)

### Accessors

* [current](abstractdelegatingenumerator.md#current)
* [hasCurrent](abstractdelegatingenumerator.md#hascurrent)
* [isDisposed](abstractdelegatingenumerator.md#isdisposed)

### Methods

* [move](abstractdelegatingenumerator.md#abstract-move)

## Constructors

###  constructor

\+ **new AbstractDelegatingEnumerator**(`delegate`: [EnumeratorLike](../interfaces/enumeratorlike.md)‹TReq, TA›): *[AbstractDelegatingEnumerator](abstractdelegatingenumerator.md)*

**Parameters:**

Name | Type |
------ | ------ |
`delegate` | [EnumeratorLike](../interfaces/enumeratorlike.md)‹TReq, TA› |

**Returns:** *[AbstractDelegatingEnumerator](abstractdelegatingenumerator.md)*

## Properties

###  add

• **add**: *add* =  disposableMixin.add

*Inherited from [AbstractEnumerator](abstractenumerator.md).[add](abstractenumerator.md#add)*

___

###  delegate

• **delegate**: *[EnumeratorLike](../interfaces/enumeratorlike.md)‹TReq, TA›*

___

###  disposable

• **disposable**: *DisposableLike‹›* =  createDisposable()

*Inherited from [AbstractEnumerator](abstractenumerator.md).[disposable](abstractenumerator.md#disposable)*

___

###  dispose

• **dispose**: *dispose* =  disposableMixin.dispose

*Inherited from [AbstractEnumerator](abstractenumerator.md).[dispose](abstractenumerator.md#dispose)*

## Accessors

###  current

• **get current**(): *TB*

*Inherited from [AbstractEnumerator](abstractenumerator.md).[current](abstractenumerator.md#current)*

**Returns:** *TB*

___

###  hasCurrent

• **get hasCurrent**(): *boolean*

*Inherited from [AbstractEnumerator](abstractenumerator.md).[hasCurrent](abstractenumerator.md#hascurrent)*

**Returns:** *boolean*

___

###  isDisposed

• **get isDisposed**(): *boolean*

*Inherited from [AbstractEnumerator](abstractenumerator.md).[isDisposed](abstractenumerator.md#isdisposed)*

**Returns:** *boolean*

## Methods

### `Abstract` move

▸ **move**(`req`: TReq): *boolean*

*Implementation of [EnumeratorLike](../interfaces/enumeratorlike.md)*

*Inherited from [AbstractEnumerator](abstractenumerator.md).[move](abstractenumerator.md#abstract-move)*

**Parameters:**

Name | Type |
------ | ------ |
`req` | TReq |

**Returns:** *boolean*
