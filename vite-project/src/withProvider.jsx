import React, { useContext } from "react";
import { alertData , userData  } from './Contexts.jsx';

const withProvider = (provider) => (IncomingComponent) => (props) => {
    const contextData = useContext(provider)
    return <IncomingComponent {...props}  {...contextData}/>
}
export default withProvider;
export const withUser = withProvider(userData)
export const withAlert = withProvider(alertData)
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

