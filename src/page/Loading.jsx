import { FadeLoader } from "react-spinners";


const Loading = () => {
  return (
    <>
    <div className="flex items-center justify-center mt-64 p-20">
     <FadeLoader
        color="#000000"
        loading={true}
        size={100}
      />
     </div>
      
    </>
  );
};

export default Loading;