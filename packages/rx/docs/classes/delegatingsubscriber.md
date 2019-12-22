[@reactive-js/rx](../README.md) › [DelegatingSubscriber](delegatingsubscriber.md)

# Class: DelegatingSubscriber <**TA, TB**>

Abstract base class for implementing SubscriberOperatorLikes.

## Type parameters

▪ **TA**

▪ **TB**

## Hierarchy

* Subscriber‹TA›

  ↳ **DelegatingSubscriber**

## Implements

* [SubscriberLike](../interfaces/subscriberlike.md)‹TA›

## Index

### Constructors

* [constructor](delegatingsubscriber.md#constructor)

### Properties

* [delegate](delegatingsubscriber.md#delegate)

### Methods

* [complete](delegatingsubscriber.md#complete)

## Constructors

###  constructor

\+ **new DelegatingSubscriber**(`delegate`: [SubscriberLike](../interfaces/subscriberlike.md)‹TB›): *[DelegatingSubscriber](delegatingsubscriber.md)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`delegate` | [SubscriberLike](../interfaces/subscriberlike.md)‹TB› |

**Returns:** *[DelegatingSubscriber](delegatingsubscriber.md)*

## Properties

###  delegate

• **delegate**: *[SubscriberLike](../interfaces/subscriberlike.md)‹TB›*

## Methods

###  complete

▸ **complete**(`error?`: [ErrorLike](../interfaces/errorlike.md)): *void*

*Implementation of [SubscriberLike](../interfaces/subscriberlike.md)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`error?` | [ErrorLike](../interfaces/errorlike.md) |

**Returns:** *void*
