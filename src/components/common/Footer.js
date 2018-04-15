import React from 'react';

class Footer extends React.Component {
  
    render() {
        return (
            <div className="footer" style={{ transform: "translateY(50%)", top: "50%" }}>
                <p>Coded by hand and made with <span role="img" aria-label="love">💚</span>in Boston, MA</p>
            </div>
        );
    }
}

export default Footer;