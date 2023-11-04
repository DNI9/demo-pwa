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
      <label className="btn btn-primary" htmlFor="demo-modal">
        Open Modal
      </label>
      <input type="checkbox" className="modal-state" id="demo-modal"></input>
      <div className="modal">
        <label className="modal-overlay" htmlFor="demo-modal"></label>
        <div className="flex flex-col gap-3 modal-content">
          <span>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
            voluptate dolor minim nulla est proident. Nostrud officia pariatur
            ut officia. Sit irure elit esse ea nulla sunt ex occaecat
            reprehenderit commodo officia dolor Lorem duis laboris cupidatat
            officia voluptate. Culpa proident adipisicing id nulla nisi laboris
            ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo
            ex non excepteur duis sunt velit enim. Voluptate laboris sint
            cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
          </span>
          <label htmlFor="demo-modal" className="btn btn-block">
            Cancel
          </label>
        </div>
      </div>
    </>
  );
}