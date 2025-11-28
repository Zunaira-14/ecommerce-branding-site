import React from "react";

export default function ExtraServices() {
  const services = [
    {
      img: "/flags/pic1.svg",
    },
    {
      img: "/flags/pic2.svg",
    },
    {
      img: "/flags/pic3.svg",
    },
    {
      img: "/flags/pic4.svg",
    },
  ];

  const suppliers = [
    { country: "Arabic Emirates", site: "shopname.ae", flag: "/flags/uae.png" },
    { country: "Australia", site: "shopname.au", flag: "/flags/aus.png" },
    { country: "United States", site: "shopname.us", flag: "/flags/usa.png" },
    { country: "Russia", site: "shopname.ru", flag: "/flags/rus.png" },
    { country: "Italy", site: "shopname.it", flag: "/flags/italy.png" },
    { country: "Denmark", site: "shopname.dk", flag: "/flags/denmark.png" },
    { country: "France", site: "shopname.fr", flag: "/flags/fr.png" },
    { country: "China", site: "shopname.cn", flag: "/flags/china.png" },
    { country: "Great Britain", site: "shopname.co.uk", flag: "/flags/flag.svg" },
  ];

  return (
    <section className=" md:px-16 ">

      {/* ---------- Extra Services ---------- */}
      <h2 className="text-3xl font-semibold mb-4">Our extra services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((item, i) => (
          <div
            key={i}
            className=" rounded-xl "
          >
            <div className="">
              <img
                src={item.img}
                className="w-full h-full object-cover mb-10"
                alt=""
              />
            </div>

          </div>
        ))}
      </div>

      {/* ---------- Suppliers by Region ---------- */}

      {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {suppliers.map((s, i) => (
          <div key={i} className="flex items-center gap-3">
            <img src={s.flag} className="w-6 h-6 rounded-sm" alt="" />
           
          </div>
        ))}
      </div> */}
      <img src="flags/flag.svg" alt="" 
      className="ml-10 mb-10"/>

    </section>
  );
}
