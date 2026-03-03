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
        { title: "Equilíbrio entre Pares e Ímpares", info: "O padrão mais comum na Lotofácil é 8 ímpares e 7 pares, ou 7 ímpares e 8 pares. Essas duas combinações aparecem em cerca de 56% dos sorteios." },
        { title: "Repetição do Concurso Anterior", info: "Diferente da Mega, na Lotofácil é normal repetir de 8 a 10 números do sorteio anterior. A média histórica de repetição é de 9 dezenas." },
        { title: "Números Primos no Volante", info: "Existem 9 números primos entre os 25 disponíveis (02, 03, 05, 07, 11, 13, 17, 19, 23). Os sorteios costumam ter entre 5 e 6 desses números." },
        { title: "A Força da Moldura", info: "A 'moldura' são os números das bordas do volante (16 dezenas). A maioria dos resultados concentra de 9 a 11 números na moldura, deixando o restante para o centro." },
        { title: "Sequências de Números", info: "Evite sequências muito longas. O padrão é encontrar sequências de 3 ou 4 números seguidos, mas raramente mais do que isso em uma única linha." },
        { title: "Soma das Dezenas", info: "Estatisticamente, a soma dos 15 números sorteados costuma variar entre 180 e 210. Valores muito abaixo ou acima disso são raridades matemáticas." },
        { title: "Distribuição por Linhas", info: "O padrão mais comum é a distribuição 3-3-3-3-3 (3 números por linha), ou variações como 4-3-3-3-2. Evite preencher uma linha inteira e deixar outra vazia." },
        { title: "Números Fixos em Bolões", info: "Para aumentar as chances sem gastar muito, escolha de 5 a 7 números 'fixos' que você acredita que sairão e varie os demais em diferentes cartões." },
        { title: "Dezenas Quentes e Frias", info: "Mantenha um equilíbrio. Escolha algumas dezenas que saíram nos últimos 3 concursos (quentes) e algumas que estão atrasadas (frias)." },
        { title: "Frequência das Colunas", info: "Assim como nas linhas, as colunas tendem a ter um equilíbrio. O ideal é que cada coluna tenha pelo menos 1 número e no máximo 4." },
        { title: "Evite Jogos Prontos", info: "Sequências óbvias como 01, 02, 03... 15 ou apenas números de um lado do volante são jogadas por milhares de pessoas e diluem o prêmio se ganharem." },
        { title: "Aposta Combinada (16 a 20 números)", info: "Jogar com 16 números equivale a 16 apostas simples. É mais caro, mas a chance de acertar 14 e 15 pontos sobe consideravelmente." },
        { title: "Análise de Quadrantes", info: "Divida o volante em 4 quadrantes. Tente distribuir seus números de forma que nenhum quadrante fique sobrecarregado ou totalmente vazio." },
        { title: "Uso do Gerador Inteligente", info: "Nosso sistema utiliza esses filtros estatísticos para descartar combinações que nunca aconteceram na história da Lotofácil, otimizando seu dinheiro." }
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