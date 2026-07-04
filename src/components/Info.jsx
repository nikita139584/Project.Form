
import '/src/App.css';
function Info() {
    return (
        <div className="hero">
            <video className="hero-video" src="src/assets/video.mp4" muted autoPlay/>
            <div className="hero-content">
                <h1 className="hero-title">Новые модели в продаже</h1>
            </div>
        </div>
    );
}
export default Info;
