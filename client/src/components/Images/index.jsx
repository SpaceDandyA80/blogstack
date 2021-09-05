import "./style.css";
import AboutFooter from "../aboutfooter/index";

function ImageGallery() {
  return (
    <div className="image_gallery">
      <div className="home_footer_cards">
        <AboutFooter
          color="white"
          img="https://images.unsplash.com/photo-1484589065579-248aad0d8b13"
          title="Uses of API's"
          content="Being able to apply knowledge of a programming language and 
          succesfully have a functioning web app that is able to utilize information 
          from another database is essential."
          alt="API Info"
        />
        <AboutFooter
          color="white"
          img="https://images.unsplash.com/photo-1515405295579-ba7b45403062"
          title="MERN Stack Applications"
          content="Another useful web by far one of the poplular one in terms 
          of functionality is being able to connect not only API's but being able 
          to deploy the app with the use of Database."
          alt="MERN Info"
        />
        <AboutFooter
          color="white"
          img="https://images.unsplash.com/photo-1549490349-8643362247b5"
          title="Backend Connections"
          content="The backbone of a web app and can depending how well its 
          structured can lead to pleasant user experience."
          alt="Backend Info"
        />
        <AboutFooter
          color="white"
          img="https://images.unsplash.com/photo-1547922374-968968e3f658"
          title="Gradual Improvement"
          content="As time comes by so does new information, in this line of 
          work being up to date on new features and algorithms and easier and faster
           ways of coding is a necessity. "
          alt="Improve Summary"
        />
      </div>
    </div>
  );
}

export default ImageGallery;
