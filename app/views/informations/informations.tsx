'use client';

import Body from '@/app/components/Body/Body';
import Header from '@/app/components/Header/Header';
import InformationsCard from '@/app/components/InformationsCard/InformationsCard';
import Nav from '@/app/components/Nav/Nav';
import OfferingCard from '@/app/components/OfferingCard/OfferingCard';
import SafeArea from '@/app/components/SafeArea/SafeArea';
import React from 'react';
import { ScrollView } from 'react-native';

export default function Informations() {
    const tips = [
        { title: "Equilíbrio entre Pares e Ímpares", info: "Historicamente, a maioria dos sorteios apresenta uma divisão equilibrada. Apostar em 3 números pares e 3 ímpares, ou 4 de um e 2 de outro, cobre mais de 70% dos resultados passados." },
        { title: "Evite Sequências Longas", info: "Sorteios com números seguidos (ex: 01, 02, 03) are extremamente raros. Tente não colocar mais de dois números em sequência no seu cartão." },
        { title: "Diversifique os Quadrantes", info: "Divida o volante em quatro partes iguais. Apostas que espalham os números entre os quadrantes têm maior incidência do que aquelas concentradas em apenas um lado do cartão." },
        { title: "A Força dos Bolões", info: "Matematicamente, a melhor forma de aumentar suas chances sem gastar muito é participar de bolões. Jogar mais números em um único cartão aumenta exponencialmente a probabilidade de acerto." },
        { title: "Finais dos Números", info: "Evite escolher muitos números que terminem com o mesmo dígito (ex: 05, 15, 25, 35). A variação de dígitos finais é uma característica comum nos sorteios oficiais." },
        { title: "Atraso de Dezenas", info: "Algumas pessoas preferem jogar nas 'dezenas atrasadas', enquanto outras focam nas mais frequentes. O equilíbrio entre as duas táticas é o mais utilizado." },
        { title: "A Regra das Colunas", info: "Raramente um sorteio premia mais de dois números da mesma coluna vertical. Ao marcar seu volante, tente espalhar os números em colunas diferentes." },
        { title: "Evite Números 'Populares'", info: "Datas comemorativas (aniversários) limitam sua escolha até o número 31. Jogar números acima de 31 pode diminuir as chances de dividir o prêmio com muitos ganhadores." },
        { title: "Soma das Dezenas", info: "Estatísticas mostram que, na maioria dos sorteios, a soma dos 6 números escolhidos fica entre 150 e 220. Valores muito baixos ou muito altos são menos frequentes." },
        { title: "Distribuição por Linhas", info: "Procure não deixar mais de duas linhas horizontais do volante totalmente vazias, mas também evite concentrar todos os números em apenas duas linhas." },
        { title: "Repetição de Concursos", info: "É muito raro (mas não impossível) que um número sorteado no concurso anterior se repita no atual. Analise o último sorteio antes de confirmar sua aposta." },
        { title: "Mantenha a Regularidade", info: "Se você joga sempre os mesmos números, a persistência é sua aliada. Estatisticamente, mudar o jogo toda semana não altera a chance matemática, mas pode causar frustração se o jogo antigo sair." },
        { title: "Dezenas Gêmeas", info: "Números como 11, 22, 33, 44 e 55 raramente aparecem em conjunto. Evite colocar mais de uma dessas dezenas no mesmo jogo." },
        { title: "Uso do Gerador Inteligente", info: "Ferramentas que utilizam dados históricos para evitar combinações improváveis (como o nosso Gerador) ajudam a filtrar jogos com melhor chance estatística." }
    ];

    return (
        <SafeArea>
            <Header 
                title="Informações" 
                description="Fornecemos estatísticas e curiosidades para ajudar você a tomar decisões mais informadas e aumentar suas chances de ganhar." 
                small="Não garantimos vitória, mas oferecemos inteligência para o seu jogo."  
            />
            <Body>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 20 }}
                >
                    {tips.map((tip, index) => (
                        <InformationsCard 
                            key={index}
                            title={tip.title}
                            information={tip.info}
                        />
                    ))}
                    <OfferingCard />
                </ScrollView>
            </Body>
            <Nav />
        </SafeArea>
    );
}