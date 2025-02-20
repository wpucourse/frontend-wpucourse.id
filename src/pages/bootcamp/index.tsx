import Header from "@/components/common/Header";
import Bootcamp from "@/components/views/Bootcamp";

const BootcampPage = () => {
  return (
    <>
      <Header
        canonical="https://wpucourse.id/bootcamp"
        description="Program bootcamp online yang akan membantu meningkatkan kemampuan digital kamu. Dengan mengikuti program ini, kamu akan mendapatkan mentorship langsung dari praktisi industri dan juga akses ke komunitas belajar yang solid"
        title="WPU Course - Bootcamp"
        page="bootcamp"
        keywords="online course, course, wpu course, wpu, sandhika galih, avip syaifulloh, agung rizkyana, belajar mern, belajar react, belajar nextjs"
      />
      <Bootcamp />
    </>
  );
};

export default BootcampPage;
