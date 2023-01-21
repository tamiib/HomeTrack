import desktopImage from "@assets/images/explore.png";
import mobileImage from "@assets/images/explore-mobile.png";
import SearchSection from "@/components/SearchSection/SearchSection";
import CardsSection from "@/components/CardsSection/CardsSection";
const { default: Layout } = require("@/components/Layout/Layout");
const { default: PageTitle } = require("@/components/PageTitle/PageTitle");

const Explore = () => {

  return (
    <Layout activeTab="explore">
      <PageTitle
        title="Explore more than 1000 properties"
        subtitle="explore"
        description="From newly build villas with amazing views to old stone houses in historic city of Split or Trogir."
        desktopImage={desktopImage}
        mobileImage={mobileImage}
        styleClass="imageRight"
      />
      <SearchSection placeholder="Try: Villa with pool in Split"/>
      <CardsSection title="Recently added" location="sunny dalmatia"/>
      <CardsSection title="Our picks" location="thousand islands"/>
      <CardsSection title="Mostly viewed" location="makarska riviera"/>
    </Layout>
  );
};

export default Explore;