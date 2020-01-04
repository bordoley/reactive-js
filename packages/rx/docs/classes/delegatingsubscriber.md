[@reactive-js/rx](../README.md) › [DelegatingSubscriber](delegatingsubscriber.md)

# Class: DelegatingSubscriber <**TA, TB**>

Abstract base class for implementing SubscriberOperatorLikes.

## Type parameters

▪ **TA**

▪ **TB**

## Hierarchy

* **DelegatingSubscriber**

## Implements

* [SubscriberLike](../interfaces/subscriberlike.md)‹TA›

## Index

### Constructors

* [constructor](delegatingsubscriber.md#constructor)

### Properties

* [add](delegatingsubscriber.md#add)
* [delegate](delegatingsubscriber.md#delegate)
* [disposable](delegatingsubscriber.md#disposable)
* [dispose](delegatingsubscriber.md#dispose)
* [isDisposed](delegatingsubscriber.md#isdisposed)
* [schedule](delegatingsubscriber.md#schedule)
* [scheduler](delegatingsubscriber.md#scheduler)

### Accessors

* [now](delegatingsubscriber.md#now)

### Methods

* [notifyNext](delegatingsubscriber.md#abstract-notifynext)

## Constructors

###  constructor

\+ **new DelegatingSubscriber**(`delegate`: [SubscriberLike](../interfaces/subscriberlike.md)‹TB›): *[DelegatingSubscriber](delegatingsubscriber.md)*

**Parameters:**

Name | Type |
------ | ------ |
`delegate` | [SubscriberLike](../interfaces/subscriberlike.md)‹TB› |

**Returns:** *[DelegatingSubscriber](delegatingsubscriber.md)*

## Properties

###  add

• **add**: *add* =  disposableMixin.add

___

###  delegate

• **delegate**: *[SubscriberLike](../interfaces/subscriberlike.md)‹TB›*

___

###  disposable

• **disposable**: *DisposableLike* =  createDisposable()

___

###  dispose

• **dispose**: *dispose* =  disposableMixin.dispose

___

###  isDisposed

• **isDisposed**: *boolean* = false

___

###  schedule

• **schedule**: *[schedule](../README.md#schedule)* =  subscriberMixin.schedule

___

###  scheduler

• **scheduler**: *SchedulerLike*

## Accessors

###  now

• **get now**(): *number*

**Returns:** *number*

## Methods

### `Abstract` notifyNext

▸ **notifyNext**(`_`: TA): *void*

*Implementation of [SubscriberLike](../interfaces/subscriberlike.md)*

**Parameters:**

Name | Type |
------ | ------ |
`_` | TA |

**Returns:** *void*
