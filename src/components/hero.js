import styled from 'styled-components';

const HeroSection = styled.div`
    display: flex;
    width: 100%;
    .hero{
        &__text{
        width: 60%;
        h1{     
            font-size: 3.5rem;
            margin-top: 4rem;
        }
        }
        &__img{
            width: 40%;
            img{
                width:100%;
            }
        }
    }

`

const Hero = () => {
    return (
    <HeroSection>
        <section className="hero__text">
            <h1>
                More than Just short Link
            </h1>
            <p>
                Build your brand's recognition and get detailed <br />
                insight on how your links are performing
            </p>
            <button>Get Started</button>
        </section>
        <section className="hero__img">
            <img src="../images/illustration-working.svg" alt="person working" />
        </section>
    </HeroSection>
    )
}

export default Hero