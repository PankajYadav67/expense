import Card1 from "../components/Home/Card"
import Date from "../components/Home/Date"
import AddTransactions from "../components/Home/HomeComponents/AddTransactions"
import Table1 from "../components/Home/Table"
import { useAuth } from "../context/Auth.Context"


const HomeRight = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {
        isLoggedIn ? (<>  <Date />
          <Card1 />
          <AddTransactions />
          <Table1 />


        </>) : (
          <div className="grid justify-center text-center">
            <h2>Login Yourself First.</h2>
            <div className="h-[500px] w-[650px]">

              <img src="/img/home.svg" alt="homeImage" />
            </div>
          </div>
        )
      }

    </>
  )
}

export default HomeRight;

