import React from 'react';

function Home({onLogout}: {onLogout: () => void}) {
    const containerStyle = {
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        flexDirection: 'column' as const,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Arial, sans-serif',
        color: 'white',
        textAlign: 'center' as const,
        padding: '20px'
    };

    const cardStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        maxWidth: '500px',
        width: '100%'
    };

    const titleStyle = {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: '10px',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
    };

    const subtitleStyle = {
        fontSize: '1rem',
        fontStyle: 'italic',
        marginBottom: '30px',
        opacity: 0.8
    };

    const buttonStyle = {
        backgroundColor: '#ff6b6b',
        color: 'white',
        border: 'none',
        padding: '12px 30px',
        fontSize: '1rem',
        borderRadius: '25px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 15px rgba(255, 107, 107, 0.4)',
        fontWeight: 'bold'
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.style.backgroundColor = '#ff5252';
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 107, 107, 0.6)';
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.style.backgroundColor = '#ff6b6b';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 107, 107, 0.4)';
    };

    return (
        <div style={containerStyle}>
            <div style={cardStyle}>
                <h1 style={titleStyle}>
                    Welcome to my home page
                </h1>
                <h6 style={subtitleStyle}>
                    made by Madzia ✨
                </h6>
                <button
                    style={buttonStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={onLogout}
                >
                    Logout
                </button>
            </div>
        </div>
    );
}

export default Home;