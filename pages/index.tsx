import type { NextPage } from 'next';
import Layout from '../components/Layout';
import HeroSection from '../components/home/HeroSection';
import BeliefSection from '../components/home/BeliefSection';
import ChapterOne from '../components/home/ChapterOne';
import ChapterTwo from '../components/home/ChapterTwo';
import ChapterThree from '../components/home/ChapterThree';
import TechPrinciples from '../components/home/TechPrinciples';
import FeaturedSolutions from '../components/home/FeaturedSolutions';
import SolutionsCollection from '../components/home/SolutionsCollection';
import SolutionAnatomy from '../components/home/SolutionAnatomy';
import AboutInterlude from '../components/home/AboutInterlude';
import DiscoveryFlow from '../components/home/DiscoveryFlow';
import InsightsSection from '../components/home/InsightsSection';
import ContactCta from '../components/home/ContactCta';

const Home: NextPage = () => {
  return (
    <Layout
      title="BLACKVALE SA — Software & Digital Solutions"
      description="BLACKVALE SA is a South African software engineering and digital solutions company. Websites, custom software, automation and systems integration for growing businesses."
      canonical="/"
    >
      <HeroSection />
      <BeliefSection />
      <ChapterOne />
      <ChapterTwo />
      <ChapterThree />
      <TechPrinciples />
      <FeaturedSolutions />
      <SolutionsCollection />
      <SolutionAnatomy />
      <AboutInterlude />
      <DiscoveryFlow />
      <InsightsSection />
      <ContactCta />
    </Layout>
  );
};

export default Home;
