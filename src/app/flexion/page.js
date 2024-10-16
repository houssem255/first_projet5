// pages/flexion.js

import Head from 'next/head';

export default function Flexion() {
  return (
    <div style={styles.container}>
      <Head>
        <title>Qu&apos;est-ce qu&apos;un essai de flexion ?</title>
        <meta name="description" content="Détails sur l'essai de flexion." />
      </Head>

      <main style={styles.main}>
        <h1 style={styles.title}>Qu&apos;est-ce qu&apos;un essai de flexion ?</h1>
        <p>
          L&apos;essai de flexion est une méthode d&apos;essai mécanique qui consiste à soumettre un matériau à une charge appliquée perpendiculairement à son axe longitudinal, provoquant ainsi une déformation en flexion. Cet essai permet d&apos;évaluer la résistance d&apos;un matériau à se plier ou à se rompre sous l&apos;effet de cette charge.
        </p>

        <h2 style={styles.subtitle}>Pourquoi réaliser un essai de flexion ?</h2>
        <ul style={styles.list}>
          <li><strong>Déterminer la résistance à la flexion :</strong> C&apos;est une propriété mécanique importante, notamment pour les matériaux utilisés dans la construction, l&apos;automobile, l&apos;aéronautique et l&apos;électronique.</li>
          <li><strong>Évaluer la rigidité en flexion :</strong> Le module de flexion, calculé à partir de la courbe charge-déflexion, est une mesure de la rigidité du matériau.</li>
          <li><strong>Vérifier la conformité aux normes :</strong> De nombreuses normes spécifient les exigences en matière de résistance à la flexion pour différents matériaux et applications.</li>
          <li><strong>Optimiser la conception des structures :</strong> Les résultats des essais de flexion permettent de dimensionner les éléments structuraux soumis à des sollicitations en flexion.</li>
        </ul>

        <h2 style={styles.subtitle}>Différents types d&apos;essais de flexion</h2>
        <ul style={styles.list}>
          <li><strong>Flexion trois points :</strong> L&apos;échantillon est posé sur deux appuis et la charge est appliquée au milieu.</li>
          <li><strong>Flexion quatre points :</strong> L&apos;échantillon est posé sur deux appuis et la charge est appliquée en deux points situés entre les appuis.</li>
          <li><strong>Flexion circulaire :</strong> L&apos;échantillon est encastré sur tout son contour et soumis à une charge au centre.</li>
        </ul>

        <h2 style={styles.subtitle}>Applications</h2>
        <ul style={styles.list}>
          <li><strong>L&apos;industrie automobile :</strong> Pour tester la résistance des pièces de carrosserie, des châssis, etc.</li>
          <li><strong>L’aéronautique :</strong> Pour caractériser les matériaux composites utilisés dans la construction des avions.</li>
          <li><strong>L&apos;industrie des matériaux :</strong> Pour contrôler la qualité des matériaux et développer de nouveaux produits.</li>
          <li><strong>Le bâtiment et les travaux publics :</strong> Pour évaluer la résistance des poutres, des dalles, etc.</li>
        </ul>

        <p>
          Les essais de flexion sont essentiels pour assurer la sécurité et la performance des matériaux dans de nombreux secteurs industriels.
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
