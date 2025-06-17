import React, {JSX, useState} from 'react';

const PAGE_BACKGROUND_COLOR = '#E0E7FF';
const BUTTON_BACKGROUND_COLOR = '#38A169';
const BUTTON_HOVER_BACKGROUND_COLOR = '#2F855A';

function Login({onLogin} : {onLogin: () => void}): JSX.Element {
    const [isButtonHovered, setIsButtonHovered] = useState<boolean>(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onLogin();
    };

    const pageStyle: React.CSSProperties = {
        backgroundColor: PAGE_BACKGROUND_COLOR,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '20px',
        boxSizing: 'border-box',
        fontFamily: "Arial, sans-serif",
    };

    const loginBoxStyle: React.CSSProperties = {
        backgroundColor: '#ffffff',
        padding: '35px 45px',
        borderRadius: '10px',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.12)',
        width: '100%',
        maxWidth: '380px',
        textAlign: 'center',
        boxSizing: 'border-box',
    };

    const titleStyle: React.CSSProperties = {
        fontSize: '26px',
        color: '#4A5568',
        marginBottom: '25px',
        fontWeight: 600,
    };

    const formStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    };

    const inputStyle: React.CSSProperties = {
        width: '100%',
        padding: '14px 18px',
        border: '1px solid #CBD5E0',
        borderRadius: '8px',
        fontSize: '16px',
        color: '#2D3748',
        backgroundColor: '#F7FAFC',
        boxSizing: 'border-box',
    };

    const buttonStyle: React.CSSProperties = {
        backgroundColor: isButtonHovered ? BUTTON_HOVER_BACKGROUND_COLOR : BUTTON_BACKGROUND_COLOR,
        color: 'white',
        padding: '14px 20px',
        border: 'none',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
        width: '100%',
        marginTop: '10px',
        transition: 'background-color 0.2s ease-in-out',
    };
    return (
        <div style={pageStyle}> {}
            <div style={loginBoxStyle}> {}
                <h2 style={titleStyle}>Logowanie</h2>
                <form style={formStyle} onSubmit={handleSubmit}>
                    {}
                    <div>
                        <input
                            type="text"
                            id="username"
                            placeholder="Username or Email"
                            aria-label="Username or Email"
                            required
                            style={inputStyle}
                        />
                    </div>

                    {}
                    <div>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            aria-label="Password"
                            required
                            style={inputStyle}
                        />
                    </div>

                    {}
                    <button
                        type="submit"
                        style={buttonStyle}
                        onMouseEnter={() => setIsButtonHovered(true)}
                        onMouseLeave={() => setIsButtonHovered(false)}
                    >
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;