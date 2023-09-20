export function CssVariables() {
  return (
    <div
      style={{
        padding: "32px 0",
        display: "flex",
        gap: "24px",
        flexWrap: "wrap",
      }}
    >
      <button className="btn btn-primary">CTA Primary</button>
      <button className="btn btn-secondary">CTA Secondary</button>
      <button className="btn btn-success">CTA Success</button>
      <button className="btn btn-warning">CTA Warning</button>
    </div>
  );
}

export default CssVariables;
