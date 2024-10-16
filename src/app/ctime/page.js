
"use client";
import React from 'react';

const videos = [
  {
    url: 'https://www.youtube.com/watch?v=-ly6oeqmXDM',
    title: 'Titre de la Vidéo 1',
  },
  {
    url: 'https://www.youtube.com/watch?v=0UrnvE-BnfM',
    title: 'Titre de la Vidéo 2',
  },
  {
    url: 'https://www.youtube.com/watch?v=IP6hk1KPwJM',
    title: 'Titre de la Vidéo 3',
  },
  {
    url: 'https://www.youtube.com/watch?v=b5_63DNASto&t=25s',
    title: 'Titre de la Vidéo 4',
  },
  {
    url: 'https://www.youtube.com/watch?v=Lk5j-WUoRlM',
    title: 'Titre de la Vidéo 5',
  },
  {
    url: 'https://www.youtube.com/watch?v=XHgVE0GUd1k',
    title: 'Titre de la Vidéo 6',
  },
  {
    url: 'https://www.youtube.com/watch?v=AiDNxNjTUUU&t=65s',
    title: 'Titre de la Vidéo 7',
  },
];

const Videos = () => {
  return (
    <div style={{
      padding: '40px',
      textAlign: 'center',
      background: 'linear-gradient(to right, #e0f7fa, #80deea)',
      fontFamily: 'Arial, sans-serif',
    }}>
      <h1 style={{
        color: '#004d40',
        marginBottom: '40px',
        fontSize: '2.5rem',
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
      }}>Liste des Vidéos de ctime dz</h1>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
      }}>
        {videos.map((video, index) => {
          const videoId = video.url.split('v=')[1].split('&')[0];
          return (
            <div key={index} style={{
              margin: '15px',
              padding: '20px',
              borderRadius: '15px',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
              backgroundColor: '#ffffff',
              width: '300px',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
            }}
            >
              <h3 style={{
                color: '#004d40',
                fontSize: '1.5rem',
                margin: '10px 0',
                fontWeight: 'bold',
              }}>{video.title}</h3>
              <iframe
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={video.title}
                frameBorder="0"
                allowFullScreen
                style={{
                  borderRadius: '10px',
                  border: 'none',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                }}
              ></iframe>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Videos;
