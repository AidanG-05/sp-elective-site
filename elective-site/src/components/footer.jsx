function Footer() {

    const aidan = <a href="https://www.linkedin.com/in/aidan-gunawardhana/" style={{ color: '#e34066', fontWeight:'bold' }}>Aidan</a>;
    const theyan = <a href="https://www.linkedin.com/in/theyanrs/" style={{ color: '#e34066', fontWeight:'bold' }}>Theyan</a>;
    const DoverPoly = <a href="https://www.instagram.com/dover_poly?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" style={{ color: '#e34066', fontWeight:'bold' }}>Dover Poly Team</a>;

    return (
        <footer className="footer-text">
            Created by {aidan} • {theyan} • {DoverPoly}
        </footer>
    );
}

export default Footer;
