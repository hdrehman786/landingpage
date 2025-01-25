import React from "react";
import { pricingOptions } from "../containts";
import { CheckCircle2 } from "lucide-react";

const Pricing = () => {
  return (
    <div className=" lg:mt-20 sm:mt-10 mb-6">
      <div className=" mt-2 mb-6 text-center">
        <h2 className=" text-3xl lg:text-6xl sm:4xl tracking-wide">Pricing</h2>
      </div>
      <div className="flex flex-wrap">
        {pricingOptions.map((item, index) => (
          <div
            key={index}
            className="  w-full lg:w-1/3 sm:w-1/2 p-2" >
                <div className="p-10  border border-neutral-700 rounded-xl ">
                    <p className="text-4xl mb-8">{item.title}
                    {
                        item.title === "Pro" && <span className=" text-xl bg-gradient-to-r from-orange-400 to-orange-800 bg-clip-text text-transparent mb-4 ml-2">(Most Popular)</span>
                    }
                    </p>
                    <p className=" mb-6">
                    <span className=" text-5xl mt-6 mr-2">{item.price}</span>
                    <span className=" text-neutral-400 -tracking-tight">/Month</span>
                    </p>
                    <ul>
                    {
                        item.features.map((item,index)=>(
                            <li key={index} className=" mt-8 flex items-center">
                                <CheckCircle2 />
                                <span className=" ml-2">{item}</span>
                            </li>
                        ))
                    }
                    </ul>
                    <a className=" inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200" href="#">
                    Subscribe
                    </a>
                </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
