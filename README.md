# Dynamic Enumeration
Dynamic Enumeration is a drop-down widget that allows in creating and consuming String enumerations from the client on the fly. It major advantage is it lets us create enumerations like options on the fly during runtime with just only one object instead of multiple objects like one-many associations.

## Typical usage Scenario:
This widget can be used to create drop down selection objects with one string attribute, suitable for form inputs with options defined in advance.

## Features:
* Allows creating options for drop down by saving them as a string in the Source Attribute.
* Only one attribute is required instead of multiple objects.
* Provides two modes Selector and Creator mode. In creator allows creating options and in selector mode allows selecting an option.
* Performs duplicate check before adding an option to string.
* Options can be removed if not required.
* Allows manually sorting options.

## Dependencies:
Studio pro version 10.1.1

## Configuration:
1. To define options, create a source entity that is going to house our options in string attribute. In New_Edit page of this entity add our widget and set Selector as false. Target and Caption for selector can be left empty.

![image](https://github.com/Sriram-Balasubramaniam/Dynamic-Enumerations/assets/126452839/38558223-7105-4265-b4a0-d73e5f9da4ac)

1. To Select options in a form we can wrap our widget with data view that retrieves the source entity object that contains the options and configure the widget as below.
![image](https://github.com/Sriram-Balasubramaniam/Dynamic-Enumerations/assets/126452839/09bc8d16-78cd-4294-9e9b-ea995d976db1)

![image](https://github.com/Sriram-Balasubramaniam/Dynamic-Enumerations/assets/126452839/521be904-f4c0-4e21-93e7-909028f1e9f8)

  
