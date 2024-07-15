import { Chart, CustomerService, GetStarted, Hero, Invest, Services, SubscribeEmail } from "@/components/home";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Services />
      <GetStarted />
      <CustomerService />
      <Chart />
      <Invest />
      <SubscribeEmail />
    </main>
  );
}
