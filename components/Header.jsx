function Header({ title, description }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight mb-1">{title}</h2>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

export default Header;
