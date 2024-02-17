import ProfileCard from "../../components/ProfileCard/ProfileCard";
import "./styles.css";

function Lesson18() {
  // У нас с бэкенда пришло 3 обьекта
  // 1
  const homer = {
    firstName: "Homer",
    lastName: "Simpson",
    career: "Nuclear Safety Inspector",
    hairColor: "Black",
    hobby: "Drink beer Duff",
  };

  // 2
  const bart = {
    firstName: "Bart",
    lastName: "Simpson",
    career: "No career",
    hairColor: "yellow",
    hobby: "No hobby",
  };

  //3
  const marge = {
    firstName: "Marge",
    lastName: "Simpson",
    career: "No career",
    hairColor: "Blue",
    hobby: "Cooking",
  };

  return (
    <div className="cards-container">
      <ProfileCard
        imgSrc={
          "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png"
        }
        profileData={homer}
      ><h1>User: Homer</h1></ProfileCard>
      <ProfileCard
        imgSrc={
          "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png"
        }
        profileData={bart}
      />
      <ProfileCard
        imgSrc="https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png"
        profileData={marge}
      />
    </div>
  );
}

export default Lesson18;
