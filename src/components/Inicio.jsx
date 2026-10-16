import Header from './Header';
import Footer from './Footer';

export default function Inicio(){
    return (
        <>
            <Header title="My App" />
            <main>
                <p>Welcome to my app!</p>
            </main>
            <Footer year="2026" companyName="Projeto Front End-Thiago" />
        </>
    );
}