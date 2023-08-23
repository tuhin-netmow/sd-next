import Hero from '@/components/Home/hero';
import HomeComparison from '@/components/Home/home_comparison';
import HomeTemplates from '@/components/Home/home_templates';
import HomeSports from '@/components/Home/home_sports';
import HomeFacilities from '@/components/Home/home_facilities';
import HomePricing from '@/components/Home/home_pricing';
import HomeTestimonial from '@/components/Home/home_testimonial';
import { items } from '@/data/data';
import RootLayout from '@/components/layouts/RootLayout'

const  HomePage = () => {
  return (
    
    <>
        <Hero />
        <HomeComparison />
        <HomeTemplates items={items}/>
        <HomeSports />
        <HomeFacilities />
        <HomePricing />
        <HomeTestimonial />
    </>
  )
}
 export default HomePage

 HomePage.getLayout = function getLayout (page) {
  return <RootLayout>{page}</RootLayout>
 }