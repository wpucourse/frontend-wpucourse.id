import Header from "@/components/common/Header";
import Contact from "@/components/views/Contact";

const ContactPage = () => {
  return (
    <>
      <Header
        canonical="https://wpucourse.id/contact"
        description="Platform belajar online terbaik di Indonesia"
        title="WPU Course - Kontak"
        page="contact"
        keywords="online course, course, wpu course, wpu, sandhika galih, avip syaifulloh, agung rizkyana, belajar mern, belajar react, belajar nextjs"
      />
      <Contact />
    </>
  );
};

export default ContactPage;
