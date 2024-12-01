import Image from 'next/image';
import { PRIVACY_POLICY } from './Tnc.constants';

const PrivacyPolicy = () => {
  return (
    <main className="py-8">
      <div className="container mx-auto lg:px-32 w-full relative flex flex-col items-center justify-center antialiased">
        <Image
          width={200}
          height={100}
          src="/general/logo-full.png"
          alt="logo"
          className="mx-auto w-1/2 lg:w-64"
        />
        <h1 className="text-2xl lg:text-5xl font-bold my-4 lg:mb-8">
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
