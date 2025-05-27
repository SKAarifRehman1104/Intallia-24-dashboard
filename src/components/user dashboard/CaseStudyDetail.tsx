import React from "react";
import { Header } from "@/components/login/Header";
import Image from "@/assets/image-shop.svg";
import { Button } from "@/components/ui/button";
import AvatarCS from "@/assets/avatar_cs.svg?react";
import Pot from "@/assets/pot.svg?react";
import Laptop from "@/assets/laptop.svg?react";
import Avatar2 from "@/assets/avatar2.svg?react";


const CaseStudyDetail = () => {
  return (
    <>
      <Header />
      <div className="py-10 px-20 w-full">
        <div className="relative">
          <img src={Image} alt=""/>
          <div className="bg-white w-[60%] p-5 absolute rounded-lg shadow-md -bottom-2">
            <h3 className="w-[855px] font-plusJakarta leading-[41px] pb-5 font-semibold tracking-[0.37px] text-4xl text-[#242426]">
              Create a Sales Dashboard for Meesho’s E-commerce Category Manager
            </h3>
            <Button className=".btn w-[145px] h-[50px] text-lg font-medium font-plusJakarta">
              Start Now
            </Button>
          </div>
        </div>

        <div className=" leading-6 tracking-[0.37px] mt-12">
          <p className="font-normal text-xl font-plusJakarta text-[#7C7C80]">
            Traveling is an enriching experience that opens up new horizons,
            exposes us to different cultures, and creates memories that last a
            lifetime. However, traveling can also be stressful and overwhelming,
            especially if you don't plan and prepare adequately. In this blog
            article, we'll explore tips and tricks for a memorable journey and
            how to make the most of your travels.
          </p>
          <br />
          <p className="font-normal text-xl font-plusJakarta text-[#7C7C80]">
            One of the most rewarding aspects of traveling is immersing yourself
            in the local culture and customs. This includes trying local
            cuisine, attending cultural events and festivals, and interacting
            with locals. Learning a few phrases in the local language can also
            go a long way in making connections and showing respect.
          </p>
        </div>

        <div className="mt-5 font-plusJakarta py-5 ">
          <h3 className="font-medium text-2xl leading-7 tracking-[0.35px] ">
            Research Your Destination
            <p className="py-4 font-normal text-xl leading-6 tracking-[0.38px] text-[#7C7C80]">
              Lorem ipsum dolor sit amet consectetur. Cras viverra tincidunt
              massa sed vitae. At lectus vitae elementum nulla id tempus. Id
              arcu tortor vulputate et rhoncus in tellus sed vitae. Montes
              platea nam arcu accumsan eu elit nunc. At egestas ipsum habitant
              mi in eget mattis consectetur. Proin duis non cras et eu. Quis sit
              elementum elit vitae. Blandit feugiat vulputate vestibulum metus
              amet sit sed turpis. Auctor sit nisl sit fermentum ullamcorper
              lorem leo nunc malesuada. Sodales cursus sit amet lobortis
              adipiscing faucibus auctor id. Nec ullamcorper suspendisse eget
              urna non egestas laoreet odio nisi.
              <p className="py-4 font-normal text-xl leading-6 tracking-[0.38px] text-[#7C7C80]">
                Bibendum curabitur rutrum velit justo nibh vel nisi adipiscing
                sed. Pharetra quis sapien massa nunc risus lectus ultrices.
                Condimentum maecenas amet lectus amet massa placerat. Tellus
                elementum in faucibus consectetur sit. Nec eu et in tincidunt
                senectus dictum est etiam. Scelerisque viverra fusce congue
                dignissim vel laoreet orci. Lacus pharetra amet feugiat non.
                Felis condimentum leo potenti vel convallis lectus pharetra
                lectus. Ut cursus aliquam donec feugiat sollicitudin cras in
                diam.
              </p>
              <p className="py-4 font-normal text-xl leading-6 tracking-[0.38px] text-[#7C7C80]">
                Suspendisse sit etiam vitae est proin orci sit. Eu amet tortor
                mauris vitae. Suspendisse varius fermentum convallis non quis
                arcu consequat. Lobortis vel in malesuada eu arcu ultricies
                fermentum nunc id. Urna orci semper aliquet aliquam sagittis
                venenatis tortor. Hendrerit enim proin pretium placerat
                malesuada turpis nisl nam nibh. Commodo viverra nunc nibh fames
                sollicitudin faucibus. Rhoncus condimentum fermentum neque massa
                viverra turpis eu aliquet. Molestie aliquam dignissim nunc
                dictum neque blandit. Congue lorem amet sit commodo massa
                gravida. Eu volutpat quam eget ipsum lorem dictum. Hendrerit sit
                id sit feugiat tristique odio tortor. Eu consectetur ornare nisl
                sit. Dolor tellus pharetra dictumst diam amet. Quis non tempor
                aliquam libero eu.
              </p>
              <p className="py-4 font-normal text-xl leading-6 tracking-[0.38px] text-[#7C7C80]">
                Et cursus viverra adipiscing est at aliquet. Sit dolor sed
                adipiscing arcu egestas ac. Massa id augue odio sagittis diam
                malesuada feugiat mattis. Mi est tincidunt sit varius.
                Pellentesque pellentesque vitae laoreet parturient. Consectetur
                facilisi porttitor est tempus eget sit nulla rhoncus faucibus.
                Dui sapien dictum orci aliquam venenatis augue bibendum lorem
                quis. Ultrices nibh nulla massa velit viverra volutpat
                sollicitudin in a. In lacus odio amet ultrices arcu fringilla
                sit. At ac a nullam tellus dictum a feugiat. Ultricies ante
                sapien at pellentesque eu tristique. Mauris sit pretium vitae
                dolor amet et. Lacus sagittis eget sed velit adipiscing nec
                diam. Bibendum elementum tempor aliquam at nec morbi.
              </p>
            </p>
          </h3>
        </div>

        <div className="flex justify-between w-full mb-[10%]  items-center  rounded-xl overflow-hidden border-2 ">
          <div className="w-1/1 p-8  ">
            <h3 className="font-semibold text-6xl leading-[4rem] bg-gradient-to-r from-[#22E9A2] to-[#0DAFDC] text-transparent bg-clip-text w-[100%]">
              Want to take a test?
            </h3>
            <p className="font-normal text-lg  tracking-[0.37px] font-plusJakarta w-[60%] mt-5 ">
              Lorem ipsum dolor sit amet consectetur. Dui volutpat dictum enim a
              dictum arcu mauris iaculis. Semper laoreet mattis mattis
              facilisis.
            </p>
            <Button className=".btn w-[145px] h-auto  text-lg font-medium font-plusJakarta mt-5 ">
              Start Now
            </Button>
          </div>
          <div className=" bg-gradient-to-r from-[#22E9A2] to-[#0DAFDC] text-transparent h-[20rem] w-[30%] rounded-tl-[44%] rounded-bl-[44%] ">
            <div className="w-1/2 h-1/2 ">
              <div className="h-5 w-5  top-3 relative right-6 mt-2 ">
                <AvatarCS />
                <div className="flex">
                  <div className="flex items-baseline h-4 z-40 absolute  ">
                    <Pot />
                    <div className=" mt-8 ">
                      <Laptop />
                    </div>
                  </div>
                  <div className="absolute top-12 left-12">
                    <Avatar2 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudyDetail;
