import Header from "@/components/common/Header";
import RamadhanCamp from "@/components/views/DetailBootcamp/RamadhanCamp";

const RamadhanCampPage = () => {
  return (
    <>
      <Header
        canonical="https://wpucourse.id/bootcamp/wpu-ramadhan-camp"
        description="Program bootcamp online yang akan membantu meningkatkan kemampuan digital kamu. Dengan mengikuti program ini, kamu akan mendapatkan mentorship langsung dari praktisi industri dan juga akses ke komunitas belajar yang solid"
        title="Bootcamp WPU Ramadhan Camp"
        page="bootcamp"
        keywords="online course, course, wpu course, wpu, sandhika galih, avip syaifulloh, agung rizkyana, belajar mern, belajar react, belajar nextjs"
      />
      <RamadhanCamp />
    </>
  );
};

export default RamadhanCampPage;
