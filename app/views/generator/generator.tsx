import PromoCard from '@/app/components/PromoCard/PromoCard';
import Body from '../../components/Body/Body';
import GeneratorCard from '../../components/GeneratorCard/GeneratorCard';
import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import SafeArea from '../../components/SafeArea/SafeArea';

export default function Generator() {
    return (
        <SafeArea>
            <Header 
                title="Gerador" 
                description="Sugestões inteligentes baseadas na frequência e nos padrões matemáticos de todos os concursos da história da Mega-Sena." 
                small="O algoritmo é atualizado regularmente."  
            />
            <Body>
                <GeneratorCard />
                <PromoCard />
            </Body>
            <Nav />
        </SafeArea>
    );
}