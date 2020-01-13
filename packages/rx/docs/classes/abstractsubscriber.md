[@reactive-js/rx](../README.md) › [AbstractSubscriber](abstractsubscriber.md)

# Class: AbstractSubscriber <**T**>

Abstract base class for implementing the `SubscriberLike` interface.

## Type parameters

▪ **T**

## Hierarchy

* **AbstractSubscriber**

  ↳ [AbstractDelegatingSubscriber](abstractdelegatingsubscriber.md)

## Implements

* [SubscriberLike](../interfaces/subscriberlike.md)‹T›

## Index

### Constructors

* [constructor](abstractsubscriber.md#constructor)

### Properties

* [add](abstractsubscriber.md#add)
* [disposable](abstractsubscriber.md#disposable)
* [dispose](abstractsubscriber.md#dispose)
* [isDisposed](abstractsubscriber.md#isdisposed)

### Accessors

* [now](abstractsubscriber.md#now)

### Methods

* [notify](abstractsubscriber.md#abstract-notify)
* [schedule](abstractsubscriber.md#schedule)

## Constructors

###  constructor

\+ **new AbstractSubscriber**(`scheduler`: SchedulerLike): *[AbstractSubscriber](abstractsubscriber.md)*

**Parameters:**

Name | Type |
------ | ------ |
`scheduler` | SchedulerLike |

**Returns:** *[AbstractSubscriber](abstractsubscriber.md)*

## Properties

###  add

• **add**: *add* =  disposableMixin.add

___

###  disposable

• **disposable**: *DisposableLike‹›* =  createDisposable(_ => {
    this.isDisposed = true;
  })

___

###  dispose

• **dispose**: *dispose* =  disposableMixin.dispose

___

###  isDisposed

• **isDisposed**: *boolean* = false

## Accessors

###  now

• **get now**(): *number*

**Returns:** *number*

## Methods

### `Abstract` notify

▸ **notify**(`_`: T): *void*

*Implementation of [SubscriberLike](../interfaces/subscriberlike.md)*

**Parameters:**

Name | Type |
------ | ------ |
`_` | T |

**Returns:** *void*

___

###  schedule

▸ **schedule**<**T**>(`this`: [SubscriberLike](../interfaces/subscriberlike.md)‹T› & object, `continuation`: SchedulerContinuationLike): *DisposableLike*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`this` | [SubscriberLike](../interfaces/subscriberlike.md)‹T› & object |
`continuation` | SchedulerContinuationLike |

**Returns:** *DisposableLike*
