/* eslint react/no-unknown-property: 0 */
/* eslint react/prefer-stateless-function: 0 */

import React, { useState } from 'react'
import './HideContent.scss'

// Size presets, defined by Spotify
// const sizePresets = {
//     large: {
//         width: 300,
//         height: 380,
//     },
//     compact: {
//         width: 300,
//         height: 80,
//     },
// }

const HideContent = (props) => {
    const [hide, setHide] = useState(true);
    const [pass, setPass] = useState('');

    const handlePassChange = (event) => {
        setPass(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (pass === props.myKey) {
            setHide(false);
        }
    }


    return (
        <div className="hideContent">
            { hide ?
                (
                    <form onSubmit={handleSubmit}>
                        <input value={pass} onChange={handlePassChange} type="search" placeholder="Locked" />
                    </form>
                )
                :
                (
                    <>
                        {props.children}
                    </>
                )
            }
        </div>
    )
}

export default HideContent
