import logo from "../../assets/logo.png";
import Button from "../../components/Button";

function Login() {
  return (
    <div className="flex flex-col bg-neutral-1000 h-screen w-screen  md:justify-center md:flex-row md:px-178.436 md:py-236.5 md:gap-100">
      <section className="flex justify-center py-3 px-4">
        <img
          src={logo}
          alt="logo"
          className="h-mobile-view-logo w-mobile-view-logo md:h-150 md:w-300"
        />
      </section>
      <section className="flex flex-col px-7 gap-10 md:w-[490px]  mt-auto mb-auto">
        <div className="flex flex-col gap-3 self-stretch text-neutral-50">
          <div className="font-px-regular font-extrabold text-31px md:font-bold md:text-5xl">
            Happening Now
          </div>
          <div className="font-px-regular font-medium md:font-bold md:text-2.5 text-base">
            Join today.
          </div>
        </div>

        <Button variant="default" text="Create account" />

        <div className="flex items-center gap-2 w-full">
          <div className="w-full h-px bg-neutral-700" />
          <span className="font-chirp text-center text-base font-normal text-neutral-50">
            or
          </span>
          <div className="w-full h-px bg-neutral-700" />
        </div>
        <div className="flex flex-col gap-5 self-stretch">
          <p className="font-px-regular text-xl font-medium text-neutral-50">
            Already have an account?
          </p>
          <Button variant="outline" text="Sign in" />
        </div>
      </section>
    </div>
  );
}

export default Login;
