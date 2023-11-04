import db from "../db";

export default function Home() {
  const createWallet = async (name = "Cash") => {
    const id = await db.wallets.add({
      name: "Sontosh",
      type: "Cash",
    });
    console.log(id);
  };
  return (
    <>
      <h1 className="text-7xl">Santosh Money Manager</h1>;
      <button onClick={() => createWallet()}>Add Wallet</button>
    </>
  );
}
