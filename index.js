import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import ChaptersList from '../components/ChaptersList';
import CharactersList from '../components/CharactersList';
import { settingsService } from '../firebase';

export default function Home() {
  const [settings, setSettings] = useState({
    welcomeMessage: 'Welcome to the world of Chronicles of Magic and Machine — a journey of growth, rivalry, and destiny where magic and technology collide.'
  });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const fetchedSettings = await settingsService.getSettings();
        if (fetchedSettings) {
          setSettings(fetchedSettings);
        }
      } catch (error) {
        console.error('Error fetching settings:', error);
      }
    };

    fetchSettings();
  }, []);

  return (
    <Layout title="Home">
      <section className="hero mb-4">
        <h2>Chronicles of Magic and Machine</h2>
        <p className="text-center mb-4">{settings.welcomeMessage}</p>
        
        <div className="d-flex justify-center mb-4">
          <a href="/story-arcs" className="btn btn-primary mx-2">Explore Story Arcs</a>
          <a href="/characters" className="btn btn-secondary mx-2">Meet the Characters</a>
        </div>
      </section>

      <section className="world-section mb-4">
        <h2>The World</h2>
        <p className="text-center mb-4">
          In a world where neon lights flicker alongside magical energies, where holographic interfaces merge with ancient spells, 
          and where the boundaries between the mystical and mechanical blur, Kael discovers his rare ability to manipulate time.
        </p>

        <div className="grid">
          <div className="card">
            <h3 className="text-center">Magic & Technology</h3>
            <p>
              The integration of magical practices with technological advancement creates both opportunities and tensions. 
              Neither pure tradition nor unconstrained innovation provides a complete solution.
            </p>
          </div>
          
          <div className="card">
            <h3 className="text-center">Personal Growth</h3>
            <p>
              Kael's journey from uncertain novice to mature practitioner explores how abilities shape identity, 
              how challenges forge character, and how philosophical questions influence personal development.
            </p>
          </div>
          
          <div className="card">
            <h3 className="text-center">Control vs. Freedom</h3>
            <p>
              The tension between disciplined control and intuitive freedom in magical practice reflects 
              broader questions about how societies balance structure with innovation.
            </p>
          </div>
        </div>
      </section>

      <section className="featured-character mb-4">
        <h2>Featured Character</h2>
        <p className="text-center mb-4">Meet the protagonist of our story</p>
        
        <div className="card character-card" style={{ maxWidth: '400px', margin: '0 auto' }}>
          <div 
            className="character-initial"
            style={{ 
              backgroundColor: '#4169e1',
            }}
          >
            K
          </div>
          
          <h3>Kael</h3>
          <p className="mb-1">Protagonist • Time Manipulation</p>
          <p>
            A talented, curious 10-year-old who matures quickly and has a mysterious AI companion linked to his mind.
          </p>
          
          <div className="text-center mt-3">
            <a href="/characters" className="btn btn-secondary">View Character Details</a>
          </div>
        </div>
      </section>

      <section className="recent-chapters mb-4">
        <h2>Recent Chapters</h2>
        <p className="text-center mb-4">Explore the latest chapters in the Chronicles</p>
        
        <div className="grid">
          <div className="card chapter-card">
            <h3>Chapter 59</h3>
            <p>The Question of Identity</p>
          </div>
          
          <div className="card chapter-card">
            <h3>Chapter 58</h3>
            <p>The Final Move</p>
          </div>
          
          <div className="card chapter-card">
            <h3>Chapter 57</h3>
            <p>The Game of Minds - Part Two</p>
          </div>
        </div>
        
        <div className="text-center mt-3">
          <a href="/chapters" className="btn btn-primary">View All Chapters</a>
        </div>
      </section>
    </Layout>
  );
}
