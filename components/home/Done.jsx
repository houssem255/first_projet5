'use client';
import { useState } from 'react';

export default function Done() {
    return (
        <section className="mx-auto w-1/2 my-12">
            <div className="relative overflow-hidden rounded-xl shadow-xl" style={{ paddingBottom: '56.25%', height: 0 }}>
                <iframe
                    src={`https://www.youtube.com/embed/0UrnvE-BnfM`} // Utiliser /embed/ ici
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                    }}
                    title="YouTube video player"
                />
            </div>
        </section>
    );
}
