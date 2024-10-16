// pages/compression.js

import Head from 'next/head';

export default function Compression() {
  return (
    <div style={styles.container}>
      <Head>
        <title>Qu&apos;est-ce qu&apos;un essai de compression ?</title>
        <meta name="description" content="Détails sur l'essai de compression." />
      </Head>

      <main style={styles.main}>
        <h1 style={styles.title}>Qu&apos;est-ce qu&apos;un essai de compression ?</h1>
        <p>
          L&apos;essai de compression est une méthode d&apos;essai mécanique qui consiste à soumettre un matériau à une force de compression croissante jusqu&apos;à sa rupture ou à une déformation prédéfinie. Cette méthode permet d&apos;évaluer la résistance d&apos;un matériau à être écrasé ou à se déformer sous l&apos;effet d&apos;une charge appliquée perpendiculairement à sa surface.
        </p>

        <h2 style={styles.subtitle}>Pourquoi réaliser un essai de compression ?</h2>
        <ul style={styles.list}>
          <li><strong>Déterminer la résistance à la compression :</strong> C&apos;est une propriété mécanique fondamentale de nombreux matériaux, notamment les bétons, les céramiques, les métaux et les polymères.</li>
          <li><strong>Évaluer la rigidité :</strong> La courbe contrainte-déformation obtenue lors de l&apos;essai permet de calculer le module d&apos;élasticité, qui est une mesure de la rigidité du matériau.</li>
          <li><strong>Vérifier la conformité aux normes :</strong> De nombreuses normes spécifient les exigences en matière de résistance à la compression pour différents matériaux et applications.</li>
          <li><strong>Optimiser la conception des structures :</strong> Les résultats des essais de compression permettent de dimensionner les éléments structuraux de manière à garantir leur sécurité et leur durabilité.</li>
        </ul>

        <h2 style={styles.subtitle}>Comment se déroule un essai de compression ?</h2>
        <ol style={styles.list}>
          <li>
            <strong>Préparation de l’échantillon :</strong>
            <ul>
              <li>L&apos;échantillon doit avoir une forme géométrique bien définie (cylindre, cube, etc.) et des dimensions précises.</li>
              <li>Les surfaces de l&apos;échantillon en contact avec les plateaux de la machine doivent être planes et parallèles.</li>
            </ul>
          </li>
          <li>
            <strong>Installation de l’échantillon :</strong>
            <ul>
              <li>L&apos;échantillon est placé entre les plateaux de la machine d&apos;essai.</li>
              <li>Il est important de s&apos;assurer que l&apos;échantillon est centré et qu&apos;il n&apos;y a pas de jeu entre lui et les plateaux.</li>
            </ul>
          </li>
          <li>
            <strong>Application de la charge :</strong>
            <ul>
              <li>La machine d&apos;essai applique une force de compression croissante à un débit de charge constant.</li>
              <li>La force et la déformation sont mesurées en continu.</li>
            </ul>
          </li>
          <li>
            <strong>Analyse des résultats :</strong>
            <ul>
              <li>La courbe contrainte-déformation est tracée.</li>
              <li>La résistance à la compression est déterminée à partir du point de rupture ou du point correspondant à une déformation spécifique.</li>
              <li>Le module d&apos;élasticité est calculé à partir de la partie linéaire de la courbe.</li>
            </ul>
          </li>
        </ol>

        <h2 style={styles.subtitle}>Applications</h2>
        <ul style={styles.list}>
          <li><strong>Le bâtiment et les travaux publics :</strong> Pour évaluer la résistance des bétons, des mortiers, des maçonneries, etc.</li>
          <li><strong>L&apos;industrie automobile :</strong> Pour tester la résistance des composants mécaniques.</li>
          <li><strong>L’aéronautique :</strong> Pour caractériser les matériaux composites utilisés dans la construction des avions.</li>
          <li><strong>L&apos;industrie des matériaux :</strong> Pour contrôler la qualité des matériaux et développer de nouveaux produits.</li>
        </ul>

        <p>
          L&apos;essai de compression est une méthode d&apos;essai essentielle pour caractériser les matériaux et s&apos;assurer de leur aptitude à résister aux charges en compression. Il est largement utilisé dans de nombreux secteurs industriels.
        </p>
      </main>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  main: {
    background: '#f9f9f9',
    borderRadius: '8px',
    padding: '2rem',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  title: {
    color: '#333',
    marginBottom: '1rem',
  },
  subtitle: {
    color: '#555',
    marginTop: '1.5rem',
  },
  list: {
    marginLeft: '1.5rem',
  },
};
