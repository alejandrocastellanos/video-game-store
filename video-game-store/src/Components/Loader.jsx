import React from 'react';
import CircularProgress from "@mui/material/CircularProgress";


const Loader = () => {
    return(
        <>
            <div className="d-flex justify-content-center" style={{ fontFamily: "arial",
                fontSize: "24px",
                margin: "25px",
                width: "800px",
                height: "400px",
                position: "relative"
            }}>
                <CircularProgress
                    disableShrink
                    color="secondary"
                    sx={{
                        width: "50px",
                        height: "50px",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        margin: "-25px 0 0 -25px",
                    }}
                    size={50}
                />
            </div>
        </>
    )
}

export default Loader;