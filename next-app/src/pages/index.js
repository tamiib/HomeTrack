import CardsSection from "@/components/CardsSection/CardsSection";
import HomeTitle from "@/components/HomeTitle/HomeTitle";
import Layout from "@/components/Layout/Layout";

export default function Home() {
  return <>
    <Layout>
      <HomeTitle />
      <CardsSection location="SUNNY DALMATIA" title="Recently added"/>
    </Layout>
  </>;
}
