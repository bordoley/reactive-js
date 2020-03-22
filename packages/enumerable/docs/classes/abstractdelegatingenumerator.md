[@reactive-js/enumerable](../README.md) › [AbstractDelegatingEnumerator](abstractdelegatingenumerator.md)

# Class: AbstractDelegatingEnumerator <**TReq, TA, TB**>

## Type parameters

▪ **TReq**

▪ **TA**

▪ **TB**

## Hierarchy

* **AbstractDelegatingEnumerator**

## Implements

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

___

###  delegate

• **delegate**: *[EnumeratorLike](../interfaces/enumeratorlike.md)‹TReq, TA›*

___

###  disposable

• **disposable**: *DisposableLike‹›* =  createDisposable()

___

###  dispose

• **dispose**: *dispose* =  disposableMixin.dispose

## Accessors

###  current

• **get current**(): *TB*

**Returns:** *TB*

___

###  hasCurrent

• **get hasCurrent**(): *boolean*

**Returns:** *boolean*

___

###  isDisposed

• **get isDisposed**(): *boolean*

**Returns:** *boolean*

## Methods

### `Abstract` move

▸ **move**(`req`: TReq): *boolean*

*Implementation of [EnumeratorLike](../interfaces/enumeratorlike.md)*

**Parameters:**

Name | Type |
------ | ------ |
`req` | TReq |

**Returns:** *boolean*
