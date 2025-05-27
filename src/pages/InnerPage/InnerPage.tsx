import React from "react";
import { Header } from "@/components/InnerPage/layout/Header";
import { ArticleContent } from "@/components/InnerPage/article/ArticleContent";
import { CallToAction } from "@/components/InnerPage/cta/CallToAction";
import { HeroBanner } from "@/components/InnerPage/hero/HeroBanner";

const InnerPage = () => {
  const handleStartNow = () => {
    // Handle start now button click
    console.log("Start now clicked");
  };

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Header
        title="INTALLIA 24"
        subtitle="Building tomorrow's workforce"
        profileImageUrl="https://cdn.builder.io/api/v1/image/assets/d6885eedf052436eac8c331fe6a68cb8/9a046439126958e6faf921914c1c658b679babfd?placeholderIfAbsent=true"
      />

      <main className="flex-1 max-w-[1200px] mx-auto px-4 md:px-8">
        <HeroBanner
          title="Create a Sales Dashboard for Meesho's E-commerce Category Manager"
          buttonText="Start Now"
          backgroundImage="/lovable-uploads/8dd0ae88-8a6f-4529-be32-2f39c9e68d3c.png"
          onButtonClick={handleStartNow}
        />

        <div className="max-w-full my-8">
          <ArticleContent
            content={`Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.

One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.`}
          />

          <ArticleContent
            title="Research Your Destination"
            content={`Lorem ipsum dolor sit amet consectetur. Cras viverra tincidunt massa sed vitae. At lectus vitae elementum nulla id tempus. Id arcu tortor vulputate et rhoncus in tellus sed vitae. Montes platea nam arcu accumsan eu elit nunc. At egestas ipsum habitant mi in eget mattis consectetur. Proin duis non cras et eu. Quis sit elementum elit vitae. Blandit feugiat vulputate vestibulum metus amet sit sed turpis. Auctor sit nisl sit fermentum ullamcorper lorem leo nunc malesuada. Sodales cursus sit amet lobortis adipiscing faucibus auctor id. Nec ullamcorper suspendisse eget urna non egestas laoreet odio nisi.

Bibendum curabitur rutrum velit justo nibh vel nisi adipiscing sed. Pharetra quis sapien massa nunc risus lectus ultrices. Condimentum maecenas amet lectus amet massa placerat. Tellus elementum in faucibus consectetur sit. Nec eu et in tincidunt senectus dictum est etiam. Scelerisque viverra fusce congue dignissim vel laoreet orci. Lacus pharetra amet feugiat non. Felis condimentum leo potenti vel convallis lectus pharetra lectus. Ut cursus aliquam donec feugiat sollicitudin cras in diam.

Suspendisse sit etiam vitae est proin orci sit. Eu amet tortor mauris vitae. Suspendisse varius fermentum convallis non quis arcu consequat. Lobortis vel in malesuada eu arcu ultricies fermentum nunc id. Urna orci semper aliquet aliquam sagittis venenatis tortor. Hendrerit enim proin pretium placerat malesuada turpis nisl nam nibh. Commodo viverra nunc nibh fames sollicitudin faucibus. Rhoncus condimentum fermentum neque massa viverra turpis eu aliquet. Molestie aliquam dignissim nunc dictum neque blandit. Congue lorem amet sit commodo massa gravida. Eu volutpat quam eget ipsum lorem dictum. Hendrerit sit id sit feugiat tristique odio tortor. Eu consectetur ornare nisl sit. Dolor tellus pharetra dictumst diam amet. Quis non tempor aliquam libero eu.

Et cursus viverra adipiscing est at aliquet. Sit dolor sed adipiscing arcu egestas ac. Massa id augue odio sagittis diam malesuada feugiat mattis. Mi est tincidunt sit varius. Pellentesque pellentesque vitae laoreet parturient. Consectetur facilisi porttitor est tempus eget sit nulla rhoncus faucibus. Dui sapien dictum orci aliquam venenatis augue bibendum lorem quis. Ultrices nibh nulla massa velit viverra volutpat sollicitudin in a. In lacus odio amet ultrices arcu fringilla sit. At ac a nullam tellus dictum a feugiat. Ultricies ante sapien at pellentesque eu tristique. Mauris sit pretium vitae dolor amet et. Lacus sagittis eget sed velit adipiscing nec diam. Bibendum elementum tempor aliquam at nec morbi.`}
          />
        </div>

        <CallToAction
          title="Want to take a test?"
          description="Lorem ipsum dolor sit amet consectetur. Dui volutpat dictum enim a dictum arcu mauris iaculis. Semper laoreet mattis mattis facilisis."
          buttonText="Start Now"
          imageUrl="https://cdn.builder.io/api/v1/image/assets/d6885eedf052436eac8c331fe6a68cb8/55a999dec7c94ea76e933bde2de39a9dd6b5b762?placeholderIfAbsent=true"
          onButtonClick={handleStartNow}
        />
      </main>
    </div>
  );
};

export default InnerPage;
