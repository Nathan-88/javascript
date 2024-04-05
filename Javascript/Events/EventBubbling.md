Event bubbling is a method of event propagation in the HTML DOM API when an event is in an element inside another element, and both elements have registered a handle to that event. It is a process that starts with the element that triggered the event and then bubbles up to the containing elements in the hierarchy. In event bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements.

Syntax: 

addEventListener(type, listener, useCapture)
type: Use to refer to the type of event.
listener: Function we want to call when the event of the specified type occurs.
userCapture: Boolean value. The boolean value indicates the event phase. By Default useCapture is false. It means it is in the bubbling phase.

we understand that in bubbling the innermost element’s event is handled first and then the outer: the <p> element’s click event is handled first, then the <div> element’s click event.