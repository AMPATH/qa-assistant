import { useParams } from "react-router-dom";
import Header from "./Header/Header";
import SideNavBar from "./SideNavBar/SideNavBar";
import useSWR from "swr";
import { ClipLoader } from "react-spinners";

const PatientInformation = () => {
  const routeParams = useParams();
  const { id } = routeParams;

  const fetcher = (...args: [string]) =>
    fetch(...args).then((res) => res.json());

  const { data, isLoading } = useSWR(
    `/openmrs/ws/rest/v1/patient/${id}`,
    fetcher
  );

  return (
    <>
      {isLoading ? (
        <div className="flex items-center ml-[20%] p-4 mt-4 text-2xl">
          <ClipLoader size={50} color="blue" />
        </div>
      ) : (
        <>
          <Header />
          <SideNavBar />
          <div className="bg-lightGray h-screen">
            <div className="sm:w-[75%] mx-auto sm:flex pt-8 lg:ml-[20%] ">
              <div className="bg-hashBlue p-4 rounded sm:w-md ">
                <div className="bg-lightGray rounded-full mx-auto w-36 h-36 flex justify-center items-center">
                  <h1 className="text-9xl font-bold ">
                    {data?.person?.display[0]}
                  </h1>
                </div>
                <div>
                  <h3 className="font-bold text-white text-center">
                    {data?.person?.display}
                  </h3>
                </div>
              </div>
              <div
                className="grid grid-cols-1 gap-8 md:text-sm 2xl:text-lg md:grid-cols-4
                  p-8 bg-white rounded md:w-[75%] justify-between"
              >
                <div>
                  <b>Address</b>
                  <p>{data?.person?.preferredAddress?.display}</p>
                </div>
                <div>
                  <b>Gender</b>
                  <p>{data?.person?.gender}</p>
                </div>
                <div>
                  <b>Age</b>
                  <p>{data?.person?.age}</p>
                </div>
                <div>
                  <b>Date of Birth</b>
                  <p>
                    {new Date(data?.person?.birthdate)
                      .toLocaleString()
                      .split(" ")[0]
                      .slice(0, -1)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PatientInformation;
