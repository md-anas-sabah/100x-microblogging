/* eslint-disable react/no-unescaped-entities */
function CreatePassword() {
  return (
    <div className="flex flex-col gap-3 pt-0 pb-5 px-15px bg-neutral-1000 h-screen w-screen">
      <header className="rounded-2xl flex flex-col py-3">
        <div className="flex gap-5 self-stretch">
          <a href="./index.html">
            <img
              src="../../public/images/signup-x.svg"
              alt="cancel"
              className="cursor-pointer w-6 h-6 flex-shrink-0"
            />
          </a>
          <h1 className="font-px-regular text-15px font-bold text-neutral-50">
            Step 4 of 4
          </h1>
        </div>
      </header>
      <section className="flex flex-col gap-10 self-stretch">
        <div className="flex flex-col gap-2 self-stretch">
          <h1 className="font-px-regular font-bold text-2xl text-neutral-50">
            You'll need a password
          </h1>
          <p className="text-neutral-500 font-px-regular text-sm font-normal">
            Make sure it's 8 character or more
          </p>
        </div>
        <div className="flex flex-col gap-3 self-stretch">
          <fieldset className="custom-fieldset py-4 px-3 items-center self-stretch border border-neutral-500 rounded-4px focus-within:border-twitter-blue">
            <legend className="font-px-regular text-xs font-medium text-neutral-500 px-4px">
              Password
            </legend>
            <div className="flex justify-between">
              <input
                type="password"
                name
                id
                placeholder="Password"
                className="h-full text-white bg-transparent text-xlg font-px-regular font-normal outline-none"
              />
              <img src="../../public/images/visible-t.svg" alt="success" />
            </div>
          </fieldset>
        </div>
      </section>
      <section className="flex h-full px-4 flex-col justify-end self-stretch">
        <a href="../home/index.html">
          <button className="py-2 px-6 w-full rounded-4xl bg-neutral-50 shadow-custom backdrop-blur-custom hover:bg-neutral-200 disabled:bg-neutral-700">
            <span className="text-neutral-1000 font-px-regular text-base font-bold text-center">
              Next
            </span>
          </button>
        </a>
      </section>
    </div>
  );
}

export default CreatePassword;
