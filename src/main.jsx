import React from "react";
import { createRoot } from "react-dom/client";

function App() {
return (
<main
style={{
minHeight: "100vh",
background: "#0b1020",
color: "#f8fafc",
fontFamily: "Inter, system-ui, sans-serif",
display: "grid",
placeItems: "center",
textAlign: "center",
padding: "24px",
boxSizing: "border-box",
}}
> <div>
<p style={{ color: "#a5b4fc", letterSpacing: "3px", fontSize: "12px" }}>
LLM ENGINEERING PROJECT </p>

```
    <h1 style={{ fontSize: "clamp(42px, 7vw, 76px)", margin: "12px 0" }}>
      SymptomScope<span style={{ color: "#818cf8" }}>.</span>
    </h1>

    <p
      style={{
        color: "#94a3b8",
        maxWidth: "540px",
        lineHeight: 1.8,
        margin: "0 auto",
      }}
    >
      An experimental symptom classification application powered by a
      fine-tuned language model.
    </p>

    <div
      style={{
        marginTop: "28px",
        padding: "14px 20px",
        border: "1px solid #334155",
        borderRadius: "12px",
        display: "inline-block",
        color: "#cbd5e1",
      }}
    >
      ✦ Your AI research experience starts here
    </div>
  </div>
</main>
```

);
}

createRoot(document.getElementById("root")).render(<App />);
