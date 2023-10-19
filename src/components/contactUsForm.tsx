import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"

const ContactUsForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<any>()
    const [sending, setSending] = useState<any>()

    const onSubmit: SubmitHandler<any> = (data) => {
        setSending(true)
        fetch('/api/email', {
            method: 'POST',
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then((res) => {
            console.log('Response received');
            if (res.status === 200) {
                console.log('Response succeeded!');
                alert('Message Successfully send.!');
                reset();
                setSending(false);
            }
        });
    }
    return (
        <div className="w-full pt-1.5">
            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="block">
                    <label htmlFor="name" className="font-normal text-[13px] lg:text-sm leading-none mb-3 cursor-pointer hidden">
                        Full Name (required)
                    </label>
                    <input type="text" {...register("name", { required: true })} id="name" placeholder="Enter Your Full Name" className="py-2 px-4 w-full appearance-none border text-input text-[13px] lg:text-sm placeholder-body-color min-h-12 transition duration-200 ease-in-out focus:border-2 focus:outline-none h-11 md:h-12" />
                </div>
                <div className="block">
                    <label htmlFor="email" className="font-normal text-[13px] lg:text-sm leading-none mb-3 cursor-pointer hidden">
                        Email Address (required)
                    </label>
                    <input type="email" {...register("email", { required: true })} id="email" placeholder="Enter Your Email" className="py-2 px-4 w-full appearance-none border text-input text-[13px] lg:text-sm placeholder-body-color min-h-12 transition duration-200 ease-in-out focus:border-2 focus:outline-none h-11 md:h-12" />
                </div>
                <div className="block">
                    <label htmlFor="phone" className="font-normal text-[13px] lg:text-sm leading-none mb-3 cursor-pointer hidden">
                        Phone (Optional)
                    </label>
                    <input type="tel" id="phone" {...register("phone")} placeholder="Enter Your Phone" className="py-2 px-4 w-full appearance-none border text-input text-[13px] lg:text-sm placeholder-body-color min-h-12 transition duration-200 ease-in-out focus:border-2 focus:outline-none h-11 md:h-12" />
                </div>
                <div>
                    <label htmlFor="message" className="font-normal text-[13px] lg:text-sm leading-none mb-3 cursor-pointer hidden">
                        Message
                    </label>
                    <textarea id="message" {...register("message", { required: true })} name="message" className="px-4 py-3 flex items-center w-full appearance-none transition duration-300 ease-in-out  text-[13px] lg:text-sm focus:outline-none focus:ring-0 placeholder-body-color border focus:bg-white focus:border-2" rows={4} placeholder="Briefly describe.."></textarea>
                </div>
                <input type="submit" value={sending ? 'Sending...' : 'Send Message'} className="btn text-sm cursor-pointer lg:text-[15px] leading-4 inline-flex items-center transition ease-in-out duration-300 font-semibold text-center justify-center tracking-[0.2px] h-11 md:h-[50px] bg-Brown  text-white hover:text-white hover:bg-title-color px-5 lg:px-6 py-4 md:py-3.5 lg:py-4 w-full" />
            </form>
        </div>
    )
}

export default ContactUsForm