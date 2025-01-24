import  { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {

    const formRef = useRef();
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = ({ target: { name, value }}) => {
        setForm({ ...form, [name]: value });
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await emailjs.send('service_z7kx79p', // Service ID
                'template_j0szzsi', // Template ID
                {
                    from_name: form.name,
                    to_name: 'Kaith',
                    from_email: form.email,
                    to_email: 'kaithakkalsuraj123@gmail.com',
                    message: form.message,
                  },   // The form reference
                'ULk0EB_r_RmqLsYMh' // Public key

        );
            setLoading(false);

            alert('Message sent successfully');
            setForm({
                name: '',
                email: '',
                message: '',
            });

        }
        catch (error) {
            setLoading(false);
            console.log(error);
            alert('Something went wrong');
        }

       

    }

  return (
    <section className='c-space my-20'>
        <div className='relative min-h-screen flex items-center justify-center flex-col'>
            <img src='/assets/terminal.png' alt='terminal' className='absolute inset min-h-screen' />
            <div className='contact-container'>
                <h3 className='head-text'>Let's Connect</h3>
                <p className='text-lg text-white-600'>Whether you're looking to build a new Website, improve your existing one, or just want to say Hi, I'd love to hear from you!</p>
                <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
                    <label>
                        <span className='field-label'>Full Name</span>
                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            placeholder='John Doe'
                            onChange={handleChange}
                            className='field-input'
                            required
                        />
                    </label>
                    <label>
                        <span className='field-label'>E-mail</span>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            placeholder='johndoe@gmail.com'
                            onChange={handleChange}
                            className='field-input'
                            required
                        />
                    </label>
                    <label>
                        <span className='field-label'>Your Message</span>
                        <textarea
                            name='message'
                            value={form.message}
                            required
                            rows={5}
                            placeholder='Hi, I wanna give you a job...'
                            onChange={handleChange}
                            className='field-input'
                        />
                    </label>

                    <button className='field-btn' type='submit' disabled={loading}>
                        {loading ? 'Sending...' : 'Send Message'}
                        <img src='/assets/arrow-up.png' alt='arrow' className='field-btn_arrow' />

                    </button>                    
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact
