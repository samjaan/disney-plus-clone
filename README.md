### `Disney+ clone`

## Deployment
[Firebase](https://firebase.google.com/)
 
## Links:
<https://disneyplus-clone-pro.firebaseapp.com> <br/>
<https://disneyplus-clone-pro.web.app>

## Styled Components

[Styled-Components - Main Docs](https://styled-components.com/)

```jsx
import styled from "styled-components";

const ReactComponent = () => {
 // logic here
 return <Wrapper>
 {some content}
 </Wrapper>
}


const Wrapper = styled.htmlElement`
write your styles here
`
export default ReactComponent
```

## React-Redux

[React-redux documentation](https://react-redux.js.org/)

```jsx
    //useSelector example
    import {useSelector} from "react-redux"
    import {selectUsername} from "../Features/username.js"
    const ReactComponent = () => {
        const username = useSelector(selectUsername)
        return(
            <div>
                <h1>username.name</h1>
            </div>
        )
    }
    export default ReactComponent
```
```jsx
    //useDispatch example
    import {useDispatch} from "react-redux"
    import {setDetails} from "../features/username.js"
    const ReactComponent = () => {
        const dispatch = useDispatch
          const setUser = (user) => {
        dispatch(
          setDetails({
           name: user.displayName,
           email: user.email,
           photo: user.photoURL,
      })
    );
  };
        return(
            <div>
                //UI
            </div>
        )
    }
    export default ReactComponent
```


  
  `© Clever Programmer`+better responsive, some functions
