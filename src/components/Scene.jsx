import ScriptViewer from "./ScriptViewer";
import "./scene.css";

export default function Scene({ scene, sceneNumber }) {
  return (
    <section className="scene-section">
      <div className="scene">
        <div className="scene-video">
          <video controls>
            <source src={scene.video} type="video/mp4" />
            Your browser does not support video playback.
          </video>
        </div>

        <div className="scene-script">
          <div className="script-header">
            <span>
              SCENE {String(sceneNumber).padStart(2, "0")}
            </span>

            <h3>{scene.title}</h3>
          </div>

          <ScriptViewer script={scene.script} />
        </div>
      </div>
    </section>
  );
}