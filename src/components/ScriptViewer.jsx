import "./scriptViewer.css";

function ScriptViewer({ script }) {
  return (
    <div className="script-content">
      {script.map((element, index) => (
        <p
          key={index}
          className={`script-element ${element.type}`}
        >
          {element.type === "dialogue" ? `«${element.text}»` : `${element.text}`}
        </p>
      ))}
    </div>
  );
}

export default ScriptViewer;