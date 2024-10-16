// pages/resilience.js
"use client";

import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  font-family: 'Arial', sans-serif;
  background-color: #f5f5f5;
  color: #333;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #0070f3;
  margin-bottom: 20px;
`;

const Section = styled.section`
  max-width: 800px;
  margin: 20px 0;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  color: #0070f3;
  margin-bottom: 10px;
`;

const List = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  margin: 20px 0;
`;

const ResiliencePage = () => {
  return (
    <Container>
      <Title>Qu&apos;est-ce que l&apos;essai de résilience ?</Title>
      <Section>
        <p>
          L&apos;essai de résilience est un test mécanique qui permet d&apos;évaluer la capacité d&apos;un matériau à absorber
          l&apos;énergie d&apos;un choc sans se rompre de manière fragile. En d&apos;autres termes, il mesure la résistance
          d&apos;un matériau à un impact soudain.
        </p>
      </Section>
      <Section>
        <Subtitle>Pourquoi réaliser un essai de résilience ?</Subtitle>
        <List>
          <li>• Sécurité : Pour les matériaux utilisés dans des applications où des chocs sont possibles (par exemple, les structures métalliques, les équipements sportifs), l&apos;essai de résilience permet de garantir une certaine sécurité en évaluant la résistance aux chocs.</li>
          <li>• Choix des matériaux : En comparant la résilience de différents matériaux, on peut sélectionner celui qui convient le mieux à une application spécifique.</li>
          <li>• Étude du comportement des matériaux : L&apos;essai de résilience permet de comprendre comment un matériau se comporte lorsqu&apos;il est soumis à un choc, notamment en termes de propagation des fissures.</li>
        </List>
      </Section>
      <Section>
        <Subtitle>Comment se déroule un essai de résilience ?</Subtitle>
        <p>
          L&apos;essai de résilience le plus courant est l&apos;essai Charpy. Il consiste à frapper une éprouvette entaillée avec un pendule. 
          L&apos;énergie perdue par le pendule lors de la rupture de l&apos;éprouvette correspond à l&apos;énergie absorbée par le matériau. 
          Cette énergie est appelée résilience.
        </p>
        <Image src="/1.jpg" alt="Image d'un essai de résilience Charpy" />
      </Section>
      <Section>
        <Subtitle>Les facteurs influençant la résilience</Subtitle>
        <List>
          <li>• La température : La résilience de nombreux matériaux diminue avec la baisse de température.</li>
          <li>• La vitesse de chargement : Une vitesse de chargement plus élevée peut réduire la résilience.</li>
          <li>• La nature de l&apos;entaille : La forme et la profondeur de l&apos;entaille influencent la propagation de la fissure.</li>
          <li>• La microstructure du matériau : La présence de défauts, de précipités ou de grains peut affecter la résilience.</li>
        </List>
      </Section>
      <Section>
        <Subtitle>Les applications de l&apos;essai de résilience</Subtitle>
        <List>
          <li>• Métallurgie : Évaluation de la sensibilité à la rupture fragile des aciers, notamment à basse température.</li>
          <li>• Construction : Contrôle de la qualité des matériaux utilisés dans les structures métalliques.</li>
          <li>• Automobile : Évaluation de la résistance des pièces soumises à des chocs (par exemple, les pare-chocs).</li>
          <li>• Aéronautique : Contrôle de la qualité des alliages légers utilisés dans la construction des avions.</li>
        </List>
      </Section>
      <Section>
        <p>
          L&apos;essai de résilience est un outil essentiel pour caractériser la résistance aux chocs d&apos;un matériau. Il est particulièrement important pour les applications où la sécurité est primordiale. En comparant la résilience de différents matériaux, les ingénieurs peuvent sélectionner ceux qui sont les mieux adaptés à une application spécifique.
        </p>
      </Section>
    </Container>
  );
};

export default ResiliencePage;
