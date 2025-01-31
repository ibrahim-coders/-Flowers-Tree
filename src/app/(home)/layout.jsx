import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';

const HomeLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen max-w-screen-xl mx-auto">
      <Header />
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
