import { Transaction } from "../utils/Helper";
import MainGraph from "../components/Graph/MainGraph";
import { theme } from "../main";

const Home: React.FC = () => {
  // Example transactions data
  const transactions: Transaction[] = [
    { type: 'income', amount: 2000 },
    { type: 'spent', amount: 1000 },
    // Add more transactions as needed
  ];

  return (
    <div className="bg-[#fafafa]">
      {/* main */}
      <div className="sm:mx-40 sm:p-10 sm:grid sm:grid-cols-12">


        <div className="sm:col-span-8 justify-center sm:text-3xl sm:px-10   sm:space-y-8 text-xl  rounded-md bg-white font-[SF-Pro]">
          <div className="sm:pt-10 sm:text-5xl">
            <h1>Hello, <span style={{ color: theme.colors.brand.purple }} >Sam</span></h1>
          </div>
          <div >
            <h3 className="font-[500] sm:text-4xl">Income</h3>
            <h3 className="">₹ 2000</h3>
          </div>
          <div >
            <h3 className="font-[500] sm:text-4xl">Spent</h3>
            <h3 className="">₹ 1000</h3>
          </div>
          <div className="sm:pb-10 sm:text-4xl">
            <h3 className="font-[500]">Balance</h3>
            <h3 className="">₹ 1000</h3>
          </div>
        </div>
        <div className="sm:col-span-4">
          <MainGraph transactions={transactions} />
        </div>
      </div>
    </div>
  );
};

export default Home;