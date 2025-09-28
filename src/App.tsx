import React, { useState, useEffect } from 'react';
interface ProjectCardProps {
    title: string;
    genre: string;
    status: string;
    description: string;
    image: string;
    platforms: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, genre, status, description, image, platforms }) => (
    <div className="project-card">
        <div className="project-card-overlay"></div>
        <div className="project-card-content">
            <div className="project-image">
                <div className="game-icon">🎮</div>
            </div>
            <div className="project-header">
                <h3 className="project-title">{title}</h3>
                <span className={`status-badge status-${status.toLowerCase().replace(' ', '-')}`}>
                    {status}
                </span>
            </div>
            <p className="project-genre">{genre}</p>
            <p className="project-description">{description}</p>
            <div className="platforms">
                {platforms.map((platform, idx) => (
                    <span key={idx} className="platform-tag">
                        {platform}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

interface TeamMemberProps {
    name: string;
    role: string;
    experience: string;
    specialties: string[];
    achievements: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, experience, specialties, achievements }) => (
    <div className="team-member">
        <div className="avatar">
            <div className="avatar-icon">👤</div>
        </div>
        <h3 className="member-name">{name}</h3>
        <p className="member-role">{role}</p>
        <p className="member-experience">{experience}</p>
        <div className="specialties-section">
            <h4 className="specialties-title">Specialties:</h4>
            <div className="specialties">
                {specialties.map((specialty, idx) => (
                    <span key={idx} className="specialty-tag">
                        {specialty}
                    </span>
                ))}
            </div>
        </div>
        <p className="member-achievements">"{achievements}"</p>
    </div>
);

const GameStudioLanding: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            setShowScrollTop(window.scrollY > 400);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const projects = [
        {
            title: "To Clean The Mountain",
            genre: "Foddian Platformer",
            status: "Demo Released",
            description: "To Clean The Mountain is a platformer where you traverse a mountainous environment by flinging yourself with a bag. Enjoy the open environment without guardrails as you persevere towards the summit.",
            image: "/api/placeholder/400/240",
            platforms: ["Steam, itch.io"]
        },
        {
            title: "Srogue",
            genre: "Roguelike",
            status: "In Development",
            description: "Explore vast magical worlds with friends in this next-generation MMO. Build guilds, conquer dungeons, and shape the realm's destiny.",
            image: "/api/placeholder/400/240",
            platforms: ["PC", "Mac", "Mobile"]
        },
        {
            title: "Stellar Drift",
            genre: "Space Simulation",
            status: "Coming Soon",
            description: "Command your own spaceship in this realistic space exploration game. Trade, fight, and discover new worlds in an infinite universe.",
            image: "/api/placeholder/400/240",
            platforms: ["PC", "VR", "Console"]
        }
    ];

    const teamMembers = [
        {
            name: "Carsten Kurtz",
            role: "Software Developer",
            experience: "5+ years in game development",
            specialties: ["Game Design", "C#", "Typescript"],
            achievements: "Led development of 5 AAA titles, including Game of the Year winner 'Eternal Quest'"
        },
        {
            name: "Anthony Walls",
            role: "Artist",
            experience: "8+ years in technical art",
            specialties: ["Shader Programming", "VFX", "Pipeline Development"],
            achievements: "Created award-winning visual effects for blockbuster titles at major studios"
        },
        {
            name: "Liliana Sachsel",
            role: "Sound Design",
            experience: "10+ years in engine development",
            specialties: ["Engine Architecture", "Optimization", "Multiplayer Systems"],
            achievements: "Core developer of proprietary game engine used by 50+ indie studios"
        }
    ];

    const studioStats = [
        { number: "15+", label: "Games Released" },
        { number: "50M+", label: "Players Worldwide" },
        { number: "12", label: "Team Members" },
        { number: "8", label: "Years Experience" }
    ];

    return (
        <>
            <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
          line-height: 1.6;
        }

        .landing-page {
          min-height: 100vh;
          background: linear-gradient(to bottom right, #0f172a, #581c87, #0f172a);
          color: white;
          overflow-x: hidden;
          position: relative;
        }

        .background-elements {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .bg-blob-1 {
          position: absolute;
          top: -10rem;
          right: -10rem;
          width: 20rem;
          height: 20rem;
          background: #a855f7;
          border-radius: 50%;
          mix-blend-mode: multiply;
          filter: blur(4rem);
          opacity: 0.2;
          animation: pulse 4s ease-in-out infinite;
        }

        .bg-blob-2 {
          position: absolute;
          bottom: -10rem;
          left: -10rem;
          width: 20rem;
          height: 20rem;
          background: #ec4899;
          border-radius: 50%;
          mix-blend-mode: multiply;
          filter: blur(4rem);
          opacity: 0.2;
          animation: pulse 6s ease-in-out infinite;
        }

        .bg-blob-3 {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 15rem;
          height: 15rem;
          background: #3b82f6;
          border-radius: 50%;
          mix-blend-mode: multiply;
          filter: blur(4rem);
          opacity: 0.1;
          animation: pulse 5s ease-in-out infinite;
          transform: translate(-50%, -50%);
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }

        .navbar {
          position: relative;
          z-index: 50;
          padding: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          backdrop-filter: blur(12px);
          background: rgba(15, 23, 42, 0.8);
          border-bottom: 1px solid rgba(168, 85, 247, 0.2);
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(to right, #a855f7, #ec4899);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .nav-links {
          display: none;
          gap: 2rem;
        }

        .nav-links a {
          color: white;
          text-decoration: none;
          transition: color 0.2s;
        }

        .nav-links a:hover {
          color: #a855f7;
        }

        .nav-button {
          background: linear-gradient(to right, #9333ea, #ec4899);
          color: white;
          padding: 0.5rem 1.5rem;
          border: none;
          border-radius: 2rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .nav-button:hover {
          transform: scale(1.05);
        }

        @media (min-width: 768px) {
          .nav-links {
            display: flex;
          }
        }

        .hero {
          position: relative;
          z-index: 10;
          padding: 5rem 1.5rem 8rem;
          text-align: center;
        }

        .hero-content {
          max-width: 64rem;
          margin: 0 auto;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 2rem;
          line-height: 1.1;
        }

        .hero-title-gradient {
          display: block;
          background: linear-gradient(to right, #a855f7, #ec4899, #3b82f6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: #d1d5db;
          margin-bottom: 3rem;
          line-height: 1.6;
          max-width: 48rem;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          justify-content: center;
        }

        .btn-primary {
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(to right, #9333ea, #ec4899);
          color: white;
          padding: 1rem 2rem;
          border: none;
          border-radius: 2rem;
          font-weight: 600;
          font-size: 1.125rem;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
        }

        .btn-primary:hover {
          transform: scale(1.05);
        }

        .btn-secondary {
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid rgba(168, 85, 247, 0.5);
          color: white;
          padding: 1rem 2rem;
          border-radius: 2rem;
          font-weight: 600;
          font-size: 1.125rem;
          cursor: pointer;
          transition: all 0.2s;
          background: transparent;
          text-decoration: none;
        }

        .btn-secondary:hover {
          border-color: #a855f7;
          background: rgba(168, 85, 247, 0.1);
        }

        @media (min-width: 640px) {
          .hero-buttons {
            flex-direction: row;
          }
          .hero-title {
            font-size: 4rem;
          }
          .hero-subtitle {
            font-size: 1.5rem;
          }
        }

        @media (min-width: 768px) {
          .hero-title {
            font-size: 5rem;
          }
        }

        .section {
          position: relative;
          z-index: 10;
          padding: 5rem 1.5rem;
        }

        .section-alt {
          background: linear-gradient(to right, rgba(147, 51, 234, 0.3), rgba(236, 72, 153, 0.3));
          backdrop-filter: blur(12px);
        }

        .section-dark {
          background: rgba(15, 23, 42, 0.3);
        }

        .container {
          max-width: 72rem;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .section-subtitle {
          font-size: 1.25rem;
          color: #d1d5db;
          max-width: 32rem;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .section-title {
            font-size: 3rem;
          }
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          max-width: 64rem;
          margin: 0 auto;
          text-align: center;
        }

        @media (min-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .stat-item {
          transition: transform 0.3s;
        }

        .stat-item:hover {
          transform: scale(1.1);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(to right, #a855f7, #ec4899);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .stat-label {
          color: #d1d5db;
          margin-top: 0.5rem;
        }

        @media (min-width: 768px) {
          .stat-number {
            font-size: 3rem;
          }
        }

        .projects-grid {
          display: grid;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .project-card {
          position: relative;
          background: linear-gradient(to bottom right, rgba(51, 65, 85, 0.5), rgba(88, 28, 135, 0.3));
          backdrop-filter: blur(12px);
          border-radius: 1rem;
          padding: 1.5rem;
          border: 1px solid rgba(168, 85, 247, 0.2);
          overflow: hidden;
          transition: all 0.3s;
        }

        .project-card:hover {
          border-color: rgba(168, 85, 247, 0.5);
          transform: scale(1.02);
        }

        .project-card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to right, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1));
          opacity: 0;
          transition: opacity 0.3s;
        }

        .project-card:hover .project-card-overlay {
          opacity: 1;
        }

        .project-card-content {
          position: relative;
          z-index: 10;
        }

        .project-image {
          width: 100%;
          height: 12rem;
          background: linear-gradient(to bottom right, rgba(88, 28, 135, 0.5), rgba(59, 130, 246, 0.5));
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(168, 85, 247, 0.3);
          margin-bottom: 1rem;
          transition: border-color 0.3s;
        }

        .project-card:hover .project-image {
          border-color: rgba(168, 85, 247, 0.5);
        }

        .game-icon {
          font-size: 4rem;
          transition: transform 0.3s;
        }

        .project-card:hover .game-icon {
          transform: scale(1.1);
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
        }

        .project-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: white;
          transition: color 0.3s;
        }

        .project-card:hover .project-title {
          color: #d8b4fe;
        }

        .status-badge {
          padding: 0.25rem 0.75rem;
          border-radius: 2rem;
          font-size: 0.75rem;
          font-weight: 600;
          border: 1px solid;
        }

        .status-released {
          background: rgba(34, 197, 94, 0.2);
          color: #4ade80;
          border-color: rgba(34, 197, 94, 0.3);
        }

        .status-in-development {
          background: rgba(251, 191, 36, 0.2);
          color: #facc15;
          border-color: rgba(251, 191, 36, 0.3);
        }

        .status-coming-soon {
          background: rgba(59, 130, 246, 0.2);
          color: #60a5fa;
          border-color: rgba(59, 130, 246, 0.3);
        }

        .project-genre {
          color: #d8b4fe;
          font-size: 0.875rem;
          margin-bottom: 0.75rem;
        }

        .project-description {
          color: #d1d5db;
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .platforms {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .platform-tag {
          padding: 0.25rem 0.5rem;
          background: rgba(51, 65, 85, 0.5);
          border: 1px solid rgba(100, 116, 139, 0.5);
          border-radius: 0.25rem;
          font-size: 0.75rem;
          color: #d1d5db;
        }

        .team-grid {
          display: grid;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .team-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .team-member {
          background: rgba(51, 65, 85, 0.3);
          backdrop-filter: blur(12px);
          border-radius: 1rem;
          padding: 1.5rem;
          border: 1px solid rgba(100, 116, 139, 0.5);
          transition: all 0.3s;
        }

        .team-member:hover {
          border-color: rgba(168, 85, 247, 0.5);
          background: rgba(100, 116, 139, 0.3);
        }

        .avatar {
          width: 5rem;
          height: 5rem;
          background: linear-gradient(to bottom right, #9333ea, #ec4899);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          transition: transform 0.3s;
        }

        .team-member:hover .avatar {
          transform: scale(1.1);
        }

        .avatar-icon {
          font-size: 2rem;
        }

        .member-name {
          font-size: 1.25rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.5rem;
          transition: color 0.3s;
        }

        .team-member:hover .member-name {
          color: #d8b4fe;
        }

        .member-role {
          color: #a855f7;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .member-experience {
          color: #d1d5db;
          font-size: 0.875rem;
          margin-bottom: 0.75rem;
        }

        .specialties-section {
          margin-bottom: 1rem;
        }

        .specialties-title {
          font-size: 0.875rem;
          font-weight: 600;
          color: white;
          margin-bottom: 0.5rem;
        }

        .specialties {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .specialty-tag {
          padding: 0.25rem 0.5rem;
          background: rgba(88, 28, 135, 0.3);
          border: 1px solid rgba(168, 85, 247, 0.3);
          border-radius: 0.25rem;
          font-size: 0.75rem;
          color: #d8b4fe;
        }

        .member-achievements {
          color: #9ca3af;
          font-size: 0.875rem;
          font-style: italic;
        }

        .about-content {
          max-width: 64rem;
          margin: 0 auto;
          text-align: center;
        }

        .about-text {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          font-size: 1.125rem;
          color: #d1d5db;
          line-height: 1.6;
        }

        .contact-content {
          max-width: 64rem;
          margin: 0 auto;
          text-align: center;
        }

        .contact-grid {
          display: grid;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        @media (min-width: 768px) {
          .contact-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .contact-card {
          background: rgba(51, 65, 85, 0.3);
          backdrop-filter: blur(12px);
          border-radius: 1rem;
          padding: 1.5rem;
          border: 1px solid rgba(100, 116, 139, 0.5);
        }

        .contact-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #a855f7;
          margin-bottom: 1rem;
        }

        .contact-card p {
          margin-bottom: 1rem;
        }

        .contact-card .email {
          color: #d1d5db;
        }

        .contact-card .note {
          font-size: 0.875rem;
          color: #9ca3af;
        }

        .footer {
          position: relative;
          z-index: 10;
          border-top: 1px solid rgba(168, 85, 247, 0.2);
          padding: 3rem 1.5rem;
          margin-top: 5rem;
        }

        .footer-content {
          max-width: 72rem;
          margin: 0 auto;
        }

        .footer-grid {
          display: grid;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .footer-section h3 {
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .footer-section ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .footer-section a {
          color: #9ca3af;
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-section a:hover {
          color: #a855f7;
        }

        .footer-bottom {
          border-top: 1px solid rgba(168, 85, 247, 0.2);
          padding-top: 2rem;
          text-align: center;
          color: #9ca3af;
        }

        .scroll-top {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 50;
          background: linear-gradient(to right, #9333ea, #ec4899);
          color: white;
          padding: 0.75rem;
          border: none;
          border-radius: 50%;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: all 0.2s;
          font-size: 1.25rem;
        }

        .scroll-top:hover {
          transform: scale(1.1);
        }
      `}</style>

            <div className="landing-page">
                {/* Animated background elements */}
                <div className="background-elements">
                    <div
                        className="bg-blob-1"
                        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
                    ></div>
                    <div
                        className="bg-blob-2"
                        style={{ transform: `translateY(${-scrollY * 0.3}px)` }}
                    ></div>
                    <div
                        className="bg-blob-3"
                        style={{ transform: `translate(-50%, -50%) translateY(${scrollY * 0.2}px)` }}
                    ></div>
                </div>

                {/* Header */}
                <nav className="navbar">
                    <div className="logo">
                        Yinz Studio
                    </div>
                    <div className="nav-links">
                        <a href="#projects">Projects</a>
                        <a href="#team">Team</a>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <button className="nav-button">
                        Play Our Games
                    </button>
                </nav>

                {/* Hero Section */}
                <section className="hero">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Crafting Digital
                            <span className="hero-title-gradient">
                                Adventures
                            </span>
                        </h1>
                        <p className="hero-subtitle">
                            We are Yinz Studios, an independent game development team passionate about creating immersive,
                            innovative gaming experiences that push the boundaries of interactive entertainment.
                        </p>
                        <div className="hero-buttons">
                            <button className="btn-primary">
                                <span style={{ marginRight: '0.5rem' }}>▶️</span>
                                Play Our Latest Game
                                <span style={{ marginLeft: '0.5rem' }}>→</span>
                            </button>
                            <button className="btn-secondary">
                                View Our Portfolio
                            </button>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="section section-alt">
                    <div className="container">
                        <div className="stats-grid">
                            {studioStats.map((stat, index) => (
                                <div key={index} className="stat-item">
                                    <div className="stat-number">
                                        {stat.number}
                                    </div>
                                    <div className="stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="section">
                    <div className="container">
                        <div className="section-header">
                            <h2 className="section-title">
                                Our Game Portfolio
                            </h2>
                            <p className="section-subtitle">
                                From indie gems to ambitious AAA experiences, explore the diverse worlds we've created.
                            </p>
                        </div>
                        <div className="projects-grid">
                            {projects.map((project, index) => (
                                <ProjectCard key={index} {...project} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section id="team" className="section section-dark">
                    <div className="container">
                        <div className="section-header">
                            <h2 className="section-title">
                                Meet Our Team
                            </h2>
                            <p className="section-subtitle">
                                Talented developers, artists, and designers breaking in to the gaming industry.
                            </p>
                        </div>
                        <div className="team-grid">
                            {teamMembers.map((member, index) => (
                                <TeamMember key={index} {...member} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="section">
                    <div className="container">
                        <div className="about-content">
                            <h2 className="section-title">
                                Our Story
                            </h2>
                            <div className="about-text">
                                <p>
                                    Founded in 2024, Yinz Studio began as a small team of passionate developers who shared a
                                    vision of creating games that would leave lasting impressions on players worldwide. What started
                                    as weekend passion projects has evolved into a full-fledged studio dedicated to pushing the
                                    boundaries of interactive entertainment.
                                </p>
                                <p>
                                    Our philosophy is simple: great games come from great teams. We believe in fostering creativity,
                                    encouraging innovation, and maintaining the highest standards of quality in everything we create.
                                    From our indie roots to our current projects, we remain committed to crafting experiences that
                                    resonate with players on a deep emotional level.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="section section-alt">
                    <div className="container">
                        <div className="contact-content">
                            <h2 className="section-title">
                                Let's Create Together
                            </h2>
                            <p className="section-subtitle" style={{ marginBottom: '3rem' }}>
                                Interested in working with us, publishing opportunities, or just want to chat about games?
                                We'd love to hear from you.
                            </p>
                            <div className="contact-grid">
                                <div className="contact-card">
                                    <h3>General Inquiries</h3>
                                    <p className="email">hello@pixelforge-studios.com</p>
                                    <p className="note">We respond within 24 hours</p>
                                </div>
                                <div className="contact-card">
                                    <h3>Career Opportunities</h3>
                                    <p className="email">careers@pixelforge-studios.com</p>
                                    <p className="note">Always looking for talented developers</p>
                                </div>
                            </div>
                            <div className="hero-buttons">
                                <button className="btn-primary">
                                    Get In Touch
                                </button>
                                <button className="btn-secondary">
                                    View Open Positions
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="footer">
                    <div className="footer-content">
                        <div className="footer-grid">
                            <div className="footer-section">
                                <div className="logo" style={{ marginBottom: '1rem' }}>
                                    Yinz Studio
                                </div>
                                <p style={{ color: '#9ca3af' }}>
                                    Creating immersive gaming experiences that connect players across the globe.
                                </p>
                            </div>
                            <div className="footer-section">
                                <h3>Games</h3>
                                <ul>
                                    <li><a href="#">Neon Shadows</a></li>
                                    <li><a href="#">Mystic Realms</a></li>
                                    <li><a href="#">Stellar Drift</a></li>
                                    <li><a href="#">All Games</a></li>
                                </ul>
                            </div>
                            <div className="footer-section">
                                <h3>Studio</h3>
                                <ul>
                                    <li><a href= "#projects">About Us</a></li>
                                    <li><a href="#">Team</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Press Kit</a></li>
                                </ul>
                            </div>
                            <div className="footer-section">
                                <h3>Community</h3>
                                <ul>
                                    <li><a href="#">Discord</a></li>
                                    <li><a href="#">Twitter</a></li>
                                    <li><a href="#">YouTube</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <p>&copy; 2025 Yinz Studio. All rights reserved. | Made with ❤️ for gamers worldwide</p>
                        </div>
                    </div>
                </footer>

                {/* Scroll to top button */}
                {showScrollTop && (
                    <button
                        onClick={scrollToTop}
                        className="scroll-top"
                    >
                        ↑
                    </button>
                )}
            </div>
        </>
    );
};

export default GameStudioLanding;
