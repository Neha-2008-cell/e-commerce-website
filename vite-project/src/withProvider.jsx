import React, { useContext } from "react";
import { alertContext , userContext , cartContext } from './CreateContexts.jsx';

const withProvider = (provider) => (IncomingComponent) => (props) => {
    const contextData = useContext(provider)

    return <IncomingComponent {...props}  {...contextData}/>
}

export default withProvider;
export const withUser = withProvider(userContext)
export const withAlert = withProvider(alertContext)
export const withCart = withProvider(cartContext)

// export default function withProvider(provider){
//  function  HOC(IncomingComponent) {
//      return function OutgoingComponent(props) {
//       const contextData = useContext(provider)
//         return (
//         <>
//          <IncomingComponent {...props}  {...contextData}/>
//         </>
//         )
//     }
// }
//}

