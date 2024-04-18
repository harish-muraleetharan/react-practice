import '../css/header.css'

export const Header = () =>{
    return (
        <div className = "header">
            <Logo></Logo>
            <NavContainer></NavContainer>
        </div>
    )
};

const Logo = () => (
    <div className="logo-container">
        <div className="logo">
            LOGO
        </div>
    </div>
);

const NavContainer = () => (
    <div className="nav-container">
        <div className="nav-items">
            NAV1
        </div>
        <div className="nav-items">
            NAV2
        </div>
        <div className="nav-items">
            NAV3
        </div>
    </div>
);

