import React from "react"
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./contact.css"

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm()

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data
    try {
      const templateParams = {
        name,
        email,
        subject,
        message
      };
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      reset();
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <section className='contact mb'>
        <Back name='Contáctenos' title='Obtenga soporte y ayuda amigable' cover={img} />
        <div className='container'>
          <form className='shadow' onSubmit={handleSubmit(onSubmit)}>
            <h4>Llene el formulario</h4> <br />
            <div> 
              <input 
                type='text' 
                name="name" 
                {...register('name', {
                  required: { value: true, message: 'Por favor escriba su nombre' },
                  maxLength: {
                    value: 30,
                    message: 'Por favor utilizar menos de 30 caracteres'
                  }
                })}
                placeholder='Nombre' 
              />
              {errors.name && <span className='errorMessage'>{errors.name.message}</span> }
              <input 
                type='text' 
                name="email" 
                {...register('email', {
                  required: true,
                  pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                })}
                placeholder='Email' 
              />
                            {errors.email && (
                <span className='errorMessage'>Por favor escriba un email válido</span>
              )}
            </div>
            <input 
              type='text' 
              name="message" 
              {...register('subject', {
                required: { value: true, message: 'Por favor escriba un asunto' },
                maxLength: {
                  value: 75,
                  message: 'El asunto no puede superar los 75 caracteres'
                }
              })}
              placeholder='Asunto' 
            />
            {errors.subject && (
              <span className='errorMessage'>{errors.subject.message}</span>
            )}
            <textarea 
              cols='30' 
              rows='10'
              name="message"
              {...register('message', {
                required: true
              })}
              placeholder="Mensaje"            
            ></textarea>
            {errors.message && <span className='errorMessage'>Por favor escriba un mensaje</span>}
            <div>
            <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
