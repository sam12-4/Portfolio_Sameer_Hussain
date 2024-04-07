import { React, Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber'
import Loader from "../components/Loader"
import Fox from "../models/Fox"
import useAlert from '../hooks/useAlert'
import Alert from '../components/Alert'

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [isloading, setIsLoading] = useState(false)
  const [currentAnimation, setCurrentAnimation] = useState("idle")

  const {alert, showAlert, hideAlert} = useAlert()


  const formRef = useRef(null)
  
  const handleChange = (e) => { setForm({ ...form, [e.target.name]: e.target.value }) }
  
  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setCurrentAnimation("hit")
    emailjs.send(
      import.meta.env.VITE_APP_EMAIL_JS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAIL_JS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Sameer",
        from_email: form.email,
        to_email: "sameerh64h@gmail.com",
        message: form.message
      },
      import.meta.env.VITE_APP_EMAIL_JS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false)
      setCurrentAnimation("idle")
      showAlert({show : true, text : "Message sent successfully!", type: "success"})
      setForm({ name: "", email: "", message: "" })
      setCurrentAnimation("idle")
      setTimeout(() => {
        hideAlert()
      }, 3000);
      // TODO : show succcess message
      // TODO : Hide an alert
    }).catch((err) => {
      setIsLoading(false)
      console.log(err);
      showAlert({show : true, text : "I did'nt receive your message!", type: "danger"})
      setCurrentAnimation("idle")
      setTimeout(() => {
        hideAlert()
      }, 3000);

    })
  }

  return (
    <section className='relative flex lg:flex-row flex-col max-container h-[100vh]'>
      {alert.show && <Alert {...alert}/>}
      {/* <Alert text="test"/> */}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className='head-text'>Get in Touch</h1>

        <form className='w-full flex flex-col gap-7 mt-14' onSubmit={handleSubmit}>
          <label className="text-black-500 font-semibold">
            Name
            <input type="text" name='name' className='input' placeholder='Enter Your Name' required value={form.name} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input type="email" name='email' className='input' placeholder='yourname@gmail.com' required value={form.email} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
          </label>
          <label className="text-black-500 font-semibold flex flex-col gap-3">
            Your Message
            <textarea name='message' rows={4} className='textarea' placeholder='Let me know how can i help you!' required value={form.message} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
          </label>
          <button type="submit" className='btn' disabled={isloading}>
            {isloading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
        camera={{
          position : [0 ,0 ,5],
          fov : 75,
          near : 0.1,
          far : 1000
        }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]}/>
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox 
            currentAnimation = {currentAnimation}
            position={[0.5, 0.35, 0]}
            rotation = {[12.6, -0.6, 0]}
            scale = {[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact
