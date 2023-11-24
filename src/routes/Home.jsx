import { } from 'react';
import Login from './Login.jsx';
import HeroImg from '../assets/img/hero.png';
import Card1 from '../assets/img/card1.jpeg';
import Card2 from '../assets/img/card2.jpeg';
import Card3 from '../assets/img/card3.jpg';
import HeartImg from '../assets/img/heart.png';


function Home(){
    
    const getUser = sessionStorage.getItem('usuario');
    const getPassword = sessionStorage.getItem('senha');

    return(
        <>
            {! (getUser && getPassword) ? (
                    <Login />
                ) : (
                    <>
                        <main>

                            <div className="container">

                                <section className='hero-container'>
                                    <div className='hero-img'>
                                        <img src={HeroImg} alt="Imagem ilustrtaiva do menu do aplicativo" />
                                    </div>
                                    <div className="hero-text">
                                        <h1>Pixel Health</h1>
                                        <p>Ao unir elementos de jogo com saúde, proporcionamos uma experiência única, onde cada conquista no jogo reflete em benefícios reais para a saúde.</p>
                                    </div>
                                </section>

                                <aside className='aside-container'>

                                    <article className='article-container'>
                                        <h3>O que é a solução?</h3>
                                        <p>Pixel Health é uma solução inovadora que busca melhorar a qualidade de vida das pessoa por utilizar um jogo envolvente para incentivar mudanças positivas de hábitos e promover um estilo de vida mais saudável.</p>
                                    </article>

                                    <article className='article-container border'>
                                        <h3>O que ela fará?</h3>
                                        <p>Pixel Health atuará como um guia personalizado, adaptando-se às necessidades e preferências individuais de cada usuário. Através de missões e desafios, o jogo motivará os usuários a incorporar escolhas saudáveis em sua rotina diária, transformando gradualmente suas vidas.</p>
                                    </article>

                                    <article className='article-container'>
                                        <h3>Como funcionará?</h3>
                                        <p>No Pixel Health, os jogadores iniciam sua jornada moldando avatares personalizados baseados em hábitos reais. Ao explorar desafios gamificados no aplicativo para celular, cada interação impulsiona o avatar e inspira a adoção de hábitos saudáveis na vida real.</p>
                                    </article>

                                </aside>
                            </div>

                            <section className='cards-section'>

                                <div className="cards-title">

                                    <div className='title-line'></div>
                                    <h2>Vantagens</h2>
                                    <div className='title-line'></div>
                                </div>

                                <div className="cards-container">

                                    <div className="card-container">

                                        <div className="heart-container">
                                            <div className='heart-img-container'>
                                                <img src={HeartImg} alt="Imagem de um coração em pixel art" className='heart'/>
                                            </div>
                                        </div>

                                        <div className="card-img">
                                            <img src={Card1} alt="Imagem ilustrativa em pixel art de jogadores em volta de um coração" />
                                        </div>
                                        <div className="card-text">
                                            <h4>Experiência Divertida e Motivadora</h4>
                                            <p>O Pixel Health transforma a busca por hábitos saudáveis em uma experiência de jogo envolvente, superando alternativas passivas, como assistir vídeos sobre saúde.</p>
                                        </div>
                                    </div>

                                    <div className="card-container">
                                        
                                        <div className="heart-container">
                                            <div className='heart-img-container'>
                                                <img src={HeartImg} alt="Imagem de um coração em pixel art" className='heart'/>
                                            </div>
                                            <div className='heart-img-container'>
                                                <img src={HeartImg} alt="Imagem de um coração em pixel art" className='heart'/>
                                            </div>
                                        </div>

                                        <div className="card-img">
                                            <img src={Card3} alt="Imagem ilustrativa em pixel art de uma loja" />
                                        </div>
                                        <div className="card-text">
                                            <h4>Recompensas e Personalização</h4>
                                            <p>Além dos benefícios à saúde, oferecemos recompensas tangíveis no jogo, como comprar roupas e personalizar o personagem com conquistas alcançadas.</p>
                                        </div>
                                    </div>

                                    <div className="card-container">

                                        <div className="heart-container">
                                            <div className='heart-img-container'>
                                                <img src={HeartImg} alt="Imagem de um coração em pixel art" className='heart'/>
                                            </div>
                                            <div className='heart-img-container'>
                                                <img src={HeartImg} alt="Imagem de um coração em pixel art" className='heart'/>
                                            </div>
                                            <div className='heart-img-container'>
                                                <img src={HeartImg} alt="Imagem de um coração em pixel art" className='heart'/>
                                            </div>
                                        </div>
                                        
                                        <div className="card-img">
                                            <img src={Card2} alt="Imagem ilustrativa em pixel art de um cérebro (IoT) com uma poção e um kit médico" />
                                        </div>
                                        <div className="card-text">
                                            <h4>Integração Wearable IoT</h4>
                                            <p>Além da diversão no jogo, a integração com dispositivos wearable IoT permite melhorias reais na saúde. Competir no ranking acrescenta motivação adicional.</p>
                                        </div>

                                    </div>

                                </div>

                            </section>
                        
                        </main>
                    </>
                )}
        </>
    )
}

export default Home
