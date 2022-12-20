import { useState } from "react";
import { useForm, Resolver } from "react-hook-form";
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import axios from 'axios';

interface FormValues {
    name: string
    email: string
    phone: string
    service: string,
    message: string
}

const schema = Joi.object({
    name: Joi.string().required().min(3).label("Name"),
    phone: Joi.string().required()
        .pattern(new RegExp(/^(1\s?)?(\d{3}|\(\d{3}\))[\s-]?\d{3}[\s-]?\d{4}$/))
        .messages({
            "string.pattern.base": "Invalid Phone Number",
        }),
    email: Joi.string().required()
        .pattern(new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/))
        .messages({
            "string.pattern.base": "Invalid Email",
        }),
    service: Joi.string().required().label("Service").messages({
        'string.base': `"a" should be a type of 'text'`,
        'Service': `"a" cannot be an empty field`,
        'string.min': `"a" should have a minimum length of {#limit}`,
        'any.required': `"a" is a required field`
    }),
    message: Joi.string().allow(null, ''),

});


export const Form = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: joiResolver(schema),
        shouldFocusError: true,
        shouldUnregister: false,
    });
    const [sending, setSending] = useState<boolean>();
    const [requestMessage, setRequestMessage] = useState<string>("");

    const onSubmit = async (data: FormValues) => {
        try {
            await axios.post("http://localhost:1337/api/ezforms/submit", {
                formData: {
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    service: data.service,
                    message: data.message
                }
            });
            setSending(true);
            setTimeout(() => {
                setRequestMessage('Thank you for your message. It has been sent');
                setSending(false);
            }, 1000)

            setTimeout(() => {
                setRequestMessage("")
                reset();
            }, 2000)
        } catch (err: any) {
            const { response: { data } } = err;
            setRequestMessage(data.error.message)
        }
    };



    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input {...register("name")} />
                {errors?.name && <p>{errors.name.message}</p>}
            </div>

            <div>
                <input {...register("email")} />
                {errors?.email && <p>{errors.email.message}</p>}
            </div>

            <div>
                <input {...register("phone")} />
                {errors?.phone && <p>{errors.phone.message}</p>}
            </div>

            <div>
                <input {...register("service")} />
                {errors?.service && <p>{errors.service.message}</p>}
            </div>

            <div>
                <input {...register("message")} />
                {errors?.message && <p>{errors.message.message}</p>}
            </div>

            <input type="submit" />
            {sending && <p>sending...</p>}
            {requestMessage && <p>{requestMessage}</p>}
        </form>
    );
}

