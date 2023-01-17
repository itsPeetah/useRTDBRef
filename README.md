# useRTDBRef

Custom React Hook to access a Firebase Realtime Database Reference

# Usage

```js
import useRTDBRef from "@itspeetah/usertdbref"
import {useEffect} from react;

function MyComponent() {
  const myRef = useRTDBRef(config, "reference/path/or/query");

  useEffect(() => {
    onValue(myRef, (data) => console.log("Received data!", data));
  }, []);

  // ...
}
```
