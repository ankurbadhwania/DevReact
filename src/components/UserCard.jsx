const UserCard = ({user}) => {
    const {firstName, lastName, photoUrl, about, gender, age} = user;
    console.log(user)
  return (
    
    <div className="flex justify-center my-10">
    <div className="card w-80 bg-base-200 shadow-xl">
      <figure className="relative overflow-hidden">
        <img
          src={photoUrl}
          alt="userPhoto"
          className="w-full h-40 object-cover"
        />
        <div className="absolute inset-0 bg-base-100/20 opacity-0 hover:opacity-100 transition duration-300"></div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{age + ", " + gender}</p>}
        <p>{about}</p>
        <div className="card-actions justify-center my-4">
          <button className="btn btn-secondary">Ignore</button>
          <button className="btn btn-primary">Send Request</button>
        </div>
      </div>
    </div>
    </div>
  );
}
export default UserCard;