import { Link } from 'react-router-dom'

const ContactUs = () => {
    return (
        <div>
            <h6>Reach out to us if you have any questions or concerns</h6>
            <p style={{'marginBottom' : '0px'}}>Email: randomemail@email.com</p>
            <p>Phone Number: 999-888-7777</p>
            <Link to='/'>Go Back</Link>            
        </div>
    )
}

export default ContactUs
