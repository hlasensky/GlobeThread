import React from 'react'




const Globe = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 900;
    React.useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
         // subscribe to window resize event "onComponentDidMount"
         window.addEventListener("resize", handleResizeWindow);
         return () => {
             <div>
                 
             </div>
           // unsubscribe "onComponentDestroy"
           window.removeEventListener("resize", handleResizeWindow);
         };
       }, []);
    if (width > breakpoint) {
        return (
            <div id="globe">
                <iframe width="100%" height="100%" src="https://cybermap.kaspersky.com/en/widget/dynamic/dark" frameBorder="0" title="background"></iframe>
            </div>
        );
    } else {
        return (
        <div>

        </div>
      );
    }

};

export default Globe;
