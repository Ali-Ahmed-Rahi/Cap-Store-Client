import { FadeLoader } from "react-spinners";


const Loading = () => {
  return (
    <>
    <div className="flex items-center justify-center mt-64 p-20 ">
     <FadeLoader
        color="#10cf0a"
        loading={true}
        size={100}
      />
     </div>
      
    </>
  );
};

export default Loading;