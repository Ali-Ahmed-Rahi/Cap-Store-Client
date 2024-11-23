import useAuth from "../../Hooks/useAuth";


const Overview = () => {
  const { user } = useAuth();
  return (
    <>
       <div>
        <h1 className="text-4xl font-bold text-center pt-64">{user.email}</h1>
      </div>
    </>
  );
};

export default Overview;