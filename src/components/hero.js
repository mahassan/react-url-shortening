import styled from 'styled-components';

const HeroSection = styled.div`
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        .hero{
            &__text{
            width: 100%;
            line-height: 1.2;
            p{
                color:hsl(257, 7%, 63%);
                }
            }
            &__img{
                order: -1;
                img{
                    width:100%;
                    margin-bottom: 42px;
                }
            }
            &__btn{
                width:196px;
                height:55px;
                border-radius:34px;
            }
        }
        h1{     
            font-size: 1.13rem; //16 is html * 1.13 = 18.08
            font-weight:700;
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
            <button className="hero__btn">Get Started</button>
        </section>
        <section className="hero__img">
            <img src="../images/illustration-working.svg" alt="person working" />
        </section>
    </HeroSection>
    )
}

export default Hero