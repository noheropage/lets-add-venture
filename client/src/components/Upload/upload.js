import React, {useState} from 'react';
import { Button, Alert, Form, Image } from 'react-bootstrap'

function Upload() {
    const [fileInputState, setFileInputState] = useState('')
    const [selectedFile, setSelectedFile] = useState('')
    const [previewSource, setPreviewSource] = useState('')

    const handleFileInputChange = (e) => {
        const file = e.target.files[0]
        previewFile(file)
        setSelectedFile(file)
        setFileInputState(e.target.value)
    }

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }
    }

    const handleSubmitFile = (e) => {
        e.preventDefault();
        if(!previewSource) return;
        uploadImage(previewSource)
    }

    const uploadImage = async (base64EncodedImage) => {
        try {
            await fetch('/api/images/upload', {
                method: 'POST',
                body: JSON.stringify({data: base64EncodedImage}),
                headers: { 'Content-type': 'application/json'}
            })
            setFileInputState('')
            setPreviewSource('')
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div>
            <h1 className='title'>Upload</h1>
            <Form onSubmit={handleSubmitFile}>
                <input type='file' name='image' onChange={handleFileInputChange} value={fileInputState} className='form-input'></input>
                <Button variant="success" type="submit" value="submit">Submit</Button>
            </Form>
            {previewSource && (
                <Image src={previewSource} alt="picture to be uploaded" style={{ height: '300px' }} roundedCircle/>
            )}
        </div>
    )
}

export default Upload;