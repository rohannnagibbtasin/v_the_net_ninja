import React,{useState} from 'react'

export default function UploadForm() {
    const [files , setFile ] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png','image/jpg','image/jpeg'];
    const changeHandler = (e) => {
        let selected = e.target.files[0];
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError(null)
        }else{
            setFile(null);
            setError('Please select an image file (png, jpg or jpeg)')
        }
    }
    return (
        <form>
            <label>
                <input type="file" onChange={changeHandler} />
                <span>+</span>
            </label>
            <div>
                <div className="output">
                    {error && <div className="error">{error}</div>}
                </div>
            </div>
        </form>
    )
}
