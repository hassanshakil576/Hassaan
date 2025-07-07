import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Footer from '../components/Footer';

function Contact() {
    const [loading, setLoading] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.sendForm(
            'service_a6sm8hp',
            'template_6k1yd3p',
            form.current,
            'l1NnpFlga7k329PQ2'
        ).then(
            (result) => {
                form.current.reset();
                setLoading(false);
            },
            (error) => {
                alert("Failed to send message. Try again.");
                console.log(error.text);
                setLoading(false);
            }
        );
    };

    return (
        <>
            <motion.div
                className='flex flex-col gap-4 items-center justify-center mt-25'
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <h1 className='text-[#CED4D7] text-5xl font-bold font-mono' id='intro-text'>
                    GET IN <span className='text-white font-extrabold'>TOUCH</span>
                </h1>
                <motion.p
                    className='text-[#CED4D7] text-xl font-bold font-mono text-center'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: false }}
                >
                    Have something to discuss? Send me a message and let's talk.
                </motion.p>
            </motion.div>

            <motion.div
                className='flex items-center justify-center mt-5 mb-10'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="border-base-300 rounded-box w-2xl p-4"
                >
                    <fieldset className="border border-base-300 rounded-md p-4">
                        <legend className="fieldset-legend text-xl p-2 text-white">Contact</legend>

                        <label className="label text-white text-xl">Name</label>
                        <input
                            type="text"
                            name="user_name"
                            className="input w-full mt-2 focus:outline-none focus:ring-3 focus:ring-blue-500"
                            placeholder="Name"
                            required
                        />

                        <label className="label text-white text-xl">Email</label>
                        <input
                            type="email"
                            name="user_email"
                            className="input w-full focus:outline-none mt-2 focus:ring-3 focus:ring-blue-500"
                            placeholder="Email"
                            required
                        />

                        <label className="label text-white text-xl">Message</label>
                        <textarea
                            name="message"
                            className="textarea w-full h-40 focus:outline-none mt-2 focus:ring-3 focus:ring-blue-500 placeholder-gray-400"
                            placeholder="Leave a comment here!"
                            required
                        ></textarea>

                        <motion.button
                            type="submit"
                            disabled={loading}
                            whileTap={{ scale: 0.95 }}
                            className="mt-6 w-full cursor-pointer bg-white text-lg text-black font-bold p-2 rounded-lg shadow-md transition duration-400 hover:bg-gray-500 hover:text-white flex justify-center items-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : (
                                "Send"
                            )}
                        </motion.button>
                    </fieldset>
                </form>
            </motion.div>

            <Footer />
        </>
    );
}

export default Contact;
