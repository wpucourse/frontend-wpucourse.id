import Image from "next/image";
import { PRIVACY_POLICY } from "./Tnc.constants";

const PrivacyPolicy = () => {
  return (
    <main className="px-4 py-16 pt-28 lg:px-0">
      <div className="container relative mx-auto flex w-full flex-col items-center justify-center antialiased lg:px-32">
        <h1 className="my-4 text-2xl font-bold lg:mb-8 lg:text-5xl">
          Kebijakan Privasi
        </h1>
        {PRIVACY_POLICY.map((item) => (
          <div key={item.title} className="mb-4">
            <h1 className="mb-2 text-lg font-bold">{item.title}</h1>
            <div>{item.content}</div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default PrivacyPolicy;
