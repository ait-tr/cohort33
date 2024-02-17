import "./styles.css";

// import normalizeFirstLastName, { profile } from "./data";

// Что такое props - это обьект, через котроый вы можете передавать данные от родителя - ребенку
function ProfileCard({profileData, imgSrc, children = <h1>User Card</h1>}) {
  console.log(profileData);
  // К нам пришли данные с сервера

  // JSX: Передача html кода переменной
  // const cardName = <h1>User info</h1>;


  const normalizeFirstLastName = () => {
    return `${profileData.firstName} ${profileData.lastName}`
  }

  return (
    <div className="profile-card">
      {children}
      <div className="avatar-control">
        <img
          className="profile-avatar"
          alt="Profile Avatar"
          src={imgSrc}
        />
      </div>
      <h2>{normalizeFirstLastName()}</h2>
      <p>Career: {profileData.career}</p>
      <p>Hair Color: {profileData.hairColor}</p>
      <p>Hobby: {profileData.hobby}</p>
    </div>
  );
}

// 3 cпособ экспорта - как default
export default ProfileCard;
