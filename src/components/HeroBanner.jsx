import profilePic from '../assets/profile_picture.png'

export default function HeroBanner() {

    return(
        <section className='hero--section'>
            <img src={profilePic} className="hero--banner" />
        </section>
    )
}