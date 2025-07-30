import HeroSection from "@/components/HeroSection";
import UpcomingEvents from "@/components/UpcomingEvents";
import EventHighlights from "@/components/EventHighlights";
import PastEventsImpact from "@/components/PastEventsImpact";
import GetInvolved from "@/components/GetInvolved";
import StoriesFromField from "@/components/StoriesFromField";
import EventResources from "@/components/EventResources";
import MediaPress from "@/components/MediaPress";
import ContactSupport from "@/components/ContactSupport";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <UpcomingEvents />
      <EventHighlights />
      <PastEventsImpact />
      <GetInvolved />
      <StoriesFromField />
      <EventResources />
      <MediaPress />
      <ContactSupport />
    </div>
  );
};

export default Index;
