import Image from "next/image";
import plasticSurgery from "../../public/pexels-shvetsa-4586713.jpg";
import laserTreatment from "../../public/female-patient-receiving-cosmetic-treatment.jpg";
import dental from "../../public/pexels-karolina-grabowska-6627524.jpg";

export default function Services() {
  return (
    <section className="bg-white mt-14 px-20 py-10">
      <h2 className="text-2xl font-semibold text-center title">Our Services</h2>
      <div className="flex justify-between items-center gap-5 mt-20">
        <div className="w-1/3 shadow-lg transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 rounded-lg">
          <div>
            <Image
              src={plasticSurgery}
              alt="plastic surgery"
              className="img-p rounded-md"
            />
          </div>
          <div className="text-center p-5">
            <h3 className="mb-4 font-semibold">Plastic Surgery</h3>
            <p className="text-sm text-gray pb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit voluptate
              necessitatibus necessitatibus necessitatibus
            </p>
          </div>
        </div>
        <div className="w-1/3 shadow-lg transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 rounded-lg">
          <div>
            <Image
              src={laserTreatment}
              alt="laser treatment"
              className="img-p rounded-md"
            />
          </div>
          <div className="text-center p-5">
            <h3 className="mb-4 font-semibold">Laser Treatment</h3>
            <p className="text-sm text-gray pb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit voluptate
              necessitatibus necessitatibus necessitatibus
            </p>
          </div>
        </div>
        <div className="w-1/3 shadow-lg transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 rounded-lg">
          <div>
            <Image src={dental} alt="dental" className="img-p rounded-md" />
          </div>
          <div className="text-center p-5">
            <h3 className="mb-4 font-semibold">Dental Care</h3>
            <p className="text-sm text-gray pb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit voluptate
              necessitatibus necessitatibus necessitatibus
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
