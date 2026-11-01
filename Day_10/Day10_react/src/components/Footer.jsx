function Footer({ year, author }) {
  return (
    <footer style={{ background: "#e2e8f0", padding: "12px", textAlign: "center" }}>
      <p>© {year} {author}. All rights reserved.</p>
    </footer>
  );
}

export default Footer;