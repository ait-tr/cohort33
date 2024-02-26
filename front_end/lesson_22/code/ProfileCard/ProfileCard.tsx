import { ProfileCardProps } from "./types";

import "./styles.css";

function ProfileCard({
  profileData,
  imgSrc,
  children = <h1>User Card</h1>,
}: ProfileCardProps) {
  const normalizeFirstLastName = () => {
    return `${profileData.firstName} ${profileData.lastName}`;
  };

  return (
    <div className="profile-card">
      {children}
      <div className="avatar-control">
        <img className="profile-avatar" alt="Profile Avatar" src={imgSrc} />
      </div>
      <h2>{normalizeFirstLastName()}</h2>
      <p>Career: {profileData.career}</p>
      <p>Hair Color: {profileData.hairColor}</p>
      <p>Hobby: {profileData.hobby}</p>
    </div>
  );
}

export default ProfileCard;
