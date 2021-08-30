import React , { useState }from 'react'
import './Contactme.css';
import { sendEmail } from '../container/actions';

export default function Contactme() {
    const initialData = {
        sender_name : '',
        sender_email: '',
        subject: '',
        content: ''
    };
    const [formData, updateFormData] = useState(initialData);
    const [showSuccess, updateSuccess] = useState(0);

    const onChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const closeSuccess = () => {
        updateSuccess(0);
    }

    const submitForm = async () => {
        try {
            await sendEmail(formData);
            updateFormData(initialData);
            updateSuccess(1);
            setTimeout(() => {
                closeSuccess();
            }, 3000)
        } catch(e) {

        }
    }

    return (
        <div className="contactme-wrapper" id="contactme">
            <div className="contactme">
                <div className="contactme-form">
                    <div className="title">GET IN TOUCH</div>
                    <div className="success-notif" style={{opacity: showSuccess}}>
                        <p className="success-notif-message"> Success! Your email has been sent</p>
                    </div>
                    <div className="col-75">
                        <input 
                            type="text"
                            name="sender_name" 
                            placeholder="Your name.." 
                            value={formData.sender_name} 
                            onChange={(e) => {onChange(e)}}
                        />
                    </div>
                
                    <div className="col-75">
                        <input 
                        type="email"
                        name="sender_email" 
                        placeholder="Your email.." 
                        value={formData.sender_email}
                        onChange={(e) => {onChange(e)}}
                    />
                    </div>
                
                    <div className="col-75">
                        <input 
                            type="text"
                            name="subject" 
                            placeholder="Subject.." 
                            value={formData.subject}
                            onChange={(e) => {onChange(e)}}
                        />
                    </div>
                    
                    <div className="col-75">
                        <textarea 
                            id="subject" 
                            name="content" 
                            placeholder="Write something.." 
                            value={formData.content}
                            onChange={(e) => {onChange(e)}}
                            style={{height:"200px"}}>
                        </textarea>
                    </div>
                    <div className="row">
                        <button className="btn btn-submit" onClick={submitForm}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
