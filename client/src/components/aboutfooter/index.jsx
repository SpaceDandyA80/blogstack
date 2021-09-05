import "./style.css";

function AboutFooter({ title, content, img, color }) {
  const cardStyle = {
    background: `url(${img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: `${color}`,
    backgroundPosition: "center",
  };

  return (
    <div className="card_footer" style={cardStyle}>
      <div className="card_background"></div>
      <div className="card_cont">
        <h3>{title}</h3>
        <br />
        <p>{content}</p>
      </div>
    </div>
  );
}

export default AboutFooter;
