import { styles } from '../styles.ts';
import { ComputersCanvas } from './canvas';

const Hero = () => {
    return (
        <section className={'relative w-full h-screen mx-auto'}>
            <div
                className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
            >
                <div
                    className={'flex flex-col justify-center items-center mt-5'}
                >
                    <div className={'w-5 h-5 rounded-full bg-[#915EFF]'} />
                    <div className={'w-1 sm:h-80 h-40 violet-gradient'} />
                </div>
                <div>
                    <h1 className={`${styles.heroHeadText}`}>
                        Olá, eu sou o <br className={'sm:block hidden'} />
                        <span className={'text-[#915EFF]'}>Kaique Simão</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white`}>
                        Desenvolvedor de Software especializado em{' '}
                        <span className={'text-[#61DBFB]'}>React</span>,{' '}
                        <span className={'text-[#C3002F]'}>Angular</span> e{' '}
                        <span className={'text-[#42b883]'}>Vue</span> para o
                        front-end, e Java com Spring para o back-end
                    </p>
                </div>
            </div>
            <ComputersCanvas />
        </section>
    );
};

export default Hero;
