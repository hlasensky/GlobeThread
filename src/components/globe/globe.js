import React from 'react'




const Globe = () => {
    const width = React.useState(window.innerWidth);
    const breakpoint = 900;
    if (width > breakpoint) {
        return (
            <div id="globe">
                <iframe width="100%" height="100%" src="https://cybermap.kaspersky.com/en/widget/dynamic/dark" frameBorder="0" title="background"></iframe>
            </div>
        );
    } 
    return (
        <div>

        </div>
      );
};

export default Globe;
