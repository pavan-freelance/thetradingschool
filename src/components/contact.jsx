import { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [isLoading, setisLoading] = useState(false);

    function sendEmail(e) {
        setisLoading(true);
        e.preventDefault();


        emailjs.sendForm('service_2gezwld', 'template_n9t3vys', e.target, 'RU0BnKIcjJqf-zxku')
            .then(res => {
                setisLoading(false);
                document.getElementById("contact-form").reset();
                toast.success('Response Submitted Sucessfully...');
            }).catch(err => {
                setisLoading(false);
                toast.error('Something went wrong, Try Again...');
            });
    }

    return (
        <div>
            <form id="contact-form" onSubmit={sendEmail}>
                <div className="form-group row justify-content-center mb-3">
                    {/* <label for="name" className="col-sm-2 col-form-label">Name</label> */}
                    <div className="col-sm-6">
                        <input type="text" className="form-control" name="name" id="name" placeholder="Your Name" required
                            disabled={isLoading} />
                    </div>
                </div>

                <div className="form-group row justify-content-center mb-3">
                    {/* <label for="email">Email address</label> */}
                    <div className="col-sm-6">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required disabled={isLoading} />
                    </div>
                </div>

                <div className="form-group row justify-content-center mb-3">
                    {/* <label for="phone">Phone</label> */}
                    <div className="col-sm-6">
                        <input type="text" className="form-control" name="phone" id="phone" placeholder="Phone" required disabled={isLoading} />
                    </div>
                </div>

                <div className="form-group row justify-content-center mb-3">
                    {/* <label for="message">Message</label> */}
                    <div className="col-sm-6">
                        <textarea className="form-control" name="message" id="message" rows="3" placeholder="Message" disabled={isLoading}></textarea>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary" disabled={isLoading}>
                    {isLoading && <span><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> &nbsp; </span>}
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Contact;