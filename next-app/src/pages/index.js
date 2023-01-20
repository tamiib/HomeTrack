import CardsSection from "@/components/CardsSection/CardsSection";
import HomeTitle from "@/components/HomeTitle/HomeTitle";
import Layout from "@/components/Layout/Layout";
import Statistics from "@/components/Statistics/Statistics";

export default function Home() {
  return <>
    <Layout>
      <HomeTitle />
      <CardsSection location="SUNNY DALMATIA" title="Recently added"/>
      <Statistics />
    </Layout>
  </>;
}
