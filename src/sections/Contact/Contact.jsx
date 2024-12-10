import styles from './Contact.module.css'

function Contact() {
  return (
    <section id='contact' className={styles.container}>
        <h1 className='sectionTitle'>Conatct</h1>
        <form action="">
            <div className='formgroup'>
                <label htmlFor="name"></label>
                <input type="text" name='name' id='name' placeholder='Name' required/>
            </div>
            <div className='formgroup'>
                <label htmlFor="email"></label>
                <input type="text" name='email' id='email' placeholder='Email' required/>
            </div>
            <div className='formgroup'>
                <label htmlFor="name"></label>
                <textarea name='message' id='message' placeholder='message' required/>
            </div>
            <input className='hover btn' type="submit" value='Submit'/>
        </form>
    </section>
  )
}

export default Contact