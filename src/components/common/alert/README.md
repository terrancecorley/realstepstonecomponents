## Description
This is an alert component that contains an overlay. Meant for pop-up notifications.

## Children
This component accepts children elements. They render in the body of the alert component.

## Props
- overlayClass
    - Type: string
    - Description: This class name will be used to style the overlay.
- alertHeaderClass
    - Type: string
    - Description: This class name will be used to style the alert header.
- title
    - Type: string
    - Description: This string will be set as the alert header title.
- onClick
    - Type: function
    - Description: This function will run with you click either the "close button" or the "okay" button.