import React, { useState } from 'react';
import { convertBase64 } from '../utils';

const Profile = () => {
    const [imgString, setImgString] = useState(null);

    const handleImage = async (e) => {
        let file = e.target.files[0];
        let imgStr = await convertBase64(file);
        setImgString(imgStr)
    }

    return (
        <div>
            <img src={imgString} alt='' />
            <input type='file' onChange={handleImage} />
        </div>
    )
}

export default Profile